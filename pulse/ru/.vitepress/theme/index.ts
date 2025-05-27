import {h} from 'vue';
import type {Theme} from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import './style.css';

import {
    LayoutMode,
    NolebaseEnhancedReadabilitiesMenu,
    NolebaseEnhancedReadabilitiesPlugin,
    NolebaseEnhancedReadabilitiesScreenMenu,
    SpotlightStyle,
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'

import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'

import {NolebaseInlineLinkPreviewPlugin,} from '@nolebase/vitepress-plugin-inline-link-preview/client'

import '@nolebase/vitepress-plugin-inline-link-preview/client/style.css'

import AuthorsComponent from "./author/PageAuthors.vue"

const EMOJI_MAP = {
    tip: '💡',
    info: 'ℹ️',
    warning: '⚠️',
    danger: '🔥',
    details: '📜',
} as const;

const YAML_CLASS = 'language-yaml';
const HIGHLIGHT_CLASS = 'hash-highlight';
let isHandlerAttached = false;

const postRenderTasks = () => {
    if (import.meta.env.SSR) return;

    injectEmojis();
    highlightHashElement();
    processYamlBlocks();
};

function injectEmojis() {
    const processBlock = (block: Element, emoji: string) => {
        const title = block.querySelector('.custom-block-title, summary') as HTMLElement | null;
        if (!title || title.dataset.emojiAdded) return;

        title.dataset.emojiAdded = 'true';
        title.insertAdjacentHTML('afterbegin', `${emoji} `);
    };

    Object.entries(EMOJI_MAP).forEach(([type, emoji]) => {
        const selector = type === 'details' ? 'details.custom-block.details' : `.custom-block.${type}`;
        document.querySelectorAll(selector).forEach((block) => {
            processBlock(block, emoji);
        });
    });
}

function highlightHashElement() {
    if (import.meta.env.SSR) return;

    document.querySelectorAll(`.${HIGHLIGHT_CLASS}`).forEach((el) => {
        el.classList.remove(HIGHLIGHT_CLASS);
    });

    const hash = decodeURIComponent(window.location.hash);
    if (!hash) return;

    const target = document.querySelector(hash);
    if (!target) return;

    target.classList.add(HIGHLIGHT_CLASS);

    const header = document.querySelector('.VPNavBar') as HTMLElement | null;
    const headerHeight = header?.offsetHeight || 60;
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
    });
}

function processYamlBlocks() {
    if (import.meta.env.SSR) return;

    document.querySelectorAll<HTMLPreElement>(`div[class*="${YAML_CLASS}"] pre`).forEach((pre) => {
        pre.classList.add('yaml-lines');

        pre.querySelectorAll('.line').forEach((line) => {
            if (line.querySelector('.line-content')) return;

            const wrapper = document.createElement('span');
            wrapper.className = 'line-content';
            wrapper.innerHTML = line.innerHTML;
            line.innerHTML = '';
            line.appendChild(wrapper);
        });
    });
}

const scheduleTask = (fn: () => void) => {
    if (import.meta.env.SSR) {
        fn();
    } else {
        requestAnimationFrame(fn);
    }
};

export default {
    extends: DefaultTheme,

    Layout: () => h(DefaultTheme.Layout, null, {
        'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu),
        'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu),
        'page-after': () => scheduleTask(postRenderTasks),
        "aside-outline-after": () => h(AuthorsComponent),
    }),

    enhanceApp({ app, router }) {
        app.use(NolebaseEnhancedReadabilitiesPlugin, {
            locales: {
                'ru-RU': {
                    title: {
                        title: 'Режим чтения',
                        titleAriaLabel: 'Режим чтения'
                    },
                    layoutSwitch: {
                        title: 'Переключение макета',
                        titleAriaLabel: 'Переключение макета',
                        titleHelpMessage: 'Настройте ширину контента и боковой панели',
                        titleScreenNavWarningMessage: 'Навигационное меню может быть скрыто при изменении макета',

                        optionFullWidth: 'Полная ширина',
                        optionFullWidthAriaLabel: 'Полная ширина контента и боковой панели',
                        optionFullWidthHelpMessage: 'Максимально расширяет контент и боковую панель',

                        optionSidebarWidthAdjustableOnly: 'Только боковая панель',
                        optionSidebarWidthAdjustableOnlyAriaLabel: 'Регулируемая только боковая панель',
                        optionSidebarWidthAdjustableOnlyHelpMessage: 'Регулируется только ширина боковой панели',

                        optionBothWidthAdjustable: 'Обе регулируемые',
                        optionBothWidthAdjustableAriaLabel: 'Регулируемые контент и боковая панель',
                        optionBothWidthAdjustableHelpMessage: 'Регулируется ширина и контента и боковой панели',

                        optionOriginalWidth: 'Оригинальная ширина',
                        optionOriginalWidthAriaLabel: 'Оригинальная ширина макета',
                        optionOriginalWidthHelpMessage: 'Стандартная ширина как в VitePress',

                        contentLayoutMaxWidth: {
                            title: 'Макс. ширина контента',
                            titleAriaLabel: 'Максимальная ширина контента',
                            titleHelpMessage: 'Регулировка максимальной ширины области контента',
                            titleScreenNavWarningMessage: 'Навигация может быть скрыта при увеличении ширины',
                            slider: 'Ширина контента',
                            sliderAriaLabel: 'Регулировка ширины контента',
                            sliderHelpMessage: 'Перетащите для изменения ширины контента'
                        },

                        pageLayoutMaxWidth: {
                            title: 'Макс. ширина страницы',
                            titleAriaLabel: 'Максимальная ширина страницы',
                            titleHelpMessage: 'Регулировка максимальной ширины всей страницы',
                            titleScreenNavWarningMessage: 'Навигация может быть скрыта при увеличении ширины',
                            slider: 'Ширина страницы',
                            sliderAriaLabel: 'Регулировка ширины страницы',
                            sliderHelpMessage: 'Перетащите для изменения ширины всей страницы'
                        }
                    },
                    spotlight: {
                        title: 'Подсветка',
                        titleAriaLabel: 'Режим подсветки',
                        titleHelpMessage: 'Подсвечивает текущий абзац для лучшей читаемости',
                        titleScreenNavWarningMessage: 'Навигация может быть скрыта при включенной подсветке',

                        optionOn: 'Включить',
                        optionOnAriaLabel: 'Включить подсветку',
                        optionOnHelpMessage: 'Активирует режим подсветки',

                        optionOff: 'Выключить',
                        optionOffAriaLabel: 'Выключить подсветку',
                        optionOffHelpMessage: 'Деактивирует режим подсветки',

                        styles: {
                            title: 'Стиль подсветки',
                            titleAriaLabel: 'Стиль подсветки текста',
                            titleHelpMessage: 'Выберите стиль подсветки текущего абзаца',
                            titleScreenNavWarningMessage: 'Навигация может быть скрыта при изменении стиля подсветки',

                            optionUnder: 'Подчеркивание',
                            optionUnderAriaLabel: 'Подсветка в виде подчеркивания',
                            optionUnderHelpMessage: 'Подсвечивает текст подчеркиванием',

                            optionAside: 'Боковая полоса',
                            optionAsideAriaLabel: 'Подсветка в виде боковой полосы',
                            optionAsideHelpMessage: 'Подсвечивает текст боковой полосой'
                        }
                    },
                }
            },
            layoutSwitch: {
                disableHelp: false,
                defaultMode: LayoutMode.BothWidthAdjustable,
                contentLayoutMaxWidth: {
                    disableHelp: false,
                    defaultMaxWidth: 100
                },
                pageLayoutMaxWidth: {
                    disableHelp: false,
                    defaultMaxWidth: 100
                }
            },
            spotlight: {
                disableHelp: false,
                hoverBlockColor: 'rgb(240 197 52 / 10%)',
                defaultToggle: true,
                defaultStyle: SpotlightStyle.Aside,
            }
        });

        app.use(NolebaseInlineLinkPreviewPlugin, {
            popupWidth: 800,
            popupHeight: 400,
            locales: {
                'ru-RU': {
                    popup: {
                        loading: 'Загружаем превью...',
                        loadingAriaLabel: 'Превью страницы загружается',
                        openInCurrentPage: 'Нажмите, чтобы перейти на страницу',
                        openInCurrentPageAriaLabel: 'Открыть оригинал страницы',
                        iframeAriaLabel: 'Предпросмотр связанной страницы'
                    }
                },
            }
        });

        app.provide('post-render', postRenderTasks);

        router.onAfterRouteChanged = () => {
            scheduleTask(postRenderTasks);
        };

        if (!isHandlerAttached && !import.meta.env.SSR) {
            window.addEventListener('hashchange', highlightHashElement);
            document.addEventListener('click', (e) => {
                const target = e.target as HTMLElement;
                if (target.closest('.header-anchor, a[href^="#"]')) {
                    scheduleTask(highlightHashElement);
                }
            });
            isHandlerAttached = true;
        }
    },

} satisfies Theme;
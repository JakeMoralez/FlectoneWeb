import en from "../locales/en.json";
import ru from "../locales/ru.json";

const LANGUAGES = {
  en,
  ru,
};

export function useTranslations(lang: keyof typeof LANGUAGES) {
  return {
    t: (key: string) => {
      const keys = key.split(".");
      return keys.reduce(
        (obj, key) => (obj as Record<string, any>)[key],
        LANGUAGES[lang]
      );
    },
  };
}

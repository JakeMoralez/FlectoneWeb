let img = document.querySelector(".img");
let example = document.querySelector(".example-image");
let value = 1;
let max = 6;
let description = document.querySelector("#description")

function right() {
    value++;
    if (value > max) {
        value = 1;
    }
    switch (value) {
        case 1: 
        description.innerText = "Чат над головой";
        description.setAttribute('style', 'opacity: 1;')
        img.setAttribute("style", 'width: 19rem')
        break

        case 2: 
        description.innerText = "Информация о вещи в чате";
        img.setAttribute("style", 'width: 17rem')
        break

        case 3: 
        description.innerText = "Спойлер";
        img.setAttribute("style", 'width: 29rem')
        break

        case 4: 
        description.innerText = "Смена цвета чата";
        img.setAttribute("style", 'width: 40rem')
        break

        case 5: 
        description.innerText = "Подписание предметов";
        img.setAttribute("style", 'width: 35rem')
        break

        case 6: 
        description.innerText = "Метки";
        img.setAttribute("style", 'width: 38rem')
        break
            
    }

    img.setAttribute("src", `../../assets/chat/images/${value}.gif`);
    example.setAttribute("style", `background-image: url(../../assets/chat/images/${value}.gif);`);
}

function left() {
    value--;

    if (value < 1) {
        value = max;
    }

    switch (value) {
        case 1: 
        description.innerText = "Чат над головой";
        img.setAttribute("style", 'width: 19rem')
        break

        case 2: 
        description.innerText = "Информация о вещи в чате";
        img.setAttribute("style", 'width: 17rem')
        break

        case 3: 
        description.innerText = "Спойлер";
        img.setAttribute("style", 'width: 29rem')
        break

        case 4: 
        description.innerText = "Смена цвета чата";
        img.setAttribute("style", 'width: 40rem')
        break

        case 5: 
        description.innerText = "Подписание предметов";
        img.setAttribute("style", 'width: 35rem')
        break

        case 6: 
        description.innerText = "Метки";
        img.setAttribute("style", 'width: 38rem')
        break
    }

    img.setAttribute("src", `../../assets/chat/images/${value}.gif`);
    example.setAttribute("style", `background-image: url(../../assets/chat/images/${value}.gif);`);
}

img.setAttribute("src", `../assets/chat/images/${value}.gif`);
example.setAttribute("style", `background-image: url(../../assets/chat/images/${value}.gif);`);
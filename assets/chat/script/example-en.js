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
        description.innerText = "Chat bubble";
        description.setAttribute('style', 'opacity: 1;')
        img.setAttribute("style", 'width: 19rem')
        break

        case 2: 
        description.innerText = "Information about the item in chat";
        img.setAttribute("style", 'width: 17rem')
        break

        case 3: 
        description.innerText = "Spoiler";
        img.setAttribute("style", 'width: 29rem')
        break

        case 4: 
        description.innerText = "Changing the chat color";
        img.setAttribute("style", 'width: 40rem')
        break

        case 5: 
        description.innerText = "Signing of items";
        img.setAttribute("style", 'width: 35rem')
        break

        case 6: 
        description.innerText = "Markers";
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
        description.innerText = "Chat bubble";
        img.setAttribute("style", 'width: 19rem')
        break

        case 2: 
        description.innerText = "Information about the item in chat";
        img.setAttribute("style", 'width: 17rem')
        break

        case 3: 
        description.innerText = "Spoiler";
        img.setAttribute("style", 'width: 29rem')
        break

        case 4: 
        description.innerText = "Changing the chat color";
        img.setAttribute("style", 'width: 40rem')
        break

        case 5: 
        description.innerText = "Signing of items";
        img.setAttribute("style", 'width: 35rem')
        break

        case 6: 
        description.innerText = "Markers";
        img.setAttribute("style", 'width: 38rem')
        break
    }

    img.setAttribute("src", `../../assets/chat/images/${value}.gif`);
    example.setAttribute("style", `background-image: url(../../assets/chat/images/${value}.gif);`);
}

img.setAttribute("src", `../../assets/chat/images/${value}.gif`);
example.setAttribute("style", `background-image: url(../../assets/chat/images/${value}.gif);`);
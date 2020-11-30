
// Área de leitura - funções //
function chose() {
    if (chapters.value == "opcap1") {
        var exib = document.getElementById("exib");
        var img = document.createElement("img");
        img.src = "img/Mangas/One Piece/cap1/0.jpg";
        exib.appendChild(img);
        for (let index = 1; index < 52; index++) {
            img = document.createElement("img");
            img.src = "img/Mangas/One Piece/cap1/" + index + ".jpg";
            exib.appendChild(img);
        }
    }
    else if (chapters.value == "opcap2") {
        var exib = document.getElementById("exib");
        var img = document.createElement("img");
        img.src = "img/Mangas/One Piece/cap2/0.jpg";
        exib.appendChild(img);
        for (let index = 1; index < 25; index++) {
            img = document.createElement("img");
            img.src = "img/Mangas/One Piece/cap2/" + index + ".jpg";
            exib.appendChild(img);
        }
    } else if (chapters.value == "opcap3") {
        var exib = document.getElementById("exib");
        var img = document.createElement("img");
        img.src = "img/Mangas/One Piece/cap3/0.jpg";
        exib.appendChild(img);
        for (let index = 1; index < 23; index++) {
            img = document.createElement("img");
            img.src = "img/Mangas/One Piece/cap3/" + index + ".jpg";
            exib.appendChild(img);
        }
    } else if (chapters.value == "opcap4") {
        var exib = document.getElementById("exib");
        var img = document.createElement("img");
        img.src = "img/Mangas/One Piece/cap4/0.jpg";
        exib.appendChild(img);
        for (let index = 1; index < 21; index++) {
            img = document.createElement("img");
            img.src = "img/Mangas/One Piece/cap4/" + index + ".jpg";
            exib.appendChild(img);
        }
    } else if (chapters.value == "opcap5") {
        var exib = document.getElementById("exib");
        var img = document.createElement("img");
        img.src = "img/Mangas/One Piece/cap5/0.jpg";
        exib.appendChild(img);
        for (let index = 1; index < 21; index++) {
            img = document.createElement("img");
            img.src = "img/Mangas/One Piece/cap5/" + index + ".jpg";
            exib.appendChild(img);
        }

    }
}
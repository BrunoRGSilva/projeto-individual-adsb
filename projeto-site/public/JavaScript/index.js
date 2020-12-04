// Área de leitura - funções //
function choseop() {
    // Capitulo 1 One Piece
    if (chapters.value == "opcap1") {
        let exib = document.getElementById("exib1");
        let img = document.createElement("img");
        img.src = "img/Mangas/One Piece/cap1/0.jpg";
        exib.appendChild(img);
        exib2.innerHTML = "";
        exib3.innerHTML = "";
        exib4.innerHTML = "";
        exib5.innerHTML = "";
        for (let index = 1; index < 52; index++) {
            img = document.createElement("img");
            img.src = "img/Mangas/One Piece/cap1/" + index + ".jpg";
            exib.appendChild(img);
        }

    }
    // Capitulo 2 One Piece
    else if (chapters.value == "opcap2") {

        let exib = document.getElementById("exib2");
        let img = document.createElement("img");
        img.src = "img/Mangas/One Piece/cap2/0.jpg";
        exib.appendChild(img);
        exib1.innerHTML = "";
        exib3.innerHTML = "";
        exib4.innerHTML = "";
        exib5.innerHTML = "";
        for (let index = 1; index < 25; index++) {
            img = document.createElement("img");
            img.src = "img/Mangas/One Piece/cap2/" + index + ".jpg";
            exib.appendChild(img);
        }

    }
    // Capitulo 3 One Piece
    else if (chapters.value == "opcap3") {
        let exib = document.getElementById("exib3");
        let img = document.createElement("img");
        img.src = "img/Mangas/One Piece/cap3/0.jpg";
        exib.appendChild(img);
        exib1.innerHTML = "";
        exib2.innerHTML = "";
        exib4.innerHTML = "";
        exib5.innerHTML = "";
        for (let index = 1; index < 23; index++) {
            img = document.createElement("img");
            img.src = "img/Mangas/One Piece/cap3/" + index + ".jpg";
            exib.appendChild(img);
        }
    }
    // Capitulo 4 One Piece
    else if (chapters.value == "opcap4") {
        let exib = document.getElementById("exib4");
        let img = document.createElement("img");
        img.src = "img/Mangas/One Piece/cap4/0.jpg";
        exib.appendChild(img);
        exib1.innerHTML = "";
        exib2.innerHTML = "";
        exib3.innerHTML = "";
        exib5.innerHTML = "";
        for (let index = 1; index < 21; index++) {
            img = document.createElement("img");
            img.src = "img/Mangas/One Piece/cap4/" + index + ".png";
            exib.appendChild(img);
        }
    }
    // Capitulo 5 One Piece
    else if (chapters.value == "opcap5") {
        let exib = document.getElementById("exib5");
        let img = document.createElement("img");
        img.src = "img/Mangas/One Piece/cap5/0.jpg";
        exib.appendChild(img);
        exib1.innerHTML = "";
        exib2.innerHTML = "";
        exib3.innerHTML = "";
        exib4.innerHTML = "";
        for (let index = 1; index < 21; index++) {
            img = document.createElement("img");
            img.src = "img/Mangas/One Piece/cap5/" + index + ".png";
            exib.appendChild(img);
        }
    }
}


function chosebna() {
    // Capitulo 1 Boku no Hero Academia
    if (chapters.value == "bnacap1") {
        let exib = document.getElementById("exib1");
        let img = document.createElement("img");
        img.src = "img/Mangas/Boku no Hero Academia/cap1/0.png";
        exib.appendChild(img);
        exib2.innerHTML = "";
        exib3.innerHTML = "";
        exib4.innerHTML = "";
        exib5.innerHTML = "";
        for (let index = 1; index < 55; index++) {
            img = document.createElement("img");
            img.src = "img/Mangas/Boku no Hero Academia/cap1/" + index + ".png";
            exib.appendChild(img);
        }

    }
    // Capitulo 2 Boku no Hero Academia
    else if (chapters.value == "bnacap2") {
        let exib = document.getElementById("exib2");
        let img = document.createElement("img");
        img.src = "img/Mangas/Boku no Hero Academia/cap2/0.png";
        exib.appendChild(img);
        exib1.innerHTML = "";
        exib3.innerHTML = "";
        exib4.innerHTML = "";
        exib5.innerHTML = "";
        for (let index = 1; index < 24; index++) {
            img = document.createElement("img");
            img.src = "img/Mangas/Boku no Hero Academia/cap2/" + index + ".png";
            exib.appendChild(img);
        }

    }
    // Capitulo 3 Boku no Hero Academia
    else if (chapters.value == "bnacap3") {
        let exib = document.getElementById("exib3");
        let img = document.createElement("img");
        img.src = "img/Mangas/Boku no Hero Academia/cap3/0.png";
        exib.appendChild(img);
        exib1.innerHTML = "";
        exib2.innerHTML = "";
        exib4.innerHTML = "";
        exib5.innerHTML = "";
        for (let index = 1; index < 23; index++) {
            img = document.createElement("img");
            img.src = "img/Mangas/Boku no Hero Academia/cap3/" + index + ".png";
            exib.appendChild(img);
        }
    }
    // Capitulo 4 Boku no Hero Academia
    else if (chapters.value == "bnacap4") {
        let exib = document.getElementById("exib4");
        let img = document.createElement("img");
        img.src = "img/Mangas/Boku no Hero Academia/cap4/0.png";
        exib.appendChild(img);
        exib1.innerHTML = "";
        exib2.innerHTML = "";
        exib3.innerHTML = "";
        exib5.innerHTML = "";
        for (let index = 1; index < 20; index++) {
            img = document.createElement("img");
            img.src = "img/Mangas/Boku no Hero Academia/cap4/" + index + ".png";
            exib.appendChild(img);
        }
    }
    // Capitulo 5 Boku no Hero Academia
    else if (chapters.value == "bnacap5") {
        let exib = document.getElementById("exib5");
        let img = document.createElement("img");
        img.src = "img/Mangas/Boku no Hero Academia/cap5/0.png";
        exib.appendChild(img);
        exib1.innerHTML = "";
        exib2.innerHTML = "";
        exib3.innerHTML = "";
        exib4.innerHTML = "";
        for (let index = 1; index < 20; index++) {
            img = document.createElement("img");
            img.src = "img/Mangas/Boku no Hero Academia/cap5/" + index + ".png";
            exib.appendChild(img);
        }
    }
}



function chosedb() {
    // Capitulo 1 Dragon Ball
    if (chapters.value == "dbcap1") {
        let exib = document.getElementById("exib1");
        let img = document.createElement("img");
        img.src = "img/Mangas/Dragon Ball/cap1/0.png";
        exib.appendChild(img);
        exib2.innerHTML = "";
        exib3.innerHTML = "";
        exib4.innerHTML = "";
        exib5.innerHTML = "";
        for (let index = 1; index < 32; index++) {
            img = document.createElement("img");
            img.src = "img/Mangas/Dragon Ball/cap1/" + index + ".png";
            exib.appendChild(img);
        }

    }
    // Capitulo 2 Dragon Ball
    else if (chapters.value == "dbcap2") {
        let exib = document.getElementById("exib2");
        let img = document.createElement("img");
        img.src = "img/Mangas/Dragon Ball/cap2/0.png";
        exib.appendChild(img);
        exib1.innerHTML = "";
        exib3.innerHTML = "";
        exib4.innerHTML = "";
        exib5.innerHTML = "";
        for (let index = 1; index < 15; index++) {
            img = document.createElement("img");
            img.src = "img/Mangas/Dragon Ball/cap2/" + index + ".png";
            exib.appendChild(img);
        }

    }
    // Capitulo 3 Dragon Ball
    else if (chapters.value == "dbcap3") {
        let exib = document.getElementById("exib3");
        let img = document.createElement("img");
        img.src = "img/Mangas/Dragon Ball/cap3/0.png";
        exib.appendChild(img);
        exib1.innerHTML = "";
        exib2.innerHTML = "";
        exib4.innerHTML = "";
        exib5.innerHTML = "";
        for (let index = 1; index < 15; index++) {
            img = document.createElement("img");
            img.src = "img/Mangas/Dragon Ball/cap3/" + index + ".png";
            exib.appendChild(img);
        }
    }
    // Capitulo 4 Dragon Ball
    else if (chapters.value == "dbcap4") {
        let exib = document.getElementById("exib4");
        let img = document.createElement("img");
        img.src = "img/Mangas/Dragon Ball/cap4/0.png";
        exib.appendChild(img);
        exib1.innerHTML = "";
        exib2.innerHTML = "";
        exib3.innerHTML = "";
        exib5.innerHTML = "";
        for (let index = 1; index < 15; index++) {
            img = document.createElement("img");
            img.src = "img/Mangas/Dragon Ball/cap4/" + index + ".png";
            exib.appendChild(img);
        }
    }
    // Capitulo 5 Dragon Ball
    else if (chapters.value == "dbcap5") {
        let exib = document.getElementById("exib5");
        let img = document.createElement("img");
        img.src = "img/Mangas/Dragon Ball/cap5/0.png";
        exib.appendChild(img);
        exib1.innerHTML = "";
        exib2.innerHTML = "";
        exib3.innerHTML = "";
        exib4.innerHTML = "";
        for (let index = 1; index < 15; index++) {
            img = document.createElement("img");
            img.src = "img/Mangas/Dragon Ball/cap5/" + index + ".png";
            exib.appendChild(img);
        }
    }
}


function chosefm() {
    // Capitulo 1 FullMetal Alchemist
    if (chapters.value == "fmcap1") {
        let exib = document.getElementById("exib1");
        let img = document.createElement("img");
        img.src = "img/Mangas/Fullmetal Alchemist/cap1/1.jpg";
        exib.appendChild(img);
        exib2.innerHTML = "";
        exib3.innerHTML = "";
        exib4.innerHTML = "";
        exib5.innerHTML = "";
        for (let index = 2; index < 51; index++) {
            img = document.createElement("img");
            img.src = "img/Mangas/Fullmetal Alchemist/cap1/" + index + ".jpg";
            exib.appendChild(img);
        }

    }
    // Capitulo 2 FullMetal Alchemist
    else if (chapters.value == "fmcap2") {
        let exib = document.getElementById("exib2");
        let img = document.createElement("img");
        img.src = "img/Mangas/Fullmetal Alchemist/cap2/0.jpg";
        exib.appendChild(img);
        exib1.innerHTML = "";
        exib3.innerHTML = "";
        exib4.innerHTML = "";
        exib5.innerHTML = "";
        for (let index = 1; index < 39; index++) {
            img = document.createElement("img");
            img.src = "img/Mangas/Fullmetal Alchemist/cap2/" + index + ".jpg";
            exib.appendChild(img);
        }

    }
    // Capitulo 3 FullMetal Alchemist
    else if (chapters.value == "fmcap3") {
        let exib = document.getElementById("exib3");
        let img = document.createElement("img");
        img.src = "img/Mangas/Fullmetal Alchemist/cap3/0.jpg";
        exib.appendChild(img);
        exib1.innerHTML = "";
        exib2.innerHTML = "";
        exib4.innerHTML = "";
        exib5.innerHTML = "";
        for (let index = 1; index < 43; index++) {
            img = document.createElement("img");
            img.src = "img/Mangas/Fullmetal Alchemist/cap3/" + index + ".jpg";
            exib.appendChild(img);
        }
    }
    // Capitulo 4 FullMetal Alchemist
    else if (chapters.value == "fmcap4") {
        let exib = document.getElementById("exib4");
        let img = document.createElement("img");
        img.src = "img/Mangas/Fullmetal Alchemist/cap4/0.jpg";
        exib.appendChild(img);
        exib1.innerHTML = "";
        exib2.innerHTML = "";
        exib3.innerHTML = "";
        exib5.innerHTML = "";
        for (let index = 1; index < 44; index++) {
            img = document.createElement("img");
            img.src = "img/Mangas/Fullmetal Alchemist/cap4/" + index + ".jpg";
            exib.appendChild(img);
        }
    }
    // Capitulo 5 FullMetal Alchemist
    else if (chapters.value == "fmcap5") {
        let exib = document.getElementById("exib5");
        let img = document.createElement("img");
        img.src = "img/Mangas/Fullmetal Alchemist/cap5/0.jpg";
        exib.appendChild(img);
        exib1.innerHTML = "";
        exib2.innerHTML = "";
        exib3.innerHTML = "";
        exib4.innerHTML = "";
        for (let index = 1; index < 47; index++) {
            img = document.createElement("img");
            img.src = "img/Mangas/Fullmetal Alchemist/cap5/" + index + ".jpg";
            exib.appendChild(img);
        }
    }
}



function chosejuju() {
    // Capitulo 1 Jujutsu Kaisen
    if (chapters.value == "jujucap1") {
        let exib = document.getElementById("exib1");
        let img = document.createElement("img");
        img.src = "img/Mangas/Jujuts Kaisen/cap1/0.png";
        exib.appendChild(img);
        exib2.innerHTML = "";
        exib3.innerHTML = "";
        exib4.innerHTML = "";
        exib5.innerHTML = "";
        for (let index = 1; index < 52; index++) {
            img = document.createElement("img");
            img.src = "img/Mangas/Jujuts Kaisen/cap1/" + index + ".png";
            exib.appendChild(img);
        }

    }
    // Capitulo 2 Jujutsu Kaisen
    else if (chapters.value == "jujucap2") {
        let exib = document.getElementById("exib2");
        let img = document.createElement("img");
        img.src = "img/Mangas/Jujuts Kaisen/cap2/0.png";
        exib.appendChild(img);
        exib1.innerHTML = "";
        exib3.innerHTML = "";
        exib4.innerHTML = "";
        exib5.innerHTML = "";
        for (let index = 1; index < 26; index++) {
            img = document.createElement("img");
            img.src = "img/Mangas/Jujuts Kaisen/cap2/" + index + ".png";
            exib.appendChild(img);
        }

    }
    // Capitulo 3 Jujutsu Kaisen
    else if (chapters.value == "jujucap3") {
        let exib = document.getElementById("exib3");
        let img = document.createElement("img");
        img.src = "img/Mangas/Jujuts Kaisen/cap3/0.png";
        exib.appendChild(img);
        exib1.innerHTML = "";
        exib2.innerHTML = "";
        exib4.innerHTML = "";
        exib5.innerHTML = "";
        for (let index = 1; index < 23; index++) {
            img = document.createElement("img");
            img.src = "img/Mangas/Jujuts Kaisen/cap3/" + index + ".png";
            exib.appendChild(img);
        }
    }
    // Capitulo 4 Jujutsu Kaisen
    else if (chapters.value == "jujucap4") {
        let exib = document.getElementById("exib4");
        let img = document.createElement("img");
        img.src = "img/Mangas/Jujuts Kaisen/cap4/0.png";
        exib.appendChild(img);
        exib1.innerHTML = "";
        exib2.innerHTML = "";
        exib3.innerHTML = "";
        exib5.innerHTML = "";
        for (let index = 1; index < 20; index++) {
            img = document.createElement("img");
            img.src = "img/Mangas/Jujuts Kaisen/cap4/" + index + ".png";
            exib.appendChild(img);
        }
    }
    // Capitulo 5 Jujutsu Kaisen
    else if (chapters.value == "jujucap5") {
        let exib = document.getElementById("exib5");
        let img = document.createElement("img");
        img.src = "img/Mangas/Jujuts Kaisen/cap5/0.png";
        exib.appendChild(img);
        exib1.innerHTML = "";
        exib2.innerHTML = "";
        exib3.innerHTML = "";
        exib4.innerHTML = "";
        for (let index = 1; index < 20; index++) {
            img = document.createElement("img");
            img.src = "img/Mangas/Jujuts Kaisen/cap5/" + index + ".png";
            exib.appendChild(img);
        }
    }
}




function chosekm() {
    // Capitulo 1 Kimetsu no Yaiba
    if (chapters.value == "kmcap1") {
        let exib = document.getElementById("exib1");
        let img = document.createElement("img");
        img.src = "img/Manga/Kimetsu no Yaiba/cap1/0.png";
        exib.appendChild(img);
        exib2.innerHTML = "";
        exib3.innerHTML = "";
        exib4.innerHTML = "";
        exib5.innerHTML = "";
        for (let index = 1; index < 54; index++) {
            img = document.createElement("img");
            img.src = "img/Manga/Kimetsu no Yaiba/cap1/" + index + ".png";
            exib.appendChild(img);
        }

    }
    // Capitulo 2 Kimetsu no Yaiba
    else if (chapters.value == "kmcap2") {
        let exib = document.getElementById("exib2");
        let img = document.createElement("img");
        img.src = "img/Manga/Kimetsu no Yaiba/cap2/0.png";
        exib.appendChild(img);
        exib1.innerHTML = "";
        exib3.innerHTML = "";
        exib4.innerHTML = "";
        exib5.innerHTML = "";
        for (let index = 1; index < 26; index++) {
            img = document.createElement("img");
            img.src = "img/Manga/Kimetsu no Yaiba/cap2/" + index + ".png";
            exib.appendChild(img);
        }

    }
    // Capitulo 3 Kimetsu no Yaiba
    else if (chapters.value == "kmcap3") {
        let exib = document.getElementById("exib3");
        let img = document.createElement("img");
        img.src = "img/Manga/Kimetsu no Yaiba/cap3/0.png";
        exib.appendChild(img);
        exib1.innerHTML = "";
        exib2.innerHTML = "";
        exib4.innerHTML = "";
        exib5.innerHTML = "";
        for (let index = 1; index < 24; index++) {
            img = document.createElement("img");
            img.src = "img/Manga/Kimetsu no Yaiba/cap3/" + index + ".png";
            exib.appendChild(img);
        }
    }
    // Capitulo 4 Kimetsu no Yaiba
    else if (chapters.value == "kmcap4") {
        let exib = document.getElementById("exib4");
        let img = document.createElement("img");
        img.src = "img/Manga/Kimetsu no Yaiba/cap4/0.png";
        exib.appendChild(img);
        exib1.innerHTML = "";
        exib2.innerHTML = "";
        exib3.innerHTML = "";
        exib5.innerHTML = "";
        for (let index = 1; index < 20; index++) {
            img = document.createElement("img");
            img.src = "img/Manga/Kimetsu no Yaiba/cap4/" + index + ".png";
            exib.appendChild(img);
        }
    }
    // Capitulo 5 Kimetsu no Yaiba
    else if (chapters.value == "kmcap5") {
        let exib = document.getElementById("exib5");
        let img = document.createElement("img");
        img.src = "img/Manga/Kimetsu no Yaiba/cap5/0.png";
        exib.appendChild(img);
        exib1.innerHTML = "";
        exib2.innerHTML = "";
        exib3.innerHTML = "";
        exib4.innerHTML = "";
        for (let index = 1; index < 19; index++) {
            img = document.createElement("img");
            img.src = "img/Manga/Kimetsu no Yaiba/cap5/" + index + ".png";
            exib.appendChild(img);
        }
    }
}



function chosent() {
    // Capitulo 1 Naruto
    if (chapters.value == "ntcap1") {
        let exib = document.getElementById("exib1");
        let img = document.createElement("img");
        img.src = "img/Mangas/Naruto/cap1/1.jpg";
        exib.appendChild(img);
        exib2.innerHTML = "";
        exib3.innerHTML = "";
        exib4.innerHTML = "";
        exib5.innerHTML = "";
        for (let index = 1; index < 52; index++) {
            img = document.createElement("img");
            img.src = "img/Mangas/Naruto/cap1/" + index + ".jpg";
            exib.appendChild(img);
        }

    }
    // Capitulo 2 Naruto
    else if (chapters.value == "ntcap2") {
        let exib = document.getElementById("exib2");
        let img = document.createElement("img");
        img.src = "img/Mangas/Naruto/cap2/1.jpg";
        exib.appendChild(img);
        exib1.innerHTML = "";
        exib3.innerHTML = "";
        exib4.innerHTML = "";
        exib5.innerHTML = "";
        for (let index = 1; index < 22; index++) {
            img = document.createElement("img");
            img.src = "img/Mangas/Naruto/cap2/" + index + ".jpg";
            exib.appendChild(img);
        }

    }
    // Capitulo 3 Naruto
    else if (chapters.value == "ntcap3") {
        let exib = document.getElementById("exib3");
        let img = document.createElement("img");
        img.src = "img/Mangas/Naruto/cap3/1.jpg";
        exib.appendChild(img);
        exib1.innerHTML = "";
        exib2.innerHTML = "";
        exib4.innerHTML = "";
        exib5.innerHTML = "";
        for (let index = 1; index < 23; index++) {
            img = document.createElement("img");
            img.src = "img/Mangas/Naruto/cap3/" + index + ".jpg";
            exib.appendChild(img);
        }
    }
    // Capitulo 4 Naruto
    else if (chapters.value == "ntcap4") {
        let exib = document.getElementById("exib4");
        let img = document.createElement("img");
        img.src = "img/Mangas/Naruto/cap4/1.jpg";
        exib.appendChild(img);
        exib1.innerHTML = "";
        exib2.innerHTML = "";
        exib3.innerHTML = "";
        exib5.innerHTML = "";
        for (let index = 1; index < 19; index++) {
            img = document.createElement("img");
            img.src = "img/Mangas/Naruto/cap4/" + index + ".jpg";
            exib.appendChild(img);
        }
    }
    // Capitulo 5 Naruto
    else if (chapters.value == "ntcap5") {
        let exib = document.getElementById("exib5");
        let img = document.createElement("img");
        img.src = "img/Mangas/Naruto/cap5/1.jpg";
        exib.appendChild(img);
        exib1.innerHTML = "";
        exib2.innerHTML = "";
        exib3.innerHTML = "";
        exib4.innerHTML = "";
        for (let index = 1; index < 19; index++) {
            img = document.createElement("img");
            img.src = "img/Mangas/Naruto/cap5/" + index + ".jpg";
            exib.appendChild(img);
        }
    }
}



function choseopm() {
    // Capitulo 1 One Punch Man
    if (chapters.value == "opmcap1") {
        let exib = document.getElementById("exib1");
        let img = document.createElement("img");
        img.src = "img/Mangas/One Punch Man/cap1/0.png";
        exib.appendChild(img);
        exib2.innerHTML = "";
        exib3.innerHTML = "";
        exib4.innerHTML = "";
        exib5.innerHTML = "";
        for (let index = 1; index < 20; index++) {
            img = document.createElement("img");
            img.src = "img/Mangas/One Punch Man/cap1/" + index + ".png";
            exib.appendChild(img);
        }

    }
    // Capitulo 2 One Punch Man
    else if (chapters.value == "opmcap2") {
        let exib = document.getElementById("exib2");
        let img = document.createElement("img");
        img.src = "img/Mangas/One Punch Man/cap2/0.png";
        exib.appendChild(img);
        exib1.innerHTML = "";
        exib3.innerHTML = "";
        exib4.innerHTML = "";
        exib5.innerHTML = "";
        for (let index = 1; index < 18; index++) {
            img = document.createElement("img");
            img.src = "img/Mangas/One Punch Man/cap2/" + index + ".png";
            exib.appendChild(img);
        }

    }
    // Capitulo 3 One Punch Man
    else if (chapters.value == "opmcap3") {
        let exib = document.getElementById("exib3");
        let img = document.createElement("img");
        img.src = "img/Mangas/One Punch Man/cap3/0.png";
        exib.appendChild(img);
        exib1.innerHTML = "";
        exib2.innerHTML = "";
        exib4.innerHTML = "";
        exib5.innerHTML = "";
        for (let index = 1; index < 22; index++) {
            img = document.createElement("img");
            img.src = "img/Mangas/One Punch Man/cap3/" + index + ".png";
            exib.appendChild(img);
        }
    }
    // Capitulo 4 One Punch Man
    else if (chapters.value == "opmcap4") {
        let exib = document.getElementById("exib4");
        let img = document.createElement("img");
        img.src = "img/Mangas/One Punch Man/cap4/0.jpg";
        exib.appendChild(img);
        exib1.innerHTML = "";
        exib2.innerHTML = "";
        exib3.innerHTML = "";
        exib5.innerHTML = "";
        for (let index = 1; index < 22; index++) {
            img = document.createElement("img");
            img.src = "img/Mangas/One Punch Man/cap4/" + index + ".jpg";
            exib.appendChild(img);
        }
    }
    // Capitulo 5 One Punch Man
    else if (chapters.value == "opmcap5") {
        let exib = document.getElementById("exib5");
        let img = document.createElement("img");
        img.src = "img/Mangas/One Punch Man/cap5/0.jpg";
        exib.appendChild(img);
        exib1.innerHTML = "";
        exib2.innerHTML = "";
        exib3.innerHTML = "";
        exib4.innerHTML = "";
        for (let index = 1; index < 22; index++) {
            img = document.createElement("img");
            img.src = "img/Mangas/One Punch Man/cap5/" + index + ".jpg";
            exib.appendChild(img);
        }
    }
}




function chosesgk() {
    // Capitulo 1 Shingeki no Kyojin

    if (chapters.value == "sgkcap1") {
        let exib = document.getElementById("exib1");
        let img = document.createElement("img");
        img.src = "img/Mangas/Shingeki no Kyojin/cap1/0.jpg";
        exib.appendChild(img);
        exib2.innerHTML = "";
        exib3.innerHTML = "";
        exib4.innerHTML = "";
        exib5.innerHTML = "";
        for (let index = 1; index < 53; index++) {
            img = document.createElement("img");
            img.src = "img/Mangas/Shingeki no Kyojin/cap1/" + index + ".jpg";
            exib.appendChild(img);
        }
    }
    // Capitulo 2 Shingeki no Kyojin
    else if (chapters.value == "sgkcap2") {
        let exib = document.getElementById("exib2");
        let img = document.createElement("img");
        img.src = "img/Mangas/Shingeki no Kyojin/cap2/0.jpg";
        exib.appendChild(img);
        exib1.innerHTML = "";
        exib3.innerHTML = "";
        exib4.innerHTML = "";
        exib5.innerHTML = "";
        for (let index = 1; index < 43; index++) {
            img = document.createElement("img");
            img.src = "img/Mangas/Shingeki no Kyojin/cap2/" + index + ".jpg";
            exib.appendChild(img);
        }

    }
    // Capitulo 3 Shingeki no Kyojin
    else if (chapters.value == "sgkcap3") {
        let exib = document.getElementById("exib3");
        let img = document.createElement("img");
        img.src = "img/Mangas/Shingeki no Kyojin/cap3/0.jpg";
        exib.appendChild(img);
        exib1.innerHTML = "";
        exib2.innerHTML = "";
        exib4.innerHTML = "";
        exib5.innerHTML = "";
        for (let index = 1; index < 46; index++) {
            img = document.createElement("img");
            img.src = "img/Mangas/Shingeki no Kyojin/cap3/" + index + ".jpg";
            exib.appendChild(img);
        }
    }
    // Capitulo 4 Shingeki no Kyojin
    else if (chapters.value == "sgkcap4") {
        let exib = document.getElementById("exib4");
        let img = document.createElement("img");
        img.src = "img/Mangas/Shingeki no Kyojin/cap4/0.jpg";
        exib.appendChild(img);
        exib1.innerHTML = "";
        exib2.innerHTML = "";
        exib3.innerHTML = "";
        exib5.innerHTML = "";
        for (let index = 1; index < 50; index++) {
            img = document.createElement("img");
            img.src = "img/Mangas/Shingeki no Kyojin/cap4/" + index + ".jpg";
            exib.appendChild(img);
        }
    }
    // Capitulo 5 Shingeki no Kyojin
    else if (chapters.value == "sgkcap5") {
        let exib = document.getElementById("exib5");
        let img = document.createElement("img");
        img.src = "img/Mangas/Shingeki no Kyojin/cap5/0.jpg";
        exib.appendChild(img);
        exib1.innerHTML = "";
        exib2.innerHTML = "";
        exib3.innerHTML = "";
        exib4.innerHTML = "";
        for (let index = 1; index < 39; index++) {
            img = document.createElement("img");
            img.src = "img/Mangas/Shingeki no Kyojin/cap5/" + index + ".jpg";
            exib.appendChild(img);
        }
    }
}



function choseyuyu() {
    // Capitulo 1 Yu Yu Hakusho
    if (chapters.value == "yuyucap1") {
        let exib = document.getElementById("exib1");
        let img = document.createElement("img");
        img.src = "img/Mangas/Yu Yu Hakusho/cap1/0.jpg";
        exib.appendChild(img);
        exib2.innerHTML = "";
        exib3.innerHTML = "";
        exib4.innerHTML = "";
        exib5.innerHTML = "";
        for (let index = 1; index < 48; index++) {
            img = document.createElement("img");
            img.src = "img/Mangas/Yu Yu Hakusho/cap1/" + index + ".jpg";
            exib.appendChild(img);
        }

    }
    // Capitulo 2 Yu Yu Hakusho
    else if (chapters.value == "yuyucap2") {
        let exib = document.getElementById("exib2");
        let img = document.createElement("img");
        img.src = "img/Mangas/Yu Yu Hakusho/cap2/0.jpg";
        exib.appendChild(img);
        exib1.innerHTML = "";
        exib3.innerHTML = "";
        exib4.innerHTML = "";
        exib5.innerHTML = "";
        for (let index = 1; index < 25; index++) {
            img = document.createElement("img");
            img.src = "img/Mangas/Yu Yu Hakusho/cap2/" + index + ".jpg";
            exib.appendChild(img);
        }

    }
    // Capitulo 3 Yu Yu Hakusho
    else if (chapters.value == "yuyucap3") {
        let exib = document.getElementById("exib3");
        let img = document.createElement("img");
        img.src = "img/Mangas/Yu Yu Hakusho/cap3/0.jpg";
        exib.appendChild(img);
        exib1.innerHTML = "";
        exib2.innerHTML = "";
        exib4.innerHTML = "";
        exib5.innerHTML = "";
        for (let index = 1; index < 21; index++) {
            img = document.createElement("img");
            img.src = "img/Mangas/Yu Yu Hakusho/cap3/" + index + ".jpg";
            exib.appendChild(img);
        }
    }
    // Capitulo 4 Yu Yu Hakusho
    else if (chapters.value == "yuyucap4") {
        let exib = document.getElementById("exib4");
        let img = document.createElement("img");
        img.src = "img/Mangas/Yu Yu Hakusho/cap4/0.jpg";
        exib.appendChild(img);
        exib1.innerHTML = "";
        exib2.innerHTML = "";
        exib3.innerHTML = "";
        exib5.innerHTML = "";
        for (let index = 1; index < 22; index++) {
            img = document.createElement("img");
            img.src = "img/Mangas/Yu Yu Hakusho/cap4/" + index + ".jpg";
            exib.appendChild(img);
        }
    }
    // Capitulo 5 Yu Yu Hakusho
    else if (chapters.value == "yuyucap5") {
        let exib = document.getElementById("exib5");
        let img = document.createElement("img");
        img.src = "img/Mangas/Yu Yu Hakusho/cap5/0.jpg";
        exib.appendChild(img);
        exib1.innerHTML = "";
        exib2.innerHTML = "";
        exib3.innerHTML = "";
        exib4.innerHTML = "";
        for (let index = 1; index < 20; index++) {
            img = document.createElement("img");
            img.src = "img/Mangas/Yu Yu Hakusho/cap5/" + index + ".jpg";
            exib.appendChild(img);
        }
    }
}






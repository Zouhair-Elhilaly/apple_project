let yellow = document.getElementById("yellow");
let beige = document.getElementById("beige");
let red = document.getElementById("red");
let blackGray = document.getElementById("blackGray");
let blueGray = document.getElementById("blueGray");

let src_main = document.getElementById("src-main");

let text = document.querySelector(".content");

let logo = document.getElementById("logo");

yellow.addEventListener('click' , () => {
    let src = yellow.src;
    src_main.src = src;
    document.body.style.backgroundColor = " #bfae1e";
});

beige.addEventListener('click' , () => {
    let src = beige.src;
    src_main.src = src;
    document.body.style.cssText = `
    background-color: beige;
    
    `;
    text.style.color = 'gray';
    logo.style.backgroundColor = 'gray';
});

red.addEventListener("click", () => {
    let src = red.src;
    src_main.src = src;
    document.body.style.cssText = `
    background-color: red;
    `;
});

blackGray.addEventListener("click", () => {
    let src = blackGray.src;
    src_main.src = src;
    document.body.style.cssText = `
    background-color:  #4b4b47 ;
    `;
    text.style.color = 'beige';
});

blueGray.addEventListener("click", () => {
    let src = blueGray.src;
    src_main.src = src;
    document.body.style.cssText = `
    background-color:  #5e9ab2 ;
    `;
});

// start copyright
let copyright = document.getElementById("date");
let year = new Date().getFullYear();
copyright.append(year)





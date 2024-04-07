// 웹사이트 주소: https://api.imgflip.com/get_memes

const HTML_BUTTON = document.getElementById("button");
const HTML_IMG = document.getElementById("img");
const HTML_NAME = document.getElementById("NAME");

function randomNumber(maxNumber) {
    return Math.floor(Math.random() * maxNumber + 1);
}

function getMemes() {
    // 웹 요청 보내기
    fetch("https://api.imgflip.com/get_memes")
        .then(data => data.json())
        .then(json => {
            // 1. 랜덤 넘버 뽑기
            const newRandomNumber = randomNumber(100);
            // 2. 랜덤 Meme 갖고오기
            const randomMeme = json.data.memes[newRandomNumber];
            // 3. H1 innerText
            HTML_NAME.innerText = randomMeme.name;
            // 3. Img src, width, height
            HTML_IMG.src = randomMeme.url;
            HTML_IMG.height = randomMeme.height * 0.5;
            HTML_IMG.width = randomMeme.width * 0.5;
        })
}
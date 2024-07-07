// 화이팅..

// 1. JSON 리스트에 담기
// 2. 살포하기


const url = '/data.json';

const div = document.querySelector('#card-wrap');

async function fetchJsonFile() {
    const response = await fetch(url);
    const data = await response.json();
    
    data.data.map((dataa)=>{
        div.innerHTML += `<card-comp 
        title="${dataa.name}"
        price="${dataa.price}원"
        region-name="${dataa.address}"
        imgSrc="${dataa.img}">
        </card-comp>`;
        console.log(dataa);
    });
}

fetchJsonFile();

const keywordList = document.querySelector('#keywords-list');
const keywords = ['알바','자전거','나눔','최강야구','한화','프리퀀시','에어컨','선풍기','제습기','삼성라이온즈'];

keywords.forEach(element => {
    keywordList.innerHTML += `<keyword-comp text="${element}"></keyword-comp>`;
});
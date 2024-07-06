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

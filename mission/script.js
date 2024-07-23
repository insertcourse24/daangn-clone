// 화이팅..

//JSON 살포 코드
const url = '/data.json';


const div = document.querySelector('#card-wrap');

async function fetchJsonFile() {
    const response = await fetch(url);
    const data = await response.json();
    
    data.data.map((dataa)=>{
        div.innerHTML += `<card-comp 
        title="${dataa.name}"
        price="20000원"
        region-name="${dataa.address}"
        imgSrc="../.${dataa.img}">
        </card-comp>`;
    });

}

fetchJsonFile();

//keywords 살포 코드
const keywordList = document.querySelector('#keywords-list');
const keywords = ['알바','자전거','나눔','최강야구','한화','프리퀀시','에어컨','선풍기','제습기','삼성라이온즈'];

keywords.forEach(element => {
    keywordList.innerHTML += `<keyword-comp text="${element}"></keyword-comp>`;
});


//footer INFO살포 코드
const footerTopKeyword = document.getElementById('footer-top-keyword');
const footerKeywordList = [
    ["중고거래", "동네업체", "당근알바", "부동산", "중고차 직거래"],
    ["당근비지니스", "채팅하기"],
    ["자주 묻는 질문", "회사 소개", "인재 채용"]
];


footerKeywordList.forEach(category => {
    const ul = document.createElement('ul');

    category.forEach(item => {
        const keywordComp = document.createElement('keyword-comp');
        keywordComp.setAttribute('text', item);
        ul.appendChild(keywordComp);
    });

    footerTopKeyword.appendChild(ul);
});
// 화이팅..
// -> ㅠㅠ

function list() {
    fetch('data.json').then(function (response) {
        return response.json();
    }).then(function (obj) {
        const container = document.querySelector('#imgcontainer');
        let content = '';   

        obj.data.map((item) => {
            content += `
            <div id="items">
              <img src="${item.img}" alt="${item.name}">
              <h2>${item.name}</h2>
              <div> 999,999원 </div>
              <p>${item.address}</p>
            </div>
          `;
        });

        container.innerHTML = content;
    });
}

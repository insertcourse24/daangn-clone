fetch('../data.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.data.map((item) => {
            document.querySelector('.item').innerHTML += `<article>
                <img class="productImg" src=".${item.img}" alt="${item.name}"><br />
                <span>${item.name}</span></br>
                <p><b>123004원</b></p>
                <p>${item.address}</p>
            </article>`;
        })
    });
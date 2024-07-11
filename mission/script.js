fetch('../data.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let html = data.data.map((item) => {
            return `<img src="${item.img}" alt="${item.name}">
            <span>${item.name}<span>
            <p>${item.address}</p>`;
        })
        document.querySelector('.list').innerHTML = html;
    });
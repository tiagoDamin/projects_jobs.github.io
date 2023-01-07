const form = document.querySelector('.top-banner form');
const input = document.querySelector('.top-banner input');
const msg = document.querySelector('.top-banner .msg');
const list = document.querySelector('.ajax-section .cities');

/*
    Inscreva-se aqui para pegar sua api Key = https://home.openweathermap.org/users/sign_up 
 */

    const apiKey = '6d2b64750f0a7d6d80fe659eae022e78';

    form.addEventListener('submit', e => {
        e.preventDefault();
        let inputVal = input.value;

    // Função que checa se o usuário já digitou uma cidade
    const listItems = list.querySelectorAll('.ajax-section .city');
    const listItemsArray = Array.from(listItems);

    if (listItemsArray.length > 0) {
        const filteredArray = listItemsArray.filter (pt => {
            let content = '';
            if (inputVal.includes(',')) {
                if (inputVal.split(',')[1].length > 2) {
                    inputVal = inputVal.split(',')[0];
                    content = pt
                        .querySelector('.city-name span')
                        .textContent.toLowerCase();
                } else {
                    content = pt.querySelector('city-name span').dataset.name.toLowerCase();
                }
            } else  {
                content = pt.querySelector('.city-name span').textContent.toLowerCase();
            }
            return content == inputVal.toLowerCase();
        });

        if (filteredArray.length > 0) {
        msg.textContent = `Você já sabe qual é o clima para ${filteredArray[0].querySelector('.city-name span').textContent}`;
        form.reset();
        input.focus();
        return;
        }
    }

// Ajax
const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

fetch(url) 
    .then(response => response.json())
    .then(data => {
        const { main, name, sys, weather } = data;
        const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]['icon']}.svg`;

        const li = document.createElement('li');
        li.classList.add('city');
        const markup = `
            <h2 class="city-name" data-name"${name},${sys.country}">
                <span>${name}</span>
                <sup>${sys.country}<?sup>
            </h2>
            <div class="city-temp">${Math.round(main.temp)}<sus>°C</sup></div>
            <figure>
                <img class="city-icon" src="${icon}" alt="${weather[0]["description"]}">
                <figcaption>${weather[0]['description']}</figcaption>
            </figure>
        `;
        li.innerHTML = markup;
        list.appendChild(li);
    })
    .catch(() => {
        msg.textContent = "Por favor digite um nome de cidade válido!"
    });

    msg.textContent = "";
    form.reset();
    input.focus();
});




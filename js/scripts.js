// Dados de revisão
const reviews = [
    {
        id: 1,
        name: "Previsão do tempo",
        img:
            "./img/project.png",
        text: 
            "Um app simples para consultar a previsão de hoje"
    },
    {
        id: 2,
        name: "Revisões",
        img:
            "./img/project2.png",
        text: 
            "Eu comecei meus estudos muitos anos atrás e agora sou uma profissional com muita experiência em diferentes áreas."
    },
    // {
    //     id: 3,
    //     name: "samanta smith",
    //     job: "web designer",
    //     img:
    //     "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
    //     text: 
    //     "Eu comecei meus estudos muitos anos atrás e agora sou uma profissional com muita experiência em diferentes áreas."
    // },
    // {
    //     id: 4,
    //     name: "josh larks",
    //     job: "junior",
    //     img:
    //         "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=399&q=80",
    //     text: 
    //         "Eu sempre tive curiosidade sobre tecnólogia e agora tendo trabalhado na área por muito tempo eu realmente vejo muitas oportunidades disponíveis."
    // },
    // {
    //     id: 5,
    //     name: "allan javis",
    //     job: "the ceo",
    //     img:
    //         "https://images.unsplash.com/photo-1609840170480-4c440bcd5d8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    //     text: 
    //         "Eu tenho gerenciado muitos negócios diferentes e atualmente estou trabalho como time bastante diversificado. Nossa equipa está buscando talentos."
    // },
];
// select items
const img = document.getElementById('person-img');
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");
const closeBtn = document.querySelector(".close-btn")

// Começar item
let currentItem = 0;

// Carregar item
window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});

// Mostrar pessoa baseado no item
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// Mostrar próxima pessoa
nextBtn.addEventListener("click", function () {
    currentItem++;

    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }

    showPerson(currentItem);
})

// Mostrar Pessoa anterior 
prevBtn.addEventListener("click", function () {
    currentItem--;

    if ( currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
})

// Mostrar pessoar aleatória
randomBtn.addEventListener("click", function () {
    console.log("Hello");

    if (id == 1) {
        window.open('./projeto_01/index.html')
    }
})


const menu = [
    {
        id: 1,
        title: 'Omelete',
        category: 'lanche',
        price: 20,
        img: './img/omelete.webp',
        desc: `Uma deliciosa omelete feita com ingredientes 
        selecionados.`
    },
    {
        id: 2,
        title: 'coca-cola',
        category: 'bebidas',
        price: 5,
        img: './img/coca.png',
        desc: `Uma bebida ideal para acompanhar sua refeição.`
    },
    {
        id: 3,
        title: 'combo 1',
        category: 'almoço',
        price: 20,
        img: './img/prato_feito.jpg',
        desc: `Nosso prato feito é do tamanho ideal para sua fome.`
    },    
    {
        id: 4,
        title: 'taça de vinho',
        category: 'bebidas',
        price: 15,
        img: './img/vinho.webp',
        desc: `Uma bebida para pessoas com gosto refinado e ideal para sua refeição.`
    },    
    {
        id: 5,
        title: 'Chá',
        category: 'bebidas',
        price: 3,
        img: './img/cha.jpg',
        desc: `Uma maravilhosa bebida para tomar após sua refeição ou durante um lanche rápido.`
    },
    {
        id: 6,
        title: 'batida',
        category: 'bebidas',
        price: 6,
        img: './img/batida.jpg',
        desc: `Uma bebida para substituir sua refeição ou usar como acompanhamento.`
    },
    {
        id: 7,
        title: 'sanduíche',
        category: 'lanche',
        price: 10,
        img: './img/sanduiche.jpg',
        desc: `Um delicioso sanduíche feito com pão especial e ingredientes frescos.`
    },
    {
        id: 8,
        title: 'coxinha',
        category: 'lanche',
        price: 10,
        img: './img/coxinha.jpg',
        desc: `Uma prato delicioso para qualquer hora, é recomanedado para todos os gostos.`
    },
    {
        id: 9,
        title: 'pizza',
        category: 'jantar',
        price: 40,
        img: './img/pizza.jpg',
        desc: `Uma deliciosa comida italiana amada em todo o mundo.`
    },
    {
        id: 10,
        title: 'x-salada',
        category: 'jantar',
        price: 25,
        img: './img/x-salada.jpg',
        desc: `Uma sanduíche saboroso que sempre comemos como lanche durante a noite.`
    },
    {
        id: 11,
        title: 'Combo 2',
        category: 'almoço',
        price: 20,
        img: './img/combo-2.png',
        desc: `Um prato completo para acabar com a sua fome e também cheio de nutrientes.`
    },
    {
        id: 12,
        title: 'combo 3',
        category: 'almoço',
        price: 20,
        img: './img/combo3.jpg',
        desc: `Um prato leve cheio de nutriente perfeito para pessoas buscando uma comida saborosa e poucas calorias.`
    },
    {
        id: 13,
        title: 'Pepsi',
        category: 'bebidas',
        price: 5,
        img: './img/pepsi.webp',
        desc: `Uma bebida gostosa para todas as idades e gosto.`
    },
    {
        id: 14,
        title: 'água mineral',
        category: 'bebidas',
        price: 3,
        img: './img/agua.webp',
        desc: `Uma bebida da natureza deliciosa e que vai matar sua sede.`
    },
    {
        id: 15,
        title: 'batata frita',
        category: 'porções',
        price: 15,
        img: './img/batata.jpg',
        desc: `Uma porção deliciosa de batata frita, perfeita para comer quando você algo diferente.`
    },
    {
        id: 16,
        title: 'frango frito',
        category: 'porções',
        price: 15,
        img: './img/frango.jpg',
        desc: `Um frango delicioso frito com azeite especial que vai lembrar a sua infancia.`
    },
    {
        id: 17,
        title: 'Tábua',
        category: 'porções',
        price: 35,
        img: './img/tabua.jpg',
        desc: `Uma porção generosa com pesticos váriados, é ideal para comer em família.`
    },
    {
        id: 18,
        title: 'musse',
        category: 'almoço',
        price: 2,
        img: './img/musse.jpg',
        desc: `Uma porção deliciosa de musse para comer depois do almoço.`
    },
    {
        id: 19,
        title: 'gelatina',
        category: 'almoço',
        price: 1,
        img: './img/gelatina.jpg',
        desc: `Uma porção gosotosa e saudável para comer depois da sua refeição.`
    },
    {
        id: 20,
        title: 'torta',
        category: 'almoço',
        price: 3,
        img: './img/torta.jpg',
        desc: `Uma porção deliciosa da nossa receita exclusiva de torta .`
    },
    
];

// Pegar elemento
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
});

function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        // console.log(item);

    return `<article class="menu-item">
        <img src=${item.img} alt=${item.title} class="photo" />
        <div class="item-info">
        <header>
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
        </header>
        <p class="item-text">
            ${item.desc}
        </p>
        </div>
        </article>`;
    });

    displayMenu = displayMenu.join("");
    // console.log(displayMenu);

    sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}


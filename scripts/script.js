function render() {
    load();
    renderPopular();
    renderPizza();
    renderCart();
    renderNumberButton();
}


function renderPopular() {
    let popularSection = document.getElementById('popularSection')

    popularSection.innerHTML = '';

    for (let i = 0; i < 3; i++) {
        let index = menuNameInCart.indexOf(menuName[i]);

        popularSection.innerHTML += getHTML('section', i);
    };
}


function renderPizza() {
    let pizzaSection = document.getElementById('pizzaSection');

    pizzaSection.innerHTML = /* html */ `                    
    <div class="dish-box pizza-banner">
    </div>
    <div class="pizza-title">
        <h2>Pizza</h2>
        <p>Alle Pizzen werden mit Tomatensauce, Käse und Oregano zubereitet.</p>
    </div>
    `;

    for (let i = 3; i < menuName.length - 3; i++) {

        pizzaSection.innerHTML += getHTML('section', i);
    };
}


function addToCart(i) {
    let name = menuName[i];
    let description = menuDescription[i];
    let price = menuPrice[i];

    let index = menuNameInCart.indexOf(name);

    if (index == -1) {
        menuNameInCart.push(name);
        menuDescriptionInCart.push(description);
        menuPriceInCart.push(price);
        menuAmountInCart.push(1);
    } else {
        menuAmountInCart[index]++;
        menuPriceInCart[index] += menuPrice[i];
    };
    save();
    renderCart();
    renderNumberButton();
}


function renderCart() {
    load();
    let emptyCart = document.getElementById('empty-cart');
    let cartBox = document.getElementById('cart-box');
    let mobileCart = document.getElementById('mobile-cart');

    if (menuNameInCart.length > 0) {
        cartBox.classList.remove('d-none')
        emptyCart.classList.add('d-none')
        mobileCart.classList.remove('d-none')
    } else {
        cartBox.classList.add('d-none')
        emptyCart.classList.remove('d-none')
        mobileCart.classList.add('d-none')
    };

    if (menuNameInCart.length > 0) {
        renderCartBox();
        renderMobileCart();
    };
    renderCartTotal();
}


function renderCartBox() {
    load();
    let cartBox = document.getElementById('cart-box');

    cartBox.innerHTML = '';

    for (let i = 0; i < menuNameInCart.length; i++) {
        cartBox.innerHTML += getHTML('cartBox', i);
    };
}


function renderCartTotal() {
    load();
    let finalTotal = document.getElementById('final-total');

    if (menuNameInCart.length > 0) {
        finalTotal.classList.add('final-total');
        finalTotal.innerHTML = getHTML('finalTotal')
    } else {
        finalTotal.innerHTML = '';
        finalTotal.classList.remove('final-total');
    }
}


function addOne(i) {
    let index = menuName.indexOf(menuNameInCart[i]);

    menuAmountInCart[i]++;
    menuPriceInCart[i] += menuPrice[index];

    save();
    renderNumberButton();
    renderCartTotal();
    renderCartBox();
}


function removeOne(i) {
    let index = menuName.indexOf(menuNameInCart[i]);

    if (menuAmountInCart[i] > 1) {
        menuAmountInCart[i]--;
        menuPriceInCart[i] -= menuPrice[index];
    } else {
        menuNameInCart.splice(i, 1);
        menuDescriptionInCart.splice(i, 1);
        menuPriceInCart.splice(i, 1);
        menuAmountInCart.splice(i, 1);
        removeNumberButton(index);
    };

    save();
    renderNumberButton();
    renderCartTotal();
    renderCartBox();

    if (menuNameInCart.length == 0) {
        renderCart();
    };
}


function removeNumberButton(i) {
    let numberButton = document.getElementById(`numberButtonDiv${i}`)

    document.getElementById(`plusButton${i}`).classList.remove('d-none');
    numberButton.classList.add('d-none');
    numberButton.innerHTML = /* html */ `
    <strong id="numberButton${i}" >0</strong>
    `;
}


function renderNumberButton() {
    load();

    for (let i = 0; i < menuName.length; i++) {
        let index = menuNameInCart.indexOf(menuName[i]);
        let numberButton = document.getElementById(`numberButtonDiv${i}`);

        if (index > -1) {
            document.getElementById(`plusButton${i}`).classList.add('d-none');
            numberButton.classList.remove('d-none');
            numberButton.innerHTML = /* html */ `
            <strong id="numberButton${i}" >${menuAmountInCart[index]}</strong>
            `;
        };
    }
}


function renderMobileCart() {
    let mobileCart = document.getElementById('mobile-cart');

    mobileCart.innerHTML = '';

    mobileCart.innerHTML = /* html */ `<button>
    <img src="./img/icons/einkaufskorb white.png" alt="Warenkorb">
    <strong>Warenkorb (${(subTotal() + 2).toFixed(2).replace('.', ',')} €)</strong>
    </button>
    `;
}


function toggleMobileCart() {
    document.getElementById('right-menu').classList.toggle('d-flex');
    document.getElementById('close-button').classList.toggle('d-none');
    document.body.classList.toggle('stop-scrolling');
}


function save() {
    let menuNameInCartAsText = JSON.stringify(menuNameInCart);
    localStorage.setItem('menuNameInCart', menuNameInCartAsText);

    let menuDescriptionInCartAsText = JSON.stringify(menuDescriptionInCart);
    localStorage.setItem('menuDescriptionInCart', menuDescriptionInCartAsText);

    let menuPriceInCartAsText = JSON.stringify(menuPriceInCart);
    localStorage.setItem('menuPriceInCart', menuPriceInCartAsText);

    let menuAmountInCartAsText = JSON.stringify(menuAmountInCart);
    localStorage.setItem('menuAmountInCart', menuAmountInCartAsText);
}


function load() {
    let menuNameInCartAsText = localStorage.getItem('menuNameInCart');
    let menuDescriptionInCartAsText = localStorage.getItem('menuDescriptionInCart');
    let menuPriceInCartAsText = localStorage.getItem('menuPriceInCart');
    let menuAmountInCartAsText = localStorage.getItem('menuAmountInCart');

    if (menuNameInCartAsText && menuDescriptionInCartAsText && menuPriceInCartAsText && menuAmountInCartAsText) {
        menuNameInCart = JSON.parse(menuNameInCartAsText);
        menuDescriptionInCart = JSON.parse(menuDescriptionInCartAsText);
        menuPriceInCart = JSON.parse(menuPriceInCartAsText);
        menuAmountInCart = JSON.parse(menuAmountInCartAsText);
    }
}
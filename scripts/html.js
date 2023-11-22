function getHTML(html, i) {
    
    if (html == 'section') {
        return /* html */ `                    
        <div class="dish-box">
            <div class="dish-information">
                <div>
                    <div class="dish-name">
                        <h2>${menuName[i]}</h2>
                        <img src="./img/icons/info.svg" alt="Information">
                    </div>
                </div>
                <div class="dish-description">
                    <p>${menuDescription[i]}</p>
                </div>
                <div class="dish-price">
                    <h3>${menuPrice[i].toFixed(2).replace('.', ',')} €</h3>
                </div>
            </div>
            <img id="plusButton${i}" onclick="addToCart(${i})" class="add-dish" src="./img/icons/plus.svg" alt="Hinzufügen">
            <div id="numberButtonDiv${i}" onclick="addToCart(${i})" class="add-dish d-none">

            </div>
        </div>
        `;
    } else if (html == 'cartBox') {
        return /* html */ `
        <div class="cart-item" id="item">
            <strong class="order-count">${menuAmountInCart[i]}</strong>
            <div class="cart-item-div">
                <div class="cart-item-description">
                    <div>
                        <strong>${menuNameInCart[i]}</strong>
                        <span>${menuPriceInCart[i].toFixed(2).replace('.', ',')} €</span>
                    </div>
                </div>
                <div class="additional-info">${menuDescriptionInCart[i]}</div>
                <div class="cart-item-buttons">
                    <span class="add-notes">Anmerkung hinzufügen</span>
                    <div >
                        <img onclick="removeOne(${i})" src="./img/icons/minus.png" alt="-">
                        <span>${menuAmountInCart[i]}</span>
                        <img onclick="addOne(${i})" src="./img/icons/plus.svg" alt="+">
                    </div>
                </div>
            </div>
        </div>
        `;
    } else if (html == 'finalTotal') {
        return /* html */ `                
        <div>
            <p>Zwischensumme</p>
            <p>${subTotal().toFixed(2).replace('.', ',')} €</p>
        </div>
        <div>
            <p>Lieferkosten</p>
            <p>2,00 €</p>
        </div>
        <div class="final-total-count">
            <strong><p>Gesamt</p></strong>
            <strong><p>${(subTotal() + 2).toFixed(2).replace('.', ',')} €</p></strong>
        </div>
        <button><strong>Bezahlen (${(subTotal() + 2).toFixed(2).replace('.', ',')} €)</strong></button>
        `;
    }
}
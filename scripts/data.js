let menuName = ['Cheeseburger', 'Chicken Wings (8 Stück)', 'Lamm Biryani', 'Pizza Margherita', 'Pizza Rucola', 'Pizza Spinaci',
    'Pizza Tonno', 'Pizza Western', 'Pizza Toscana', 'Pizza Feta', 'Pizza Quattro Formaggi', 'Pizza Con Carne', 'Pizza Roma',
    'Pizza Patate', 'Pizza Salmone', 'Pizza Spinzola', 'Pizza Pollo', 'Pizza Foresta di Funghi', 'Pizza Nizze', 'Pizza Vegetaria',
    'Pizza Frutti die Mare', 'Pizza Verdura'];

let menuDescription = ['mit 100g saftigem Rindfleischpatty, Käse, Hamburgersauce und Ketchup', 'mit Barbecue-Dip',
    'gegrilltes Lammfleisch mit würzigem Reis, Mandeln, Rosinen, Ingwer und Balkangemüse', 'Ø 32 cm',
    'Ø 32 cm mit Mozzarella und Rucola', 'Ø 32 cm mit frischem Blattspinat',
    'Ø 32 cm mit Thunfisch und Zwiebeln', 'Ø 32 cm mit Hähnchen, Jalapenos, Sauce Hollandaise und Spargel',
    'Ø 32 cm mit Auberginen, Rucola und frischen Tomaten',
    'Ø 32 cm mit Feta, gehackten Tomaten, Oliven, Peperoni, Olivenöl und Thymian',
    'Ø 32 cm mit Mozzarella, Gorgonzola, Gouda, Camembert und Preiselbeeren',
    'Ø 32 cm mit würzigem Hackfleisch und Zwiebeln',
    'Ø 32 cm mit Zucchini, Basilikum, Mozzarella und Salsiccia',
    'Ø 32 cm mit Hackfleisch, Rosmarinkartoffeln, Creme fraiche, Thymian und Lauch',
    'Ø 32 cm mit frischem Blattspinat, Lachs und Creme fraiche',
    'Ø 32 cm mit frischem Blattspinat, Gorgonzola und gerösteten Mandeln',
    'Ø 32 cm mit Hähnchenbrust, Ananas und Sauce nach Wahl',
    'Ø 32 cm mit Waldpilzen, Pinienkernen, Lauch, Zwiebeln und frischem Blattspinat',
    'Ø 32 cm mit Oliven, Olivenöl, Bruschetta, Tomaten, Mozzarella und Basilikum',
    'Ø 32 cm mit Broccoli, Zucchini, Paprika und Champignons',
    'Ø 32 cm mit Seelachs, Baby-Calamari, Mozzarella und Lauch',
    'Ø 32 cm mit Olivenöl, Käse, Zucchini,frische Tomaten, Auberginen und Paprika'];

let menuPrice = [6.99, 7.40, 15.50, 10.80, 12.45, 12.45, 12.99, 12.99, 12.45, 12.45, 12.65,
    12.45, 12.45, 12.45, 12.99, 12.45, 12.45, 12.45, 12.45, 12.45, 12.99, 12.45];

let menuNameInCart = [];
let menuDescriptionInCart = [];
let menuPriceInCart = [];
let menuAmountInCart = [];

function subTotal() {
    load();
    let subTotal = 0;

    for (let i = 0; i < menuPriceInCart.length; i++) {
        subTotal += menuPriceInCart[i];
    }
    return subTotal;
}

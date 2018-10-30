const products = [
    {
        name: 'Uncharted 4',
        price: 'Rp. 550.000',
        category: 'Action',
        transaction: 25,
        rating: 9
    }, {
        name: 'GTA 5',
        price: 'Rp. 750.000',
        category: 'RPG',
        transaction: 34,
        rating: 8
    }, {
        name: 'FIFA 2019',
        price: 'Rp. 850.000',
        category: 'Sport',
        transaction: 5,
        rating: 7
    }
];

// 1. Map
products.map((dataObj, id) => {
    if (id > 0) {
        console.log('======------------------------======');
    }

    console.log(dataObj.name);
    console.log(dataObj.price);
    console.log('Rating: '+ dataObj.rating);
    console.log('Category: '+ dataObj.category);
});
console.log('************************************************');
// 2. For-loop
for (let i = 0; i < products.length; i++) {
    if (i > 0) {
        console.log('======------------------------======');
    }

    console.log(products[i].name);
    console.log(products[i].price);
    console.log('Rating: '+ products[i].rating);
    console.log('Category: '+ products[i].category);
}
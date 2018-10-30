// lvl 1
const ratingProduct = '*';
// *
console.log('Lvl 1');
console.log(ratingProduct);
console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');

// lvl 2
ratingProductGame = 2;
// * *
console.log('Lvl 2');
let rate = '';

for (j = 1; j <= ratingProductGame; j++) {
    rate += '* '
}

console.log(rate);
console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');

// lvl 3
// *
// **
// ***

console.log('Lvl 3');

let star = 5;
for (let a = 0; a < star; a++) {
    let starRate = '';

    for (b = 0; b <= a; b++) {
        starRate += '* '
    }

    console.log(starRate);
}

console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');

// lvl 4
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

console.log('Lvl 3');

products.map((dataObj, id) => {
    if (id > 0) {
        console.log('======------------------------======');
    }

    let ratingStar = '';

    for (let i = 1; i <= dataObj.rating; i++) {
        ratingStar += '* ';
    }

    console.log(`Game: ${dataObj.name}, Transaction: ${dataObj.transaction}, Rating: ${ratingStar}`);
});
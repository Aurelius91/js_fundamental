const dataProducts = [
    {
        name: 'Red Dead Redemption 2',
        price: 850000,
        category: 'RPG',
        rating: '10',
        location: 'Jakarta',
    }, {
        name: 'Ghost of Tsushima',
        price: 745000,
        category: 'Action',
        rating: '9',
        location: 'Bandung',
    }, {
        name: 'Spiderman',
        price: 750000,
        category: 'Comedy',
        rating: '8',
        location: 'Tangerang',
    }, {
        name: 'Shadow of the Tomb Raider',
        price: 680000,
        category: 'Adventure',
        rating: '7',
        location: 'Batam',
    }
];

// Expected Result
// ====================================
// Game Name: Shadow of the Tomb Raider
// Price: Rp. 680000
// Category: Adventure
// Rating 7
// ongkos kirim: Rp. 15000

// rules:
// Jakarta: 10000
// Bandung: 15000
// Tangerang: 20000
// Batam: 35000

dataProducts.map((dataObj, id) => {
    let shipping = 0;
    let total = 0;

    if (id > 0) {
        console.log('====================================================');
    }

    console.log('Game Name: '+ dataObj.name);
    console.log('Price: IDR '+ dataObj.price);
    console.log('Category: '+ dataObj.category);
    console.log('Rating: '+ dataObj.rating);

    switch (dataObj.location) {
        case 'Jakarta':
            console.log('ongkos kirim: IDR 10000');
            shipping = 10000;
            break;
        case 'Bandung':
            console.log('ongkos kirim: IDR 15000');
            shipping = 15000;
            break;
        case 'Tangerang':
            console.log('ongkos kirim: IDR 20000');
            shipping = 20000;
            break;
        default:
            console.log('ongkos kirim: IDR 35000');
            shipping = 35000;
    }

    total = dataObj.price + shipping;
    console.log('Total: IDR '+ total);
});
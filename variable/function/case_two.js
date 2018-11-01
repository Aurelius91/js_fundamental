const dataProducts = [
    {
        name: 'Nabati Cocolate Wafer',
        price: 200000,
        category: 'Food',
        location: 'Bandung'
    }, {
        name: 'Adapter Macbook Pro',
        price: 850000,
        category: 'Electronics',
        location: 'Jakarta'
    }, {
        name: 'Batik Shirt',
        price: 399000,
        category: 'Fashion',
        location: 'Bandung'
    }, {
        name: 'Boardmarker Snowman',
        price: 25000,
        category: 'Office',
        location: 'Tangerang'
    },
];

// function hitung discount (food: discount 50%)
// function ongkir: (tangerang 15000, jakarta 10000, bandung 20000)
// function biaya admin (2000)
// total harga

const calculateDiscount = (productPrice, productCategory) => {
    return (productCategory == 'Food') ? productPrice * 0.5 : 0;
};

const calculateShipping = (productLocation) => {
    if (productLocation == 'Jakarta') {
        return 10000;
    }
    else if (productLocation == 'Bandung') {
        return 20000;
    }
    else if (productLocation == 'Tangerang') {
        return 15000;
    }
    else {
        return 0;
    }
};

const calculateAdminFee = () => 2000;

const calculateTotal = (dataProducts, discountFee, shippingFee, adminFee) => {
    return dataProducts - discountFee + shippingFee + adminFee;
};

let discount = 0;
let shipping = 0;
let admin = 0;
let total = 0;
let grandTotal = 0;

dataProducts.map((dataObj, id) => {
    discount = calculateDiscount(dataObj.price, dataObj.category);
    shipping = calculateShipping(dataObj.location);
    admin = calculateAdminFee();
    total = calculateTotal(dataObj.price, discount, shipping, admin);

    console.log(`Nama Product: ${dataObj.name}`);
    console.log(`Price: IDR ${total}`);
    console.log('======================================');

    grandTotal += total;
});

console.log(`Total harga yang harus dibayar: IDR ${total}`);
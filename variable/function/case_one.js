const product = {
    name: 'Sepatu Adidas Yeezy',
    price: 156000,
    category: 'Fashion',
    size: 42,
    color: 'black',
    location: 'Bandung'
}

// 20 % all product
const hitungDiskon = (hargaBarang, disc = 20) => {
    return hargaBarang * (disc / 100)
}

const hitungOngkir = (LokasiPenjual) => {
    if (LokasiPenjual === 'Bandung') {
        return 25000;
    }

    return 100000;
}

const hitungBiayaAdmin = () => 2500;

const hitungHargaTotal = (hargaBarang, discount, shippingFee, adminFee) => {
    return hargaBarang - discount + shippingFee + adminFee
}

const hasilPerhitunganDiscount = hitungDiskon(product.price);console.log(hasilPerhitunganDiscount);
const hasilPerhitunganOngkir = hitungOngkir(product.location);console.log(hasilPerhitunganOngkir);
const hasilPerhitunganAdmin = hitungBiayaAdmin();console.log(hasilPerhitunganAdmin);
const hasilTotal = hitungHargaTotal(product.price, hasilPerhitunganDiscount, hasilPerhitunganOngkir, hasilPerhitunganAdmin);
console.log(`Total yang harus dibayar adalah IDR ${hasilTotal}`);
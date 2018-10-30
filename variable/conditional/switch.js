let peopleName = 'DEF';
const age = '17';
const profile = {
    name: 'DEF',
    phone: 123456789
};


switch (peopleName) {
    case 'DEF':
        console.log('My name is DEF');
        break;
    case 'GHI':
        console.log('My name is GHI');
        break;
    case 'JKL':
        console.log('My name is JKL');
        break;
    default:
        console.log(`I Don't know who I Am`);
        break;
}




// QUIZ!!!!!!!!!!!
const rapor = {
    math: Math.floor((Math.random() * 100) + 1),
    english: Math.floor((Math.random() * 100) + 1),
    physics: Math.floor((Math.random() * 100) + 1),
    bahasa: Math.floor((Math.random() * 100) + 1),
    computer: Math.floor((Math.random() * 100) + 1),
    accounting: Math.floor((Math.random() * 100) + 1),
    chemistry: Math.floor((Math.random() * 100) + 1),
    PE: Math.floor((Math.random() * 100) + 1),
    history: Math.floor((Math.random() * 100) + 1),
}

let hasilAkhir = 0;
let count = 0;

for (var key in rapor) {
    if (rapor.hasOwnProperty(key)) {
        hasilAkhir += rapor[key];
        count += 1;

        console.log(key + ': ' + rapor[key]);
    }
}

hasilAkhir = hasilAkhir / count;
console.log('Nilai Kamu:' + Math.round(hasilAkhir));

if (hasilAkhir >= 95) {
    console.log('Selamat! You are the greatest');
} else if(hasilAkhir >= 80  && hasilAkhir < 95) {
    console.log('Congratulations! Kamu Hebat');
} else if(hasilAkhir >= 60  && hasilAkhir < 80) {
    console.log('COBA LAGI!');
} else if(hasilAkhir >= 40  && hasilAkhir < 60) {
    console.log('KURANGI MAIN GAME!');
} else {
    console.log('Tolong Panggil orang tuamu!');
}

switch (true) {
    case (hasilAkhir >= 95):
        console.log('Selamat! You are the greatest');
        break;
    case (hasilAkhir >= 80  && hasilAkhir < 95):
        console.log('Congratulations! Kamu Hebat');
        break;
    case (hasilAkhir >= 60  && hasilAkhir < 80):
        console.log('COBA LAGI!');
        break;
    case (hasilAkhir >= 40  && hasilAkhir < 60):
        console.log('KURANGI MAIN GAME!');
        break;
    default:
        console.log('Tolong Panggil orang tuamu!');
};

const pro = {
    name: 'DEF',
    phone: '081288477077',
}

switch (true) {
    case (pro.phone.substring(0, 4) == '0812'):
        console.log('Operator yang anda gunakan adalah TELKOMSEL');
        break;
    case (pro.phone.substring(0, 4) == '0813'):
        console.log('Operator yang anda gunakan adalah KARTU HALO');
        break;
    case (pro.phone.substring(0, 4) == '0857'):
        console.log('Operator yang anda gunakan adalah INDOSAT');
        break;
    default:
        console.log('ANDA MENGGUNAKAN OPERATOR YANG TIDAK JELAS');
}
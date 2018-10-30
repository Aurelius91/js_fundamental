let peopleName = 'ABC';
const age = '17';
const profile = {
    name: 'DEF',
    phone: 123456789
};

// <, <=, >, >=, !==, ==, ==
// &&, ||

if (age === 17) {

} else if (age >= 17 && age < 25 && age < 30) {

} else if (age === 35 || age === '35') {

} else {

}


// QUIZ
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
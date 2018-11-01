const angkaSatu = 8;
const angkaDua = 5;

// standard
function PenjumlahanAngka(dataSatu, dataDua) {
    const result = dataSatu + dataDua;
    console.log(result);
}

PenjumlahanAngka(angkaSatu, angkaDua);

// ES6
// const penjumlahanAngkaLagi = (data_satu, data_dua) => data_satu + data_dua;
// console.log(penjumlahanAngkaLagi(10, 5));

const penjumlahanAngkaLagi = (data_satu, data_dua) => data_satu + data_dua;
const penguranganAngkaLagi = (data_satu, data_dua) => data_satu - data_dua;
const perkalianAngkaLagi = (data_satu, data_dua) => data_satu * data_dua;
const pembagianAngkaLagi = (data_satu, data_dua) => data_satu / data_dua;
const total = (satu, dua, tiga, empat) => satu + dua + tiga + empat;
console.log(total(penjumlahanAngkaLagi(1, 3), penguranganAngkaLagi(8,3), perkalianAngkaLagi(2, 3), pembagianAngkaLagi(9, 3)));
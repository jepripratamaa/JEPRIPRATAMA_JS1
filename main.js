// If, Else, Nested If:
console.log("Contoh If Else");
let Umur = 20;

if (Umur >= 17) {
    console.log("Anda Sudah Bisa Buat KTP");
} else {
    console.log("Usia Anda Belum Cukup Untuk Buat KTP");
}
console.log("----------------------------------");

console.log("Contoh Nested If");
let nu = 91;

if (nu >= 90) {
    console.log("Nilai anda A");
} else if (nu >= 80) {
    console.log("Nilai Anda B");
} else if (nu >= 70) {
    console.log("Nilai Anda C");
} else {
    console.log("Nilai Anda D");
}
console.log("----------------------------------");

// Switch Case:
console.log("Contoh Switch Case");
let jadwal = "Rabu";

switch (jadwal) {
    case "Senin":
        console.log("Hari ini jadwal Renang");
        break;
    case "Selasa":
        console.log("Hari ini Jadwal Lari");
        break;
    case "Rabu":
        console.log("Hari ini Jadwal Futsal");
        break;
    default:
        console.log("Hari ini Tidak ada Jadwal");
}
console.log("----------------------------------");

// For Statement:
console.log("Contoh For Statement");
for (let i = 1; i <= 10; i++) {
    console.log("Perulangan ke-" + i);
}
console.log("----------------------------------");

// While dan Do While:
console.log("Contoh While dan Do While");
let hasil = 1;

while (hasil <= 10) {
    console.log("Hasil: " + hasil);
    hasil++;
}

let hasil2 = 1;

do {
    console.log("Hasil 2: " + hasil2);
    hasil2++;
} while (hasil2 <= 10);
console.log("----------------------------------");

// Function:
function tambahkan(a, b) {
    return a + b;
}
let jumlah = tambahkan(25, 30);
console.log("Total Penjumlahan: " + jumlah);
console.log("Terima Kasih");
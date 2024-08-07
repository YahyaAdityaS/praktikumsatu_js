// Mendefinisikan nilai suku pertama, rasio, dan jumlah suku
const sukuPertama = 4;
const rasio = 3;
const jumlahSuku = 10;

function hitungJumlahDeretGeometri(sukuPertama, rasio, jumlahSuku) {
    let jumlah = 0;
    let suku = sukuPertama;

    for (let i = 0; i < jumlahSuku; i++) {
        jumlah += suku;
        suku *= rasio; // Menghitung suku berikutnya
    }

    return jumlah;
}

// Menghitung jumlah 10 suku pertama
const hasil = hitungJumlahDeretGeometri(sukuPertama, rasio, jumlahSuku);

// Menampilkan hasil
console.log("Jumlah 10 suku pertama dari deret geometri adalah:", hasil);
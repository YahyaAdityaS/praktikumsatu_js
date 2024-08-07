// Nilai berat badan dalam kilogram
var berat = 90; // Contoh: 70 kg

// Nilai tinggi badan dalam meter
var tinggi = 1.70; // Contoh: 1.75 m

// Menghitung BMI
var bmi = berat / (tinggi * tinggi);

// Menentukan kategori BMI
var kategori;
if (bmi < 18.5) {
    kategori = "Kekurangan Berat Badan";
} else if (bmi >= 18.5 && bmi < 24.9) {
    kategori = "Normal (Ideal)";
} else if (bmi >= 25 && bmi < 29.9) {
    kategori = "Kelebihan berat badan";
} else {
    kategori = "Kegemukan (Obesitas)";
}

// Menampilkan hasil di konsol
console.log("BMI Anda: " + bmi.toFixed(2) + " (" + kategori + ")");
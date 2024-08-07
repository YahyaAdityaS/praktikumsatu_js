    // Ukuran tanah dalam meter persegi
    const panjang = 20.5;
    const lebar = 30;
    const luas = panjang * lebar;

    // Harga per meter persegi
    const hargaPerMeter = 1500000;

    // Menghitung total harga sebelum PPN
    const hargaTanah = luas * hargaPerMeter;

    // PPN 15%
    const ppn = 0.15;

    // Menghitung total PPN
    const totalPPN = hargaTanah * ppn;

    // Menghitung total pembayaran
    const totalPembayaran = hargaTanah + totalPPN;

    // Menampilkan hasil di konsol
    console.log("Luas Tanah: " + luas + " m²");
    console.log("Harga Tanah (sebelum PPN): Rp " + hargaTanah.toLocaleString('id-ID'));
    console.log("Total PPN: Rp " + totalPPN.toLocaleString('id-ID'));
    console.log("Total yang harus dibayarkan: Rp " + totalPembayaran.toLocaleString('id-ID'));
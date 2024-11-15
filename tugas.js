// TUGAS KECIL

/*
1. prompt untuk mengetahui saldo akhir dari apa yang diinputkan oleh user 
2. menentukan hari dari tanggal yang ada saat ini di pc kalian
**/
let  saldo = 5000;
let saldoAwal = Number(prompt(`saldo anda sekarang Rp.${saldo} berapa yg akan anda tambahkan?`))
const saldoAkhir = saldo + saldoAwal;
alert(`sekarang saldo anda Rp.${saldoAkhir}`)


const namaHari = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu']
const hari = new Date().getDay()
let hariIni = namaHari[hari]

console.log(`hari ini adalah hari ${hariIni}`);
/**
    1. munculkan sebuah element HTML baru dengan isi berupa text nama kalian, tetapi tidak di clik melainkan saat mouse masuk kedalam  tombol maka muncullah element baru nya, setelah mouse keluar ubahlah warna nama kalian
 */

const windoww = document.body;
const btn2 = document.querySelector('#btn2');

const yoyo = 'klik Saya 2';
btn2.textContent = yoyo;

btn2.style.border = 'none';
btn2.style.padding = '8px';
btn2.style.fontSize = '24px';
btn2.style.background = 'tomato';
btn2.style.margin = '0 10px 0 0';

const buatNama = document.createElement('p');
const warnaText = 'Aldirisky Pratama'

function jadiNama() {
  buatNama.textContent = warnaText;
  windoww.append(buatNama);
}

function ubahWarna() {
  buatNama.style.color = 'red'
}

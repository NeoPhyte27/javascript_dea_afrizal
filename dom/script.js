// console.log(document.title)

// document.title = 'rindu indah villa sari'

// console.log(document.title)

// console.log(document.body)
// const body = document.body

// const h1 = document.createElement('h1')
// h1.textContent = '<marquee>ini element H1</marquee>'

// const namaSaya = document.createElement('p')
// namaSaya.innerHTML = "<marquee>Aldirisky Pratama</marquee>"

// const namaKamu = document.createElement('b')
// namaKamu.innerText = "<marquee>Rindu Indah VIlla Sari</marquee>"

// body.append(h1)
// body.append(namaSaya)
// body.append(namaKamu)

const body = document.body
const btn1 = document.querySelector('#btn1')

const defaultText = "klik Saya 1" 
btn1.textContent = defaultText

btn1.style.border = 'none';
btn1.style.padding = '8px';
btn1.style.fontSize = '24px'
btn1.style.background = 'tomato'
btn1.style.margin = '0 10px 0 0'


function clickButton(){
    btn1.style.background = 'aqua'
    const newText = document.createElement('p')
    newText.textContent = 'hallo bung apa kabar'
    body.append(newText)
}

function ubahText(){
    btn1.textContent = 'kontol kau'
    // btn1.style.background = 'aqua'
}

function oriText(){
    btn1.textContent = defaultText
    btn1.style.background = 'tomato'
}
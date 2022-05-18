const url= "https://api-free.deepl.com/v2/translate?text="
let trans=document.querySelector("#translate").value;
console.log(trans)
let targetlang= "&target_lang=DE"
const apikey = "&auth_key=4f6d6403-143d-e150-222e-09a0726591bc:fx"
const btn = document.querySelector("#btn")
const de = document.querySelector("#de")
const en = document.querySelector("#en")
const da = document.querySelector("#da")
const es = document.querySelector("#es")
const fr = document.querySelector("#fr")
const zh = document.querySelector("#zh")
const ziel = document.querySelector(".dropbtn")
const del = document.querySelector("#del")

de.addEventListener('click',() =>{
    targetlang="&target_lang=DE";
    ziel.innerHTML="Deutsch"
})
en.addEventListener('click',() =>{
    targetlang="&target_lang=EN";
    ziel.innerHTML="Englisch"
})
da.addEventListener('click',() =>{
    targetlang="&target_lang=DA";
    ziel.innerHTML="Dänisch";
})
es.addEventListener('click',() =>{
    targetlang="&target_lang=ES";
    ziel.innerHTML="Spanisch";
})
fr.addEventListener('click',() =>{
    targetlang="&target_lang=FR";
    ziel.innerHTML="Französisch";
})
zh.addEventListener('click',() =>{
    targetlang="&target_lang=ZH";
    ziel.innerHTML="Chinesisch";
})

del.addEventListener('click', () => {
    document.querySelector("#translate").value =""
    document.querySelector("#translated").value =""
} )
console.log(targetlang)
let translated = document.querySelector('#translated')
btn.addEventListener('click',async function getTranslation() {
    let trans=document.getElementById("translate").value;
    const fullurl=url + trans + targetlang + apikey;
    let response = await fetch(fullurl);
    let data = await response.json()
   
translated.value=(data.translations[0].text)
console.log(data)
})






//document.querySelector("#translate").value//


console.log("ik ben er!");

const pElement = document.querySelector('p')


const stap1 = document.querySelector('#stap1')
const stap2 = document.querySelector('#stap2')
const stap3 = document.querySelector('#stap3')
const stap4 = document.querySelector('#stap4')
const img = document.querySelector("#afbeelding")


let counter = 0
let audio = new Audio("audio/timer.mp3")

function eersteStap() {
    if (counter == 0) {
        img.src = "img/mengsel.png"
        pElement.textContent = "Alles is gemixt! Tijd om te kneden."
        counter = 1
        stap1.classList.toggle("actief") // bron: w3schools
        stap1.disabled = true; // bron: w3schools
        //stap1 wordt selected
    }
}


function tweedeStap() {
    if(counter == 1){
        img.src ="img/bakvorm.png"
        pElement.textContent = "Dat ziet er goed uit! Bak de koekjes af in de oven."
        counter = 2
        stap2.classList.toggle("actief")
        stap2.disabled = true; 
        //stap2 wordt selected
    } else {
        pElement.textContent = "Vergeet stap 1 niet!"
    }
}


let afbeeldingen = ["img/koek1.png", "img/koek2.png", "img/koek3.png"]
let index = 0

function derdeStap(){
    if(counter == 2){
        audio.play()
            function veranderAfbeelding() {
                if (index < afbeeldingen.length) { //bron: behulp van chatGPT
                    img.src = afbeeldingen[index]
                    index = index + 1
                    setTimeout(veranderAfbeelding, 1700) //bron: scrimba
                    //stap3 wordt selected
                } else {
                    pElement.textContent = "De perfecte kleur! Versier het koekje voor de finishing touch."
                    stap3.classList.toggle("actief")
                    stap3.disabled = true; 
                    counter = 3
            }
        }
        veranderAfbeelding(); 
    } else {
        pElement.textContent = "Vergeet stap 2 niet!"
    }
}


function vierdeStap(){
    if(counter == 3){
        img.src ="img/versiert.png"
        pElement.textContent = "Wauw wat lekker! Eetsmakelijk."
        counter = 4
        stap4.classList.toggle("actief") 
        stap4.disabled = true; 
        //stap4 wordt selected
    }else {
        pElement.textContent = "Vergeet stap 3 niet!"
    }
}


stap1.addEventListener("click", eersteStap)
stap2.addEventListener("click", tweedeStap)
stap3.addEventListener("click", derdeStap)
stap4.addEventListener("click", vierdeStap)


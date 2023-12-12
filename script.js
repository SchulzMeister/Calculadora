let boton = document.getElementById("calcular")
let dia = document.getElementById("dia")
let flu = document.getElementById("flu")
let man = document.getElementById("man")
let input = document.getElementById('peso')
let error = document.getElementById("error") 

boton.addEventListener('click', calcular)

//imput.addEventListener("keyup")

function calcular(){
    let peso = document.getElementById("peso").valueAsNumber
    let resultado

    if(peso<=0) {
        console.log(peso)
        error.style.display = "block";
        error.innerHTML = "El peso debe ser mayor a 0";
        dia.style.display = "none";
        flu.style.display = "none";
        man.style.display = "none";
     }

    else if(peso<=30){
        resultado = holliday()
        dia.style.display = "block"
        dia.innerHTML = resultado + " cc"
        flu.style.display = "block"
        flu.innerHTML = (resultado / 24).toFixed(0)+ " cc/hr"
        man.style.display = "block"
        man.innerHTML = ((resultado/24)*1.5).toFixed(0) + " m+m/2"
        error.style.display = "none"
    }
    
    else {
        resultado = superficie()
        dia.style.display = "block"
        dia.innerHTML = (resultado * 1500).toFixed(0) + " cc (x1500)"
        flu.style.display = "block"
        flu.innerHTML = (resultado * 2000).toFixed(0) + " cc (x2000)"
        error.style.display = "none"
        man.style.display = "none";
    }   
   

function holliday(){
    if (peso <= 10){
        let volumenDiarioCC = peso*100
            console.log(volumenDiarioCC)
            return volumenDiarioCC
    }
    else if(peso >10 && peso<=20){
        let volumenDiarioCC2=((10*100)+((peso-10)*50))
            console.log(volumenDiarioCC2)
            return volumenDiarioCC2
    }
    else if (peso>20 && peso<=30){
        let volumenDiarioCC3 
        volumenDiarioCC3= (10*100)+(10*50)+((peso-20)*20);
        console.log(volumenDiarioCC3)
        return volumenDiarioCC3
    }
}

function superficie(){
    if (peso > 30){
        let volumenDiarioCC4 =( (peso * 4) + 7) / (peso + 90)
            console.log(volumenDiarioCC4)
            return volumenDiarioCC4

    }

    
}

}


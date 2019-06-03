// ADDITION//////////
let $divFirstAddition = $(".addition .first")[0]
let $divSecondAddition = $(".addition .second")[0]
let $resultAddition = $(".addition .result")[0]

let $results = $('.button')

let firstAddition = undefined
let secondAddition = undefined

// SOUSTRACTION//////////
let $divFirstSoustraction = $(".soustraction .first")[0]
let $divSecondSoustraction = $(".soustraction .second")[0]
let $resultSoustraction = $(".soustraction .result")[0]

let firstSoustraction = undefined
let secondSoustraction = undefined

// DIVISION/////////
let $divFirstDivision = $(".division .first")[0]
let $divSecondDivision = $(".division .second")[0]
let $resultDivision = $(".division .result")[0]

let firstDivision = undefined
let secondDivision = undefined

// MULTIPLICATION////////
let $divFirstMultiplication = $(".multiplication .first")[0]
let $divSecondMultiplication = $(".multiplication .second")[0]
let $resultMultiplication = $(".multiplication .result")[0]

let firstMultiplication = undefined
let secondMultiplication = undefined




let calcul = function(a, b, operateur){
    if(operateur === "+"){
        result = a + b
    }    
    if(operateur === "-"){
        result = a - b
    }    
    if(operateur === "/"){
        if( a === 0 || b === 0 ){
            result = "Infinity"
        }
        result = a / b
    }    
    if(operateur === "*"){
        result = a * b
    } 

    return result
}    

// retourne le resulta
let interval = setInterval(function(){

    firstAddition = Number.parseInt($divFirstAddition.value)
    secondAddition = Number.parseInt($divSecondAddition.value)

    firstSoustraction = Number.parseInt($divFirstSoustraction.value)
    secondSoustraction = Number.parseInt($divSecondSoustraction.value)
    

     if(isNaN(firstAddition) === true){

        firstAddition = 0 
     }   
     if(isNaN(secondAddition) === true){

        secondAddition = 0 
     }
     if(isNaN(firstSoustraction) === true){

        firstSoustraction = 0 
     }   
     if(isNaN(secondSoustraction) === true){

        secondSoustraction = 0 
     }  
    






    $results.click(function(){
    
        $resultAddition.value = calcul(firstAddition, secondAddition, "+")
        $resultSoustraction.value = calcul(firstSoustraction, secondSoustraction, "-")
    })    

}, 1000/24)    

debugger
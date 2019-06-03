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
        result = a / b
    }    
    if(operateur === "*"){
        result = a * b
    }    
    return result
}    

let interval = setInterval(function(){

     first = Number.parseInt($divFirstAddition.value)
     second = Number.parseInt($divSecondAddition.value)

     if(isNaN(first) === true){

        first = 0 
     }   
     if(isNaN(second) === true){

        second = 0 
     }   
    
    $results.click(function(){
    
        $resultAddition.value = calcul(firstAddition, secondAddition, "+")
    })    

}, 1000/24)    



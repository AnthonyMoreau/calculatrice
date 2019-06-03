let $divFirstAddition = $(".addition .first")[0]
let $divSecondAddition = $(".addition .second")[0]
let $resultAddition = $(".addition .result")[0]
let $results = $('.button')

let first = undefined
let second = undefined

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
    
        $resultAddition.value = calcul(first, second, "+")
    })

}, 1000/24)


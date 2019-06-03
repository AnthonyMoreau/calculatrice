$(document).ready(function(){

// ADDITION----------

let $divFirstAddition = $(".addition .first")[0]
let $divSecondAddition = $(".addition .second")[0]
let $resultAddition = $(".addition .result")[0]



let first = Number.parseInt($divFirstAddition.value)
let second = Number.parseInt($divSecondAddition.value)


let p = setInterval(function(){

    
    if(first === ""){
        first = "0"
    }
    if(second === ""){
        second = "0"
    }
    
    first = Number.parseInt($divFirstAddition.value)
    second = Number.parseInt($divSecondAddition.value)
    
    $resultAddition.value = first + second

},1000/30)

})
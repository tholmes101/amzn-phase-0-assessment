// 1. Write your functions here
const katzDeli = []

function line (array) {
    if (array.length > 0) {
       let counter = 0
       let messageArray = []
       for (let element in array) {
         counter++
         messageArray.push(counter + "." + array[element])
        } 
    console.log("The line is currently: " + messageArray)
    } else {
        console.log('The line is currently empty.')
        }       
}

function takeANumber(array,string) {
    let counter = 0
    array.push(string)
    for (i = 0; i < array.length; i++)
        if (array.length) {
            counter = array.length
        }
        console.log (`Welcome ${string}. You are number ${counter} in line.`)
}

function nowServing(array) {
    if (array.length > 0) {
        console.log ("Currently serving " + array[0] + ".")
        array.shift();
    } else {
        console.log ("There is nobody waiting to be served!")
    }
}

takeANumber(katzDeli, "Ada")    //=> Welcome, Ada. You are number 1 in line.
takeANumber(katzDeli, "Grace")  //=> Welcome, Grace. You are number 2 in line.
takeANumber(katzDeli, "Kent")   //=> Welcome, Kent. You are number 3 in line.

line(katzDeli)                  //=> "The line is currently: 1. Ada 2. Grace 3. Kent"

nowServing(katzDeli)            //=> "Currently serving Ada."

line(katzDeli)                  //=> "The line is currently: 1. Grace 2. Kent"

takeANumber(katzDeli, "Matz")   //=> Welcome, Matz. You are number 3 in line.

line(katzDeli)                  //=> "The line is currently: 1. Grace 2. Kent 3. Matz"

nowServing(katzDeli)            //=> "Currently serving Grace."

line(katzDeli)                  //=> "The line is currently: 1. Kent 2. Matz"
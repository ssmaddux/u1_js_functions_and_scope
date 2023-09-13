function sayHello () {
    //console.log(`Hello world`)
}

//sayHello()
let name = 'Sage'
let dayOfWeek = "Wednesday"

function helloName () {
    //console.log(`Hello ${name} today is ${dayOfWeek}`)
}

//helloName()

function showPrices(item, descriptor,color,price) {
    //console.log(`a ${descriptor} ${color} ${item} costs ${price}`)
}

//showPrices(`guitar`, `electric`, `Black`, `500` )

const sayYellow = () => {console.log(`YELLOW!!`)}
//sayYellow()

//scope can only pass between parent to chiild
//not child to parent
// not from sibling to sibling

// global scop -> Parent
const name = "jeremy"
console.log('line 30 ', name)

//local scop is defined by {}'s -> child
{
    const name = "not jeremey"
    console.log('line 35', name)
    const colorOfShirt = 'blue'
}

console.log('line 39' , colorOfShirt)
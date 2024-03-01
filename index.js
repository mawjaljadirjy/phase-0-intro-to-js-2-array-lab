// Write your solution here!

const  cats= ["Milo", "Otis", "Garfield"]

const destructivelyAppendCat=(name)=>{
    cats.push(name)

}


const destructivelyPrependCat=(name)=>{
    cats.unshift(name)

}

destructivelyRemoveLastCat=()=>{
    cats.pop()
}

destructivelyRemoveFirstCat=()=>{
    cats.shift()
}

const appendCat = (catName) => {
    const newArray = [...cats]; 
    newArray.push(catName);
    return newArray;
}

const prependCat = (catName) => {
    const newArray = [...cats]; 
    newArray.unshift(catName);
    return newArray;
}

const removeLastCat = (catName) => {
    const newArray = [...cats]; 
    newArray.pop(catName);
    return newArray;
}

const removeFirstCat = (catName) => {
    const newArray = [...cats]; 
    newArray.shift(catName);
    return newArray;
}
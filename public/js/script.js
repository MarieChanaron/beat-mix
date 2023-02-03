// Make empty array
const setEmptyArray = () => {
    const array = new Array(16);
    array.fill(false);
    return array;
}

// Define drums Arrays
let kicks = setEmptyArray();
let snares = setEmptyArray();
let hiHats = setEmptyArray();
let rideCymbals = setEmptyArray();

// Return array name
const getArrayName = name => {
    switch(name) {
        case 'kicks':
            return kicks;
        case 'snares':
            return snares;
        case 'hiHats':
            return hiHats;
        case 'rideCymbals':
            return rideCymbals;
        default: 
            return [];
    }
}

const toggleDrum = (arrayName, indexNumber) => {
    const range = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    if (!range.includes(Number(indexNumber))) {
        return;
    }
    const array = getArrayName(arrayName);
    array[indexNumber] = !array[indexNumber];
}

const clear = (arrayName) => {
    const array = getArrayName(arrayName);
    if (array) {
        array.fill(false);
    }
}

const invertValues = array => {
    for (let i=0; i<array.length; i++) {
        array[i] = !array[i];
    }
}

const invert = (arrayName) => {
    const array = getArrayName(arrayName);
    if (array) {
        invertValues(array);
    }
}

const getNeighborPads = (x, y, size) => {
    if (x >= size || y >= size || x < 0 || y < 0 || size < 1) {
        return [];
    }
    const left = x > 0 ? [x-1, y] : null;
    const bottom = y > 0 ? [x, y-1] : null;
    const right = x < size-1 ? [x+1, y] : null;
    const top = y < size-1 ? [x, y+1] : null;
    const array = [left, bottom, right, top];
    return array.filter(item => item !== null);
}
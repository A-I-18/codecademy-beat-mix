// Drum Arrays
let kicks = Array.from({ length: 16 }, () => false);
let snares = Array.from({ length: 16 }, () => false);
let hiHats = Array.from({ length: 16 }, () => false);
let rideCymbals = Array.from({ length: 16 }, () => false);

function toggleDrum(arrayName, index) {
    if (index < 0 || index > 15) { // invalid array index
        return;
    }

    switch (arrayName) {
        case 'kicks':
            kicks[index] = !kicks[index];
            break;
        case 'snares':
            snares[index] = !snares[index];
            break;
        case 'hiHats':
            hiHats[index] = !hiHats[index];
            break;
        case 'rideCymbals':
            rideCymbals[index] = !rideCymbals[index];
            break;
    }
}

function clear(arrayName) {
    let toBeCleared;

    switch (arrayName) {
        case 'kicks':
            toBeCleared = kicks;
            break;
        case 'snares':
            toBeCleared = snares;
            break;
        case 'hiHats':
            toBeCleared = hiHats;
            break;
        case 'rideCymbals':
            toBeCleared = rideCymbals;
            break;
    }

    if (toBeCleared) {
        toBeCleared.forEach((element, index, array) => array[index] = false);
    }
}

function invert(arrayName) {
    let toBeInverted;

    switch (arrayName) {
        case 'kicks':
            toBeInverted = kicks;
            break;
        case 'snares':
            toBeInverted = snares;
            break;
        case 'hiHats':
            toBeInverted = hiHats;
            break;
        case 'rideCymbals':
            toBeInverted = rideCymbals;
            break;
    }

    if (toBeInverted) {
        toBeInverted.forEach((element, index, array) => array[index] = !element);
    }
}

function isOutsideSquareGrid(x, y, size) {
    return x < 0 || x >= size || y < 0 || y >= size;
}

function getNeighborPads(x, y, size) {
    let neighborPads = [];

    if (isOutsideSquareGrid(x, y, size)) {
        return neighborPads;
    }
    
    neighborPads.push([x - 1, y]); //left
    neighborPads.push([x + 1, y]); //right
    neighborPads.push([x, y + 1]); //above
    neighborPads.push([x, y - 1]); //below

    // Remove invalid neighbor pads
    neighborPads = neighborPads.filter(([x, y]) => !isOutsideSquareGrid(x, y, size));

    return neighborPads;
}

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

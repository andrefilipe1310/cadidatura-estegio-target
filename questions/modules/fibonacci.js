export const isFibonacci = (num) => {
    if (num === 0 || num === 1) return true;
    let inicialNumber = 0;
    let secoundNumber = 1;
    let fibonacci = inicialNumber + secoundNumber;

    while (fibonacci <= num) {
        if (fibonacci === num) {
            return true;
        }
        inicialNumber = secoundNumber;
        secoundNumber = fibonacci;
        fibonacci = inicialNumber + secoundNumber;
    }
    return false;
};

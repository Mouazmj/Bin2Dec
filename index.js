const binaryString = document.getElementById('input')

const validating = () => {
const value = binaryString.value
if (value.length < 9) {
    alert('Va vänlig och skriv minst 9 siffror 😀');
        throw new TypeError('För få siffror.');
}
for (let i = 0; i < value.length; i++) {
    if (value[i] !== '0' && value[i] !== '1') {
        alert('Endast 0 och 1 är tillåtna!');
        throw new TypeError('Felaktiga siffror i binär sträng.');
    }
}
}


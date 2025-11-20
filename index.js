const binaryString = document.getElementById('input')

const validating = () => {
const value = binaryString.value
if (value.length > 8) {
    alert('Please enter a maximum of 8 digits 😀');
        throw new TypeError('Too many digits.');
}
for (let i = 0; i < value.length; i++) {
    if (value[i] !== '0' && value[i] !== '1') {
        alert('Only 0 and 1 are allowed!')
        throw new TypeError('Invalid characters in binary string.');
    }
}


    let decimalResult = 0;
    let valueAmount = 1;
    for (let i = value.length - 1; i >= 0; i--) {
        let char = value.charAt(i);
        if (char === '1') {
            decimalResult += valueAmount;
        }    
        valueAmount *= 2;    
    }    
}



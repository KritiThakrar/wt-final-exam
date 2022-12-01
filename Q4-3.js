const reverseInt = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);
console.log(reverseInt(321));
console.log(reverseInt(-321));
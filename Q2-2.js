function inAssOrder(arr){
    let second_index;
	for(let first_index = 0; first_index < arr.length; first_index++){
  	  second_index = first_index + 1;
      if(arr[second_index] - arr[first_index] < 0) return false;
    }
    return true;
}

console.log(inAssOrder([1, 2, 4, 7, 19]));
console.log(inAssOrder([1, 2, 3, 4, 5]));
console.log(inAssOrder([1, 6, 10, 18, 2, 4, 20]));
console.log(inAssOrder([9, 8, 7, 6, 5, 4, 3, 2, 1]));
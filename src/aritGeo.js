
//whole script strict mode syntax
'use strict';

/*the codes below determiines if an array entered is
an arithmetic progressiion of geometric progression
or if it is none of the two progressions*/

module.exports = function aritGeo(array) {

//checks if the entered value is an array, if it is not, it throws error
	if (Array.isArray(array) === false) {
		let error = "Invalid Input";
		return error;
	}
//checks if the array is an empty array
	if (array.length === 0) {
		return 0;
	}

//using the common difference and common ratio to determine
//and iterating over the array comparing the diffe


	let commDiff = array[1] - array[0];
	let commRatio = array[1] / array[0];

	let arithmetic = true;
	let geometric = true;

	for(let i = 0; i < array.length - 1; i++) {
    if( array[i + 1] - array[i] !== commDiff ) {
      arithmetic = false;
    }

    if(array[i + 1] / commRatio !== array[i]) {
      geometric = false;
    }
	}

	if(arithmetic === true) {
    return "Arithmetic";
  }
	else if(geometric === true) {
    return "Geometric";
  }
	else {
    return -1;
	}
}
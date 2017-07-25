/**
 * Sorts an array of objects based on the date value of a field
 * @export
 * @private
 * @param {Object[]} arry The array to sort.
 * @param {String} field The name of the property on which to sort.
 * @returns {Object} Returns an object with "min" and "max" properties.
 */
 var minMax = function minMax(arry, field, isDate = false) {
 	function arrayMin(arr) {
 		return arr.reduce(function(p, v) {
 			if ( typeof[v] === "undefined") { return p; 
 			}else {

 				if ( isDate) {
 					return (p[field].getTime() < v[field].getTime() ? p : v);
 				} else {
 					return (p[field] < v[field] ? p : v);
 				}
 			}
 		});
 	}

 	function arrayMax(arr) {
 		return arr.reduce(function(p, v) {
 			if ( typeof[v] === "undefined") { return p; 
 			} else {
 				if ( isDate) {
 					return (p[field].getTime() > v[field].getTime() ? p : v);
 				} else {
 					return ( p[field] > v[field] ? p : v);
 				}
 			}
 		});
 	}


 	return ({
 		"min": arrayMin(arry),
 		"max": arrayMax(arry)
 	});
 	
 }


 module.exports = minMax;

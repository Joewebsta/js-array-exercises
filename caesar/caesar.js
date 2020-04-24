const caesar = function(str, shift) {
    let splitArr = str.split('');

    let shiftArr = splitArr.map((letter) => {
        let asciiCode = letter.charCodeAt(0);

        if (shift > 25) {
            shift = shift % 26;
        }

        if ( asciiCode >= 65 && asciiCode <= 90 ) {
            return getShiftLetter(asciiCode, 65, 90, shift)

        } else if ( asciiCode >= 97 && asciiCode <= 122 ) {
            return getShiftLetter(asciiCode, 97, 122, shift)

        } else {
            return String.fromCharCode(asciiCode)
        }
    });

  return shiftArr.join('');
}

function getShiftLetter(asciiCode, asciiMin, asciiMax, shift) {
    let shiftCode = asciiCode + shift;

    //Determine if shift causes ascii code to exceed upcase range
    if ( shiftCode > asciiMax ) {
        shiftCode -= 26;
    } else if ( shiftCode < asciiMin ) {
        shiftCode += 26;
    }

    //Convert shifted ascii code back letter
    let shiftLetter = String.fromCharCode(shiftCode);
    return shiftLetter;
}


module.exports = caesar
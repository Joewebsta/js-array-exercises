const caesar = function(str, shift) {
    let splitArr = str.split('');

    let shiftArr = splitArr.map((letter) => {
    let asciiCode = letter.charCodeAt(0);

    if (shift > 25) {
      shift = shift % 26;
    }

    //Determine if uppercase
    if (asciiCode >= 65 && asciiCode <= 90) {
      let shiftCode = asciiCode + shift;

      //Determine if shift causes ascii code to exceed upcase range
      if (shiftCode > 90) {
        shiftCode -= 26;
      } else if (shiftCode < 65) {
        shiftCode += 26;
      }

      //Convert shifted ascii code back letter
      let shiftLetter = String.fromCharCode(shiftCode);
      return shiftLetter;
    } else if(asciiCode >= 97 && asciiCode <= 122) {
      let shiftCode = asciiCode + shift;

      //Determine if shift causes ascii code to exceed lowcase range
      if (shiftCode > 122) {
        shiftCode -= 26;
      } else if (shiftCode < 97) {
        shiftCode += 26;
      }

      //Convert shifted ascii code back letter
      let shiftLetter = String.fromCharCode(shiftCode);
      return shiftLetter;
    } else {
      return String.fromCharCode(asciiCode)
    }
  })

  return shiftArr.join('');
}

module.exports = caesar
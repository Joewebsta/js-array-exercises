const palindromes = function(str) {
    let strArray = str.toLowerCase().split('');
    
    let cleanStrArray = strArray.filter(item => {
        let asciiCode = item.charCodeAt(0);
  
      return  asciiCode >= 97 && asciiCode <= 122
    })
  
    return cleanStrArray.join('') === cleanStrArray.reverse().join('');
  }
  
module.exports = palindromes

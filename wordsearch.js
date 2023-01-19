const transpose = function (matrix) {
    let masterArray = [];
    for (let i = 0; i < matrix[0].length; i++) {
      masterArray.push([]);
    }
  
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
          masterArray[j][i] = matrix[i][j]
        }
    }
    return masterArray;
  };
  
  const wordSearch = (letters, word) => {   
    if (letters.length === 0) {
      return false;
    }
    
    const horizontalJoin = letters.map(ls => ls.join(''))
    const vertical = transpose(letters);
    const verticalJoin = vertical.map(ls => ls.join(''))
  
  
    for (let i = 0; i < horizontalJoin.length; i++) {
      if (horizontalJoin[i].includes(word)) {
          return true;
      } 
    }
  
    for (let i = 0; i < verticalJoin.length; i++) {
      if (verticalJoin[i].includes(word)) {
          return true;
      } 
    }
    return false;
  }
  
  module.exports = wordSearch
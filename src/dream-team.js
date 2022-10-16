const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members){
  if(Array.isArray(members) === false){
    return false;
}
  function isStr(value){
      return typeof value == 'string';
      }
  let createFirstLetter = (str) => {
      let name = str.split(' ').join('');
      let array = name.split('');
      return array[0]
  }
  let arrNames = []; 
  let result = '';
     members.forEach(item => {
      if (isStr(item)) {
         arrNames.push(item);
      } 
     });
     
     result += arrNames.map(element => createFirstLetter(element)); 
     return  result.split(',').sort().join('').toUpperCase()
  }

module.exports = {
  createDreamTeam
};

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
  function isStr(value){
      return typeof value == 'string';
      }
  let createFirstLetter = (str) => {
      let array = str.split(' ');
      let letters = '';
      array.forEach(element => {
        return letters += element[0].toUpperCase();
      });
      return letters
  }
  let arrNames = []; 
  let result = '';
     members.map(item => {
      if (isStr(item)) {
         arrNames.push(item);
      } 
     });
     
     result += arrNames.map(element => createFirstLetter(element)); 
     return result.split(',').sort().join('')
  }

module.exports = {
  createDreamTeam
};

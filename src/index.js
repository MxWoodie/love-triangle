/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let count = 0;

  for(let i=0;i<preferences.length;i++){

    let firstPrefer = preferences[i];
    let secondPrefer = preferences[firstPrefer-1];
    let thirdPrefer = preferences[secondPrefer-1];

    if(i === thirdPrefer-1 && firstPrefer !== secondPrefer && secondPrefer !== thirdPrefer && thirdPrefer !== firstPrefer){
      count++;
    }


   /* if(preferences[i]+1 === preferences[i+1] && preferences[i+1]-2 === preferences[i+2] && preferences[i+2]+1 === preferences[i]){
      count++;
    }*/
  }

  return count/3;
};

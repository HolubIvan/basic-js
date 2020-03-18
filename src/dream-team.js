module.exports = function createDreamTeam(arr) {
  if(!Array.isArray(arr)){
    return false;
  } else {
    let secret;
    let words = [];
    let lowerWords;
    arr.forEach(function(el){
      if(typeof(el) !== 'string'){
        return false;
      } else {
        words.push(el.trim().slice(0,1))
      }
    })

    lowerWords = words.map(function(e){
      return e.toLowerCase()
    })

    secret = lowerWords.sort().join('').toUpperCase();
    return secret;

  }
  
};
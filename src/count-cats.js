module.exports = function countCats(items){
  
  if(items == 'undefined' || items.length == 0){
    return 0;
  }
  
  let cats = 0;

  items.forEach(function(el){
    el.forEach(function(element){
      if(element == "^^"){
        cats++;
      }
    })
  })
  return cats;

};

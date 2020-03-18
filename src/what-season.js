module.exports = function getSeason(date) {

  if(date === null || date === undefined){
    return 'Unable to determine the time of year!';
  } else if(date.getTime() === false){
    throw 'Error'
  }else {

    let month = date.getMonth();
    if(2 <= month && month <=4){
      return 'spring';
    } else if (5 <= month && month <= 7){
      return 'summer';
    } else if(8 <= month && month <= 10){
      return 'autumn';
    } else if (month === 11 || month === 0 || month === 1){
      return 'winter';
    }
  }
};

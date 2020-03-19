const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(activity) {



  if(typeof(activity) !== 'string' || activity.length == 0 || typeof(activity) == 'undefined' || null || isFinite(activity) == false || Number(activity) > 15 || Number(activity) <=0){
    return false; 
  }else {

    let num = parseFloat(activity, 10);
    let constNum = 0.693 / HALF_LIFE_PERIOD;

    return Math.ceil(Math.log(MODERN_ACTIVITY / num) / constNum);

  }
};





function getRandomString(text){
  return text + Math.floor((Math.random() * 100000) + 1);
}

function getRandomInt(){
  return Math.floor((Math.random() * 100000) + 1);
}

function getRandomAmount(){
  return ((Math.random() * 100) + 1).toFixed(2);
}

function getDate(){
  return (new Date()).toISOString().substring(0, 10) ;
}


module.exports = {
  getRandomString,
  getRandomInt,
  getRandomAmount,
  getDate
}
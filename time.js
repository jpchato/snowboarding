function time(){

  var d = new Date();
  var time = d.getHours();
  var greeting; 

  if (time < 12) {
    greeting = 'Rise and Shine';
  }if (time > 12) {
    greeting = 'Time to Ride the Slopes');
  }if (time == 12) {
    greeting = 'AFK BRB Lunch';
  }

  return greeting;

};
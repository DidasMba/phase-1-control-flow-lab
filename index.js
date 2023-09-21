function scuberGreetingForFeet(feet){
  if (feet <= 400) {
    return "This one is on me!";
  } else if (feet > 2000 && feet <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else if (feet > 2500) {
    return "No can do.";

 }
}


function ternaryCheckCity(city){
  // Write your code here!
  if(city === NYC){
    return "Ok";
  }else if(city !== NYC){
       return "NO go";
  }
}
function switchOnCharmFromTip(tipAmount) {
  // Write your code here!
  if (tipAmount === 'generous') {
    return "Thank you so much.";
  } else if (tipAmount === 'not as generous') {
    return "Thank you.";
  } else {
    return "Bye.";
  }
}





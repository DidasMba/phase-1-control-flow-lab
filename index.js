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
  if(city === 'NYC'){
    return "Ok, sounds good.";
  }else if(city !== 'NYC'){
       return "No go.";
  }
}
console.log(ternaryCheckCity('NYC'));
console.log(ternaryCheckCity('Las Vegas'));



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
console.log(switchOnCharmFromTip('generous')); // Output: "Thank you so much."
console.log(switchOnCharmFromTip('not as generous')); // Output: "Thank you."
console.log(switchOnCharmFromTip('average')); // Output: "Bye."






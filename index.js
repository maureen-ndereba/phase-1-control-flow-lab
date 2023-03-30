function scuberGreetingForFeet(a){
  if (a <= 400){
    return "This one is on me!"
  }
  else if (a >= 2000 && a <= 2499){
    return "I will gladly take your thirty bucks."
  }
  else {
    return "No can do."
  }
}



function ternaryCheckCity(c){
  let city;
  c === "NYC" ? (city = "Ok, sounds good.") : (city = "No go.")
  return city

}

function switchOnCharmFromTip(t){
  let resp;
  switch (t) {
    case 'generous':
      resp = 'Thank you so much.';
        break;
    case 'not as generous':
      resp = 'Thank you.';
        break;
    default:
      resp = "Bye.";
        break;
}
  return resp;
}









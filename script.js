function respond() {
  var x = document.getElementById("myTopnav");
  if (x.className === "top") {
    x.className += " responsive";
  } else {
    x.className = "top";
  }
}

let scroll = document.getElementById("contact");

function scrollBottom() {
  let contact = document.getElementById("lin");
  contact.scrollIntoView({behavior:"smooth"});
}

scroll.addEventListener("click", scrollBottom);
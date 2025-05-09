document.onclick = eventRef;

document.addEventListener("keydown", function (event) {
  var validKeys = ["W", "A", "S", "D", "J", "K", "L"];
  if (validKeys.includes(event.key.toUpperCase())) {
    playAudio(event.key.toUpperCase());
  }
});

function eventRef(evt) {
  var elem = evt.target || evt.srcElement;
  if (evt.type == "click") {
    if (elem.parentElement.className == "buttons") {
      playAudio(elem.id);
    }
  }
}

function playAudio(key) {
  document.getElementById(key).classList.add("animate");
  setTimeout(function () {
    document.getElementById(key).classList.remove("animate");
  }, 1000);
  var audio = new Audio("./assets/sounds/" + key + ".mp3");
  audio.play();
}

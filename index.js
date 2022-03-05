class Drum {
  constructor(audioSrc) {
    this.audio = new Audio(audioSrc);
  }

  attachBtnElement(btnElement) {
    this.btnElement = btnElement;
  }

  play() {
    var self = this;
    self.btnElement.classList.add("pressed");
    self.audio.cloneNode(false).play();
    setTimeout(function () {
      self.btnElement.classList.remove("pressed");
    }, 100);
  }
}

function setupDrum() {
  var tom1 = new Drum('sounds/tom-1.mp3');
  var tom2 = new Drum('sounds/tom-2.mp3');
  var tom3 = new Drum('sounds/tom-3.mp3');
  var tom4 = new Drum('sounds/tom-4.mp3');
  var snare = new Drum('sounds/snare.mp3');
  var crash = new Drum('sounds/crash.mp3');
  var kick = new Drum('sounds/kick-bass.mp3');
  return [tom1, tom2, tom3, tom4, snare, crash, kick];
}

function clickSetup(drums) {
  var drumsElement = document.querySelectorAll(".drum")
  for (let i = 0; i < drumsElement.length; i++) {
    drums[i].attachBtnElement(drumsElement[i]);
    drumsElement[i].onclick = function () {
      drums[i].play();
    };
  }
}

function keyHandler(drums) {
  return function(event) {
    switch(event.key) {
      case 'w':
        drums[0].play();
        break;
      case 'a':
        drums[1].play();
        break;
      case 's':
        drums[2].play();
        break;
      case 'd':
        drums[3].play();
        break;
      case 'j':
        drums[4].play();
        break;
      case 'k':
        drums[5].play();
        break;
      case 'l':
        drums[6].play();
        break;
      default:
        break;
    }
  };
}

function main() {
  var drums = setupDrum();
  clickSetup(drums);
  document.onkeydown = keyHandler(drums);
}


main();

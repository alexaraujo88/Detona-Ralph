const state = {
  view: {
    squeres: document.querySelectorAll(".squere"),
    enemy: document.querySelector(".enemy"),
    timeleft: document.querySelector("#time-left"),
    score: document.querySelector("#score"),
  },

  values: {
    gameVelocity: 1000,
    hitPosition: 0,
    result: 0,
    curretTime: 60,
  },

  actions: {
    timerId: setInterval(randomsquere, 1000),
    countDownTimerId: setInterval(countDown, 1000),
  },
};

function countDown() {
  state.values.curretTime--;
  state.view.timeleft.textContent = state.values.curretTime;

  if (state.values.curretTime <= 0) {
    clearInterval(state.actions.countDownTimerId);
    clearInterval(state.actions.timerId);
    alert("Game Over! so seu resultado foi:" + state.values.result);
    playMp3("game-over");
  }
}
function playMp3(audioMp) {
  let audio = new Audio(`./src/audios/${audioMp}.mp3.mp3`);
  audio.volume = 0.5;
  audio.play();
}

function playSound(audioName) {
  let audio = new Audio(`./src/audios/${audioName}.m4a.m4a`);
  audio.volume = 0.1;
  audio.play();
}

function randomsquere() {
  state.view.squeres.forEach((squere) => {
    squere.classList.remove("enemy");
  });

  let randomNumber = Math.floor(Math.random() * 9);

  let randomSquere = state.view.squeres[randomNumber];
  randomSquere.classList.add("enemy");
  state.values.hitPosition = randomSquere.id;
}

//function moveEnemy() {
// state.values.timerId = setInterval(randomsquere, state.values.gameVelocity);
//}

function addListenerHitBox() {
  state.view.squeres.forEach((squere) => {
    squere.addEventListener("mousedown", () => {
      if (squere.id === state.values.hitPosition) {
        state.values.result++;
        state.view.score.textContent = state.values.result;
        state.values.hitPosition = null;
        playSound("hit");
      }
    });
  });
}
function init() {
  //moveEnemy();
  addListenerHitBox();
}

init();

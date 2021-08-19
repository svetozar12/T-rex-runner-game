const input = () => {
  window.onkeydown = (e) => {
    if (!jumped) {
      jumped = true;
      if (e.code === "Space") {
        jumped = true;
        jump();
      }
    }
  };

  window.onkeyup = (e) => {
    if (e.code === "Space") {
      jumped = false;
      console.log(jumped);
    }
  };
};
// testing purposes
const func = (sec) => {
  requestAnimationFrame(func);
  let timeInSeconds = Math.floor(sec / 1000);
  console.log(timeInSeconds);
  if (timeInSeconds === 10) return;
};

func();

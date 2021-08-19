const input = () => {
  window.onkeydown = (e) => {
    if (e.code === "Space") {
      jumped = true;
    }

    if (e.code === "ArrowDown" || e.code === "KeyS") {
      moreG = true;
    }
  };

  window.onkeyup = (e) => {
    console.log(e.code);
    if (e.code === "Space") {
      jumped = false;
    }
    if (e.code === "ArrowDown" || e.code === "KeyS") {
      moreG = false;
    }
  };
};

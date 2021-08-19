const input = () => {
  window.onkeydown = (e) => {
    if (e.code === "Space") {
      jumped = true;
    }
  };

  window.onkeyup = (e) => {
    if (e.code === "Space") {
      jumped = false;
    }
  };
};

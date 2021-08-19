const input = () => {
  window.onkeydown = (e) => {
    if (e.code === "Space") {
      jumped = true;
      console.log(jumped);
    }
  };

  window.onkeyup = (e) => {
    if (e.code === "Space") {
      jumped = false;
      console.log(jumped);
    }
  };
};

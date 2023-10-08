let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll(".btn");
let equal = document.querySelector(".btn-equal");
let reset = document.querySelector(".btn-reset");
let del = document.querySelector(".btn-del");
let arr = Array.from(buttons);
arr.forEach((button) => {
  if (button.value === "=") {
    button.addEventListener("click", (e) => {
      try {
        if (screen.value === "") {
          screen.value = "";
        } else {
          let answer = eval(screen.value);
          screen.value = answer;
        }
      } catch (error) {
        screen.value = "UNDEFINED";
      }
    });
  } else if (button.value === "RESET") {
    button.addEventListener("click", (e) => {
      if (screen.value === "") {
        screen.value = "";
      } else {
        screen.value = "0";
      }
    });
  } else if (button.value === "DEL") {
    button.addEventListener("click", (e) => {
      if (screen.value === "") {
        screen.value = "";
      } else {
        let output = screen.value.toString().slice(0, -1);
        screen.value = output;
      }
    });
  } else {
    button.addEventListener("click", (e) => {
      if (screen.value === "0" || screen.value === "UNDEFINED") {
        screen.value = "";
      }
      let value = e.target.value;
      screen.value += value;
    });
  }
});

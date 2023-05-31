let body = document.querySelector("body");


function changeColor() {
  let colors = ["red", "green", "blue", "pink", "violet", "white"];
    
    // Math.Random will return random decimal value with started from 0.xxxxxx, // 0.xxxx * 6 = will produce number from 0 - 5 .(0 - 5 ) +1 = (1-6)
  let num = Math.floor((Math.random() * colors.length) + 1);
  body.style.backgroundColor = colors[num];
}

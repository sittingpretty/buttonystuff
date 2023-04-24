var rainbowButton = document.getElementById("rainbow-button");

rainbowButton.onclick = function() {
  var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
  var currentColor = colors[0];

  setInterval(function() {
    currentColor = colors[(colors.indexOf(currentColor) + 1) % colors.length];
    rainbowButton.style.backgroundColor = currentColor;
  }, 1000);
};

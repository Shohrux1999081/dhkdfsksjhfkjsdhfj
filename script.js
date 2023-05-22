document.getElementById("color-button").addEventListener("click", function() {
    var colorInput = document.getElementById("color-input").value.toLowerCase();
    var body = document.querySelector("body");
  
    if (isValidColor(colorInput)) {
      body.style.backgroundColor = colorInput;
    } else {
      body.style.backgroundColor = "red";
    }
  });
  
  function isValidColor(color) {
    var s = new Option().style;
    s.color = color;
    return s.color !== "";
  }
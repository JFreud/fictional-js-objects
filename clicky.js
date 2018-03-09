var cb = document.getElementById("clear");
var svg = document.getElementById("svgfield");

var c, old_x, old_y, picked;

var makeCircle = function(x, y) {
  var circle = {
    x: x,
    y: y,
    color: "navy",
    make: function() {
      c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      c.setAttribute("cx", this.x);
      c.setAttribute("cy", this.y);
      c.setAttribute("r", 30);
      c.setAttribute("stroke", "white");
      c.setAttribute("fill", this.color);
      c.addEventListener('click', this.changeColor);
      svg.appendChild(c);
    },
    changeColor: function(event){
      if (this.getAttribute("fill") == "green") {
        svg.removeChild(this);
        event.stopPropagation();
        makeRandom();
      }
      else {
        this.setAttribute("fill", "green");
        event.stopPropagation();
      }
    }
  };
  return circle;
}



var makeRandom = function() {
  c = makeCircle(Math.floor(Math.random() * 500), Math.floor(Math.random() * 500));
  c.make();
}

var draw = function(event) {
  c = makeCircle(event.offsetX, event.offsetY);
  c.make();
}


var clear = function() {
  svg.innerHTML = " ";
}


svg.addEventListener('click', draw);
cb.addEventListener('click', clear);

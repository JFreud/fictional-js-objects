var cb = document.getElementById("clear");
var svg = document.getElementById("svgfield");


var makeCircle = function(x, y, r) {
  var circle = {
    x: x,
    y: y,
    r: r,
    color: "navy",
    c: document.createElementNS("http://www.w3.org/2000/svg", "circle"),
    display: function() {
      this.c.setAttribute("cx", this.x);
      this.c.setAttribute("cy", this.y);
      this.c.setAttribute("r", this.r);
      this.c.setAttribute("stroke", "white");
      this.c.setAttribute("fill", this.color);
      this.c.addEventListener('click', this.changeColor);
      svg.appendChild(this.c);
    },
    changeColor: function(event){
      if (this.getAttribute("fill") == "green") {
        this.remove();
        // console.log("hi");
        event.stopPropagation();
        makeRandom();
      }
      else {
        this.setAttribute("fill", "green");
        event.stopPropagation();
      }
    },
    remove: function() {
      svg.removeChild(this);
    }
  };
  return circle;
}



var makeRandom = function() {
  var c = makeCircle(Math.floor(Math.random() * 500), Math.floor(Math.random() * 500), 30);
  c.display();
}

var draw = function(event) {
  c = makeCircle(event.offsetX, event.offsetY, 30);
  c.display();
}


var clear = function() {
  svg.innerHTML = " ";
}


svg.addEventListener('click', draw);
cb.addEventListener('click', clear);

// There is no standard "class" it is just a convention!
var Circle = {};
circle.radius = 5;
circle.area = function() {
  return this.radius * this.radius * Math.PI;
}
// circle.area() ==> 78.5398
var fn = circle.area;
// fn.call() ==> NaN;
window.radius = 1;
// Window is the parent object of javascript - everything inherits from window
// fn.call() ==> 3.1415
// fn.call(circle) ==> 78.5375


var Circle = {
  area: function() {
    return this.radius * this.radius * Math.PI;
  }
};

var instance = { radius:5 };
instance.__proto__ = Circle;
instance.area() ==> 78.5398

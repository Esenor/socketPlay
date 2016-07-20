function creepObject () {
  this.id = Math.floor((Math.random() * 1000) + 1);
  this.color = getRandomColor();
  this.position = 'null';
  this.msg = 'err';
  this.x = 150;
  this.y = 150;
};

creepObject.prototype.locate = function () {
  return '@' + this.id + ' -> ' + this.position;
};

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

creepObject.prototype.move = function () {
  if (this.position.indexOf(8) > -1) { this.y -= 1 }
  if (this.position.indexOf(2) > -1) { this.y += 1 }
  if (this.position.indexOf(6) > -1) { this.x += 1 }
  if (this.position.indexOf(4) > -1) { this.x -= 1 }
};

module.exports = creepObject;

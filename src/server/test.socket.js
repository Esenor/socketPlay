module.exports = {
  register: function (socket, io, creep, creeps) {
    console.log('Socket test connected');
    socket.on('efc_in', function(msg) {
      creep.position = msg;
      creep.msg = creep.locate();
      creep.move();
      creeps[creep.id] = creep;
      io.emit('efc_out', JSON.stringify(creeps));
    });
  }
}

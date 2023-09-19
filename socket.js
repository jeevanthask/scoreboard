const cors = require("cors");
let io;

module.exports = {
  init: (httpServer) => {
    io = require("socket.io")(httpServer, {
      cors: {
        origins: ["http://localhost:4200"],
      },
    });

    return io;
  },
  getIo: () => {
    if (!io) {
      throw new Error("socket.io is not initialized");
    }

    return io;
  },
};

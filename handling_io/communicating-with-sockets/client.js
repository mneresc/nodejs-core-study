const net = require("net");
const HOSTNAME = "localhost";
const PORT = 4001;

const socket = net.connect(PORT, HOSTNAME);
socket.write("Darkness my old friend");
socket.on("data", (data) => {
  console.log(data.toString());
});

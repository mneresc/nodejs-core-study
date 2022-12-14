const net = require("net");
const HOSTNAME = "localhost";
const PORT = 4001;

net.createServer(
    (socket) => {
        console.log("Client connected");
        socket.on("data", (name) => {
            socket.write(`Hello ${name}`);
        });
    }
).listen(PORT, HOSTNAME);
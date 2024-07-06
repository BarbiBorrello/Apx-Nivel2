import * as net from "net";

// host: localhost => es mi computadora
// const miIp = "127.0.0.1"

function main(){

  const client = net.createConnection({ port: 8124 }, () => {
    // 'connect' listener.
    console.log("connected to server!");
    client.write("Mensaje para el servidor : Hola soy el cliente");
  });
  
  client.on("data", (data) => {
    console.log(data.toString());
    client.end();
  });
  client.on("end", () => {
    console.log("disconnected from server");
  });

}
main();
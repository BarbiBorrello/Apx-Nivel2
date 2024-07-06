import * as net from "net";

function main() {
  const server = net.createServer((c) => {
    // c = client
    // 'connection' listener = SERVIDOR

    console.log("client connected"); // conectado

    c.on("data", (data) => {
      console.log("data del cliente",data.toString()); // leer el mensaje del cliente
    });

    c.write("Mensaje para el cliente : Hola soy el servidor");
    // c.pipe(c);
  });

  // si al algun error:

  server.on("error", (err) => {
    console.log(err);
  });

  // INICIAR =>

  server.listen(8124, () => {
    console.log("server activo");
  });
}
main();

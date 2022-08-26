const http = require("http");

/**
 * post request
 */
const payload = JSON.stringify({ name: "John Doe" });
const options = {
  method: "POST",
  hostname: "postman-echo.com",
  path: "/post",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": Buffer.byteLength(payload),
  },
};
http.request(options, (response) => {
    process.stdout.write("Status Code: " + response.statusCode + "\n");
    process.stdout.write("Body: ");
    response.pipe(process.stdout);
  })
  .end(payload);

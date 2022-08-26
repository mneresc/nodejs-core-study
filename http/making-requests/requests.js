const http = require("https");
http.get("https://www.google.com/", (response) => {
  response.pipe(process.stdout);
});

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



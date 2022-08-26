const http = require("https");
http.get("https://www.google.com/", (response) => {
  response.pipe(process.stdout);
});







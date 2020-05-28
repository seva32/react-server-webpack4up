require("dotenv").config({ silent: true });

const express = require("express");
const cookiesMiddleware = require("universal-cookie-express");
const compression = require("compression");
const logger = require("./middleware/logger");
const { devMiddleware, hotMiddleware } = require("./middleware/webpack");
const render = require("./rendering/render");

const app = express();

app.set("x-powered-by", false);

app.use(compression());
app.use(logger);

if (process.env.NODE_ENV === "production") {
  app.use(
    express.static("build", {
      index: false,
      // etag: false
    })
  );
} else {
  app.use(devMiddleware);
  app.use(hotMiddleware);
}

app.use(cookiesMiddleware());

app.get("*", (req, res) => {
  render(req, res, {});
});

const server = app.listen(process.env.PORT || 8080, () => {
  console.log(
    "Express started at http://localhost:%d\n",
    server.address().port
  );
  if (process.env.NODE_ENV !== "production") {
    console.log("Waiting for webpack...\n");
  }
});

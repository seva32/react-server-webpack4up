/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
require("core-js/stable");
require("regenerator-runtime/runtime");
require("dotenv").config({ silent: true });

const express = require("express");
const cookiesMiddleware = require("universal-cookie-express");
const compression = require("compression");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const logger = require("./middleware/logger");
const { devMiddleware, hotMiddleware } = require("./middleware/webpack");
const render = require("./rendering/render");
const router = require("./router/router");

// db
mongoose.connect(process.env.MONGOOSE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// App setup
const app = express();

app.set("x-powered-by", false);

app.use(compression());
app.use(logger);
app.use(bodyParser.json({ type: "*/*" }));

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

router(app);

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

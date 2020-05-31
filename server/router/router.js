/*
const Auth = require("./controllers/authentications");
const passportConfig = require("./service/passport");
const passport = require("passport");

// creo un obj para indicar que uso jwt y no cookies que es default de passport
const requireAuth = passport.authenticate("jwt", { session: false });
// uso local strategy porque me llega email y pass
const requireSignin = passport.authenticate("local", {
  session: false,
});

module.exports = (app) => {
  app.get("/", requireAuth, (req, res) => {
    res.send({ hola: "chola" });
  });
  app.post("/signup", Auth.signup);
  app.post("/signin", requireSignin, Auth.signin);
};
*/

module.exports = (app) => {
  // eslint-disable-next-line no-unused-vars
  app.post("/api/signin", (req, res, next) => {
    console.log(req.body);
    res.send({ token: "co" });
  });
};

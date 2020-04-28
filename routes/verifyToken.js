const jwt = require("jsonwebtoken");

module.exports = function(req, res, next) {
  const token = req.header("auth-token");
  if (!token)
    return res.status(401).send("You do not have enough permissions to access");
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).send('Invalid Token :(!');
    }
}

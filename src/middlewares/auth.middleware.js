const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decodedToken.id;
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
};

module.exports = authMiddleware;

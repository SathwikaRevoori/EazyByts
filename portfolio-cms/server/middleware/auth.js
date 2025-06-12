module.exports = (role = 'admin') => (req, res, next) => {
  if (!req.session.user || req.session.user.role !== role) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
};

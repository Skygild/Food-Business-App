const checkAdmin = async (req, res, next) => {
  if (req.isAuthenticated() && req.user.role === "admin") {
    return next();
  }

  res.redirect("/not-an-admin");
};

const checkAuth = async (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect("/not-auth");
};

module.exports = { checkAdmin, checkAuth };

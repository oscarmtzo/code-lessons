// configs/route-guard.config.js

// Auth middleware function
const isLoggedIn = (req, res, next) => {
  // If request has cookie with session id, allow access - next ()
  if (req.session.currentUser) {
    next();
  } else {
    // Otherwise, redirect to login
    res.redirect('/login');
  }
};

module.exports = {
  isLoggedIn,
};

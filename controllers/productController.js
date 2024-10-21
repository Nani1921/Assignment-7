exports.dashboard = (req, res) => {
    res.render('dashboard', { user: req.user });
  };
  
  exports.viewProfile = (req, res) => {
    res.render('profile', { user: req.user });
  };
  
module.exports = {
  showHome: (request, response) => {
    response.render('pages/home');
  },
  showCreate: (request, response) => {
    response.render('pages/create');
  },
  showEvent: ( request, response => {
    response.render("pages/event")
  })
};

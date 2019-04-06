module.exports = function(application){
  application.get('/', function(req, res){
    application.app.controllers.homeController.index(application, req, res);
  })
}
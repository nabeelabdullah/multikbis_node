var models=require('../models');
var loginService = function () {
    this.checkCredentian = function (username, password, callback) {
        models.User.findAll({
            where: {
                email: username
            }
          }).then((val)=>{
            if(val&&val.length>0){
                callback(val[0]['password']==password?true:false);
            }else{
                callback(false);
            }
          });
    }
    this.signup=function(username,email, password,callback){
        models.User.create({ firstName: username, email: email, password: password }).then(task => {
            console.log(task);
            callback(task);
          });
    }
}
module.exports = new loginService();

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
}
module.exports = new loginService();
var mysql        = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "cde3$RFV",
  database: "employees"
});

module.exports = (function() {
  function BaseService() {
   // Service.call(this, repository);
   // this.Model = model;
  };
  BaseService.prototype.getAll  = function (table, callback) {
     con.query('SELECT * FROM '+table+';',function(err,rows){
      if(err) throw err;
       callback(JSON.stringify(rows));
    });
  };
  return BaseService;
})()

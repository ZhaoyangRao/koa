//增删改查
//查询
function find(req, model,ctx) {
    return model.find(req, function (err, res) {
        if (err) {
            console.log(err);
        } else {
            console.log('find success!');
           
        }
    });
}
//增加
function add(req, model,ctx) {
    var user = new model(req);
    user.save(function (err, res) {
        if (err) {
            console.log("Error:" + err);
        } else {
            console.log("Res:" + res);
           
        }

    });
}
//删除
function remove(req, model,ctx) {

    model.remove(req, function (err, res) {
        if (err) {
            console.log(err);
        } else {
            console.log('Delete success!');
          
        }
    });
}
//修改
function updateData(req, model,ctx) {
    
    var wherestr = {_id: req._id};
    var updata=req
    model.updateOne(wherestr, updata, function (err, res) {
        if (err) {
            console.log(err);
        } else {
            console.log('update success!');
           
        }
    });
}
module.exports = {
    find,
    add,
    remove,
    updateData
};

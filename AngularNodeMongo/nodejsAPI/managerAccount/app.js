const Express = require("express");
const BodyParser = require("body-parser");
const mongoose = require("mongoose");
var url = "mongodb://localhost:27017/";
var dbname = "AccountDB";
var collec = "accounts";
var app = Express();
// var AccountModel=require("./model/accountModel").AccountModel;


app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));


mongoose.connect(url + dbname);
//Ép Mongoose sử dụng thư viện promise toàn cục
mongoose.Promise = global.Promise;
//Lấy kết nối mặc định
var db = mongoose.connection;
//Ràng buộc kết nối với sự kiện lỗi (để lấy ra thông báo khi có lỗi)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Định nghĩa schema
var Schema = mongoose.Schema;

var account = new Schema({
    fullname: String,
    phone: String,
    email: String,
    sex: Boolean,
    birthday: Date,
    address: String
});
// Biên dịch mô hình từ schema
var accountModel = mongoose.model(collec, account,"accounts");
app.post("/api/account/create", async (req, res) => {

    var myobj = new accountModel({
        fullname: req.body.fullname,
        phone: req.body.phone,
        email: req.body.email,
        sex: req.body.sex,
        birthday: req.body.birthday,
        address: req.body.address
    });
    myobj.save((err,accounts) => {
        if (err) throw err;
        res.status(200).json(result=accounts);
    });
})
app.put("/api/account/update/:id", async (req, res) => {
    var myobj = new accountModel({
        fullname: req.body.fullname,
        phone: req.body.phone,
        email: req.body.email,
        sex: req.body.sex,
        birthday: req.body.birthday,
        address: req.body.address
    });
    accountModel.findById(req.body.id,(res,accounts)=>{
        accounts.updateOne(myobj);
    });
})
app.get("/api/account", async (req, res) => {
    //accountModel.findOne({});
    
    accountModel.findOne().exec((err,accounts)=>{
        res.send(result=accounts);

    });
})
app.get("/api/account/all", async (request, response) => {
    accountModel.find((err, accounts) => {
        if (err) throw err;
        console.log(res);
    });
})
app.delete("/api/account/delete/:id", async (request, response) => {
   // accountModel.deleteOne();
})
app.get("/api", async (request, response) => {
    console.log("That not good")
    accountModel.findOne((err, res) => {
        if (err) throw err;
        console.log(res.account.fullname);
    });
})
var server = app.listen(9999, "localhost", () => {
    db.on;
});
const Express = require("express");
const BodyParser = require("body-parser");
const mongoose = require("mongoose");
var url = "mongodb://localhost:27017/";
var dbname = "AccountDB";
var collec = "account2";
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
var accountModel = mongoose.model(collec, account);
app.post("/api/account/create", async (req, res) => {
    
    var myobj =new accountModel({
        fullname: req.body.fullname,
        phone: req.body.phone,
        email: req.body.email,
        sex: req.body.sex,
        birthday: req.body.birthday,
        address: req.body.address
    });
    myobj.save((err)=>{
        if (err) throw err;
    });
    res.send("Your object is null");
})
app.put("/api/account/update/:id", async (request, response) => {

})
app.get("/api/account", async (request, response) => {

})
app.get("/api/account/all", async (request, response) => {
    accountModel.find((err,res)=>{
        if(err) throw err;
        console.log(res);
    });
})
app.delete("/api/account/delete/:id", async (request, response) => {

})
app.get("/api", async (request, response) => {
    console.log("That not good")
    accountModel.findOne((err,res)=>{
        if(err) throw err;
        console.log(res.account.fullname);
    });
})
var server = app.listen(8001, "localhost", () => {
    db.on;
    var myobj =new accountModel({
        fullname:"Phan ich95",
        phone: "0988676",
        email: "phanich95@gmail.com",
        sex: true,
        birthday: "2019-10-13",
        address: "viet nam"
    });
    myobj.save((err)=>{
        if (err) throw err;
    });
});
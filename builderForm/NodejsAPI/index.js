const Express = require("express");
const BodyParser = require("body-parser");
const mongoose = require("mongoose");
var url = "mongodb://localhost:27017/";
var dbname = "formBuilder-db";
var collec1 = "form";
var collec2 = "value";
var app = Express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));


mongoose.connect(url + dbname);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var Schema = mongoose.Schema;
var value = new Schema({
    label: String,
    value: String
});
var form = new Schema({
    type: String,
    lable: String,
    subtype: String,
    className: String,
    name: String,
    style: String,
    values: [value]
});

var valueModel = mongoose.model(collec2, value, "values");
var formModel = mongoose.model(collec1, form, "forms");
var listValues = [];
app.post("/api/form/create", async (req, res) => {
    var data = req.body.data;
    var components = JSON.parse(data);
    components.forEach(function (component) {
        try {
            var listValue = component.values;
            listValue.forEach(
                function (value) {
                    var formValue = new valueModel({
                        label: value.label,
                        value: value.value
                    });
                    formValue.save((err, values) => {
                        if (err) throw err;
                        console.log(values);
                        listValues.push(values._id); 
                        console.log("sda sadsa List value"+listValues+"hdsgfsjfsjsgdi");
                    });
                }
            );

        } catch (error) {

        }
        console.log("----------------------------------------------------");
        console.log("List value"+listValues+"hdsgfsjfsjsgdi");
        var myform = new formModel({
            type: component.type,
            lable: component.lable,
            subtype: component.subtype,
            className: component.className,
            name: component.name,
            style: component.style,
            values: listValues
        });
        myform.save((err, forms) => {
            if (err) throw err;
        });
    });
    
    console.log("--------------ssssssssssssssss--------------------------------------");
    console.log("List value"+listValues+"hdsgfsjfsjsgdi");
    res.status(200).json(result="success");

    // values.forEach(element => {
    //     var formValue = new valueModel({
    //         label: element.label,
    //         value: element.value
    //     });
    //     formValue.save((err, values) => {
    //         if (err) throw err;
    //         listValues.push(values);
    //     });
    // });
    // var myform = new formModel({
    //     type: req.body.type,
    //     lable: req.body.lable,
    //     subtype: req.body.subtype,
    //     className: req.body.className,
    //     name: req.body.name,
    //     style: req.body.style,
    //     values: listValues
    // });
    // myform.save((err, forms) => {
    //     if (err) throw err;
    //     res.status(200).json(result = accounts);
    //     console.log("da vao day");
    // });

})
app.listen(8000, () => {

    console.log("Start with 8000")
}
)
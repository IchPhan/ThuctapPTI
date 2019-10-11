const Express = require("express");
const BodyParser = require("body-parser");
const mongoose = require("mongoose");
var url = "mongodb://localhost:27017/";
var dbname = "formBuilder-db";
var collec = "form";
var collec1 = "field";
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
var field = new Schema({
    type: String,
    lable: String,
    subtype: String,
    className: String,
    name: String,
    style: String,
    values: [value]
});
var form= new Schema({
    fields: [field]
});
var valueModel = mongoose.model(collec2, value, "values");
var fieldModel = mongoose.model(collec1, field, "fields");
var formModel = mongoose.model(collec, form, "forms");

app.post("/api/form/create", async (req, res) => {
    var data = req.body.data;
    var components = JSON.parse(data);
    var fn2 = function asyncMultiplyBy2(v2) {
        return new Promise(resolve => {
            var formValue = new valueModel({
                label: v2.label,
                value: v2.value
            });
            formValue.save((err, values) => {
                if (err) throw err;
                resolve(values);
            });
        });
    };
    var fn1 = function asyncMultiplyBy1(v) {
        return new Promise(resolve => {
            var v2 = v.values;
            var items = null;
            try {
                items = v2.map(fn2)
            } catch (error) {
                items = null;
            }
            if (items != null) {
                var v3 = Promise.all(items);
                v3.then(data => {
                    var myfield = new fieldModel({
                        type: v.type,
                        lable: v.lable,
                        subtype: v.subtype,
                        className: v.className,
                        name: v.name,
                        style: v.style,
                        values: data
                    });
                    myfield.save((err, fields) => {
                        if (err) throw err;
                        resolve(fields);
                    });
                });
            } else {
                var myfield = new fieldModel({
                    type: v.type,
                    lable: v.lable,
                    subtype: v.subtype,
                    className: v.className,
                    name: v.name,
                    style: v.style,
                    values: null
                });
                myfield.save((err, fields) => {
                    if (err) throw err;
                    resolve(fields);
                });
            }
        });
    };
    var actions = Promise.all(components.map(fn1));
    actions.then(data => {
        var myform = new formModel({
            fields: data
        });
        myform.save((err, forms) => {
            if (err) throw err;
            console.log(JSON.stringify(forms))
            res.status(200).json( result=JSON.stringify(forms) );
        }
        );
    });
})
app.get("/api/form/user/:id",(req,res)=>{
    var result=formModel.findById(req.params.id,(err,forms)=>{
        if(err) throw err;
        res.status(200).json(result=JSON.stringify(forms));
    })

})
// app.post("/api/form/create", async (req, res) => {
//     var data = req.body.data;
//     var components = JSON.parse(data);
//     var listValues = [];
//     components.forEach(function (component) {
//         try {
//             var listValue = component.values;
//             listValue.forEach(
//                 function (value) {
//                     var formValue = new valueModel({
//                         label: value.label,
//                         value: value.value
//                     });
//                     formValue.save((err, values) => {
//                         if (err) throw err;
//                         listValues.push(values);
//                     });
//                 }
//             )

//         } catch (error) {

//         }
//         console.log("----------------------------------------------------");
//         console.log("List value" + listValues + "hdsgfsjfsjsgdi");
//         var myform = new formModel({
//             type: component.type,
//             lable: component.lable,
//             subtype: component.subtype,
//             className: component.className,
//             name: component.name,
//             style: component.style,
//             values: listValues
//         });
//         myform.save((err, forms) => {
//             if (err) throw err;
//         });
//     });

//     console.log("--------------ssssssssssssssss--------------------------------------");
//     console.log("List value" + listValues + "hdsgfsjfsjsgdi");
//     res.status(200).json(result = "success");

//     // values.forEach(element => {
//     //     var formValue = new valueModel({
//     //         label: element.label,
//     //         value: element.value
//     //     });
//     //     formValue.save((err, values) => {
//     //         if (err) throw err;
//     //         listValues.push(values);
//     //     });
//     // });
//     // var myform = new formModel({
//     //     type: req.body.type,
//     //     lable: req.body.lable,
//     //     subtype: req.body.subtype,
//     //     className: req.body.className,
//     //     name: req.body.name,
//     //     style: req.body.style,
//     //     values: listValues
//     // });
//     // myform.save((err, forms) => {
//     //     if (err) throw err;
//     //     res.status(200).json(result = accounts);
//     //     console.log("da vao day");
//     // });

// })
app.listen(8000, () => {

    console.log("Start with 8000")
}
)
export class Value {
    _id:String;
    label:String;
    value:String;
    __v:Number;
    parseJson(valueJson:JSON){
        this._id=valueJson["_id"];
        this.label=valueJson["label"];
        this.value=valueJson["value"];
        this.__v=valueJson["__v"];
    }
}

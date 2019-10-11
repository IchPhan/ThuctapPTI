import { Value } from './value';

export class Field {
    _id:String;
    type:String;
    lable:String;
    subtype:String;
    className:String;
    name:String;
    style:String;
    values:Value[]=[];
    __v:Number;
    parseJson(fieldJson:JSON){
        this._id=fieldJson["_id"];
        this.type=fieldJson["type"];
        this.lable=fieldJson["lable"];
        this.subtype=fieldJson["subtype"];
        this.className=fieldJson["className"];
        this.name=fieldJson["name"];
        this.style=fieldJson["style"];
        this.__v=fieldJson["__v"];
    }
}

export class User {
        fullname:string;
        address:string;
        phone:string;
        email:string;
        sex:boolean;
        birthday:Date;
        public constructor (fullname:string,address:string,phone:string,email:string,sex:boolean,birthday:Date){
                this.fullname=fullname;
                this.address=address;
                this.email=email;
                this.birthday=birthday;
                this.phone=phone;
                this.sex=sex;
        };
}

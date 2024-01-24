export default class Task{
    constructor(name, date, details){
        this.name = name; // string
        this.date = date; // string or fn_date
        this.details = details; //most likely string
    }
    get_name(){
        return this.name;
    }
    set_name(name){
        this.name = name;
    }
    get_date(){
        return this.date;
    }
    set_date(){
        this.date = date;
    }
    get_details(){
        return this.details;
    }
    set_details(){
        this.details = details;
    }
}
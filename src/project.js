export default class Project{
    constructor(name, taskList = []){
        this.name = name;
        this.task_list = taskList;
    }
    get_project_name(){
        return this.name;
    }
    set_project_name(name){
        this.name = name;
    }
    get_task_list(){
        return this.task_list;
    }s
    set_task_list(task_list){
        this.task_list = task_list
    }
    append_to_task_list(task){
        this.task_list.push(task);
    }
    delete_from_task_list(task){
        var index = this.task_list.indexOf(task);
        this.task_list.splice(index, 1);
    }
}
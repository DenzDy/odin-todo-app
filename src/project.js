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
}
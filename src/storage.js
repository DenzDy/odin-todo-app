import Task from './task.js'
import Project from './project.js'
export default class Storage{
    static update_project_storage(project){
        var task_list = JSON.parse(localStorage.getItem(project.get_project_name()));
        task_list = task_list.concat(project.task_list);
        localStorage.setItem(project.get_project_name(), JSON.stringify(task_list));
    }
    static get_project_name_storage(project_name){
        var tasks = JSON.parse(localStorage.getItem(project_name));
    }
}

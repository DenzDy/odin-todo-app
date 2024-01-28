import Task from './task.js'
import Project from './project.js'
export default class Storage{
    static update_project_storage(project){
        if(localStorage.getItem(project_name) != null){
            var task_list = JSON.parse(localStorage.getItem(project.get_project_name()));
            task_list = task_list.concat(project.task_list);
            localStorage.setItem(project.get_project_name(), JSON.stringify(task_list));
            return;
        }
        localStorage.setItem(project.get_project_name(), JSON.stringify(project.get_task_list()));
    }
    static get_project_name_storage(project_name){
        if(localStorage.getItem(project_name) != null){
            return JSON.parse(localStorage.getItem(project_name));
        }
        return [];
    }
    static add_project_to_storage(project){
        localStorage.setItem(project.get_project_name(), []);
    }
    static get_projects_from_storage(){
        var project_list = []
        Object.keys(localStorage).forEach(key => {
            project_list.push(key);
        });
        return project_list;
    }
}

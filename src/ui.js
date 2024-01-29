import Project from './project.js'
import Task from './task.js'
import Storage from './storage.js';
export default class UI{
    static add_task_to_ui(project, task){
        var task_list = document.getElementById("task-list");
        task_list.innerHTML += `
            <div class="task-div" id="${task.get_name()}">
                <div class="priority high"></div>
                <div id="left-side">
                    <div class="check-button-div"></div>
                    <h1>${task.get_name()}</h1>
                </div>
                <div id="right-side">
                    <button id="details-button">Details</button>
                    <div id="date">${task.get_date()}</div>
                    <button id="edit-button"><svg xmlns="http://www.w3.org/2000/svg" class="icon-size" viewBox="0 0 24 24"><title>square-edit-outline</title><path d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z" /></svg></button>
                    <button id="${task.get_name()}-remove"><svg xmlns="http://www.w3.org/2000/svg" class="icon-size" viewBox="0 0 24 24"><title>trash-can-outline</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg></button>
                </div>
            </div>
        `;
        var remove_button = document.getElementById(`${task.get_name()}-remove`);
        remove_button.addEventListener("click", function(){UI.remove_button_listener(project, task)});
        console.log(remove_button);
    }
    static remove_button_listener(project, task){
        project.delete_from_task_list(task);
        Storage.update_project_storage(project);
        UI.remove_task_from_ui(task);
    }
    static remove_task_from_ui(task){
        var task_div = document.getElementById(task.get_name());
        task_div.remove();
    }
    static load_all_tasks_from_storage(project){
        var task_list = Storage.get_project_name_storage(project.get_project_name());
        for(let i = 0; i < task_list.length; i++){
            var task = new Task(task_list[i].name, task_list[i].date, task_list[i].details);
            project.append_to_task_list(task);
            UI.add_task_to_ui(project,task);
        }
    }
    static clear_task_list_ui(){
        var task_list = document.getElementById("task-list");
        task_list.innerHTML = "";
    }
    static project_nav_button_listener(project){
        var selected = document.getElementsByClassName("selected");
        var str = project.get_project_name();
        var to_select = document.getElementById(str.replaceAll(' ', '-').toLowerCase());
        console.log(to_select);
        for(var i = 0; i < selected.length; i++){
            selected[i].classList.remove("selected");
        }
        to_select.classList.add("selected");
        UI.clear_task_list_ui();
        UI.load_all_tasks_from_storage(project);
        UI.initialize_submit_button("task", project);
    }
    static add_project_to_nav(project){
        var project_nav = document.getElementById("projects-nav");
        project_nav.innerHTML += `
            <li class="nav-button" id="${project.get_project_name()}">${project.get_project_name()}</li>
        `;
        var project_nav_button = document.getElementById(project.get_project_name());
        project_nav_button.addEventListener("click", function(){UI.project_nav_button_listener(project)});
    }
    static load_project_nav_to_ui(){
        var project_list = Storage.get_projects_from_storage();
        var project_nav = document.getElementById("projects-nav");
        var html_stuff = ``;
        for (var i = 1; i < project_list.length; i++){
            html_stuff += `<li class="nav-button" id="${project_list[i].replaceAll(' ', '-').toLowerCase()}">${project_list[i]}</li>`;
        }
        project_nav.innerHTML = html_stuff;
        for (var i = 1; i < project_list.length; i++){
            var x = document.getElementById(project_list[i]);
            var proj = new Project(project_list[i], Storage.get_project_name_storage(project_list[i]));
            console.log(proj);
            x.addEventListener("click", function(){UI.project_nav_button_listener(proj)});
        }

    }
    static submit_button_prompt_listener(entry_type, project_name){
        if(entry_type == "project"){
            var name = document.getElementById(`${entry_type}_name`).value;
            var project = new Project(name, []);
            Storage.add_project_to_storage(project);
            UI.add_project_to_nav(project);
        }
        else{
            var name = document.getElementById(`${entry_type}_name`).value;
            var date = document.getElementById(`${entry_type}_date`).value;
            var task = new Task(name, date, "");
            project_name.append_to_task_list(task);
            Storage.update_project_storage(project_name);
            UI.add_task_to_ui(project_name, task);
            UI.toggle_ui_prompt(entry_type);
        }
    }
    static initiaiize_add_button(entry_type, project_name){
        var new_task_div = document.getElementById(`new-${entry_type}-button`);
        var close_prompt_button = document.getElementById(`${entry_type}-close`);
        close_prompt_button.replaceWith(close_prompt_button.cloneNode(true));
        new_task_div.replaceWith(new_task_div.cloneNode(true));
        var new_task_div = document.getElementById(`new-${entry_type}-button`);
        var close_prompt_button = document.getElementById(`${entry_type}-close`);
        close_prompt_button.addEventListener("click", function(){UI.toggle_ui_prompt(entry_type, project_name)});
        new_task_div.addEventListener("click", function(){UI.toggle_ui_prompt(entry_type, project_name)});
    }
    static toggle_ui_prompt(entry_type, project_name){
        var prompt = document.getElementById(`add-${entry_type}-prompt`);
        if(prompt.classList.contains("active")){
            prompt.classList.remove("active");
            prompt.classList.add("inactive");
        }
        else{
            prompt.classList.remove("inactive");
            prompt.classList.add("active");
        }
    }
    static initialize_submit_button(entry_type, project_name){
        var submit_button = document.getElementById(`${entry_type}-submit`);
        var listener = function(){
            UI.submit_button_prompt_listener(entry_type, project_name);
        }
        submit_button.replaceWith(submit_button.cloneNode(true));
        submit_button = document.getElementById(`${entry_type}-submit`);
        submit_button.addEventListener("click", listener);
        console.log(`event listener created for ${project_name.get_project_name()}`);
    }    
    static loadHomepage(){
        var root = document.getElementById("root");
        var all_task_data = new Project("All Tasks", []);
        root.innerHTML += `
        <div id="content-container">
            <header>
                <span style="color: #353535">to</span><span style="color: #3C6E71">do.</span>
            </header>
            <main>
                <nav>
                    <ul>
                        <li class="nav-button selected" id="all-tasks">All Tasks</li>
                        <li class="nav-button">Today</li>
                        <li class="nav-button">Week</li>
                        <li id="nav-divider">Projects</li>
                        <div id="projects-nav">
                            <li class="nav-button">Project 1</li>
                        </div>
                        <li><button id="new-project-button" class="full-width-button"><span id="add-symbol">+</span>Add Project</button></li>
                    </ul>
    
                </nav>
                <div id="main-content-container">
                    <h1 class="tab-title">All Tasks</h1>
                    <div id ="task-list">
                        <div class="task-div">
                            <div class="priority high"></div>
                            <div id="left-side">
                                <div class="check-button-div"></div>
                                <h1>Task Title</h1>
                            </div>
                            <div id="right-side">
                                <button id="details-button">Details</button>
                                <div id="date">Date</div>
                                <button id="edit-button"><svg xmlns="http://www.w3.org/2000/svg" class="icon-size" viewBox="0 0 24 24"><title>square-edit-outline</title><path d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z" /></svg></button>
                                <button id="remove"><svg xmlns="http://www.w3.org/2000/svg" class="icon-size" viewBox="0 0 24 24"><title>trash-can-outline</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg></button>
                            </div>
                        </div>
                    </div>
                    <button id="new-task-button" class="full-width-button"><span id="add-symbol">+</span>New Task</button>
                </div>
            </main>
        </div>
        `;
        UI.initiaiize_add_button("task", all_task_data);
        UI.initiaiize_add_button("project");
        UI.initialize_submit_button("task", all_task_data);
        UI.initialize_submit_button("project", all_task_data);
        UI.load_project_nav_to_ui();
        UI.load_all_tasks_from_storage(all_task_data);
        var all_task_nav = document.getElementById("all-tasks");
        all_task_nav.addEventListener("click", function(){UI.project_nav_button_listener(all_task_data)});
    }
}

(()=>{"use strict";class t{constructor(t,e=[]){this.name=t,this.task_list=e}get_project_name(){return this.name}set_project_name(t){this.name=t}get_task_list(){return this.task_list}s;set_task_list(t){this.task_list=t}append_to_task_list(t){this.task_list.push(t)}}class e{constructor(t,e,i){this.name=t,this.date=e,this.details=i}get_name(){return this.name}set_name(t){this.name=t}get_date(){return this.date}set_date(){this.date=date}get_details(){return this.details}set_details(){this.details=details}}class i{static update_project_storage(t){var e=JSON.parse(localStorage.getItem(t.get_project_name()));e=e.concat(t.task_list),localStorage.setItem(t.get_project_name(),JSON.stringify(e))}static get_project_name_storage(t){JSON.parse(localStorage.getItem(t))}}class s{static add_task_to_ui(t,e,i){document.getElementById("task-list").innerHTML+=`\n            <div class="task-div">\n                <div class="priority high"></div>\n                <div id="left-side">\n                    <div class="check-button-div"></div>\n                    <h1>${t}</h1>\n                </div>\n                <div id="right-side">\n                    <button id="details-button">Details</button>\n                    <div id="date">${e}</div>\n                    <button id="edit-button"><svg xmlns="http://www.w3.org/2000/svg" class="icon-size" viewBox="0 0 24 24"><title>square-edit-outline</title><path d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z" /></svg></button>\n                    <button id="remove"><svg xmlns="http://www.w3.org/2000/svg" class="icon-size" viewBox="0 0 24 24"><title>trash-can-outline</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg></button>\n                </div>\n            </div>\n        `}static load_all_tasks_from_storage(t){var e=JSON.parse(localStorage.getItem(t));for(let t=0;t<e.length;t++)s.add_task_to_ui(e[t].name,e[t].date,e[t].details)}static submit_button_prompt_listener(t,n){var a=document.getElementById(`${t}_name`).value,d=document.getElementById(`${t}_date`).value,o=new e(a,d,"");n.append_to_task_list(o),console.log(n.get_project_name()),console.log(n.get_task_list()),i.update_project_storage(n),s.add_task_to_ui(a,d,""),s.toggle_ui_prompt(t)}static initiaiize_add_button(t,e){var i=document.getElementById(`new-${t}-button`);document.getElementById(`${t}-close`).addEventListener("click",(function(){s.toggle_ui_prompt(t,e)})),i.addEventListener("click",(function(){s.toggle_ui_prompt(t,e)}))}static toggle_ui_prompt(t,e){var i=document.getElementById(`add-${t}-prompt`);i.classList.contains("active")?(i.classList.remove("active"),i.classList.add("inactive")):(i.classList.remove("inactive"),i.classList.add("active"))}static initialize_submit_button(t,e){document.getElementById(`${t}-submit`).addEventListener("click",(function(){s.submit_button_prompt_listener(t,e)}))}static loadHomepage(){var e=document.getElementById("root"),i=new t("All Tasks",[]);e.innerHTML+='\n        <div id="content-container">\n            <header>\n                <span style="color: #353535">to</span><span style="color: #3C6E71">do.</span>\n            </header>\n            <main>\n                <nav>\n                    <ul>\n                        <li class="nav-button selected">All Tasks</li>\n                        <li class="nav-button">Today</li>\n                        <li class="nav-button">Week</li>\n                        <li id="nav-divider">Projects</li>\n                        <li class="nav-button">Project 1</li>\n                        <li><button id="new-project-button" class="full-width-button"><span id="add-symbol">+</span>Add Project</button></li>\n                    </ul>\n    \n                </nav>\n                <div id="main-content-container">\n                    <h1 class="tab-title">All Tasks</h1>\n                    <div id ="task-list">\n                        <div class="task-div">\n                            <div class="priority high"></div>\n                            <div id="left-side">\n                                <div class="check-button-div"></div>\n                                <h1>Task Title</h1>\n                            </div>\n                            <div id="right-side">\n                                <button id="details-button">Details</button>\n                                <div id="date">Date</div>\n                                <button id="edit-button"><svg xmlns="http://www.w3.org/2000/svg" class="icon-size" viewBox="0 0 24 24"><title>square-edit-outline</title><path d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z" /></svg></button>\n                                <button id="remove"><svg xmlns="http://www.w3.org/2000/svg" class="icon-size" viewBox="0 0 24 24"><title>trash-can-outline</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg></button>\n                            </div>\n                        </div>\n                    </div>\n                    <button id="new-task-button" class="full-width-button"><span id="add-symbol">+</span>New Task</button>\n                </div>\n            </main>\n        </div>\n        ',s.initiaiize_add_button("task",i),s.initiaiize_add_button("project"),s.initialize_submit_button("task",i),s.load_all_tasks_from_storage("All Tasks")}}document.addEventListener("DOMContentLoaded",s.loadHomepage())})();
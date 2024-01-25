import './project.js'
import './task.js'
export default class UI{
    static add_task_to_ui(task_name, task_date, task_details){
        return;
    }
    static initiaiize_add_task_button(){
        var new_task_div = document.getElementById("new-task-div");
        var close_prompt_button = document.getElementById("prompt-close-button");
        close_prompt_button.addEventListener("click", UI.toggle_task_ui_prompt);
        new_task_div.addEventListener("click", UI.toggle_task_ui_prompt);
    }
    static toggle_task_ui_prompt(){
        console.log("hello");
        var prompt = document.getElementById("add-task-prompt");
        prompt.className = prompt.className == "active" ? "inactive" : "active";
    }
    static loadHomepage(){
        var root = document.getElementById("root");
        root.innerHTML += `
        <div id="content-container">
            <header>
                <span style="color: #353535">to</span><span style="color: #3C6E71">do.</span>
            </header>
            <main>
                <nav>
                    <ul>
                        <li class="nav-button">All Tasks</li>
                        <li class="nav-button">Today</li>
                        <li class="nav-button">Week</li>
                        <li id="nav-divider">Projects</li>
                        <li class="nav-button">Project 1</li>
                    </ul>
    
                </nav>
                <div id="main-content-container">
                    <h1 class="tab-title">All Tasks</h1>
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
                    <div id="new-task-div"><span id="add-symbol">+</span>New Task</div>
                </div>
            </main>
        </div>
        `;
        UI.initiaiize_add_task_button();
    }
}

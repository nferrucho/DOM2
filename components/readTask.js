import {createTask} from "./addTask.js"
//porque es una default
import dateElement from "./dateElement.js";

export const readTask = () =>{
    //tomando datos del li
    const list = document.querySelector("[data-list");
    console.log(list);
    const taskList = JSON.parse(localStorage.getItem("task")) || [];
    console.log(dateElement(Date(),"DD/MM/YYYY"));
    //adicionando elemento del buffer a la lista
    taskList.forEach ((task) =>{
        // generando el filtro por fecha
        list.appendChild(dateElement(task.dateFormat));
        list.appendChild(createTask(task));

    });
}
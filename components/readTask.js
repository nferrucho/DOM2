import {createTask} from "./addTask.js"
export const readTask = () =>{
    //tomando datos del li
    const list = document.querySelector("[data-list");
    console.log(list);
    const taskList = JSON.parse(localStorage.getItem("task")) || [];

    //adicionando elemento del buffer a la lista
    taskList.forEach ((task) =>{
        list.appendChild(createTask(task));

    });
}
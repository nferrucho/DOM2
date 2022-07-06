import { createTask } from './addTask.js';
import { uniqueDates, orderDates } from '../services/date.js';
import dateElement from './dateElement.js';



export const displayTasks = () => {
    //identificador unico de tarea
    //console.log(uuid.v4());
    //tomando datos del li
    const list = document.querySelector('[data-list]');

    const tasksList = JSON.parse(localStorage.getItem('tasks')) || [];

    //pasando valores a uniqueDates
    const dates = uniqueDates(tasksList);
    orderDates(dates);
    

    dates.forEach((date) => {

        const dateMoment = moment(date, 'DD/MM/YYYY');
        list.appendChild(dateElement(date));

        tasksList.forEach((task) => {
            const taskDate = moment(task.dateFormat, 'DD/MM/YYYY');

            const diff = dateMoment.diff(taskDate);
            if (diff === 0) {
                // generando el filtro por fecha
                list.appendChild(createTask(task));
            }
        });
    });


    //console.log(dateElement(Date(),"DD/MM/YYYY"));
    //adicionando elemento del buffer a la lista
    //    taskList.forEach ((task) =>{
    // generando el filtro por fecha
    //        list.appendChild(dateElement(task.dateFormat));
    //        list.appendChild(createTask(task));

    //    });

};
import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';

export const addTask = (evento) => {
    const list = document.querySelector('[data-list]');
    const task = createTask(evento);
    list.appendChild(task);
  
  }
  //para cargar las tareas antes de sobreescribirlas 
  //en localSession
  // lo movemos para hacer persistenica del contenido
  //const taskList = [];
  
  const createTask = (evento) => {
    evento.preventDefault();
    // almacenamos la informacion para hacerla persistente en un array   
    //json.parse -> lo text a json
    const taskList = JSON.parse(localStorage.getItem("task")) || [];
    console.log(taskList);
    
    const input = document.querySelector('[data-form-input]');
  
    //adicion fecha
    const calendar = document.querySelector('[data-form-date]');  
    const value = input.value;
    const date = calendar.value;
    const dateFormat = moment(date).format('DD/MM/YYYY'); 
    console.log(dateFormat);
       
    const task = document.createElement('li');
    task.classList.add('card');
    input.value = '';

    //backticks
    const taskContent = document.createElement('div');
  
    
    //atrapando valores de la tarea
    const taskObj = {
      value,
      dateFormat
    };
  
    taskList.push(taskObj);
    //tomamos la sesion, ambos campos debes ser text
    localStorage.setItem('task', JSON.stringify(taskList));
  
    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    // task.innerHTML = content;
  
    //adicionando la fecha
    const dateElement = document.createElement('span');
    dateElement.innerHTML = dateFormat;
  
    task.appendChild(taskContent);
    //add fecha
    task.appendChild(dateElement);
  
    task.appendChild(deleteIcon());
    return task;
  };
  
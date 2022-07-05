import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';

export const addTask = (evento) => {
    evento.preventDefault();
    const list = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const calendar = document.querySelector('[data-form-date]');  

    //adicion fecha
    const value = input.value;
    const date = calendar.value;
    //formato fecha
    const dateFormat = moment(date).format('DD/MM/YYYY'); 
    console.log(dateFormat);

    

    // almacenamos la informacion para hacerla persistente en un array   
    //json.parse -> lo text a json
    
    //iniciando entradas
    input.value = '';
    calendar.value = '';

    //atrapando valores de la tarea
    const taskObj = {
        value,
        dateFormat
      };

    //cargando del storage al objeto taskList para pasarlo a taskObj
    const taskList = JSON.parse(localStorage.getItem("task")) || [];
          taskList.push(taskObj);
  
    //tomamos la sesion, ambos campos debes ser text
    localStorage.setItem('task', JSON.stringify(taskList));

    const task = createTask(taskObj);
    list.appendChild(task);
    };


  //para cargar las tareas antes de sobreescribirlas 
  //en localSession
  // lo movemos para hacer persistenica del contenido
  //const taskList = [];
  
export const createTask = ({value,dateFormat}) => {
       
  const task = document.createElement('li');
        task.classList.add('card');

  //backticks
  const taskContent = document.createElement('div');
  
 
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
  
import { displayTasks } from './readTask.js';

const deleteIcon = (id) => {
  const i = document.createElement('i');
  i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
  i.addEventListener('click', () => deleteTask(id));
  return i;
};

//ya no eliminamos el padre punto elemento 
//const deleteTask = (event) => {
//const parent = event.target.parentElement;
//parent.remove();
//};
  
const deleteTask = (id) => {
  const li = document.querySelector('[data-list]');
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const index = tasks.findIndex((item) => item.id === id);

  //elimina un registro del arreglo
  tasks.splice(index,1);
  li.innerHTML = '';
  localStorage.setItem('tasks', JSON.stringify(tasks));
  displayTasks();

  
};

export default deleteIcon;

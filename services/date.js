export const uniqueDates = (tasks) =>{
    const unique = [];

    // agrupando tareas por fecha
    tasks.forEach((task) => {
        //agregando tareas a la lista
        if(!unique.includes(task.dateFormat)){
            unique.push(task.dateFormat);
        }
    });
        console.log(unique);
        return unique;

    
}
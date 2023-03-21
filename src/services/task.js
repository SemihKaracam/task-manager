export const waitFor = async (data, ms = 500) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, ms);
  });


export const getTasks = async () => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  return waitFor(tasks)
}


export const getTask = async (id) => {
  const task = JSON.parse(localStorage.getItem("tasks")).find((item) => item.id == id)
  return waitFor(task)
}

export const deleteTask = () => {

}

export const addTaskToLocalStorage = async (task) => {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  return waitFor(task)
}

export const updateTask = async (task) => {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const updatedTasks = tasks.map((t) => (task.id == t.id ? task : t));
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  return waitFor(updatedTasks)
}


export const completeTask = async (id) => {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const task = tasks.find((item) => item.id == id)
  task.completed = !task.completed
  localStorage.setItem("tasks", JSON.stringify(tasks));
  return waitFor(task)
}



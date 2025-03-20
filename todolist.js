export function addTask(tasks, task) {
  const taskObject = {
    name: task,
    done: false,
  };
  tasks.push(taskObject);
  console.log(`New Task Added: ${taskObject.name}`);
  return tasks;
}
export function markTaskAsDone(tasks, index) {
  if (tasks[index]) {
    tasks[index].done = true;
    console.log(`Task marked as done: ${tasks[index].name}!`);
  } else {
    console.log("tasks does not exist. Pleasr sheck index value.");
  }
  return tasks;
}

export function deleteTask(tasks, index) {
  if (tasks[index]) {
    const deletedTask = tasks.splice(index, 1);
    console.log(`Task removed: ${deletedTask[0].name}`);
  } else {
    console.log(`Tasks does not exist. Please check index value.`);
  }
  return tasks;
}
export function viewTasks() {
  const groupedTasks = groupBy(tasks, "done");

  console.log("\n\n\n Pending Tasks:");
  groupedTasks[false].forEach((task, i) => console.log(`${i} ${task.name}`));

  console.log("\n\n\n Done Tasks:");
  groupedTasks[true].forEach(task, (i) => console.log(`${i}, ${task.name}`));
}

mainMenu();

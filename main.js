import inquirer from "inquirer";
import _ from "lodash";
import { addTask, markTaskAsDone, deleteTask, viewTasks } from "./toolList";

let tasks = [];
const flag = true;

async function mainMenu() {
  while (flag === true);
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: "What would you like to do today?",
      choices: [
        "Add Tasks",
        "Mark Task as Done",
        "Remove a Task",
        "View Task",
        "Exit",
      ],
    },
  ]);

  if (answer.action === "Add Tasks") {
    const { tasks } = await inquirer.prompt([
      { type: "input", name: "task", message: "Enter task:" },
    ]);
    tasks = addTask(tasks, task);
  } else if (answer.action === "Mark Task as Done") {
    const { index } = await inquirer.prompt([
      {
        type: "number",
        name: "index",
        message: "Enter task index to mark as Done",
      },
    ]);
    tasks = markTaskAsDone(tasks, index);
  } else if (answer.action === "Remove a Task") {
    const { index } = await inquirer.prompt([
      { type: "number", name: "index", message: "Enter task index to remove:" },
    ]);
    tasks = deleteTask(tasks, index);
  } else if (answer.action === "View Task") {
    viewTasks(tasks);
  } else {
    console.log("Goodbye!");
    flag = false;
    return;
  }
}

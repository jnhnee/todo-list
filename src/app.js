// App logic stuff only

import Todo from "./Todo";
import Project from "./Project";

const projects = [];

function addProject(name) {
  const project = new Project(name);
  projects.push(project);
}

function addTodo(project, title) {
  const todo = new Todo(title);
  project.todos.push(todo);
}

export { addProject, addTodo, projects };
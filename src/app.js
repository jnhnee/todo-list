// App logic stuff only
import Todo from "./Todo.js";
import Project from "./Project.js";

const projects = [];

function addProject(name) {
  projects.push(new Project(name));
}

function addTodo(project, name, description, dueDate) {
  project.todos.push(new Todo(name, description, dueDate));
}


export { projects, addProject, addTodo };
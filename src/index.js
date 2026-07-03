import "./styles.css";
import Todo from "./todo.js";
import Project from "./project.js";
import render from "./render.js";

const projects = [];

const testProject = new Project("Build a Computer!");

projects.push(testProject);

const testTodo1 = new Todo("Buy CPU", "AMD 9800X3D", "N/A", "10");
const testTodo2 = new Todo("Buy GPU", "Nvidia 5090", "N/A", "10");
const testTodo3 = new Todo("Buy RAM", "Corsair 64GB", "N/A", "10");

testProject.addTodo(testTodo1);
testProject.addTodo(testTodo2);
testProject.addTodo(testTodo3);

render(projects);
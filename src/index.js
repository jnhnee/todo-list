import "./styles.css";
import Todo from "./todo.js";
import Project from "./project.js";
import render from "./render.js";

const projects = [];

const testProject = new Project("Build a Computer!");

testProject.addTodo(
    new Todo("Buy CPU", "AMD 9800X3D", "N/A", "10")
);

testProject.addTodo(
    new Todo("Buy GPU", "Nvidia 5090", "N/A", "10")
);

testProject.addTodo(
    new Todo("Buy RAM", "Corsair 64GB", "N/A", "10")
);
projects.push(testProject);

let currProject = projects[0];

function select(project) {
    currProject = project;
    render(projects, currProject, select);
}

render(projects, currProject, select);

const todoForm = document.querySelector("#todo-form");
const todoTitle = document.querySelector("#todo-title");
const todoDescription = document.querySelector("#todo-description");
const todoDate = document.querySelector("#todo-date");
const todoPriority = document.querySelector("#todo-priority");

todoForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = todoTitle.value;
    const description = todoDescription.value;
    const dueDate = todoDate.value;
    const priority = todoPriority.value;
    
    const todo = new Todo(
        title,
        description,
        dueDate,
        priority
    );

    currProject.addTodo(todo);
    render(projects, currProject, select);
    todoForm.reset();
});

const addProjectBtn = document.querySelector("#add-project-btn");

addProjectBtn.addEventListener("click", () => {
    const name = prompt("Project Name:");

    if (!name) return;

    const project = new Project(name);

    projects.push(project);
    currProject = project;

    render(projects, currProject, select);
});
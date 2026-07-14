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


const addProjectBtn = document.querySelector("#add-project-btn");
addProjectBtn.addEventListener("click", () => {
    const name = prompt("Project Name:");

    if (!name) return;

    const project = new Project(name);

    projects.push(project);
    currProject = project;

    render(projects, currProject);
});

const addTodoBtn = document.querySelector("#add-todo-btn");
addTodoBtn.addEventListener("click", () => {
    const todo = new Todo(
        "Todo Name",
        "Description",
        "N/A",
        "10"
    );

    currProject.addTodo(todo);
    render(projects, currProject, select);
});
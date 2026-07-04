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
render(projects);

const addProjectBtn = document.querySelector("#add-project-btn");
addProjectBtn.addEventListener("click", () => {
    const project = new Project(prompt("Project Name: "));
    projects.push(project);
    render(projects);
});

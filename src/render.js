export default function render(projects, currProject, select) {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const projectsHeading = document.createElement("h2");
    projectsHeading.textContent = "Projects";
    content.appendChild(projectsHeading);

    projects.forEach(project => {
        const projectTitle = document.createElement("button");

        projectTitle.textContent = project.name;

        if (project === currProject) {
            projectTitle.style.fontWeight = "bold";
        }

        projectTitle.addEventListener("click", () => {
            select(project);
        });

        content.appendChild(projectTitle);
    });

    const todosHeading = document.createElement("h2");
    todosHeading.textContent = "Todos";
    content.appendChild(todosHeading);

    currProject.todos.forEach(todo => {
        const todoDiv = document.createElement("div");
        todoDiv.textContent = todo.title;

        content.appendChild(todoDiv);
    });
}
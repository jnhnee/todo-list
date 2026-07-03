export default function render(projects) {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    projects.forEach(project => {
        const projectTitle = document.createElement("h2");
        projectTitle.textContent = project.name;
        content.appendChild(projectTitle);
        
        project.todos.forEach(todo => {
            const todoDiv = document.createElement("div");
            todoDiv.textContent = todo.title;
            content.appendChild(todoDiv);
        });

    });
}
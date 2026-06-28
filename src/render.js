// For DOM manipulation only
function render(projects) {
  const container = document.querySelector("#projects");

  container.textContent = "";

  projects.forEach(project => {
    const div = document.createElement("div");
    div.textContent = project.name;

    container.appendChild(div);
  });
}

export { render };
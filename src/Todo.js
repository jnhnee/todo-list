export default class Todo {
    constructor(name, description, dateDue) {
        this.name = name;
        this.description = description;
        this.dateDue = dateDue;
        this.completed = false;
    }
}
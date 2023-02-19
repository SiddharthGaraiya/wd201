const todolist = require("../todo");
let today = new Date().tolocalDateString("en-CA");

const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

describe("Todo list is Tested", () => {
    beforeAll(() => {
        add({
            title: "Go To Library",
            completed: false,
            dueDate: new Date().toLocaleDateString("en-CA"),
        });
    });

    test("Add new todo", () => {
        // expect(all.length).toBe(0);
        let length = all.length;

        add({
            title: "node js",
            completed: false,
            dueDate: new Date().toLocaleDateString("en-CA"),
        });

        expect(all.length).toBe(length + 1);
    });

    test("Marking todo as completed", () => {
        expect(all[0].completed).toBe(false);
        markAsComplete(0);
        expect(all[0].completed).toBe(true);
    });

    test("Test for overdue", () => {
        let Todos = overdue();

        expect(
            Todos.every((todo) => {
                return todo.dueDate < today;
            })
        ).toBe(true);
    });

    test("test for dueToday", () => {
        let Todos = dueToday();

        expect(
            Todos.every((todo) => {
                return todo.dueDate === today;
            })
        ).toBe(true);
    });

    test("retrieving all todos that are dueLater", () => {
        let Todos = dueLater();

        expect(
            Todos.every((todo) => {
                return todo.dueDate > today;
            })
        ).toBe(true);
    });
});

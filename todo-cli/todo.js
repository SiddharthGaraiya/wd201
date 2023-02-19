const todoList = () => {
    all = []
    const add = (todoItem) => {
        all.push(todoItem)
    }
    const markAsComplete = (index) => {
        all[index].completed = true
    }

    const overdue = () => {
        // Write the date check condition here and return the array
        // of overdue items accordingly.
        return all.filter((item) => item.dueDate < today)
    }

    const dueToday = () => {
        // Write the date check condition here and return the array
        // of todo items that are due today accordingly.
        return all.filter((item) => item.dueDate === today)

    }

    const dueLater = () => {
        // Write the date check condition here and return the array
        // of todo items that are due later accordingly.
        return all.filter((item) => item.dueDate > today)

    }

    const toDisplayableList = (list) => {
        // Format the To-Do list here, and return the output string
        // as per the format given above.
        let Answer = list.map(item => `${item.completed ? '[x] ' : '[ ] '}${item.title} ${item.dueDate === today ? " " : item.dueDate}`).join("\n")
        return Answer;
    }

    return {
        all,
        add,
        markAsComplete,
        overdue,
        dueToday,
        dueLater,
        toDisplayableList
    };
};
module.exports(todoList);
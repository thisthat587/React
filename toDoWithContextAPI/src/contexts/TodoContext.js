import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "add Msg",
            comleted: false,
        }
    ],

    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { }
});

export const useTodo = () => {
    return useContext(TodoContext);
}

// useTodo is the custom hook which is using useContext hook and it is legal to use hook in the custom hook.

export const TodoProvider = TodoContext.Provider
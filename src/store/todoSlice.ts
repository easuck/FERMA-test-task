import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITodo} from "../models/ITodo.ts";

const initialState = {
    todos: JSON.parse(localStorage.getItem('todos')) || []
}

const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<ITodo>) => {
            state.todos.push(action.payload);
            saveTodos(state.todos);
        },
        removeTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter((todo) => todo.id != action.payload);
            saveTodos(state.todos);
        },
        editTodo: (state, action: PayloadAction<ITodo>) => {
            const todo = state.todos.find(todo => todo.id == action.payload.id);
            if (todo) {
                todo.text = action.payload.text;
                saveTodos(state.todos);
            }
        }
    }
});

export const {addTodo,
    removeTodo,
    editTodo} = todoSlice.actions;
export default todoSlice.reducer;
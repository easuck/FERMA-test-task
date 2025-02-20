import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITodo} from "../models/ITodo.ts";

const initialState = {
    todos: []
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<ITodo>) => {
            state.todos.push(action.payload);
        },
        removeTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        editTodo: (state, action: PayloadAction<ITodo>) => {
            state.todos = state.todos.map((todo) => {
                return todo.id == action.payload.id ?
                    {
                        ...todo,
                        text: action.payload.text
                    } : todo;
            })
        }
    }
});

export const {addTodo,
    removeTodo,
    editTodo} = todoSlice.actions;
export default todoSlice.reducer;
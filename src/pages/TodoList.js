import { useEffect, useState, useReducer } from "react";
import Todo from "../components/Todo";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TODO_TOGGLE: "todo-toggle",
  TODO_DELETE: "togo-delete",
};

const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TODO_TOGGLE:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.TODO_DELETE:
      return todos.filter((todo) => todo.id !== action.payload.id );
  }
};

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

export default function TodoList() {
  const [name, setName] = useState();
  const [todos, dispatch] = useReducer(reducer, []);

  function submitTodo() {
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName('');
  }

  return (
    <div className="px-4 py-2">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitTodo();
        }}
        onChange={(e) => {
          //console.log(e.target.value);
          setName(e.target.value);
        }}
      >
        <input type="text" value={name} className="px-2 border-2 border-gray-400 rounded-md" />
      </form>

      <div className="max-w-2xl mt-4">
        {todos
          ? todos.map((list) => {
              return <Todo key={list.id} list={list} dispatch={dispatch} />;
            })
          : null}
      </div>
    </div>
  );
}

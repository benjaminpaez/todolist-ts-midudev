import React from "react";
import { Todo } from "./Todo";
import { TodoId, type ListOfTodos, type Todo as TodoType } from "../types";

interface Props {
  todos: ListOfTodos;
  onToggleCompleteTodo: ({
    id,
    completed,
  }: Pick<TodoType, "id" | "completed">) => void;
  onRemoveTodo: ({ id }: TodoId) => void;
  setCompleted: (id: string, completed: boolean) => void;
}

export const Todos: React.FC<Props> = ({
  todos,
  onRemoveTodo,
  setCompleted,
  onToggleCompleteTodo,
}) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={`${todo.completed ? "completed" : ""}`}>
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            setCompleted={setCompleted}
            completed={todo.completed}
            onRemoveTodo={onRemoveTodo}
            onToggleCompleteTodo={onToggleCompleteTodo}
          />
        </li>
      ))}
    </ul>
  );
};

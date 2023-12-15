import { TodoId, type Todo as TodoType } from "../types";

interface Props {
  id: string;
  title: string;
  completed: boolean;
  onRemoveTodo: ({ id }: TodoId) => void;
  setCompleted: (id: string, completed: boolean) => void;
  onToggleCompleteTodo: ({
    id,
    completed,
  }: Pick<TodoType, "id" | "completed">) => void;
}

export const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  onRemoveTodo,
  setCompleted,
}) => {
  return (
    <div className="view">
      <input
        type="checkbox"
        className="toggle"
        checked={completed}
        onChange={(e) => {
          setCompleted(id, e.target.checked);
        }}
      />
      <label>{title}</label>
      <button
        className="destroy"
        onClick={() => {
          onRemoveTodo({ id });
        }}
      />
    </div>
  );
};

import { Todo } from "@/types/Todo";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline, MdPendingActions } from "react-icons/md";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
interface TodoItemProps {
  todo: Todo;
  onEdit: (id: string, text: string) => void;
  onDelete: (id: string) => void;
  onToggleComplete: (id: string) => void;
}

const TodoItems: React.FC<TodoItemProps> = ({ todo, onEdit, onDelete, onToggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTodo, setEditTodo] = useState(todo.text);

  const handleEdit = () => {
    onEdit(todo.id, editTodo);
    setIsEditing(false);
  };

  return (
    <div className=" p-1 items-center rounded-[10px]">
      <div className="bg-white py-3 px-2 rounded-[5px] flex items-center">
        {/* Icons */}
        <div className="flex items-center space-x-2 mr-4 h-9">
          {/* Edit Icon */}
          <span className={todo.completed ? "text-green-500" : "text-red-500"}>
          {todo.completed ? <IoCheckmarkDoneCircleOutline className="text-2xl cursor-pointer"/> : <MdPendingActions className=" text-2xl cursor-pointer"/>}
          </span>
        </div>

        {/* Todo Content */}
        {isEditing ? (
          <div className="flex-grow">
            <input
              value={editTodo}
              onBlur={handleEdit}
              onChange={(e) => setEditTodo(e.target.value)}
              className="border p-1 rounded mb-2 w-full"
            />
            <div className="flex items-center space-x-2">
              <label className="text-sm">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onBlur={handleEdit}
                  onChange={() => onToggleComplete(todo.id)}
                  className="mr-2"
                />
                {todo.completed ? "Completed" : "Pending"}
              </label>
            </div>
          </div>
        ) : (
          <div className="flex-grow flex items-center  justify-between">
            <span>{todo.text}</span>
            <div className="flex">

           <FaRegEdit
            onClick={() => setIsEditing(true)}
            className="text-green-500 text-2xl cursor-pointer"
            />
          {/* Delete Icon */}
          <MdDeleteOutline
            onClick={() => onDelete(todo.id)}
            className="text-red-500 text-2xl cursor-pointer"
            />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoItems;

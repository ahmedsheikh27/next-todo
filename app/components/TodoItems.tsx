
import { Todo } from "@/types/Todo"
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
interface TodoItemprops {
  todo: Todo;
  onEdit: (id: string, text: string) => void;
  onDelete: (id: string) => void
}

const TodoItems: React.FC<TodoItemprops> = ({ todo, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editTodo, setEditTodo] = useState(todo.text)

  const handleEdit = () => {
    onEdit(todo.id, editTodo)
    setIsEditing(false)
  }

  return (
    <div>
      {isEditing ?
        <input
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          onBlur={handleEdit}
          className="border p-1 rounded"
        />
        : <span> {todo.text}</span>
      }
      <div>
        <FaRegEdit onClick={()=>setIsEditing(true)} />
        <MdDeleteOutline onClick={() => onDelete(todo.id)} />
      </div>

    </div>
  )
}

export default TodoItems
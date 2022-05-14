import { AiFillCloseCircle } from "react-icons/ai";
import { FcHighPriority } from "react-icons/fc";
import { AiFillCheckCircle } from "react-icons/ai";
import "./Todo.css";

function Todo({ todos, completeTodo, removeTodo, priorityTodo }) {
    return todos.map((todo, index) => (
        <div className="todo-items">
            <div
                className={todo.isComplete ? "todo-row complete" : ""}

                key={index}
            >
                <h2>{todo.text}</h2>
                <div className="icons">
                    <AiFillCheckCircle

                        onClick={() => completeTodo(todo.id)}
                        className="complete"
                    />
                    <FcHighPriority

                        onClick={() => priorityTodo(todo.id)} style={todo.important ? { background: "red" } : {}}
                        className="priority"
                    />
                    <AiFillCloseCircle

                        onClick={() => removeTodo(todo.id)}
                        className="delete-icon"
                    />
                </div>
            </div>
        </div>
    ));
}

export default Todo;

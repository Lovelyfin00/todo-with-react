import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRectangleList, faTrash } from "@fortawesome/free-solid-svg-icons";

const DisplayTodos = ({taskList, taskCount, completedTasks, toggleCheckbox, deleteTodo}) => {

    return (
        <div className="w-80 md:w-3/4 mt-20">
        <div className="flex flex-wrap justify-between m-auto">
            <h5 className="text-primary-blue flex items-center justify-center">
            All tasks{" "}
            <span className="flex items-center justify-center w-6 h-6 bg-primary-grey-400 text-primary-grey-200 ms-3 rounded-full">
                {taskCount}
            </span>
            </h5>
            <h5 className="text-primary-purple flex items-center justify-center">
            Completed tasks{" "}
            <span className={`flex items-center justify-center ${completedTasks > 0 ? "w-16" : "w-6"} h-6 rounded-xl bg-primary-grey-400 text-primary-grey-200 ms-3`}>
                {completedTasks > 0 ? `${completedTasks} of ${taskCount}` : "0"}
            </span>
            </h5>
        </div>
        <div>
            {taskCount > 0 ? <TodoLists taskList={taskList} toggleCheckbox={toggleCheckbox} deleteTodo={deleteTodo} /> : <NoTodo />}
        </div>
        </div>
    );
};

const TodoLists = ({taskList, toggleCheckbox, deleteTodo}) => {

  return (
    <section className="mt-8 grid grid-cols-1 gap-1 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
      {taskList.map((task) => {

        const {id, title, description, status} = task;

        return(
            <div key={id} className={`task-card rounded-2xl px-6 py-6 border-transparent ${status === "active" ? "bg-primary-purple" : "bg-primary-grey-500"}`}>
                <h3 className={`${status === "active" ? " text-primary-grey-100" : "text-primary-grey-200"} text-xl mb-6`}>{title}</h3>
                <p className={`${status === "active" ? "text-primary-grey-200" : "text-primary-grey-300"} text-sm`}>{description}</p>
                <div className="flex justify-between items-center mt-8">
                <div className="flex items-center">
                    <input
                    type="checkbox"
                    checked={task.status === "completed"}
                    onChange={() => toggleCheckbox(task.id)}
                    className={`w-6 h-6 rounded-full border-primary-blue border-2 bg-primary-grey-400 focus:ring-1 ${status === "active" ? "checked:bg-primary-blue" : "checked:bg-primary-purple checked:border-0 checked:hover:bg-primary-blue"}`}
                    />
                    <label htmlFor="checkbox" className={`ml-3 font-medium ${status === "active" ? "bg-primary-blue px-4 py1 rounded-lg text-center" : "text-primary-purple"} text-lg`}>
                        {status}
                    </label>
                </div>
                <button onClick={() => deleteTodo(id)}><FontAwesomeIcon icon={faTrash} className={`${status === "active" ? "text-primary-grey-100" : "text-primary-purple text-lg"}`} /></button>
                </div>
            </div>
        )
      })}
    </section>
  );
};

const NoTodo = () => {
  return (
    <section className="border-t-2 border-primary-grey-400 mt-8">
      <div className="mt-20 text-center">
        <FontAwesomeIcon icon={faRectangleList} className="text-7xl bg-primary-grey-600 text-primary-grey-300" />
        <p className="mt-6 text-primary-grey-300 text-2xl">
          You don't have any tasks registered yet.
        </p>
        <p className="text-primary-grey-300 text-2xl">
          Create tasks and organize your to-do items.
        </p>
      </div>
    </section>
  );
};

export default DisplayTodos;

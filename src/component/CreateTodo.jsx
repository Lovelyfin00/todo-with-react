// CreateTodo.js
import React from "react";
import AddTaskModal from "./AddTaskModal";
import DisplayTodos from "./DisplayTodos";

const CreateTodo = ({ showModal, setShowModal, taskList, toggleCheckbox, deleteTodo, filterTasks, setTaskList }) => {
  const handleModalClose = () => {
    setShowModal(false);
  };

  const taskCount = taskList.length;
  const completedTasks = taskList.filter((task) => task.status === "completed").length;

  return (
    <section className="flex justify-center bg-primary-grey-600 min-h-screen">
      <div className="flex flex-wrap justify-center absolute top-[13.6rem] w-96 md:w-3/4">
        <button
          onClick={() => setShowModal(true)}
          type="button"
          className="text-white bg-primary-purple px-6 md:px-14 py-2 h-12 rounded-tl-2xl rounded-br-2xl"
        >
          Add Task
        </button>
      </div>
      {showModal && (
        <>
          <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-40 z-10 backdrop-filter backdrop-blur-lg"
            onClick={handleModalClose}
          ></div>
          <AddTaskModal closeModal={handleModalClose} setTaskList={setTaskList} />
        </>
      )}
      <DisplayTodos taskList={taskList} taskCount={taskCount} completedTasks={completedTasks} toggleCheckbox={toggleCheckbox} deleteTodo={deleteTodo} />
    </section>
  );
};

export default CreateTodo;

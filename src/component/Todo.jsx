import React, { useEffect, useState } from "react";

import CreateTodo from './CreateTodo';

import logoImage from '../assets/Logo.svg';

const Todo = () => {
  const [showModal, setShowModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const savedTaskArray = JSON.parse(window.localStorage.getItem("tasksArray"));
    setTaskList(savedTaskArray || []);
  }, []);

  const toggleCheckbox = (taskId) => {
    const updatedTaskList = taskList.map((task) => {
      if (task.id === taskId) {
        return { ...task, status: task.status === "active" ? "completed" : "active" };
      }
      return task;
    });

    setTaskList(updatedTaskList);
    window.localStorage.setItem("tasksArray", JSON.stringify(updatedTaskList));
  };

  const deleteTodo = (id) => {
    const list = taskList.filter(task => task.id !== id);

    setTaskList(list);
    window.localStorage.setItem("tasksArray", JSON.stringify(list));
  }

  return (
    <main className="flex justify-center items-center">
      <section className="w-full relative">
        <div className="flex justify-center items-center h-60 bg-primary-grey-700">
          <img src={logoImage} alt="logo" />
        </div>
        <CreateTodo deleteTodo={deleteTodo} showModal={showModal} setShowModal={setShowModal} taskList={taskList} setTaskList={setTaskList} toggleCheckbox={toggleCheckbox} />
      </section>
    </main>
  );
};

export default Todo;

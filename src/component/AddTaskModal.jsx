import React, { useState } from "react";

const AddTaskModal = ({ closeModal, setTaskList }) => {
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("active");
    const [title, setTitle] = useState("");
    const [alertText, setAlertText] = useState(false);

    const saveTask = (event) => {
        event.preventDefault();

        const form = event.target.form;

        const savedTaskArray = window.localStorage.getItem("tasksArray");
        const previousTasks = savedTaskArray ? JSON.parse(savedTaskArray) : [];

        const task = {};

        if (title !== "" && description !=="") {
            task["id"] = previousTasks.length + 1;
            task["title"] = title;
            task["description"] = description;
            task["status"] = status;
            
            previousTasks.push(task);
            setTaskList(previousTasks);
            window.localStorage.setItem("tasksArray", JSON.stringify(previousTasks));

            form.submit();
        } else {
            setAlertText(true);
        }

        setTimeout(() => {
            setAlertText(false);
        }, 3000)
    }

    return (
        <div className="w-80 md:w-1/2 bg-primary-grey-100 absolute rounded px-10 md:px-20 py-5 top-40 z-20">
            <h4 className="text-primary-purple font-bold text-lg mb-6">Add Task</h4>
            <form id="add-task-form">
                <div className="mb-6">
                    <label htmlFor="title" className="block mb-1">Title</label>
                    <input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border-0 rounded focus:outline-primary-purple focus:ring-0" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="description" className="block mb-1">Description</label>
                    <textarea name="description" id="description" value={description} onChange={(e) => setDescription(e.target.value)} rows="5" className="w-full border-0 rounded focus:outline-primary-purple focus:ring-0" required></textarea>
                </div>
                <div className="mb-6">
                    <label htmlFor="status" className="block mb-1">Status</label>
                    <select name="status" id="status" value={status} onChange={(e) => setStatus(e.target.value)} className="w-full border-0 rounded focus:outline-primary-purple focus:ring-0" required>
                        <option value="active">Active</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
                {alertText && 
                    <p className="text-red-700 mb-3">The {title === "" ? "title" : "description"} cannot be left blank</p>
                }
                <div className="flex justify-between items-center">
                    <button 
                        onClick={(event) => saveTask(event)}
                        className="border-primary-purple border-2 px-6 py-2 rounded text-primary-grey-600 font-medium hover:bg-primary-purple hover:text-white">Add Task</button>
                    <button
                    onClick={closeModal}
                    className="bg-primary-blue hover:border-primary-blue hover:bg-transparent hover:text-primary-grey-700 hover:border-2 text-white font-medium px-6 py-2 rounded"
                    >
                    Close
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddTaskModal;

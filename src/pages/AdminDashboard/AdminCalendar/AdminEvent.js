import axios from 'axios';
import React, { useState } from 'react';
import { Link } from "react-router-dom";

const AdminEvent = () => {
    const [input, setInput] = useState({ className: "", event: "", dateTime: ""});

    // funcction that allow you to intaract with forms  
    const handleChange = (e) => {
        const newInput = { ...input };
        newInput[e.target.id] = e.target.value;
        setInput(newInput)
        console.log(newInput)
    }
    //  function that submit the store the data on
    const handleSubmit = (event) => {
        event.preventDefault();
        let fileData = new FormData();
        axios.post("http://localhost", {
            ...input, schoolId: 102
        }).then(res => {
            if(res.message){
                alert(res.message);
                return; 
            }
            alert('successfully created!')
            console.log(res.data)
            setInput({ className: "", event: "", dateTime: "" });
        });
    }

    return (
        <>
        <form method="post" onSubmit={handleSubmit}>
                    <div className="">
                        <select name="select_classes" 
                        className=" w-64 mb-2
                        bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        id='className' value={input.className}
                            onChange={handleChange}
                        >
                            <option>Select classes</option>
                            <option value="1">class 1</option>
                            <option value="2">class 2</option>
                            <option value="3">class 3</option>
                            <option value="4">class 4</option>
                        </select>
                        <select name="select_event" 
                        className=" w-64 mb-2
                        bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        id='event' 
                        value={input.event}
                            onChange={handleChange}
                        >
                            <option>Select Event</option>
                            <option value="event1">Event 1</option>
                            <option value="event2">Event 2</option>
                            <option value="event3">Event 3</option>
                            <option value="event4">Event 4</option>
                        </select>
                        <button
                        type="button"
                        className="text-white bg-blue-500 hover:text-black-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-2 my-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700"
                    >
                        Add to Notification
                    </button>
                    </div>
                        <div className="">
                            <textarea 
                            onChange={handleChange}
                            className=" w-full p-3 form-control block text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
                            id="formTex"
                            placeholder="1. Assessment Link
                                        2. Quiz Due
                                        3. Pay Fee Dues">
                                
                            </textarea>
                        </div>
                    <div className="">        
                        <button
                            type="button"
                            className="text-white bg-blue-500 hover:text-black-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 my-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700"
                        >
                            Notify
                        </button>
                        <button
                            type="button"
                            className="text-white bg-blue-500 hover:text-black-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 my-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700"
                        >
                            <Link to="/adminDashboard/adminCalender">Back</Link>
                        </button>
                    </div>
                </form>
        </>
    )
}

export default AdminEvent;
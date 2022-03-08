import React, { useState } from 'react';
import CalendarComponent from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Link, Outlet } from "react-router-dom";
import CreateEvent from "./CreateEvent"
import "./calendar.css";
import axios from 'axios';

function Calendar(){

    const [date, setDate] = useState(new Date());
    const [input, setInput] = useState({ dateTime: ""});

    //  function that submit the store the data on
    const handleChange = () => {
        setDate(date);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost", {
            ...input
        }).then(res => {
            if(res.message){
                alert(res.message);
                return; 
            }
            alert('successfully created!')
            console.log(res.data)
            setInput({ dateTime: "" });
        });
    }
    return (
    <div className="w-full bg-gray-200">
        <h1 className="text-3xl mt-4 text-center base">Teacher Calendar</h1>
        <div className="flex  border-2 p-10 border-green w-full">
            <div className="flex flex-col">
                <CalendarComponent className="calendar" onChange={handleChange} value={date} />
            </div>
        <div className="flex flex-col">
            <section className='m-2 p-2 border-2 border-gray-300 shadow bg-gray-100'>
                <form method="post" onSubmit={handleSubmit}>
                    <div className="p-5">
                        <div className='pb-5 flex gap-5 items-center'>
                            <input type="datetime-local" name="dateTime" id="dateTime" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="dateTime"
                                value={input.dateTime} onChange={handleChange}
                                min={new Date().toISOString().slice(0, -8)}
                            />
                        </div>
                        <button
                        type="button"
                        className="text-white bg-blue-500 hover:text-black-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-2 my-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700"
                    >
                       <Link to="create-event">Create Event</Link>
                    </button>
                    <Outlet />
                    </div>
                    </form>
                </section>
            </div>
        </div>
    </div>
    )
}

export default Calendar;
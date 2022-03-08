import React, { useState } from 'react'
import axios from 'axios';
import {Link} from "react-router-dom"

const GenerateSchedule = () => {
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
                            <Link to="/calendar1">Back</Link>
                        </button>
                    </div>
                </form>
        </>
    )
}

export default GenerateSchedule;
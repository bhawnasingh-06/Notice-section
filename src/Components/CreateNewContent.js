import React, { useState, useEffect } from 'react'
import axios from 'axios';

const CreateNewContent = () => {
    const [input, setInput] = useState({ className: "", subject: "", documentType: "", dateTime: ""});
    const [isChecked, setChecked] = useState(false)
    const [file, setFile] = useState(null)


    const handleCheck = () => {
        setChecked(!isChecked)
        console.log(isChecked ? false : true)
    }

    // function that handle change of my file
    const handleFile = (e) => {
        setFile(e.target.files[0])
    }

    const handleSubmitFile = () => {
        const data = new FormData();
        data.append('file', file);
        axios.post('//adrees', data)
            .then(data => console.log('Success', data))
            .then(error => console.log('Error', error))
    }

    console.log(file)
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
        fileData.append('file', file);

        axios.post("http://localhost", {
            ...input, ...fileData, schoolId: 102
        }).then(res => {
            if(res.message){
                alert(res.message);
                return; 
            }
            alert('successfully created!')
            console.log(res.data)
            setInput({ className: "", subject: "", documentType: "", dateTime: "" });
        });
        handleSubmitFile();
    }

    return (
        <>
            <section className='m-2 p-2 w-full border-2 border-gray-300 shadow bg-gray-100'>
                <h1 className='text-2xl p-2 text-white bg-blue-500 font-semibold mb-5 m-3'>Upload Data</h1>

                <form method="post" onSubmit={handleSubmit}>
                    <div className="">
                        <select name="select_classes" 
                        className=" w-64 mb-5
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
                        <select name="select_subject" 
                        className=" w-64 mb-5
                        bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        id='subject' 
                        value={input.subject}
                            onChange={handleChange}
                        >
                            <option>Select Subject</option>
                            <option value="english">English</option>
                            <option value="mathematics">Mathematics</option>
                            <option value="physics">Physics</option>
                            <option value="chemistry">Chemistry</option>
                        </select>
                        <select name="select_document_type" 
                        className=" w-64 mb-5
                        bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        id='documentType' 
                        value={input.documentType}
                            onChange={handleChange}
                        >
                            <option>Select Type of File</option>
                            <option value="pdf">PDF</option>
                            <option value="jpg">JPG</option>
                            <option value="word">WORD</option>
                            <option value="pptx">PPTX</option>
                        </select>
                    </div>

                    <div className='p-2 flex gap-5 items-center'>
                        <h3 className="text-lg">Date of Published: </h3>
                        <input type="datetime-local" name="dateTime" id="dateTime" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="dateTime"
                            value={input.dateTime} onChange={handleChange}
                            min={new Date().toISOString().slice(0, -8)}
                        />
                    </div>
                    <div className="flex">
                        <div className="mb-3 w-96">
                            <label htmlFor="formFile" 
                            className="form-label inline-block mb-2 text-gray-700">File must be chosen before upload</label>
                            <input 
                            onChange={handleFile}
                            className="form-control block w-full text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
                            type="file" id="formFile" />
                        </div>
                    </div>
                    <div className="flex mb-5">
                        <div className="">
                            <input
                            type="checkbox"
                            id="notify"
                            name="notify"
                            value="Notify Teacher"
                            checked={isChecked}
                            onChange={handleCheck}
                          />
                            <label className="ml-2 form-check-label inline-block text-gray-800" 
                            htmlFor="inlineCheckbox2">Notify Teacher ?</label>
                        </div>
                    </div>        
                    <button
                        type="button"
                        className="text-white bg-blue-500 hover:text-black-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 my-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700"
                    >
                        Upload
                    </button>
                </form>

            </section>
        </>
    )
}

export default CreateNewContent;
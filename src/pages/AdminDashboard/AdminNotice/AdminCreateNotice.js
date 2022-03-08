import React, { useState } from 'react'
import Button from "../../../YIEUI/Button";
import { useNavigate } from "react-router-dom";
import SelectInput from "../../../Components/SelectInput";
import { departments, schoolClasses } from "../../../dummyData";
function AdminCreateNotice() {
    const navigate = useNavigate();
    const [date, setDate] = useState("");
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [file, setFile] = useState("");
    const [entry, setEntry] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();
        const newEntry = { id: new Date().getTime().toString(), date, title, text, file };

        setEntry([...entry, newEntry]);
        setDate("");
        setTitle("");
        setText("");
        setFile("");
    };
    return (
        <div className="w-full bg-gray-50">
            <div>
                <h2 className="text-center mt-8 text-xl font-bold ">Create Notice</h2>
                <div className="flex items-center">
                    {/* select class */}
                    <div className="w-1/4 ">
                        <SelectInput values={schoolClasses} />
                    </div>
                    <span className="mx-4">OR</span>
                    {/* select department */}
                    <div className="w-1/4 mr-3">
                        <SelectInput values={departments} />
                    </div>
                </div>

                <form className=" flex flex-col " onSubmit={submitForm}>
                    <div className="flex items-center">
                        <textarea
                            style={{ resize: "none" }}
                            className="border border-gray-400 mt-4 w-1/4"
                            name="recipients"
                            value={title}
                            placeholder="Enter the recipients"
                            onChange={(e) => setTitle(e.target.value)}
                        ></textarea>
                        <textarea
                            style={{ resize: "none" }}
                            className="border border-gray-400 mt-4 mx-12 w-1/4 mr-3"
                            name="description"
                            value={text}
                            placeholder="Enter the description"
                            onChange={(e) => setText(e.target.value)}
                        ></textarea>
                    </div>
                    <input
                        className="border border-gray-400 mt-4 mx-2 w-1/4 mr-3"
                        placeholder="Select Date"
                        type="date"
                        name="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}/>


                    <div className=" flex flex-col">
                        <input
                            className="border border-gray-400 mt-4 mx-2 mb-5 w-1/4 mr-3"
                            type="file"
                            name="file"
                            value={file}
                            accept="image/*,.pdf"
                            onChange={(e) => setFile(e.target.value)}/>
                    </div>

                    <div className="flex gap-5 mt-5">
                        <Button variant="secondary">CREATE NOTICE</Button>
                        <Button variant="secondary"
                            onClick={() => navigate("/adminDashboard/adminNotices")}>BACK</Button>
                        <Button variant="secondary">SEND INDIVIDUALLY TO ID</Button>

                    </div>
                </form>
            </div>
        </div>)
}

export default AdminCreateNotice
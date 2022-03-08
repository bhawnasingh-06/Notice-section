import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
// import axios from "axios";

// import "./notice.css"
function ViewUploadedContent() {

    // const [notices, setNotices] = useState([])

    // useEffect(() => {
    //     axios.get('http://localhost:5000/notice')
    //         .then((res) => setNotices(res.data))
    //         .catch((err) => console.log(err))
    // }, [])

    return (
            <div className="w-full p-6">
                <div className="flex ml-5 space-x-4 mt-6">
                    <Link to="/view_previous_content" className="hover:text-black py-2 px-5 text-xl bg-blue-600 text-white ">         
                         View Previous Content
                    </Link>
                </div>
                <div className=" ml-5 flex space-x-4 mt-6">
                    <Link to="/" className=" hover:text-black py-2 px-5 text-xl bg-blue-600 text-white ">
                         Go Back to Content
                    </Link>
            </div>
        </div>
    )
}

export default ViewUploadedContent;
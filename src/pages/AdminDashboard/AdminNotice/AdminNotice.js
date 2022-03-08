import React from 'react'
import AdminNoticeApi from '../../../Api/AdminNoticeApi'
import Button from "../../../YIEUI/Button";
import { useNavigate } from "react-router-dom";
function AdminNotice(){

  const navigate = useNavigate();
  return (
    <div className="w-full bg-gray-50">
        <h1 className="text-center mt-8 text-xl font-bold ">NOTICE BOARD</h1>
        <div className=" w-[70%] block mx-auto ">
        {
            AdminNoticeApi.map(val=>{
                return(
                    <h2 key={val.id} className="my-4 mx-3 font-semibold">{val.title}</h2>
                )
            })
        }
        <Button variant="secondary"
        onClick={() => navigate("/adminDashboard/createNotice")}>CREATE NOTICE</Button>

        </div>
        
    </div>
  )
}

export default AdminNotice
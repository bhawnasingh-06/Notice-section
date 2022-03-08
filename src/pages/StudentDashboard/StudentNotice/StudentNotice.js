import React from 'react'
import StudentNoticeApi from '../../../StudentApi/StudentNoticeApi';
import Button from "../../../YIEUI/Button";
function StudentNotice(){
  return (
      
    <div className="w-full bg-gray-50">
        
    <h1 className="text-center mt-8 text-xl font-bold ">NOTICE BOARD</h1>
    <div className=" w-[70%] block mx-auto ">
    {
        StudentNoticeApi.map(val=>{
            return(
                <h2 key={val.id} className="my-4 mx-3 font-semibold">{val.title}</h2>
            )
        })
    }
    <Button variant="secondary">UPDATE NOTICES</Button>

    </div>
    
</div>
  )
}

export default StudentNotice
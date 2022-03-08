import React,{useState} from "react";
import { useParams,Link } from "react-router-dom";
import TeacherMenu from "./TeacherMenu";
import TeacherAssesmentEveluationApi from "../../TeacherApi/TeacherAssesmentEveluationApi";
const AssesmentEveluationDetail = () => {
  const [subject,setSubject] = useState('');
  const [quiz,setQuiz] = useState('');
  const [Entry,setEntry] = useState([]);
  const { name } = useParams();

  const handleForm = (e) =>{
    e.preventDefault();
    if(!subject && !quiz){
      alert("add")
    }

    else{
      const newEntry = {id: new Date().getTime().toString(),quiz,subject}
      setEntry([...Entry,newEntry]);
      setSubject('');
      setQuiz('');
    }
  }
  return (
    <div className="border border-black w-[85%] block my-2 mx-auto lg:w-[62%] ">
      <div className="my-2">
        <h1 className="text-center font-bold mb-3 text-xl ">
          Teacher Dashboard
        </h1>

        <TeacherMenu />

        <div className="my-2">
          {TeacherAssesmentEveluationApi.filter(
            (card) => card.name === name
          ).map((card) => {
            return (
              <>
                <div key={card.id} className="flex mx-5 my-5 ">
                  <h1 className=" font-semibold">{card.name}</h1>
                  <h1 className="mx-2 font-semibold">{card.subject}</h1>
                  <h1 className="mx-2 font-semibold">{card.grade}</h1>
                  <h1 className="mx-2 font-semibold">{card.Teacher}</h1>
                </div>

                <div className="flex mx-5 my-5">
                  {card.agg.map((val) => {
                    return (
                      <>
                        <h1 key={val.id}>{val.monthly}</h1>

                        <div className="w-[25%] bg-gray-200 rounded-full h-5 dark:bg-gray-700 my-1 mx-2">
                          <div
                            className="bg-blue-600 h-5 rounded-full"
                            style={{ width: val.width }}
                          ></div>
                        </div>
                        <h1 className="mx-2">{val.title}</h1>
                      </>
                    );
                  })}
                </div>

                <form
                  className=" flex flex-col mx-5 w-[80%] md:w-[50%] lg:w-[50%]"
                  onSubmit={handleForm}
                >
                  <select name="subject"
                  value={subject}
                  onChange={(e)=>setSubject(e.target.value)}
                   className=" py-2 border-2 border-gray-500 outline-none px-4 rounded-md">
                    <option className="">Select Chapter</option>
                    {card.select.map((val) => {
                      return <option key={val.id}>{val.chapter}</option>;
                    })}
                  </select>

                  <select
                   name="quiz"
                    value={quiz}
                    onChange={(e)=> setQuiz(e.target.value)}
                   className=" py-2 border-2 border-gray-500 outline-none px-4 rounded-md my-3">
                    <option>Select Assesment/quiz</option>

                    {card.asses.map((val) => {
                      return <option key={val.id}>{val.name}</option>;
                    })}
                  </select>
                  <div className="my-5">
                  <button  className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>Generate perfomance Report</button>
                  </div>
                </form>
              </>
            );
          })}
        </div>
         
         <div className=" bg-slate-400 py-4 px-4 w-[80%] block mx-auto my-3">
         <marquee className="text-xl uppercase text-white" direction="right">Performance Report</marquee>
             {
                Entry.map(val=>{
                  return (
                    <>
                      <div className="card bg-slate-300 py-2 my-5 px-2 w-[90%] block mx-auto rounded-md">
                         <h1 className=" text-sm lg:text-lg text-gray-500 ">Chapter: {val.subject}</h1>
                         <h1 className=" text-sm my-2 lg:text-lg text-gray-500">Quiz/Assesment: {val.quiz}</h1>
                      </div>
                    </>
                  )
                })
             }
         </div>
         
         <div className="py-20 mx-5">
         <Link to="/teacher/mainEveluation/assesment" className="py-2.5 px-5  text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 float-right">Back</Link>
         </div>
      </div>
    </div>
  );
};

export default AssesmentEveluationDetail;

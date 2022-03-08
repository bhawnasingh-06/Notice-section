import React,{useState} from 'react'
import FirstApi from '../Api/FirstApi'
import SecondApi from '../Api/SecondApi';
import Upload from './Upload';
const SchoolAdmin = ({upload,admin}) => {
    const [data,setData] = useState(FirstApi);

    const [sub,setSub] = useState(SecondApi);

    const [name,setName] = useState('');
    const [subject,setSubject] = useState('');
    // const [file,setFile] = useState('');
    const [date,setDate] = useState('');

    const [Entry,setEntry] = useState([]);

    const handleSubmit = (e)=>{
      
        e.preventDefault();
        if(name && subject && date ){
            // const formData = new FormData();

            // formData.append('File', file);
            const newEntry = {id: new Date().getTime().toString() , name,subject,date};
            setEntry([...Entry , newEntry])
            setName("");
            setSubject("");
            // setFile("");
            setDate("");
        }

        else{
            alert("Plz fill The data");
        }


    }

    // const handleImg = (e) =>{
      
    //      setFile(e.target.files[0]);
    // }
  return (

    <div className=' border-2 border-gray-400 px-10 py-5 my-10 w-[90vw] block mx-auto md:w-[80vw] lg:w-[62vw]'>
      <h1 className=" text-2xl font-bold text-center">{admin}</h1>

      <div className=' border border-black px-4 py-3 my-4'>
        <h2 className=' font-serif text-md'>{upload}</h2>
        
        <form onSubmit={handleSubmit} className=' flex flex-col w-[200px]'  action="">
       
            <select 
            className=' border border-gray-500 my-3 rounded-md px-5 py-2 outline-none '
             name="name" value={name} onChange={(e)=>setName(e.target.value)}
            >
                <option>Select Class</option>
                {
                    data.map(val=>{
                        return (
                            <option key={val.id} >{val.name}</option>
                        )
                    })
                }
            </select>

            <select 
            className=' border border-gray-500 my-3 rounded-md px-5 py-2 outline-none '
             name="subject" value={subject} onChange={(e)=>setSubject(e.target.value)}
            >
                <option>Select Subject</option>
                {
                    sub.map(val=>{
                        return (
                            <option key={val.id}>{val.subject}</option>
                        )
                    })
                }
            </select>

            <label htmlFor="">Select Type Of file</label>
            {/* <input onChange={handleImg} type="file" name="file" className='border border-gray-500 my-3 rounded-md px-5 py-2 outline-none'  /> */}
            <Upload/>

            <input className='border border-gray-500 my-3 rounded-md px-5 py-2 outline-none' type="date" value={date} name="date" onChange={(e)=>setDate(e.target.value)}  />

            <button className=' my-3 px-4 py-2 bg-yellow-500 rounded-md capitalize font-serif text-lg'>Create Assesment</button>
        </form>
  
        <div>
            {
                Entry.map(val=>{
                    return (
                        <>
                          <div className=' my-3'>
                            <p> <span className=' text-blue-700 font-bold'>Class:</span> {val.name}</p>
                            <p><span className=' text-blue-700 font-bold'>Subject:</span> {val.subject}</p>
                          
                            <p><span className=' text-blue-700 font-bold'>Date:</span>  {val.date}</p>
                            </div>
                           
                        </>
                    )
                })
            }
          
        </div>

      </div>
    </div>
  )
}

export default SchoolAdmin
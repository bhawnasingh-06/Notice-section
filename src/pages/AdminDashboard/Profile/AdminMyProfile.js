import React,{useState} from "react";

const MyProfile = ()=>{
    const [name , setName] = useState("");
    const[school , setSchool] = useState("");
    const [admin,setAdmin] = useState("");
    const [schoolId,setSchoolId] = useState("");
    // create an array to show the user information matlab jb form ko koi vhar de
    const[allEntry , setAllEntry] = useState([]);

    const [toggleSubmit,setToggleSubmit] = useState(true);  // for edit icon to come after click
    const [isEditItem,setIsEditItem] = useState(null);
    const submitForm = (e) =>{
        e.preventDefault();
    if(!name && !school && !admin && !schoolId){
        alert("Please add an item")
    }

        else if (name && school && admin && schoolId && !toggleSubmit){   // jisko mai edit krunga wahi hona chaye
            setAllEntry(
                allEntry.map((elem) =>{
                  if(elem.id===isEditItem){
                      return { ...elem,name,school,admin,schoolId }
                  }
                  return elem
                })
               
            )
            setToggleSubmit(true);  
            setName("");
            setSchoolId("");
            setSchool("");
            setAdmin("");
      
            setIsEditItem(null); 
          }

          else{
            const newEntry = {id: new Date().getTime().toString() , name , school,admin,schoolId };
            // pehle id grapes krlo yr 
            setAllEntry([...allEntry , newEntry])
            // array ke rup mai krane ke liye ye hi kiya jata hai
            setName("");
                setSchoolId("");
               setSchool("");
           setAdmin("");
          }
        
     
    }

    const editItem = (id) => {
        let newEditItem = allEntry.find((elem) =>{
            return elem.id === id;
        });
      //   console.log(newEditItem);
        setToggleSubmit(false);  // for edit icon to come
        setName(newEditItem.name);
        setSchool(newEditItem.school);
        setSchoolId(newEditItem.schoolId)
        setAdmin(newEditItem.admin)
        // for getting the name to edit the value taki form mai vo name display ho jaye

  
        setIsEditItem(id); // kis particuler item ko edit kr rahe 
        
      }

   
    
    return (
        <>
           <div className=" border-2 border-black">
            <h1 className=" underline mx-3  text-blue-500">My School</h1>
            <div className="my-3">
                <input className=" rounded-md mx-3  outline-none border-2 border-gray-400 py-1 px-4" type="text" name="name" id="name"
                value = {name}
                onChange ={(e) => setName(e.target.value)}
                 autoComplete="off" placeholder="Enter Your Name"/>
            </div>

            <div className=" my-3">
               
                <input   className=" rounded-md mx-3 outline-none border-2 border-gray-400 py-1 px-4" type="text" name="school" id="school" autoComplete="off" 
                value = {school}
                onChange = {(e) => setSchool(e.target.value)} placeholder="Enter Your School"
                />
            </div>
            <div className="my-3">
                <input  className=" rounded-md mx-3 outline-none border-2 border-gray-400 py-1 px-4" type="text" name="admin" value={admin}  onChange = {(e) => setAdmin(e.target.value)} placeholder="Enter Admin Id" />
            </div>
            <div className="my-3">
                <input  className=" rounded-md mx-3 outline-none border-2 border-gray-400 py-1 px-4" type="text" name="schoolId" value={schoolId}  onChange = {(e) => setSchoolId(e.target.value)} placeholder="Enter SchoolId" />
            </div>
              
             {
                 toggleSubmit ? <button title="Add Item" className=" bg-yellow-500 py-2 px-4 my-2 hover:bg-yellow-600 mx-3 rounded-md " onClick={submitForm}  type="submit">Submit</button> : <button title="Upadte Item" className=" mx-3 rounded-md bg-yellow-500 py-2 px-4 my-2 hover:bg-yellow-600 "  onClick={submitForm}>Upadted</button>
             }
          
   {/* value main chig hai  */}
           <div className="fat">
              {
                  allEntry.map(elem=>{
                      
                       return (
                           <>
                            <div key={elem.id} className="mx-3">
                                <h2> <span className=" font-bold">Name</span>:{elem.name}</h2>
                                <h2><span className=" font-bold">School</span>:{elem.school}</h2>
                                <h2><span className=" font-bold">Admin</span>:{elem.admin}</h2>
                                <h2><span className=" font-bold">SchoolID</span>:{elem.schoolId}</h2>
                                <button className="bg-yellow-500 py-2 px-4 my-2 hover:bg-yellow-600 mx-3 rounded-md "  title="Edit Item " onClick={() => editItem(elem.id,elem.name,elem,school,elem.admin,elem.schoolId)}>Upadted</button>

                            </div>
                           </>
                       )
                  })
              }
           </div>
            </div>

        
        </>
    )
}

export default MyProfile;
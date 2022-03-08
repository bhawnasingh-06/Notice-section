import React,{useState} from "react";

const SchoolProfile = ()=>{
    const [schoolName , setSchoolName] = useState("");
    const [schoolId,setSchoolId] = useState("");
    const[address , setAddress] = useState("");
    const [employ,setEmploy] = useState("");
    const [classes,setClasses] = useState("");
    const [complition,setComplition] = useState("");
 
    // create an array to show the user information matlab jb form ko koi vhar de
    const[allEntry , setAllEntry] = useState([]);

    const [toggleSubmit,setToggleSubmit] = useState(true);  // for edit icon to come after click
    const [isEditItem,setIsEditItem] = useState(null);
    const submitForm = (e) =>{
        e.preventDefault();
    if(!schoolName && !schoolId && !address && !employ && !classes && !complition){
        alert("Please add an item")
    }

        else if (schoolName && schoolId && address && employ && classes && complition && !toggleSubmit){   // jisko mai edit krunga wahi hona chaye
            setAllEntry(
                allEntry.map((elem) =>{
                  if(elem.id===isEditItem){
                      return { ...elem,schoolName,schoolId,address,employ,classes,complition }
                  }
                  return elem
                })
               
            )
            setToggleSubmit(true);  
            setSchoolName("");
            setSchoolId("");
            setAddress("");
            setEmploy("");
            setClasses("");
            setComplition("");
            setIsEditItem(null); 
          }

          else{
            const newEntry = {id: new Date().getTime().toString() , schoolName , schoolId , address , employ , classes , complition};
            setAllEntry([...allEntry , newEntry])
            setSchoolName("");
            setSchoolId("");
            setAddress("");
            setEmploy("");
            setClasses("");
            setComplition("");
          }
        

     
    }

    const editItem = (id) => {
        let newEditItem = allEntry.find((elem) =>{
            return elem.id === id;
        });
      //   console.log(newEditItem);
        setToggleSubmit(false);  // for edit icon to come
         setSchoolName(newEditItem.schoolName);
         setSchoolId(newEditItem.schoolId);
         setAddress(newEditItem.address);
         setEmploy(newEditItem.employ);
         setClasses(newEditItem.classes);
         setComplition(newEditItem.complition);
        // for getting the name to edit the value taki form mai vo name display ho jaye

  
        setIsEditItem(id); // kis particuler item ko edit kr rahe 
        
      }
    return(
        <>
              <div className=" border-2 border-black px-10 py-5">
         
            <div className="my-3">
                <input className=" rounded-md mx-3  outline-none border-2 border-gray-400 py-1 px-4" type="text" name="schoolName" id="schoolName"
                value = {schoolName}
                onChange ={(e) => setSchoolName(e.target.value)}
                 autoComplete="off" placeholder="Enter Your Name"/>
            </div>

            <div className=" my-3">
               
                <input   className=" rounded-md mx-3 outline-none border-2 border-gray-400 py-1 px-4" type="text" name="schoolId" id="schoolId" autoComplete="off" 
                value = {schoolId}
                onChange = {(e) => setSchoolId(e.target.value)} placeholder="Enter Your School"
                />
            </div>
            <div className="my-3">
                <input  className=" rounded-md mx-3 outline-none border-2 border-gray-400 py-1 px-4" type="text" name="address" value={address}  onChange = {(e) => setAddress(e.target.value)} placeholder="Enter Admin Id" />
            </div>
            <div className="my-3">
                <input  className=" rounded-md mx-3 outline-none border-2 border-gray-400 py-1 px-4" type="number" name="employ" value={employ}  onChange = {(e) => setEmploy(e.target.value)} placeholder="Enter SchoolId" />
            </div>
              
            <div className="my-3">
                <input  className=" rounded-md mx-3 outline-none border-2 border-gray-400 py-1 px-4" type="number" name="classes" value={classes}  onChange = {(e) => setClasses(e.target.value)} placeholder="Enter SchoolId" />
            </div>

            <div className="my-3">
                <input  className=" rounded-md mx-3 outline-none border-2 border-gray-400 py-1 px-4" type="text" name="complition" value={complition}  onChange = {(e) => setComplition(e.target.value)} placeholder="Enter SchoolId" />
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
                                <h2> <span className=" font-bold">School Name</span>:{elem.schoolName}</h2>
                                <h2><span className=" font-bold">School Id</span>:{elem.schoolId}</h2>
                                <h2><span className=" font-bold">Address</span>:{elem.address}</h2>
                                <h2><span className=" font-bold">Number Of Employess</span>:{elem.employ}</h2>
                                <h2><span className=" font-bold">Total Classes</span>:{elem.classes}</h2>
                                <button className="bg-yellow-500 py-2 px-4 my-2 hover:bg-yellow-600 mx-3 rounded-md "  title="Edit Item " onClick={() => editItem(elem.id)}>Upadted</button>

                            </div>
                           </>
                       )
                  })
              }

              <div className=" flex flex-col">
                  <select className=" rounded-md py-3 px-10 w-[300px] my-3 mx-3 outline-none border border-gray-400" name="" id=""  >
                        <option value="">Select Aggregate Profile</option>
                  </select>

                  <button className=" rounded-md my-3 w-[400px] bg-yellow-400 hover:bg-yellow-500 px-20 py-2">Generate Aggregate Report</button>
              </div>
           </div>
            </div>

        </>
    )
}

export default SchoolProfile;
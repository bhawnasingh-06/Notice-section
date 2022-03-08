import React, { useState } from "react";

const AddProfile = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [school, setSchool] = useState("");
  const [right, setRight] = useState("");
  const [type, setType] = useState("");

  // create an array to show the user information matlab jb form ko koi vhar de
  const [allEntry, setAllEntry] = useState([]);
  // jaha blank array hoga waha map method lagao
  const submitForm = (e) => {
    // type submit kro to ye jarur kro yar
    e.preventDefault();
    if (name && contact && school && right && type) {
      const newEntry = {
        id: new Date().getTime().toString(),
        name,
        contact,
        school,
        right,
        type,
      };
      setAllEntry([...allEntry, newEntry]); // user ke pehle ka data vi rahe basically
      console.log(allEntry);
      setName("");
      setContact("");
      setSchool("");
      setRight("");
      setType("");
    } else {
      alert("plz fill the data");
    }

}
    return (
      <>
        <div className=" px-10 py-5 border-2 border-black">
          <h1 className=" font-bold mx-3 text-2xl">Add User</h1>

          <form onSubmit={submitForm} className=" flex flex-col my-3">
            <input
              value={name}
              name="name"
              className="my-2 px-6 py-2 border border-gray-400 w-[200px] rounded-md outline-none"
              type="text"
              placeholder="Add Name Of User"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              value={contact}
              name="contact"
              className="my-2 px-6 py-2 border border-gray-400 w-[200px] rounded-md outline-none"
              type="text"
              placeholder="Add Contact"
              onChange={(e) => setContact(e.target.value)}
            />
            <input
              onChange={(e) => setSchool(e.target.value)}
              value={school}
              name="school"
              className="my-2 px-6 py-2 border border-gray-400 w-[200px] rounded-md outline-none"
              type="text"
              placeholder="Add School Id"
            />
            <select
             
              name="right"
              value={right}
              className="my-2 px-6 py-2 border border-gray-400 w-[200px] rounded-md outline-none"
              onChange={(e) => setRight(e.target.value)}
             
            >
              <option >Access Right</option>
              <option >True</option>
              <option >False</option>
            </select>

            <select
              name="type"
              value={type}
              className="my-2 px-6 py-2 border border-gray-400 w-[200px] rounded-md outline-none"
              onChange={(e) => setType(e.target.value)}
            >
              <option >Add User Type</option>
              <option >Student</option>
              <option >Teacher</option>
            </select>

            <button className="bg-yellow-500 py-2 px-4 rounded-md w-[200px] my-3">
              Add User
            </button>
          </form>

          <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden shadow-md sm:rounded-lg">
                  <table class="min-w-full">
                    <thead class="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th
                          scope="col"
                          class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          Contact
                        </th>
                        <th
                          scope="col"
                          class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          School Id
                        </th>
                        <th
                          scope="col"
                          class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          Access Rights
                        </th>

                        <th
                          scope="col"
                          class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          User Types
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Asit
                        </td>
                        <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          Sumit
                        </td>
                        <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          Laptop
                        </td>
                        <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          $2999
                        </td>
                        <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          $2999
                        </td>
                      </tr>

                      {allEntry.map((val) => {
                        return (
                          <>
                            <tr key={val.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                              <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              {val.name}
                              </td>
                              <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                               {val.contact}
                              </td>
                              <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                               {val.school}
                              </td>
                              <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                               {val.right}
                              </td>
                              <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                {val.type}
                              </td>
                            </tr>
                          </>
                        );
                      })}

                      {/* <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Apple Imac 27"
                    </td>
                    <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      White
                    </td>
                    <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      Desktop Pc
                    </td>
                    <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      $1999
                    </td>
                    <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      $2999
                    </td>
                   
                  </tr>

                  <tr class="bg-white dark:bg-gray-800">
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Apple Magic Mouse 2
                    </td>
                    <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      White
                    </td>
                    <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      Accessories
                    </td>
                    <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      $99
                    </td>
                    <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      $2999
                    </td>
                  
                  </tr> */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  
                }

export default AddProfile;

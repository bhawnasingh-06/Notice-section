import { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import Filter from "../components/Filter";
import { data, subjects} from "./dummyData";

function ViewPreviousContent() {
  const [subjectSelect, setSubjectSelect] = useState("");
  const [filteredData, setFilteredData] = useState([...data]);

  // link from select top right
  useEffect(() => {
    let temp = [...data];
    if (subjectSelect !== "")
      temp = temp.filter((a) => a.subject === subjectSelect);
    setFilteredData(temp);
  }, [subjectSelect]);

  const handleClear = () => {
    setSubjectSelect("");
  };

  return (
    <div className="flex flex-row h-screen w-full">
      <div className="flex-grow bg-gray-200 p-4 space-y-4">
      <div className='p-2 flex gap-5 items-center'>
            <h3 className="text-lg">Select Date Option: </h3>
            <input type="date" name="dateTime" id="dateTime" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="dateTime"
            />
        </div>
        <div className="flex justify-between mb-6">
        </div>
        {/* Filters  */}
        <div className="flex space-x-4">
          <Filter
            title="All"
            options={subjects}
            selected={subjectSelect}
            handleSelected={setSubjectSelect}
          />
          <button
            onClick={handleClear}
            type="button"
            className="text-gray-900 bg-gray-50 border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800"
          >
            Clear
          </button>
        </div>
        {/* Table  */}
        <div className="flex flex-col">
          <table className="min-w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                >
                  Type
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                >
                  Class
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                >
                  Complition
                </th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- items --> */}
              {filteredData &&
                filteredData.map((data, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {data.subject}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      {data.dueDate}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      {data.class}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      {data.complete}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="flex space-x-4 mt-6">
            <Link to="/view_uploaded_content">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-blue-500  dark:bg-gray-900 rounded-md">
                  Back
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewPreviousContent;

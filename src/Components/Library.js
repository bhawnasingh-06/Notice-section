import { Link } from "react-router-dom";

function Library(){
    return (
    <div className="w-full bg-gray-200">
        <div className="flex justify-around border-2 p-10 border-green w-full">
            <div className="flex flex-col">
            <h1 className="text-3xl base mb-5">Access Content Taught</h1>
                <table className="min-w-full">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                        <th
                        scope="col"
                        className="py-3 px-6 text-lg font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                        Course
                        </th>
                        <th
                        scope="col"
                        className="py-3 px-6 text-lg font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                        Completion
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* <!-- items --> */}
                    <tr
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        >
                            <td className="py-4 px-6 text-lg font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Material Completed
                            </td>
                            <td className="py-4 px-6 text-lg text-gray-500 whitespace-nowrap dark:text-gray-400">
                            60%
                            </td>
                        </tr>
                        <tr
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        >
                            <td className="py-4 px-6 text-lg font-medium text-blue-900 whitespace-nowrap dark:text-white">
                            <Link to="/" className="underline">Science</Link>
                            </td>
                            <td className="py-4 px-6 text-lg text-gray-500 whitespace-nowrap dark:text-gray-400">
                                60%
                            </td>
                        </tr>
                        <tr
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        >
                            <td className="underline py-4 px-6 text-lg font-medium text-blue-900 whitespace-nowrap dark:text-white">
                            <Link to="/">Math</Link>
                            </td>
                            <td className="py-4 px-6 text-lg text-gray-500 whitespace-nowrap dark:text-gray-400">
                            60%
                            </td>
                        </tr>
                        <tr
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        >
                            <td className="underline py-4 px-6 text-lg font-medium text-blue-900 whitespace-nowrap dark:text-white">
                            </td>
                            <td className="py-4 px-6 text-lg text-gray-500 whitespace-nowrap dark:text-gray-400">
                            </td>
                        </tr>
                        <tr
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        >
                            <td className="underline py-4 px-6 text-lg font-medium text-blue-900 whitespace-nowrap dark:text-white">
                            </td>
                            <td className="py-4 px-6 text-lg text-gray-500 whitespace-nowrap dark:text-gray-400">
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="flex flex-col">
            <h1 className="text-3xl base mb-5">Student Completions</h1>
                <table className="min-w-full">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                        <th
                        scope="col"
                        className="py-3 px-6 text-lg font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                        Course
                        </th>
                        <th
                        scope="col"
                        className="py-3 px-6 text-lg font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                        Completion
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* <!-- items --> */}
                    <tr
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        >
                            <td className="py-4 px-6 text-lg font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Material Completed
                            </td>
                            <td className="py-4 px-6 text-lg text-gray-500 whitespace-nowrap dark:text-gray-400">
                            60%
                            </td>
                        </tr>
                        <tr
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        >
                            <td className="py-4 px-6 text-lg font-medium text-blue-900 whitespace-nowrap dark:text-white">
                            <Link to="/" className="underline">Science</Link>
                            </td>
                            <td className="py-4 px-6 text-lg text-gray-500 whitespace-nowrap dark:text-gray-400">
                                60%
                            </td>
                        </tr>
                        <tr
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        >
                            <td className="underline py-4 px-6 text-lg font-medium text-blue-900 whitespace-nowrap dark:text-white">
                            <Link to="/">Math</Link>
                            </td>
                            <td className="py-4 px-6 text-lg text-gray-500 whitespace-nowrap dark:text-gray-400">
                            60%
                            </td>
                        </tr>
                        <tr
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        >
                            <td className="underline py-4 px-6 text-lg font-medium text-blue-900 whitespace-nowrap dark:text-white">
                            </td>
                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                            </td>
                        </tr>
                        <tr
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        >
                            <td className="underline py-4 px-6 text-lg font-medium text-blue-900 whitespace-nowrap dark:text-white">
                            </td>
                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className="flex ml-5 space-x-4 mt-6">
          <Link to="/view_uploaded_content" className="hover:text-black py-2 px-5 text-xl bg-blue-600 text-white ">         
              View Uploaded Content
        </Link>
      </div>
      <div className=" ml-5 flex space-x-4 mt-6">
          <Link to="/create_new_content" className=" hover:text-black py-2 px-5 text-xl bg-blue-600 text-white ">
              Create New Content
        </Link>
      </div>
    </div>
    )
}

export default Library;
import React from "react";
import SelectInput from "../../../Components/SelectInput";
import { departments, schoolClasses } from "../../../dummyData";
import Button from "../../../YIEUI/Button";

const AdminAddDocument = () => {
  return (
    <div className="bg-pink-400">
      <div className="w-3/4 mx-auto py-5">
        <div className="flex items-center">
          {/* select class */}
          <div className="w-1/4 ">
            <SelectInput values={schoolClasses} />
          </div>
          <span className="mx-4">OR</span>
          {/* select department */}
          <div className="w-1/4 mr-3">
            <SelectInput values={departments} />
          </div>
        </div>
        {/* input areas */}
        <div className="grid grid-cols-3 gap-5 mt-5">
          <textarea
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Recipients"
          ></textarea>
          <textarea
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 col-span-2"
            placeholder="Enter Description"
          ></textarea>
        </div>

        {/* more information of doc */}
        <div className="mt-5 flex gap-5">
          <input
            class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="user_avatar_help"
            id="user_avatar"
            type="file"
          />
          <input
            type="date"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
          />
        </div>

        {/* document actions */}
        <div className="flex gap-5 mt-5">
          <Button variant="secondary">Add Document</Button>
          <Button variant="filter">Back</Button>
          <Button variant="filter">Send Individually to ID</Button>
        </div>
      </div>
    </div>
  );
};

export default AdminAddDocument;

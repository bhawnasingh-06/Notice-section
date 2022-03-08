import React from "react";
import SelectInput from "../../../Components/SelectInput";
import { fileTypes, schoolClasses, subjects } from "../../../dummyData";
import Button from "../../../YIEUI/Button";

const CreateContent = () => {
  return (
    <div className="p-5">
      <div className="border border-black">
        <p className="w-max -m-3 mx-5 bg-white px-2">Upload</p>
        <div className="p-5 w-1/2">
          <SelectInput values={schoolClasses} />
          <SelectInput values={subjects} />
          <SelectInput values={fileTypes} />

          {/* publishing data */}
          <div className="my-7">
            <label htmlFor="pubDate">Date of Publishing</label>
            <input
              className="rounded-lg ml-5"
              type="date"
              name="pubDate"
              id="pubDate"
            />

            <div className="my-2">
              <input
                class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="user_avatar_help"
                id="user_avatar"
                type="file"
              />
            </div>

            {/* notify options */}

            <fieldset className="flex my-4">
              <legend class="sr-only">Checkbox variants</legend>

              <div class="flex items-center mb-4 mr-4">
                <input
                  id="checkbox-2"
                  aria-describedby="checkbox-2"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="checkbox-2"
                  class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Notify Class ?
                </label>
              </div>
              <div class="flex items-center mb-4">
                <input
                  id="checkbox-3"
                  aria-describedby="checkbox-3"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="checkbox-3"
                  class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Notify Teacher ?
                </label>
              </div>
            </fieldset>

            {/* notify options */}

            <Button classes="w-1/2" variant="outlined">
              Upload
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateContent;

import React from "react";

const TeacherAssignment = () => {
  return (
    <div className='teacher_assignment'>
      <h1 className='text-[30px] font-bold text-center m-3'>
        Teacher Dashboard
      </h1>

      <form className='main-container flex flex-col m-10'>
        <div className='question-container'>
          <p className='m-2'>Enter Question:</p>
          <textarea
            className='question_input p-2 border-2 border-blue-500  rounded-xl h-28 w-96'
            name='question'
          />
        </div>
        <div className='marks-container'>
          <p className='m-2'>Enter Marks:</p>
          <input
            className='question_input p-2 border-2 border-blue-500  rounded-xl '
            name='marks'
            type='number'
          />
        </div>
        <div className='difficulty-level-container mt-6 flex items-start'>
          <p className='mr-3'>Select Difficulty :</p>
          <select name='difficulty' className='bg-blue-300 rounded-md mb-20'>
            <option value='easy'>Easy</option>
            <option value='medium'>Medium</option>
            <option value='hard'>Hard</option>
          </select>
        </div>

        <button
          type='submit'
          className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 max-w-[140px]'>
          Add Question
        </button>
      </form>
    </div>
  );
};

export default TeacherAssignment;

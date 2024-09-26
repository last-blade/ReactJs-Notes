import React, { useState } from 'react'

function ToDoList() {
  const [task, setTask] = useState("");
  const [listData, setListData] = useState([]);
  function addTask(){
    // setListData([...listData, task]);
    // console.log(listData);

    setListData((data)=>{
      const updatedList = [...listData, task];
      setTask('');
      console.log(updatedList);
      return updatedList;
    });
  }

  function removeTask(index){
    const newList = listData.filter((element, id)=>{
      return index != id;
    })

    setListData(newList);
  }

  function removeAll(){
    setListData([]);
  }

  const editTask = (index) => {
    const previousTask = listData[index];
    const editedTask = prompt('Edit task:', listData[index]);
    
    if(editedTask == ''){
      const updatedList = [...listData];
      updatedList[index] = previousTask;
      setListData(updatedList);
    }
    else if(editedTask !== null) {
      const updatedList = [...listData];
      updatedList[index] = editedTask;
      setListData(updatedList);
    }

  }

  return (
    <>
      <div className='container bg-amber-200 h-screen flex justify-center w-screen'>
        <div className='w-full max-w-md p-6'>
          <h2 className='text-black font-extrabold text-4xl mb-4'>To Do List</h2>
          <div className='mb-4 flex'>
            <input
              type="text"
              placeholder='Add your task/activity'
              value={task}
              onChange={(event) => setTask(event.target.value)}
              className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500'
            />
            <button
              className='ml-2 px-4 py-2 border border-green-300 rounded-lg bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500'
              onClick={addTask}
            >
              Add
            </button>
          </div>
          {listData.length > 0 && (
            <>
              {listData.map((data, i) => (
                <div key={i} className='flex items-center justify-between mb-4'>
                  <textarea
                    value={data}
                    readOnly
                    className='w-full px-3 py-2 border border-gray-300 rounded-lg resize-none'
                  />
                  <button
                    onClick={() => removeTask(i)}
                    className='ml-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500'
                  >
                    Remove
                  </button>

                  <button
                    onClick={() => editTask(i)}
                    className='ml-2 px-4 py-2 bg-slate-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500'
                  >
                    Edit
                  </button>
                </div>
              ))}
              <button
                onClick={removeAll}
                className='w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500'
              >
                Remove All
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );  
}

export default ToDoList
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../feature/todo/todoSlice";

const Todos = () => {
  const toDos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  console.log(toDos)
  return (
    
    <div>
      <h1>Todo List</h1>
      <ul className="list-none" >
        {toDos.map((item) => {
          return (
            <>
              <li key={item.id} className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded">
                <div className='text-white'>{item.text}</div>
                <button  className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                  onClick={() => {
                    dispatch(removeTodo(item.id));
                  }}
                >
                  DELETE
                </button>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Todos;

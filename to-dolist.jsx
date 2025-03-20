import { useState } from 'react';

function Todolist({setSignup}) {
  const [list, setList] = useState([])
  const [inputValue, setInputValue] = useState(""); 

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleAddList() {
    if (inputValue.trim() === "") return alert('Add something!'); 

    setList(l => [...l, inputValue]); 
    setInputValue(""); 
  }

  function handleRemoveFood(index){
    setList(list.filter((_, p ) => p !== index))
}

  return (
    <div>
      <h1>To Do App</h1>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item } 
      <button onClick={() => handleRemoveFood (index)}>remove</button>
          
          </li> 
        ))}
      </ul>
      <input 
        type="text" 
        placeholder="Enter things to do" 
        value={inputValue}  
        onChange={handleInputChange} 
      />
      <button onClick={handleAddList}>Add to List</button>
      <button onClick={()=> setSignup(false)} >Log Out</button>

    </div>
  );
}

export default Todolist;


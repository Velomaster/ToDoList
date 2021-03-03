import React, {useState} from 'react';

function InputArea(props) {

    const [inputText, setInputText] = useState('');

    function newTask(event) {
        const newInput = event.target.value;
        setInputText(newInput);
      };

    return(
        <div className="form">
        <input onChange={newTask} type="text" value={inputText} />
        <button onClick={() => {
            props.onAdd(inputText);
            setInputText('');
        }}>
          <span>Add</span>
        </button>
      </div>
    )
}

export default InputArea;
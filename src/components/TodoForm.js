import React, { useState, useEffect, useRef } from 'react'
import './TodoForm.css';
function TodoForm(props) {
    const [input, setInput] = useState('')

    const [priority, setPriority] = useState('');

    const inputFocus = useRef(null)

    useEffect(() => {
        inputFocus.current.focus()
    })
    const handleChange = e => {
        setInput(e.target.value);
        setPriority(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    };
    // const importantTodo = id =>{
    //     setInput(id.target.value)
    // }
    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input type="text" placeholder='Add a task'
                value={input}
                name='text' className='todo-input'
                onChange={handleChange}
                ref={inputFocus}
            />
            <div className='form-container'>
                <div className="form-radio">
                    <input type='radio' checked={priority === 'Priority'} name="TodoPriority" id='priority'
                        onChange={handleChange} value={'Priority'} />
                    <label htmlFor='priority'>Priority</label>

                    <input type='radio' checked={priority === 'Normal'} name='TodoNormal' id='normal'
                        onChange={handleChange} value={'Normal'} />
                    <label htmlFor='normal'>Normal</label>
                </div>
                <button className='todo-button'>Add Todo</button>
            </div>
        </form>
    )
}

export default TodoForm

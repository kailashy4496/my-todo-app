import React, { useState } from 'react'
import '../App.css';
import { MdDelete } from "react-icons/md";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [todoTitle, setTodoTitle] = useState('');
    const [todoDescription, setTodoDescription] = useState('');

    const getData1 = (e) => {
        setTodoTitle(e.target.value);
    }
    const getData2 = (e) => {
        setTodoDescription(e.target.value);
    }

    const addTodo = () => {
        if (todoTitle.trim() !== '' && todoDescription.trim() !== '') {
            const newTodo = {
                id: Date.now(),
                title: todoTitle,
                description: todoDescription,
            };
            setTodos([...todos, newTodo]);
            setTodoTitle('');
            setTodoDescription('');
        } else {
            alert('Please fill in both fields');
        }
    }

    const handleDelete = (index) => {
        let updateTodo = [...todos];
        updateTodo.splice(index, 1)
        setTodos(updateTodo);
    }

    return (
        <>
            <div className='box'>
                <div className='input-box title'>
                    <input
                        type='text'
                        onChange={getData1}
                        value={todoTitle}
                        required
                    />
                    <span>Title</span>
                </div>
                <div className='input-box description'>
                    <input
                        type='text'
                        onChange={getData2}
                        value={todoDescription}
                        required
                    />
                    <span>Description</span>
                </div>
                <div className='add'>
                    <button
                        type='button'
                        className='btn'
                        onClick={addTodo}
                    >
                        Add
                    </button>
                </div>
            </div>
            <div className='todo-list'>
                <div className='todo-list-item'>
                    {
                        todos.map((task, index) => {
                            return (
                                <div className='taskData'>
                                    <div className='data' key={index}>
                                        <h1>{task.title}</h1>
                                        <p>{task.description}</p>
                                    </div>
                                    <div className='remove'>
                                        <MdDelete
                                            className='delete'
                                            onClick={() => handleDelete(index)}
                                            size={'35px'}
                                            cursor='pointer' />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default TodoList;
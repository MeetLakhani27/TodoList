import React from 'react'
import { useState } from 'react'

function Todo() {

    const [inputValue, setInputValue] = useState('')
    const [todos, setTodos] = useState([])
    const [id, setid] = useState('');
    const [todo1, settodo1] = useState(false);
    const [temp, setTemp] = useState([]);
    const [search, setsearch] = useState('');
    const [final, setFinal] = useState([]);

    function handleSubmit() {
        // setTodos([...todos, {task:inputValue,checked:false}])
        // setTemp(todos);
        if (todo1) {
            let update = [...todos];
            update[id] = { task: inputValue, checked: false }
            setTodos(update)
            setFinal(update);
            settodo1(false)
            setInputValue('');


        }
        else {
            setTodos([...todos, { task: inputValue, checked: false }])
            setFinal([...todos, { task: inputValue, checked: false }]);

            setInputValue('');

        }
    }

    function handleDelete(index) {

        const newTodos = todos.filter((ele, ind) => {
            return ind != index;
        })
        setTodos(newTodos)
    }

    function handleEditClick(index) {

        setInputValue(todos[index].task)
        setid(index)
        settodo1(true);

    }

    function check(index) {
        let c = [...todos];
        c[index].checked = !c[index].checked;
        setTodos(c);
        setFinal(c);
    }

    function searchData() {
        setTemp((todos))
        let newArr = final.filter((ele) => {
            return ele.task == search;
        })
        setTodos(newArr);
        setsearch('');
    }


    const completed = () => {
        let com = final.filter((val, id) => {
            return val.checked === true ? val : ""
        });
        setTodos(com);
    }

    const uncompleted = () => {
        let un = final.filter((val, id) => {
            return val.checked === false
        });
        setTodos(un);
    }

    const all = () => {
        var data = [...final];
        setTodos(data);
    }



    return (
        <div className='todo'>
            <h1 className='title'>Todo List</h1>
            <div className="border"></div>
            <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={handleSubmit}>Add Todo</button>
            <br />
            <input type='text' value={search} onChange={(e) => setsearch(e.target.value)} />
            <button onClick={searchData}>search</button>
            <button onClick={() => { all() }}>All</button>
            <br />
            <button onClick={() => { completed() }}>Complete</button>
            <button onClick={() => { uncompleted() }}>UnComplete</button>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <button onClick={() => handleEditClick(index)}>Edit</button>
                        <button onClick={() => handleDelete(index)}>Delete</button>
                        <input type='checkbox' checked={todo.checked} onChange={() => { check(index) }} />
                        <div className="list" style={{ textDecoration: todo.checked ? "line-through" : "" }}>{todo.task} </div>
                    </li>
                ))}
            </ul>
        </div>                                                                                 
    )
}
export default Todo;
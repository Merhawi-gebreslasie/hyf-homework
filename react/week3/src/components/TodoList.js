import React, { useState, useEffect, uuid } from "react";
import { TodoItem } from "./TodoItem";
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'react-dates/initialize';

// import 'react-dates/lib/css/_datepicker.css';
import * as moment from "moment";
import "moment/locale/nl";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const URL =
  "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";
export const TodoList = () => {
  const [items, setItems] = useState([]);
  const [inputDescription, setInputDescription] = useState('');
  const [data, setData] = useState(null);
const [date, setDate] = useState('')
  useEffect(() => {
    const getFetchData = async () => {
      const result = await fetch(URL).then(response => {
        return response.json();
      });
      setItems(result);
    };
    getFetchData();
  }, []);

  const handleAdd = (event) => {
    // Considering  deadline and description should not be empity
    if (data === '' || inputDescription === "") {
      return false;
    }
    const newItem = {
      description: inputDescription,
      deadline: data,
      id: uuid
    };
    // const preTodos=[...items];
    // preTodos.push(newItem);
    // setItems(preTodos)

    // using Arrray spread operator
    setItems(preTodos => [...preTodos, newItem]);
    setData('');
    setDate('')
    setInputDescription("");
    event.preventDefault();
  };
  const handleDelet = id => {
    // const preTodos=items;
    // preTodos.splice(id,1);
    // setItems([...preTodos])
    setItems(preTodos => preTodos.filter((item, index) => index !== id));
  };


  const handleEdit = (text, id) => {

    const index = items.findIndex(item => item.id === id);
    const item = items[index];
    item.description = text;
    const editedItems = items[index].description = item.description;
    // prevent empity input
    if (editedItems === '') {
      return false;
    }
    setItems([...items]);
  };

  const handleChangeDescription = event => {
    const newText = event.target.value;
    setInputDescription(newText);
  };

  // const handleDate = event => {
  //   const newDate = event.target.value;
  //   if (newDate <= new Date()) {
  //     return false;
  //   }
  //   setDate(newDate);
  // };

  return (

    <div>
      <div className="inputButton">
        <form onSubmit={handleAdd}>
          <div>
            <label>Todo description</label>
            <input
              onChange={handleChangeDescription}
              type="text"
              name="description"
              value={inputDescription}
              placeholder="description"
            />
          </div>
          <div>
          
          <div className="container">
          
          <label>deadline</label>
              <DatePicker
                showPopperArrow={false}
                placeholderText="dd/mm/YYYY"
                selected={data}
                onChange={date => setData(moment(date).format('DD-MM-YYYY'))}
                
              />
            </div>
            <button type='submit'>addtodo</button>{' '}
            {!items.length ? <span>No items</span> : null}

          </div>
          <div>
          </div>

        </form>
        <div>
          {" "}
        </div>
      </div>
      <div>
        <ul className="lists">
          {items.map((item, index) => (
            <TodoItem
              key={index}
              description={item.description}
              deadline={item.deadline}
              handleDelet={() => handleDelet(index)}
              handleEdit={(event) => handleEdit(event.target.value, item.id)}
            />
          ))}
        </ul>
      </div>
    </div>

  );
}

            // const [state, setstate] = useState({
              //   deadline: null,
              //   focused: false
              // })

              // <SingleDatePicker
              //   deadline={state.deadline} // momentPropTypes.momentObj or null
              //   onDateChange={({deadline}) => setState({deadline})} // PropTypes.func.isRequired
              //   focused={state.focused} // PropTypes.bool
              //   onFocusChange={({ focused }) => setState({ focused })} // PropTypes.func.isRequired
              //   id='my-id' // PropTypes.string.isRequired,
              // />
              // <input
              //   onChange={handleDate}
              //   type="text"
              //   name="deadline"
              //   value={date}
              //   placeholder="deadline"
              // />
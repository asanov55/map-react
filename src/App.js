import './App.css';
import React, { useState } from 'react';
import Tabs from './components/Tabs';

function App() {
  // let names = [

  //   {
  //     name: 'dil',
  //     age: 17,
  //   },
  //   {
  //     name: 'Ildar',
  //     age: 17,
  //   },
  //   {
  //     name: 'Ali',
  //     age: 39,
  //   },
  //   {
  //     name: 'Meder',
  //     age: 37,
  //   },
  //   {
  //     name: 'Islam',
  //     age: 19,
  //   },
  // ];
  // let b = false;
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(1);
  return (
    <div className="App">
      {/* {names.map((name) => {
        return name.name === 'dil' ? (
          <h2>Hello Edil {name.age}</h2>
        ) : (
          <h2>
            Hello {name.name} {name.age}
          </h2>
        );
      })} */}
      {/* <p className={b ? 'active' : ''}>Lorem</p>
      <div
        style={{ textAlign: 'center', color: 'red' }}
        className={!b ? 'active' : ''}
      >
        ipsum
      </div> */}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? 'Скрыть' : 'Показать'} картинку
      </button>
      <br />
      {show && (
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU" />
      )}

      <li
        style={{ color: active === 1 ? 'red' : 'green' }}
        onClick={() => setActive(1)}
      >
        ITEM
      </li>
      <li
        style={{ color: active === 2 ? 'red' : 'green' }}
        onClick={() => setActive(2)}
      >
        ITEM
      </li>
      <li
        style={{ color: active === 3 ? 'red' : 'green' }}
        onClick={() => setActive(3)}
      >
        ITEM
      </li>
      <Tabs />
    </div>
  );
}

export default App;

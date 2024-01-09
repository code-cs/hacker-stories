import { useState } from 'react';
import './App.css';

const App = () => {
  const stories = [
    {
      title: 'React',
      ur: 'https://react.com',
      author: 'Jordon Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      ur: 'https://redux.com',
      author: 'Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const handleSearch = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <h1>My hacker story</h1>
      <Search onSearch={handleSearch} />
      <hr />
      <List list={stories} />
    </div>
  );
};

const List = (props) => (
  <ul>
    {props.list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);

const Item = (props) => (
  <li>
    <span>
      <a href={props.item.url}>{props.item.title}</a>
    </span>
    <span> {props.item.author} </span>
    <span> {props.item.num_comments} </span>
    <span> {props.item.points} </span>
  </li>
);

const Search = (props) => {
  const [searchItem, setSearchItem] = useState('');

  const onChangeHandler = (event) => {
    setSearchItem(event.target.value);
    props.onSearch(event);
  };

  return (
    <>
      <label htmlFor='search'> Search: </label>
      <input id='search' type='text' onChange={onChangeHandler} />
      <p>
        Searching for <strong>{searchItem}</strong>
      </p>
    </>
  );
};

export default App;

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

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter((story) => {
    return story.title.includes(searchTerm);
  });

  return (
    <div>
      <h1>My hacker story</h1>
      <Search search={searchTerm} onSearch={handleSearch} />
      <hr />
      <List list={searchedStories} />
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
  return (
    <>
      <label htmlFor='search'> Search: </label>
      <input
        id='search'
        type='text'
        onChange={props.onSearch}
        value={props.search}
      />
    </>
  );
};

export default App;

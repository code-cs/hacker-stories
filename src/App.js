import './App.css';

const list = [
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

const App = () => {
  return (
    <div>
      <h1>My hacker story</h1>
      <Search />
      <hr />
      <List />
    </div>
  );
};

const List = () => {
  return (
    <ul>
      {list.map((item) => {
        return (
          <li key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span> {item.author} </span>
            <span> {item.num_comments} </span>
            <span> {item.points} </span>
          </li>
        );
      })}
    </ul>
  );
};

const Search = () => {
  return (
    <>
      <label htmlFor='search'> Search: </label>
      <input id='search' type='text' />
    </>
  );
};

export default App;

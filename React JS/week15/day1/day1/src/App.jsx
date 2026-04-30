import axios from 'axios';


export default async function App() {

  const api= 'https://jsonplaceholder.typicode.com/todos/1';
  const response = await axios.get(api);
  console.log(response.data);

  return (
    <h1>Hello, World!</h1>
  );
}
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://8080-stuartj073-restapi-hsywm2u4rbv.ws-eu54.gitpod.io/'
})


function App() {

  constructor(){
    super();
    api.get('/').then(res => {
      console.log(res.data);
      this.setState({ courses: res.data})
    })
  }

  createCourse = async () => {
    let res = await api.post('/', { title: "Test", id: 4, authoer: "Testing" });
    console.log(res);
  }

  return (
    <div className="App">
      <header className="App-header">
        {this.state.courses.map(course => <h2 key={course.id}>{course.title}</h2>)}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

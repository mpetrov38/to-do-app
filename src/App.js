import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import User from './components/User/User';
import AddTodo from './components/AddTodo/AddTodo';
import Calendar from './components/Calendar/Calendar';
import Tasks from './components/Tasks/Tasks';
import Todos from './components/Todos/Todos';
import EditTodo from './components/EditTodo/EditTodo';


function App({ children }) {
  return (
      <div className="App">
        <Sidebar>
          <User />
          <AddTodo />
          <Calendar />
          <Tasks />
        </Sidebar>
        <Main>
          <Todos />
          <EditTodo />

        </Main>
      </div>
  );
}

export default App;

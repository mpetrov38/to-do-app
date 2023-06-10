import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/main';

function App() {
  return (
    <div className="App">
      <Sidebar>
        <User/>
        <AddTodo/>
        <Calendar/>
        <Tasks/>
      </Sidebar>
      <Main>
        <Todos/>
        <EditTodo/>
        
      </Main>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Maintext from './components/maintext';
import Comments from './components/comments';

function App() {
  return (
    <div className="App">
     
     <Header />
     <Maintext/>
     <Comments/>
    </div>
  );
}

export default App;

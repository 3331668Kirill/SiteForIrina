import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import MainText from './components/maintext';
import Comments from './components/comments';

function App() {
  return (
    <div className="App">
     <Header />
     <MainText/>
     <Comments/>
    </div>
  );
}

export default App;

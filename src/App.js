import './App.css';
import SomeComponent from './components/SomeComponent';
import Validate from './components/Validate';

function App() {
  return (
    <div className="App">
      <Validate number={1}>
        <SomeComponent>
          <Validate number={2} />
        </SomeComponent>
        <SomeComponent>
          <Validate number={3} isValidate>
            <Validate number={4} />
          </Validate>
        </SomeComponent>
        <Validate number={5} />
      </Validate>
    </div>
  );
}

export default App;

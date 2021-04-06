import './App.css';
import SomeComponent from './components/SomeComponent';
import Validate from './components/Validate';

function App() {
  return (
    <div className="App">
      <Validate number={1} isValidate>
        <SomeComponent text={'First component'}>
          <Validate number={2} />
        </SomeComponent>
        <SomeComponent text={'Second component'}>
          <Validate number={3}>
            <Validate number={4} />
          </Validate>
        </SomeComponent>
        <Validate number={5} />
      </Validate>
    </div>
  );
}

export default App;

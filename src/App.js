import './App.css';
import AppWrapper from './AppWrapper';
import { possibleWords } from './allowedWords';
import dayjs from 'dayjs';
import dayOfYear from 'dayjs/plugin/dayOfYear';

function App() {
  // get the word selection based on the day of the year
  dayjs.extend(dayOfYear);
  const day = dayjs().dayOfYear();
  const num = Math.round(day * (possibleWords.length / 86400) * 235);
  const word = possibleWords[num];
  return (
    <div className="App">
      <AppWrapper word={word} />
    </div>
  );
}

export default App;

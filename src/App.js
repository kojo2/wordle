import './App.css';
import AppWrapper from './AppWrapper';
import { possibleWords } from './allowedWords';
import dayjs from 'dayjs';
import dayOfYear from 'dayjs/plugin/dayOfYear';
import { useEffect, useState } from 'react';

function App() {
  // get the word selection based on the day of the year
  const [word, setWord] = useState('');
  dayjs.extend(dayOfYear);

  useEffect(() => {
    const day = dayjs().dayOfYear();
    const num = Math.round(day * (possibleWords.length / 86400) * 235);
    setWord(possibleWords[num]);
  }, []);

  // let word = possibleWords[num];
  return (
    <div className="App">
      <AppWrapper
        word={word}
        setRandomWord={() => {
          setWord(possibleWords[Math.round(Math.random() * possibleWords.length - 1)]);
        }}
      />
    </div>
  );
}

export default App;

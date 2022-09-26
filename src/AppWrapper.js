import React, { useState } from 'react';
import { allowedWords } from './allowedWords';
import LetterBox from './LetterBox';

import Wordbox from './WordBox';

const AppWrapper = ({ word }) => {
  const [guesses, setGuesses] = useState([[], [], [], [], [], []]);
  const [lockedInRows, setLockedInRows] = useState([]);
  const [currentRow, setCurrentRow] = useState(0);
  const [guessedLetters, setGuessedLetters] = useState([]);

  const guess = (letter) => {
    let _guesses = [...guesses];

    if (_guesses[currentRow].length >= 5) {
      return;
    }

    _guesses[currentRow].push(letter);
    setGuesses(_guesses);
  };

  const lockInGuess = () => {
    if (guesses[currentRow].length < 5) {
      return;
    }

    if (allowedWords.indexOf(guesses[currentRow].join('')) === -1) {
      alert('Not an allowed word');
      let g = [...guesses];
      g[currentRow] = [];
      setGuesses(g);
      return;
    }
    // check if this word is in the list of allowed words
    let cr = currentRow;
    let _lockedInRows = [...lockedInRows];
    _lockedInRows.push(cr);
    setLockedInRows(_lockedInRows);
    // decide if we got any of these letters right
    let newGuessedLetters = guesses[currentRow].map((g, i) => {
      let s = -1;
      if (word.indexOf(g) > -1) {
        if (word[i] === g) {
          s = 2;
        } else {
          s = 1;
        }
      } else {
        s = 0;
      }
      let o = {};
      o.g = g;
      o.s = s;
      return o;
    });
    setGuessedLetters([...guessedLetters, ...newGuessedLetters]);
    cr++;
    setCurrentRow(cr);
    if (guesses[currentRow].join('') === word) {
      setTimeout(() => {
        alert('congrats!!!');
      }, 1000);
    } else {
      if (currentRow === guesses.length - 1) {
        alert('Bad luck');
        return;
      }
    }
  };

  const allowedLetters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  return (
    <body
      className="body-container"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          lockInGuess();
        } else if (e.key === 'Backspace') {
          let g = [...guesses];
          g[currentRow].pop();
          setGuesses(g);
        } else {
          let l = e.key.toLowerCase();
          if (allowedLetters.indexOf(l) > -1) {
            guess(e.key);
          }
        }
      }}
    >
      <Wordbox guesses={guesses} currentRow={currentRow} word={word} lockedInRows={lockedInRows} />
      {/* <div style={{ color: 'white' }}>{JSON.stringify(lockedInRows)}</div> */}
      <LetterBox
        word={word}
        guessedLetters={guessedLetters}
        chooseLetter={(letter) => {
          if (letter === 'enter') {
            lockInGuess();
          } else if (letter === 'bs') {
            let _guesses = [...guesses];
            _guesses[currentRow].pop();
            setGuesses([...guesses]);
          } else {
            guess(letter);
          }
        }}
      />
    </body>
  );
};

export default AppWrapper;

import React from 'react';
import { times, flatten } from 'lodash';
import LetterBlock from './LetterBlock';

const LetterBox = ({ chooseLetter, word, guessedLetters }) => {
  const rows = 3;
  const cols = [10, 9, 9];
  const letters = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'bs'],
  ];

  return (
    <div className="letter-box">
      <div className="letter-box-inner">
        {letters.map((row, i) => (
          <div className="letter-box-row">
            <div className="letter-box-row-inner" style={{ width: i === 1 ? '90%' : '100%' }}>
              {letters[i].map((letter, j) => (
                <LetterBlock
                  long={(j === 0 || j === cols[i] - 1) && i === 2}
                  letter={letter}
                  chooseLetter={chooseLetter}
                  word={word}
                  guessedLetters={guessedLetters}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LetterBox;

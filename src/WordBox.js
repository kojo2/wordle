import React from 'react';
import WordBlock from './WordBlock';
import { times } from 'lodash';

const Wordbox = ({ guesses = [], word, lockedInRows }) => {
  const rows = 6;
  const cols = 5;
  return (
    <div className="word-box">
      <div className="word-box-inner">
        {times(rows).map((row, i) => (
          <div className="new-row">
            {times(cols).map((row, j) => (
              <WordBlock
                word={word}
                row={i}
                lockedInRows={lockedInRows}
                col={j}
                filledLetter={(() => {
                  try {
                    return guesses[i][j];
                  } catch (err) {
                    return false;
                  }
                })()}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wordbox;

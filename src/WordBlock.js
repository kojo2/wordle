import { capitalize } from 'lodash';
import React, { useState } from 'react';

const WordBlock = ({ filledLetter, col, word, lockedInRows, row }) => {
  const checkLetterPosition = (fl) => {
    if (word[col] === fl) {
      return 2;
    } else if (word.indexOf(fl) > -1) {
      return 1;
    } else {
      return 0;
    }
  };

  const getColor = (fl) => {
    if (lockedInRows.indexOf(row) > -1) {
      switch (checkLetterPosition(fl)) {
        case 0:
          return '#3a3a3c';
          break;
        case 1:
          return '#b59f3b';
        case 2:
          return 'green';
          break;
      }
    } else {
      return '#3a3a3c';
    }
  };

  return (
    <div className="new-word-letter">
      <div
        className={`block block-${filledLetter ? 'filled' : 'empty'}`}
        style={{ backgroundColor: filledLetter ? getColor(filledLetter) : 'inherit' }}
      >
        {filledLetter ? <div className="number">{capitalize(filledLetter)}</div> : null}
      </div>
    </div>
  );
};

export default WordBlock;

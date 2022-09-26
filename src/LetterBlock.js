import React, { useState } from 'react';

const BackSpace = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
    fill="white"
    width="24"
    className="game-icon"
    data-testid="icon-backspace"
  >
    <path
      fill="var(--color-tone-1)"
      d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"
    ></path>
  </svg>
);

const getColor = (letter, guessedLetters) => {
  try {
    let instancesOf = guessedLetters.filter((x) => x.g === letter);
    let foundHighestPriority = instancesOf[0];
    if (instancesOf.length > 1) {
      foundHighestPriority = instancesOf.reduce((p, c) => (c.s > p.s ? c : p));
    }
    switch (foundHighestPriority.s) {
      case 0:
        return '#3a3a3c';
        break;
      case 1:
        return '#b59f3b';
      case 2:
        return '#538d4e';
        break;
    }
  } catch (err) {
    return '#818384';
  }
};

const LetterBlock = ({ long = false, letter, chooseLetter, guessedLetters = [] }) => {
  return (
    <div
      className={`letter-block ${long ? 'long' : ''} ${guessedLetters.indexOf(letter) > -1 ? 'guessed' : ''}`}
      style={{ backgroundColor: getColor(letter, guessedLetters) }}
      onClick={() => {
        chooseLetter(letter);
      }}
    >
      <div className="number">{letter === 'bs' ? <BackSpace /> : letter}</div>
    </div>
  );
};

export default LetterBlock;

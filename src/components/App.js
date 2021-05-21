import React, { useState } from 'react';
import NavigationBar from './NavigationBar';
import Game from './Game';

const StarMatch = () => {
  const [gameId, setGameId] = useState(1);
  return (
    <React.Fragment>
      <NavigationBar />
      <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />
    </React.Fragment>
  );
};

export default StarMatch;

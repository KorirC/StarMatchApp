import React from 'react';
import styled, { keyframes } from 'styled-components';
import { flip } from 'react-animations';

const PlayAgain = (props) => {
  const Flip = styled.div`
    animation: 2s ${keyframes`${flip}`} infinite;
  `;
  return (
    <div className="game-done">
      <Flip>
        <div
          className="message"
          style={{ color: props.gameStatus === 'lost' ? 'red' : 'green' }}
        >
          {props.gameStatus === 'lost' ? 'Game Over' : 'Nice'}
        </div>
      </Flip>
      <button onClick={props.onClick}>Play Again</button>
    </div>
  );
};

export default PlayAgain;

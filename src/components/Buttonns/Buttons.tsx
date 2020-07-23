import React, { MouseEvent } from 'react';

import './Buttons.css';

interface Props {
  titleSort: (event: MouseEvent) => void;
  nameSort: (event: MouseEvent) => void;
  showCompleted: (event: MouseEvent) => void;
}

export const Buttons: React.FC<Props> = (props) => (
  <div className="todo__buttons">
    <button
      className="btn"
      type="button"
      onClick={props.titleSort}
    >
      Sort by title
    </button>
    <button
      className="btn"
      type="button"
      onClick={props.nameSort}
    >
      Sort by name
    </button>
    <button
      className="btn"
      type="button"
      onClick={props.showCompleted}
    >
      Show completed first
    </button>
  </div>
);

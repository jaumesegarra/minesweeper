import React from 'react'; 

export default (state) => (
	<div className="statusBar">
            <div className={'emoji '+state.emoji}></div>
            <span>{state.text}</span>
      </div>
);
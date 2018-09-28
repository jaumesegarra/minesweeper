import React from 'react'; 

import SaveScoreModal from './SaveScoreModal/SaveScoreModal';

export default (state, refSaveScore) => (
	<div className="statusBar">
            <div className={'emoji '+state.emoji}></div>
            <span>{state.text}</span>

            <SaveScoreModal ref={refSaveScore}/>
    </div>
);
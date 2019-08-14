import React from 'react';

import Pulse from 'app/components/pulse/Pulse';
import Console from 'app/components/console/Console';

import './style.scss';

function Emotion(): JSX.Element {
  const consoleText = [
    'taurus.sh <♉️>',
    'hello world <👋>',
    'i am dev <👨‍💻>',
    'and designer <👨‍🎨>',
  ];

  return (
    <>
      <div className="App">
        <Pulse seed={3} />
        <Pulse seed={2} />
      </div>
      <div className="App-modal">
        <header className="App-header">
          <Console
            className="App-title"
            id="console"
            text={consoleText}
          />
        </header>
      </div>
    </>
  );
}

export default Emotion;

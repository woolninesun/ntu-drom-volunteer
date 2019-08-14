import React from 'react';
import ReactDOM from 'react-dom';
import GSXToWebApp from './GSXToWebApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GSXToWebApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});

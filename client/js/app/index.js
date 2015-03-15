/** @jsx dom */

/**
 * Module dependencies.
 */

import {component,dom} from '../lib/deku/index.js';
import Player from '../player/index.js';
import Button from '../button/index.js';
import Game from '../game/index.js';
import List from '../list/index.js';

/**
 * Define `App`.
 */

var App = component();

/**
 * Export `App`.
 */

export default App;

/**
 * Render `App`.
 */

App.prototype.render = function(props, state) {
  return (
    <div class='container'>
      <div class='row'>
        <List />
      </div>
      <div class='row'>
        <Button label='NEW PLAYER' />
        <Button label='NEW GAME' />
      </div>
    </div>
  );
};

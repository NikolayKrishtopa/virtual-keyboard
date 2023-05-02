import './index.scss';

import KEYBOARD_MATRIX from '../utils/constants';
import Keyboard from '../components/Keyboard';
import Key from '../components/Key';

const createKeyInstance = (key, lang, dispatchInputVirt) => new Key(key, lang, dispatchInputVirt);

const keyboard = new Keyboard(KEYBOARD_MATRIX, createKeyInstance);

export default keyboard;

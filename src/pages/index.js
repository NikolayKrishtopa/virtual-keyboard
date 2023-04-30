import KEYBOARD_MATRIX from '../utils/constants';
import Keyboard from '../components/Keyboard';
import Key from '../components/Key';

const createKey = (key) => new Key(key).createKey();

const keyboard = new Keyboard(KEYBOARD_MATRIX, createKey);

// console.log(keyboard.generateKeys());

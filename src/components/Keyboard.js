export default class Keyboard {
  constructor(keys, createKey) {
    this.createKey = createKey;
    this.keys = keys;
    this.LANGUAGES = { ru: 'ru', en: 'en' };
    this.lang = this.LANGUAGES.ru;
    this.body = document.querySelector('.root');
    this.initiate();
  }

  generateKeys = (keysArr) => {
    const keys = [];
    keysArr.forEach((key) => {
      keys.push(this.createKey(key));
    });
    return keys;
  };

  renderKeys = (keysArr, container) => {
    this.generateKeys(keysArr).forEach((key) => container.append(key));
    return container;
  };

  createRow = () => {
    const row = document.createElement('div');
    row.classList.add('keyboard__row');
    return row;
  };

  renderKeyBoard = () => {
    for (let row in this.keys) {
      this.keyboard.append(this.renderKeys(this.keys[row], this.createRow()));
    }
  };

  initiate = () => {
    this.keyboard = document.createElement('div');
    this.keyboard.classList.add('keyboard');
    this.body.append(this.keyboard);
    this.renderKeyBoard();
  };
}

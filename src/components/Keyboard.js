export default class Keyboard {
  constructor(keys, createKey) {
    this.createKey = createKey;
    this.keys = keys;
    this.LANGUAGES = { ru: 'ru', en: 'en' };
    this.lang = this.LANGUAGES.ru;
    this.body = document.querySelector('.root');
    this.initiate();
  }

  generateKeys = () => {
    const keys = [];
    this.keys.row1.forEach((key) => {
      keys.push(this.createKey(key));
    });
    return keys;
  };

  renderKeys = (container) => {
    this.generateKeys().forEach((key) => container.append(key));
  };

  initiate = () => {
    this.keyboard = document.createElement('div');
    this.keyboard.classList.add('keyboard');
    this.body.append(this.keyboard);
    this.renderKeys(this.keyboard);
  };
}

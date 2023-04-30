export default class Keyboard {
  constructor(keys, createKeyInstance) {
    this.createKeyInstance = createKeyInstance;
    this.keys = keys;
    this.LANGUAGES = { ru: 'ru', en: 'en' };
    this.lang = this.LANGUAGES.en;
    this.body = document.querySelector('.root');
    this.keyElements = [];
    this.initiate();
  }

  generateKeys = (keysArr) => {
    const keys = [];

    keysArr.forEach((key) => {
      const keyInstance = this.createKeyInstance(key, this.lang);
      keys.push(keyInstance.createKey());
      this.keyElements.push(keyInstance);
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

  createLayoutStructure = () => {
    this.page = document.createElement('div');
    this.page.classList.add('page');
    this.input = document.createElement('textarea');
    this.input.classList.add('text-field');
    this.switchBtn = document.createElement('button');
    this.switchBtn.classList.add('button');
    this.switchBtn.textContent = 'change language';
    this.switchBtn.id = 'switchLangBtn';
    this.keyboard = document.createElement('div');
    this.keyboard.classList.add('keyboard');
    this.body.append(this.page);
    this.page.append(this.input);
    this.page.append(this.switchBtn);
    this.page.append(this.keyboard);
  };
  initiate = () => {
    this.createLayoutStructure();
    this.renderKeyBoard();
    this.switchBtn.addEventListener('click', this.changeLang);
  };
  changeLang = () => {
    this.lang =
      this.lang === this.LANGUAGES.ru ? this.LANGUAGES.en : this.LANGUAGES.ru;
    this.keyElements.forEach((key) => key.changeLang(this.lang));
  };
}

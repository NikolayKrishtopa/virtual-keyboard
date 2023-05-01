export default class Key {
  constructor(key, lang) {
    this.key = key;
    this.lang = lang;
  }

  createKey = () => {
    this.keyEl = document.createElement('button');
    this.keyEl.classList.add('keyboard__key');
    this.keyEl.classList.add(`keyboard__key_size_${this.key.size}`);
    this.keyCharMain = document.createElement('p');
    this.keyCharMain.classList.add('keyboard__key-main');
    this.keyCharShift = document.createElement('p');
    this.keyCharShift.classList.add('keyboard__key-shift');
    this.keyEl.append(this.keyCharMain);
    this.keyEl.append(this.keyCharShift);
    this.renderLangState();
    this.setListeners();
    return this.keyEl;
  };

  renderLangState = () => {
    if (this.key.en) {
      this.chars = this.lang === 'ru'
        ? this.key.ru
        : this.key.en;
    } else {
      this.chars = this.key;
    }

    if (this.chars.main === 'Control') {
      this.keyCharMain.textContent = 'Ctrl';
    } else if (this.chars.main === 'Meta') {
      this.keyCharMain.textContent = 'Win';
    } else if (this.chars.main === 'ArrowUp') {
      this.keyCharMain.textContent = 'Up';
    } else if (this.chars.main === 'ArrowLeft') {
      this.keyCharMain.textContent = 'Lft';
    } else if (this.chars.main === 'ArrowRight') {
      this.keyCharMain.textContent = 'Rght';
    } else if (this.chars.main === 'ArrowDown') {
      this.keyCharMain.textContent = 'Dwn';
    } else if (this.chars.main === 'Delete') {
      this.keyCharMain.textContent = 'Del';
    } else if (this.chars.main.length === 1) {
      this.keyCharMain.textContent = this.chars.main.toUpperCase();
    } else {
      this.keyCharMain.textContent = this.chars.main;
    }

    this.keyCharShift.textContent = this.chars?.shift !== this.chars?.main.toUpperCase()
      ? this.chars?.shift
      : '';
  };

  changeLang = (lang) => {
    this.lang = lang;
    this.renderLangState();
  };

  getValues = () => [this.chars.main, this.chars.shift];

  highlight = () => {
    this.keyEl.classList.add('keyboard__key_highlighted');
  };

  stopHighlight = () => {
    this.keyEl.classList.remove('keyboard__key_highlighted');
  };

  animate = () => {
    this.keyEl.classList.add('keyboard__key_pressed');
  };

  stopAnimate = () => {
    this.keyEl.classList.remove('keyboard__key_pressed');
  };

  setListeners = () => {
    this.keyEl.addEventListener('mousedown', () => {
      this.highlight();
      this.animate();
      const event = new KeyboardEvent('keypress', {
        key: this.chars.main,
      });
      console.log(event);
      // console.log(document.body.dispatchEvent(event));
    });
    // window.addEventListener('mouseup', () => {
    //   this.stopHighlight();
    //   this.stopAnimate();
    // });
  };
}

export default class Key {
  constructor(key, lang, dispatchInputVirt) {
    this.dispatchInputVirt = dispatchInputVirt;
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
    this.renderRegistrState();
    this.setListeners();
    return this.keyEl;
  };

  setCharset = () => {
    if (this.key.en) {
      this.chars = this.lang === 'ru'
        ? this.key.ru
        : this.key.en;
    } else {
      this.chars = this.key;
    }
  };

  renderRegistrState = (mode) => {
    this.setCharset();

    if (this.chars.main === 'Control') {
      this.keyCharMain.textContent = 'Ctrl';
    } else if (this.chars.main === 'Meta') {
      this.keyCharMain.textContent = 'Win';
    } else if (this.chars.main === 'ArrowUp') {
      this.keyCharMain.textContent = '↑';
    } else if (this.chars.main === 'ArrowLeft') {
      this.keyCharMain.textContent = '←';
    } else if (this.chars.main === 'ArrowRight') {
      this.keyCharMain.textContent = '→';
    } else if (this.chars.main === 'ArrowDown') {
      this.keyCharMain.textContent = '↓';
    } else if (this.chars.main === 'Delete') {
      this.keyCharMain.textContent = 'Del';
    } else if (this.chars.main.length === 1) {
      if (mode === 'shift') {
        this.keyCharMain.textContent = this.chars.shift;
      } else {
        this.keyCharMain.textContent = mode === 'caps' || mode === 'shift' ? this.chars.main.toUpperCase() : this.chars.main;
      }
    } else {
      this.keyCharMain.textContent = this.chars.main;
    }
    if (this.chars?.shift !== this.chars?.main.toUpperCase()) {
      if (mode === 'shift') {
        this.keyCharShift.textContent = this.chars?.shift ? this.chars?.main : '';
      } else { this.keyCharShift.textContent = this.chars?.shift; }
    } else {
      this.keyCharShift.textContent = '';
    }
  };

  changeLang = (lang) => {
    this.lang = lang;
    this.renderRegistrState();
  };

  getValues = () => [this.chars.main, this.chars.shift];

  getAllPossibleValues = () => {
    if (this.key.en) {
      return [this.key.ru.main, this.key.ru.shift, this.key.en.main, this.key.en.shift];
    }
    return [this.key.main, this.key.shift];
  };

  getContext = () => this;

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

  hold = () => {
    this.keyCharMain.classList.add('keyboard__key-main_held');
  };

  leave = () => {
    this.keyCharMain.classList.remove('keyboard__key-main_held');
  };

  setListeners = () => {
    this.keyEl.addEventListener('mousedown', () => {
      this.highlight();
      this.animate();
      this.dispatchInputVirt(this.getContext());

      // const event = new KeyboardEvent('keypress', {
      //   key: this.chars.main,
      //   bubbles: true,
      // });
      // document.dispatchEvent(event);
    });
  };
}

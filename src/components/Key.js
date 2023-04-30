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
    this.chars = this.key.en
      ? this.lang === 'ru'
        ? this.key.ru
        : this.key.en
      : this.key;
    this.keyCharMain.textContent =
      this.chars.main === 'Control'
        ? 'Ctrl'
        : this.chars.main === 'Meta'
        ? 'Win'
        : this.chars.main === 'ArrowUp'
        ? 'Up'
        : this.chars.main === 'ArrowLeft'
        ? 'Lft'
        : this.chars.main === 'ArrowRight'
        ? 'Rght'
        : this.chars.main === 'ArrowDown'
        ? 'Dwn'
        : this.chars.main === 'Delete'
        ? 'Del'
        : this.chars.main.length === 1
        ? this.chars.main.toUpperCase()
        : this.chars.main;
    this.keyCharShift.textContent =
      this.chars?.shift !== this.chars?.main.toUpperCase()
        ? this.chars?.shift
        : '';
  };

  changeLang = (lang) => {
    this.lang = lang;
    this.renderLangState();
  };

  getValues = () => {
    return [this.chars.main, this.chars.shift];
  };

  highlight = () => {
    this.keyEl.classList.add('keyboard__key_highlighted');
  };
  removeHighlight = () => {
    this.keyEl.classList.remove('keyboard__key_highlighted');
  };
  setListeners = () => {
    this.keyEl.addEventListener('mousedown', this.highlight);
    this.keyEl.addEventListener('mouseup', this.removeHighlight);
  };
}

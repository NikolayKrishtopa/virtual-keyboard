export default class Key {
  constructor(key, lang) {
    this.key = key;
    this.lang = lang;
  }

  createKey = () => {
    this.keyEl = document.createElement('button');
    this.keyEl.classList.add('key');
    this.keyEl.classList.add(`key_size_${this.key.size}`);
    this.keyCharMain = document.createElement('p');
    this.keyCharMain.classList.add('key__main');
    this.keyCharShift = document.createElement('p');
    this.keyCharShift.classList.add('key__shift');
    this.keyEl.append(this.keyCharMain);
    this.keyEl.append(this.keyCharShift);
    this.renderLangState();
    return this.keyEl;
  };

  renderLangState = () => {
    this.chars = this.key.en
      ? this.lang === 'ru'
        ? this.key.ru
        : this.key.en
      : this.key;
    this.keyCharMain.textContent = this.chars.main;
    this.keyCharShift.textContent = this.chars?.shift || '';
  };

  changeLang = (lang) => {
    this.lang = lang;
    this.renderLangState();
  };
}

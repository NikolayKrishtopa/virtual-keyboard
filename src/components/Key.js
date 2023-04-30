export default class Key {
  constructor(key) {
    this.key = key;
  }

  createKey = () => {
    const keyEl = document.createElement('button');
    const chars = this.key?.en
      ? this.lang === 'ru'
        ? this.key.ru
        : this.key.en
      : this.key;
    keyEl.classList.add('key');
    keyEl.classList.add(`key_size_${this.key.size}`);
    const keyCharMain = document.createElement('p');
    keyCharMain.classList.add('key__main');
    const keyCharShift = document.createElement('p');
    keyCharShift.classList.add('key__shift');
    keyEl.append(keyCharMain);
    keyEl.append(keyCharShift);
    keyCharMain.textContent = chars.main;
    keyCharShift.textContent = chars?.shift || '';
    return keyEl;
  };
}

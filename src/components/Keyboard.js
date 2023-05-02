export default class Keyboard {
  constructor(keys, createKeyInstance) {
    this.createKeyInstance = createKeyInstance;
    this.keys = keys;
    this.LANGUAGES = { ru: 'ru', en: 'en' };
    this.lang = localStorage.getItem('lang');
    this.body = document.querySelector('.root');
    this.keyElements = [];
    this.initiate();
    this.shiftPressed = false;
    this.capsPressed = false;
  }

  generateKeys = (keysArr) => {
    const keys = [];

    keysArr.forEach((key) => {
      const keyInstance = this.createKeyInstance(key, this.lang, this.dispatchInputVirtual);
      keys.push(keyInstance.createKey());
      this.keyElements.push(keyInstance);
    });
    return keys;
  };

  renderKeys = (keysArr, container) => {
    this.generateKeys(keysArr).forEach((key) => container.append(key));
    return container;
  };

  renderKeyBoard = () => {
    Object.keys(this.keys).forEach((k) => {
      const row = document.createElement('div');
      row.classList.add('keyboard__row');
      this.keyboard.append(this.renderKeys(this.keys[k], row));
    });
  };

  getInput = (() => {
    this.input = document.querySelector('textarea');
  });

  createLayoutStructure = () => {
    this.page = document.createElement('div');
    this.page.classList.add('page');
    this.input = document.createElement('textarea');
    this.input.classList.add('text-field');
    this.input.id = 'textField';
    this.switchBtn = document.createElement('button');
    this.switchBtn.classList.add('button');
    this.switchBtn.textContent = 'Press Ctrl + Shift or Alt + Shift to switch language';
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
    this.setListeners();
  };

  changeLang = () => {
    this.lang = this.lang === this.LANGUAGES.ru ? this.LANGUAGES.en : this.LANGUAGES.ru;
    localStorage.setItem('lang', this.lang);
    this.keyElements.forEach((key) => key.changeLang(this.lang));
  };

  handleKeyDown = (e) => {
    const match = this.keyElements.find((key) => key.getValues().some((v) => v === e.key));
    if (match) {
      match.highlight();
      match.animate();
    }
  };

  handleKeyUp = (e) => {
    const match = this.keyElements.find((key) => key.getValues().some((v) => v === e.key));
    if (match) {
      match.stopHighlight();
      match.stopAnimate();
    }
  };

  focusInput = () => {
    this.input.focus();
  };

  toggleShift = () => {
    this.shiftPressed = !this.shiftPressed;
    const key = this.keyElements.find((e) => e.getValues()[0] === 'Shift');
    if (this.shiftPressed) {
      key.hold();
    } else {
      key.leave();
    }
  };

  toggleCaps = () => {
    this.capsPressed = !this.capsPressed;
    const key = this.keyElements.find((e) => e.getValues()[0] === 'CapsLock');
    if (this.capsPressed) {
      key.hold();
    } else {
      key.leave();
    }
  };

  // **events dispatched from Key and observer is here**
  dispatchInputVirtual = (val) => {
    const memo = this.input.selectionStart;
    switch (val.chars.main) {
      case 'Backspace':
        this.input.value = this.input.value.substring(0, this.input.selectionStart - 1)
          + this.input.value.substring(this.input.selectionEnd, this.input.value.length);
        this.input.selectionStart = memo !== 0 ? memo - 1 : memo;
        this.input.selectionEnd = memo !== 0 ? memo - 1 : memo;
        break;
      case 'Delete':
        this.input.value = this.input.value.substring(0, this.input.selectionStart)
          + this.input.value.substring(this.input.selectionEnd + 1, this.input.value.length);
        this.input.selectionStart = memo;
        this.input.selectionEnd = memo;
        break;
      case 'Shift':
        this.toggleShift();
        break;
      case 'CapsLock':
        this.toggleCaps();
        break;
      case 'ArrowRight':
        this.input.selectionStart += 1;
        break;
      case 'Alt':
        if (this.shiftPressed) {
          this.changeLang();
          this.toggleShift();
        }
        break;
      case 'Control':
        if (this.shiftPressed) {
          this.changeLang();
          this.toggleShift();
        }
        break;
      case 'ArrowLeft':
        this.input.selectionStart -= 1;
        this.input.selectionEnd -= 1;
        break;
      case 'Enter':
        this.input.value = `${this.input.value.substring(0, this.input.selectionStart)
        }\n${
          this.input.value.substring(this.input.selectionEnd, this.input.value.length)}`;
        this.input.selectionStart = memo + 1;
        this.input.selectionEnd = memo + 1;
        break;
      default:
        if (!val.key.charKey) return;
        if (this.shiftPressed) {
          const add = val.chars.shift ? val.chars.shift : val.chars.main;
          this.input.value = this.input.value.substring(0, this.input.selectionStart)
          + add
            + this.input.value.substring(this.input.selectionEnd, this.input.value.length);
          this.toggleShift();
          this.input.selectionStart = memo + 1;
          this.input.selectionEnd = memo + 1;
        } else if (this.capsPressed) {
          const add = val.chars.shift ? val.chars.shift : val.chars.main;
          this.input.value = this.input.value.substring(0, this.input.selectionStart)
          + add
            + this.input.value.substring(this.input.selectionEnd, this.input.value.length);
          this.input.selectionStart = memo + 1;
          this.input.selectionEnd = memo + 1;
        } else {
          this.input.value = this.input.value.substring(0, this.input.selectionStart)
          + val.chars.main
            + this.input.value.substring(this.input.selectionEnd, this.input.value.length);
          this.input.selectionStart = memo + 1;
          this.input.selectionEnd = memo + 1;
        }
        break;
    }
  };

  setListeners = () => {
    document.addEventListener('keydown', this.handleKeyDown);
    document.addEventListener('keyup', (e) => {
      this.handleKeyUp(e);
    });
    // **switch all the visual effects off for all the keys**
    window.addEventListener('mouseup', () => {
      this.keyElements.forEach((e) => {
        e.stopHighlight();
        e.stopAnimate();
      });
    });
    this.keyboard.addEventListener('mouseup', this.focusInput);
  };
}

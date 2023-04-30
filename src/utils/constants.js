const KEYBOARD = {
  row1: [
    { size: 's', en: { shift: '~', main: '`' }, ru: { shift: 'Ё', main: 'ё' } },
    { size: 's', shift: '!', main: '1' },
    { size: 's', shift: '@', main: '2' },
    { size: 's', shift: '#', main: '3' },
    { size: 's', shift: '$', main: '4' },
    { size: 's', shift: '%', main: '5' },
    { size: 's', shift: '^', main: '6' },
    { size: 's', shift: '&', main: '7' },
    { size: 's', shift: '*', main: '8' },
    { size: 's', shift: '(', main: '9' },
    { size: 's', shift: ')', main: '0' },
    { size: 's', shift: '_', main: '-' },
    { size: 's', shift: '+', main: '=' },
    { size: 'xl', main: 'Backspace' },
  ],
  row2: [
    { size: 'm', main: 'Tab' },
    { size: 's', en: { shift: 'Q', main: 'q' }, ru: { shift: 'Й', main: 'й' } },
    { size: 's', en: { shift: 'W', main: 'w' }, ru: { shift: 'Ц', main: 'ц' } },
    { size: 's', en: { shift: 'E', main: 'e' }, ru: { shift: 'У', main: 'у' } },
    { size: 's', en: { shift: 'R', main: 'r' }, ru: { shift: 'К', main: 'к' } },
    { size: 's', en: { shift: 'T', main: 't' }, ru: { shift: 'Е', main: 'е' } },
    { size: 's', en: { shift: 'Y', main: 'y' }, ru: { shift: 'Н', main: 'н' } },
    { size: 's', en: { shift: 'U', main: 'u' }, ru: { shift: 'Г', main: 'г' } },
    { size: 's', en: { shift: 'I', main: 'i' }, ru: { shift: 'Ш', main: 'ш' } },
    { size: 's', en: { shift: 'O', main: 'o' }, ru: { shift: 'Щ', main: 'щ' } },
    { size: 's', en: { shift: 'P', main: 'p' }, ru: { shift: 'З', main: 'з' } },
    { size: 's', en: { shift: '{', main: '[' }, ru: { shift: 'Х', main: 'х' } },
    { size: 's', en: { shift: '}', main: ']' }, ru: { shift: 'Ъ', main: 'ъ' } },
    {
      size: 's',
      en: { shift: '|', main: '\\' },
      ru: { shift: '/', main: '\\' },
    },
    {
      size: 's',
      main: 'Delete',
    },
  ],
  row3: [
    { size: 'xl', main: 'CapsLock' },
    { size: 's', en: { shift: 'A', main: 'a' }, ru: { shift: 'Й', main: 'й' } },
    { size: 's', en: { shift: 'S', main: 's' }, ru: { shift: 'Ц', main: 'ц' } },
    { size: 's', en: { shift: 'D', main: 'd' }, ru: { shift: 'У', main: 'у' } },
    { size: 's', en: { shift: 'F', main: 'f' }, ru: { shift: 'К', main: 'к' } },
    { size: 's', en: { shift: 'G', main: 'g' }, ru: { shift: 'Е', main: 'е' } },
    { size: 's', en: { shift: 'H', main: 'h' }, ru: { shift: 'Н', main: 'н' } },
    { size: 's', en: { shift: 'J', main: 'j' }, ru: { shift: 'Г', main: 'г' } },
    { size: 's', en: { shift: 'K', main: 'k' }, ru: { shift: 'Ш', main: 'ш' } },
    { size: 's', en: { shift: 'L', main: 'l' }, ru: { shift: 'Щ', main: 'щ' } },
    { size: 's', en: { shift: ':', main: ';' }, ru: { shift: 'З', main: 'з' } },
    { size: 's', en: { shift: '"', main: "'" }, ru: { shift: 'Х', main: 'х' } },
    { size: 'l', main: 'Enter' },
  ],
  row4: [
    { size: 'xl', main: 'Shift' },
    { size: 's', main: '\\' },
    { size: 's', en: { shift: 'Z', main: 'z' }, ru: { shift: 'Я', main: 'я' } },
    { size: 's', en: { shift: 'X', main: 'x' }, ru: { shift: 'Ч', main: 'ч' } },
    { size: 's', en: { shift: 'C', main: 'c' }, ru: { shift: 'С', main: 'с' } },
    { size: 's', en: { shift: 'V', main: 'v' }, ru: { shift: 'М', main: 'м' } },
    { size: 's', en: { shift: 'B', main: 'b' }, ru: { shift: 'И', main: 'и' } },
    { size: 's', en: { shift: 'N', main: 'n' }, ru: { shift: 'Т', main: 'т' } },
    { size: 's', en: { shift: 'M', main: 'm' }, ru: { shift: 'Ь', main: 'ь' } },
    { size: 's', en: { shift: '<', main: ',' }, ru: { shift: 'Б', main: 'б' } },
    { size: 's', en: { shift: '>', main: '.' }, ru: { shift: 'Ю', main: 'ю' } },
    { size: 's', en: { shift: '?', main: '/' }, ru: { shift: ',', main: '.' } },
    { size: 's', main: 'ArrowUp' },
    { size: 's', main: 'Shift' },
  ],
  row5: [
    { size: 'l', main: 'Control' },
    { size: 's', main: 'Meta' },
    { size: 's', main: 'Alt' },
    { size: 'xxxl', main: ' ' },
    { size: 's', main: 'Alt' },
    { size: 'l', main: 'Control' },
    { size: 's', main: 'ArrowLeft' },
    { size: 's', main: 'ArrowDown' },
    { size: 's', main: 'ArrowRight' },
  ],
};

export default KEYBOARD;

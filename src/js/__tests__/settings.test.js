import Settings from '../settings';

test('testing working status of class Settings', () => {
  const settings = new Settings();
  settings.setVaueToUserSettings('theme', 'light');
  settings.setVaueToUserSettings('music', 'off');
  const result = {};
  settings.settings.forEach((value, key) => {
    result[key] = value;
  });
  expect(result).toEqual({ theme: 'light', music: 'off', difficulty: 'easy' });
});

test.each([
  [
    "'Доступны только параметры theme, music, difficulty'",
    ['thema', 'light'],
    'Доступны только параметры theme, music, difficulty',
  ],
  [
    "'Доступны только темы dark, light и gray'",
    ['theme', 'green'],
    'Доступны только темы dark, light и gray',
  ],
  [
    "'Доступна только музыка trance, pop, rock, chillout или off'",
    ['music', 'rap'],
    'Доступна только музыка trance, pop, rock, chillout или off',
  ],
  [
    "'Доступны только уровни сложности easy, normal, hard, nightmare'",
    ['difficulty', 'hell'],
    'Доступны только уровни сложности easy, normal, hard, nightmare',
  ],
])(
  'testing errors status of class Settings with error %s',
  (_, imported, expected) => {
    const settings = new Settings();
    expect(() => settings.setVaueToUserSettings(...imported)).toThrow(expected);
  },
);

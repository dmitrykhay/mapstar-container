export default class Settings {
  constructor() {
    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
    this.userSettings = new Map();
  }

  get settings() {
    return new Map([...this.defaultSettings, ...this.userSettings]);
  }

  setVaueToUserSettings(key, value) {
    if (!['theme', 'music', 'difficulty'].includes(key)) {
      throw new Error('Доступны только параметры theme, music, difficulty');
    }

    if (key === 'theme' && !['dark', 'light', 'gray'].includes(value)) {
      throw new Error('Доступны только темы dark, light и gray');
    }

    if (
      key === 'music'
        && !['trance', 'pop', 'rock', 'chillout', 'off'].includes(value)
    ) {
      throw new Error(
        'Доступна только музыка trance, pop, rock, chillout или off',
      );
    }

    if (
      key === 'difficulty'
        && !['easy', 'normal', 'hard', 'nightmare'].includes(value)
    ) {
      throw new Error(
        'Доступны только уровни сложности easy, normal, hard, nightmare',
      );
    }

    this.userSettings.set(key, value);
  }
}

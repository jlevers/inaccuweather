const defaultDataSettingsState = {
  lang: 'English (US)',
  temp: 'fahrenheit'
};

const dataSettings = (state = defaultDataSettingsState, action) => {
  switch (action.type) {
  case 'CHANGE_LANGUAGE':
    return {
      ...state,
      lang: action.lang
    };
  case 'CHANGE_UNITS':
    return {
      ...state,
      temp: action.temp
    };
  default:
    return state;
  }
};

export default dataSettings;

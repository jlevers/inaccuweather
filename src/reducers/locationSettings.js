const defaultLocSettingsState = {
  recents: [
    ['us', 'United States'],
    ['gb', 'United Kindom'],
    ['cn', 'China']
  ],
  flagHover: false,
  breadcrumbs: {
    world: 'World',
    continent: 'North America',
    country: 'United States',
    region: 'New York',
    city: 'New York'
  }
};

const locationSettings = (state = defaultLocSettingsState, action) => {
  switch (action.type) {
  case 'CHANGE_CONTINENT':
    return {
      ...state,
      breadcrumbs: {
        ...state.breadcrumbs,
        continent: action.continent
      }
    };
  case 'CHANGE_COUNTRY':
    return {
      flagCode: action.flagCode,
      breadcrumbs: {
        ...state.breadcrumbs,
        continent: action.continent,
        country: action.country
      }
    };
  case 'CHANGE_REGION':
    return {
      ...state,
      breadcrumbs: {
        ...state.breadcrumbs,
        region: action.region
      }
    };
  case 'CHANGE_CITY':
    return {
      ...state,
      breadcrumbs: {
        ...state.breadcrumbs,
        city: action.city
      }
    };
  case 'TOGGLE_HOVER':
    return {
      ...state,
      flagHover: !state.flagHover
    };
  default:
    return state;
  }
};

export default locationSettings;

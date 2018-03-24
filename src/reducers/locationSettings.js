import geoData from 'countries-list';
const countries = geoData.countries;
const continents = geoData.continents;

const defaultLocSettingsState = {
  recents: [
    ['US', countries['US'].name],
    ['GB', countries['GB'].name],
    ['CN', countries['CN'].name]
  ],
  flagHover: false,
  breadcrumbs: {
    world: 'World',
    continent: continents[countries['US'].continent],
    country: countries['US'].name,
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
    // Don't change state if the country is being "changed" to the currently active country
    if (action.country !== state.recents[0][0]) {
      const countryName = countries[action.country].name;
      let newRecents = state.recents;

      let indexOfCountry = -1;

      // Check if new country is in recents list, and if so, set indexOfCountry to the index
      // of the new country in the recents list
      for (let i = 0; i < newRecents.length; i++) {
        if (newRecents[i][0] === action.country) {
          indexOfCountry = i;
          break;
        }
      }

      // If the new country is in recents list, reorder recents list (don't remove
      // any elements)
      if (indexOfCountry !== -1) {
        const newCountry = newRecents[indexOfCountry];
        newRecents.splice(indexOfCountry, 1);
        newRecents = [newCountry, ...state.recents];
      } else {  // Otherwise, remove the last element and add the new country at the beginning
        newRecents.pop();
        newRecents = [[action.country, countryName], ...newRecents];
      }

      return {
        ...state,
        recents: newRecents,
        breadcrumbs: {
          ...state.breadcrumbs,
          continent: continents[countries[action.country].continent],
          country: countryName
        }
      };
    }
    return state;

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

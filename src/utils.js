import urlRegex from 'url-regex';
import ipRegex from 'ip-regex';

/** 
 * Array of searched items is first retrieved from storage, and then the old array and the new search are saved back there.
 * Returns: new search list
 */
export function saveSearchToStorage(value, storage){
  const newSearchList = [...getSearchLocationFromStorage(storage), value]; 
  storage.setItem("location_searches", JSON.stringify(newSearchList));
  return newSearchList;
}
  
  /**Array of searched locations is retrieved from storage */
export function getSearchLocationFromStorage(storage){
  return JSON.parse(storage.getItem("location_searches")) || [];
}

export const isValidSearch = (value) => {
  if(value === "check") return true; // because that is required to check the current url on ipstack
  else {
      let validURL = urlRegex({exact: true}).test(value);
      let validIP = ipRegex({exact: true}).test(value);
      return validURL || validIP;
  }
} 
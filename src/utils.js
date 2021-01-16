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
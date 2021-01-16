/** Array of searched items is first retrieved from storage, and then the old array and the new search are saved back there */
export function saveSearchToStorage(value, storage){
    storage.setItem("location_searches", 
        JSON.stringify([...(JSON.parse(storage.getItem("location_searches")) || []), value])
    );
  }
  
  /**Array of searched locations is retrieved from storage */
 export function getSearchLocationFromStorage(storage){
    return JSON.parse(storage.getItem("location_searches")) || [];
  }
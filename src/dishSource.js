import { PROXY_URL, PROXY_KEY } from "./apiConfig.js"

const searchOptions = {
	method: 'GET',
	headers: {
		'X-DH2642-Key': PROXY_KEY,
		'X-DH2642-Group': '747'
	}
}

function gotResponseACB (APIresponse) {
    //console.log("Response is:" + APIresponse)

    // We check if there is any problem with the Response from the API before returning it
    if (APIresponse.ok === false) {
        throw new Error("HTTP error, status = " + APIresponse.status);
    }
    return APIresponse.json()
}

function extractResultsSearchDishesACB(resultObject) {
    //console.log("El resultado es:", resultObject)
    return resultObject.results
}

export function searchDishes (searchParams) {
    const endPoint = "/recipes/complexSearch"
    const URL = PROXY_URL + endPoint

    const URLsearchParams = new URLSearchParams(searchParams)
    return fetch(URL + "?" + URLsearchParams, searchOptions).then(gotResponseACB).then(extractResultsSearchDishesACB)
}


export function getMenuDetails (ids_array) {
    const endPoint = "/recipes/informationBulk"
    const URL = PROXY_URL + endPoint
    const URLsearchParams = new URLSearchParams({ids:ids_array})

   return fetch(URL + "?" + URLsearchParams, searchOptions).then(gotResponseACB)
        
}

function getMenuToGetDishACB(array){
    return array[0]
}

export function getDishDetails (id) {
    return getMenuDetails([id]).then(getMenuToGetDishACB)
}

// FOR CONSOLE TESTING
//window.searchDishes = searchDishes;
//window.getMenuDetails = getMenuDetails;
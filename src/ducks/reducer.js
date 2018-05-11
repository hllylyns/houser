const initialState = {
  property_name: '',
  address: '',
  city: '',
  state: '',
  zip: 0,
  img: '',
  monthly: 0,
  mortgage: 0

}

// const UPDATE_LISTING = 'UPDATE_LISTING';
const UPDATE_PROP_NAME = 'UPDATE_PROP_NAME';
const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_STATE = 'UPDATE_STATE';
const UPDATE_ZIP = 'UPDATE_ZIP';

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // case UPDATE_LISTING:
    //   return Object.assign({},state,{property_name: action.payload.property_name, address: action.payload.address,
    //   city: action.payload.city, state: action.payload.state, zip: action.payload.zip, })
    case UPDATE_PROP_NAME:
      return Object.assign({}, state, { property_name: action.payload });
    case UPDATE_ADDRESS:
      return Object.assign({}, state, { address: action.payload });
    case UPDATE_CITY:
      return Object.assign({}, state, { city: action.payload });
    case UPDATE_STATE:
      return Object.assign({}, state, { state: action.payload });
    case UPDATE_ZIP:
      return Object.assign({}, state, { zip: action.payload });
    default:
      return state;
  }
}

// export function updateListing(property_name, address, city, state, zip) {
//   type: UPDATE_LISTING,
//     payload: prop
// };
// 
export function updatePropName(propName){
  return{
    type: UPDATE_PROP_NAME,
    payload: propName
  }
}
export function updateAddress(address){
  return{
    type: UPDATE_ADDRESS,
    payload: address
  }
}
export function updateCity(city){
  return{
    type: UPDATE_CITY,
    payload: city
  }
}
export function updateState(state){
  return{
    type: UPDATE_STATE,
    payload: state
  }
}
export function updateZip(zip){
  return{
    type: UPDATE_ZIP,
    payload: zip
  }
}
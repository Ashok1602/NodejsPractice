import { TUTORIAL_CONST } from "../actions/actionTypes";
export default function reducer(state = {}, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case TUTORIAL_CONST.ADD_TUTORIAL_REQUEST:
      return {
        ...state,
        addTutorialSuccess: null,
      };
    case TUTORIAL_CONST.ADD_TUTORIAL_SUCCESS:
      return {
        ...state,
        addTutorialSuccess: action.payload.response.data,
      };
    case TUTORIAL_CONST.ADD_TUTORIAL_FAILURE:
      return {
        ...state,
        addTutorialSuccess: null,
      };

      case TUTORIAL_CONST.GET_TUTORIAL_REQUEST:
        return {
          ...state,
          getTutorialSuccess: [],
        };
      case TUTORIAL_CONST.GET_TUTORIAL_SUCCESS:
        return {
          ...state,
          getTutorialSuccess: action.payload.response.data,
        };
      case TUTORIAL_CONST.GET_TUTORIAL_FAILURE:
        return {
          ...state,
          getTutorialSuccess: [],
        };
    
      case TUTORIAL_CONST.GET_TUTORIAL_BY_ID_REQUEST:
        return {
          ...state,
          getTutorialByIdSuccess: null,
        };
      case TUTORIAL_CONST.GET_TUTORIAL_BY_ID_SUCCESS:
        return {
          ...state,
          getTutorialByIdSuccess: action.payload.response.data,
        };
      case TUTORIAL_CONST.GET_TUTORIAL_BY_ID_FAILURE:
        return {
          ...state,
          getTutorialByIdSuccess: null,
        };

      
      case TUTORIAL_CONST.UPDATE_TUTORIAL_REQUEST:
        return {
          ...state,
          updateTutorialSuccess: null,
        };
      case TUTORIAL_CONST.UPDATE_TUTORIAL_SUCCESS:
        return {
          ...state,
          updateTutorialSuccess: action.payload.response.data,
        };
      case TUTORIAL_CONST.UPDATE_TUTORIAL_FAILURE:
        return {
          ...state,
          updateTutorialSuccess: null,
        };

        case TUTORIAL_CONST.DELETE_TUTORIAL_REQUEST:
          return {
            ...state,
            deleteTutorialSuccess: null,
          };
        case TUTORIAL_CONST.DELETE_TUTORIAL_SUCCESS:
          return {
            ...state,
            deleteTutorialSuccess: action.payload.response.data,
          };
        case TUTORIAL_CONST.DELETE_TUTORIAL_FAILURE:
          return {
            ...state,
            deleteTutorialSuccess: null,
          };

          case TUTORIAL_CONST.DELETE_ALL_TUTORIAL_REQUEST:
            return {
              ...state,
              deleteAllTutorialSuccess: null,
            };
          case TUTORIAL_CONST.DELETE_ALL_TUTORIAL_SUCCESS:
            return {
              ...state,
              deleteAllTutorialSuccess: action.payload.response.data,
            };
          case TUTORIAL_CONST.DELETE_ALL_TUTORIAL_FAILURE:
            return {
              ...state,
              deleteAllTutorialSuccess: null,
            };
  }
  return state;
}

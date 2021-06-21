import { TUTORIAL_CONST } from "./actionTypes";
import { AXIOS_INSTANCE, BASE_URL } from "./apiEndPoints";
import * as base from "./baseAction";
export function checkHttpStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}
export function parseJSON(response) {
  return response.data;
}

/**
 * [tutorial description]
 * @param  {[type]} formData [description]
 * @return {[type]}          [description]
 */

// action for add Tutorial
export function addTutorial(formData) {
  return (dispatch) => {
    dispatch(base.getRequest(TUTORIAL_CONST.ADD_TUTORIAL_REQUEST));
    AXIOS_INSTANCE.post(
      `${BASE_URL}/add`,
      formData
    )
      .then(checkHttpStatus)
      .then(parseJSON)
      .then((response) => {
        if (response.isSuccess) {
          dispatch(
            base.getSuccess(TUTORIAL_CONST.ADD_TUTORIAL_SUCCESS, {
              response: {
                statusCode: 200,
                data: response,
              },
            })
          );
        } else {
          dispatch(
            base.getFailure(TUTORIAL_CONST.ADD_TUTORIAL_FAILURE, {
              error: {
                statusCode: response.error.error,
                statusText: response.error.errorDescription,
                isSuccess: response.isSuccess,
              },
            })
          );
        }
      })
      .catch((error) => {
        dispatch(
          base.getFailure(TUTORIAL_CONST.ADD_TUTORIAL_FAILURE, {
            error: {
              statusText: error,
              netWorkError: true,
            },
          })
        );
      });
  };
}

// action for get Tutorial by id
export function getByIdTutorial(id) {
  return (dispatch) => {
    dispatch(base.getRequest(TUTORIAL_CONST.GET_TUTORIAL_BY_ID_REQUEST));
    AXIOS_INSTANCE.get(
      `${BASE_URL}/${id}`
    )
      .then(checkHttpStatus)
      .then(parseJSON)
      .then((response) => {
        if (response.isSuccess) {
          dispatch(
            base.getSuccess(TUTORIAL_CONST.GET_TUTORIAL_BY_ID_SUCCESS, {
              response: {
                statusCode: 200,
                data: response,
              },
            })
          );
        } else {
          dispatch(
            base.getFailure(TUTORIAL_CONST.ADD_TUTORIAL_FAILURE, {
              error: {
                statusCode: response.error.error,
                statusText: response.error.errorDescription,
                isSuccess: response.isSuccess,
              },
            })
          );
        }
      })
      .catch((error) => {
        dispatch(
          base.getFailure(TUTORIAL_CONST.ADD_TUTORIAL_FAILURE, {
            error: {
              statusText: error,
              netWorkError: true,
            },
          })
        );
      });
  };
}

// action for add Tutorial
export function getAllTutorial() {
  return (dispatch) => {
    dispatch(base.getRequest(TUTORIAL_CONST.GET_TUTORIAL_REQUEST));
    AXIOS_INSTANCE.get(
      BASE_URL
    )
      .then(checkHttpStatus)
      .then(parseJSON)
      .then((response) => {
        if (response.isSuccess) {
          dispatch(
            base.getSuccess(TUTORIAL_CONST.GET_TUTORIAL_SUCCESS, {
              response: {
                statusCode: 200,
                data: response,
              },
            })
          );
        } else {
          dispatch(
            base.getFailure(TUTORIAL_CONST.GET_TUTORIAL_FAILURE, {
              error: {
                statusCode: response.error.error,
                statusText: response.error.errorDescription,
                isSuccess: response.isSuccess,
              },
            })
          );
        }
      })
      .catch((error) => {
        dispatch(
          base.getFailure(TUTORIAL_CONST.GET_TUTORIAL_FAILURE, {
            error: {
              statusText: error,
              netWorkError: true,
            },
          })
        );
      });
  };
}

// action for update Tutorial
export function editTutorial(id, formdata) {
  return (dispatch) => {
    dispatch(base.getRequest(TUTORIAL_CONST.UPDATE_TUTORIAL_REQUEST));
    AXIOS_INSTANCE.patch(
      `${BASE_URL}/${id}`, formdata
    )
      .then(checkHttpStatus)
      .then(parseJSON)
      .then((response) => {
        if (response.isSuccess) {
          dispatch(
            base.getSuccess(TUTORIAL_CONST.UPDATE_TUTORIAL_SUCCESS, {
              response: {
                statusCode: 200,
                data: response,
              },
            })
          );
        } else {
          dispatch(
            base.getFailure(TUTORIAL_CONST.UPDATE_TUTORIAL_FAILURE, {
              error: {
                statusCode: response.error.error,
                statusText: response.error.errorDescription,
                isSuccess: response.isSuccess,
              },
            })
          );
        }
      })
      .catch((error) => {
        dispatch(
          base.getFailure(TUTORIAL_CONST.UPDATE_TUTORIAL_FAILURE, {
            error: {
              statusText: error,
              netWorkError: true,
            },
          })
        );
      });
  };
}

// action for delete Tutorial
export function deleteTutorial(id) {
  return (dispatch) => {
    dispatch(base.getRequest(TUTORIAL_CONST.DELETE_TUTORIAL_REQUEST));
    AXIOS_INSTANCE.delete(
      `${BASE_URL}/${id}`
    )
      .then(checkHttpStatus)
      .then(parseJSON)
      .then((response) => {
        if (response.isSuccess) {
          dispatch(
            base.getSuccess(TUTORIAL_CONST.DELETE_TUTORIAL_SUCCESS, {
              response: {
                statusCode: 200,
                data: response,
              },
            })
          );
        } else {
          dispatch(
            base.getFailure(TUTORIAL_CONST.DELETE_TUTORIAL_FAILURE, {
              error: {
                statusCode: response.error.error,
                statusText: response.error.errorDescription,
                isSuccess: response.isSuccess,
              },
            })
          );
        }
      })
      .catch((error) => {
        dispatch(
          base.getFailure(TUTORIAL_CONST.DELETE_TUTORIAL_FAILURE, {
            error: {
              statusText: error,
              netWorkError: true,
            },
          })
        );
      });
  };
}

// action for add Tutorial
export function deleteAllTutorial() {
  return (dispatch) => {
    dispatch(base.getRequest(TUTORIAL_CONST.DELETE_ALL_TUTORIAL_REQUEST));
    AXIOS_INSTANCE.get(
      `${BASE_URL}/deleteAll`
    )
      .then(checkHttpStatus)
      .then(parseJSON)
      .then((response) => {
        if (response.isSuccess) {
          dispatch(
            base.getSuccess(TUTORIAL_CONST.DELETE_ALL_TUTORIAL_SUCCESS, {
              response: {
                statusCode: 200,
                data: response,
              },
            })
          );
        } else {
          dispatch(
            base.getFailure(TUTORIAL_CONST.DELETE_ALL_TUTORIAL_FAILURE, {
              error: {
                statusCode: response.error.error,
                statusText: response.error.errorDescription,
                isSuccess: response.isSuccess,
              },
            })
          );
        }
      })
      .catch((error) => {
        dispatch(
          base.getFailure(TUTORIAL_CONST.DELETE_ALL_TUTORIAL_FAILURE, {
            error: {
              statusText: error,
              netWorkError: true,
            },
          })
        );
      });
  };
}
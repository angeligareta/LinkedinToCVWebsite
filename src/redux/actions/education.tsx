import {
  REPLACE_EDUCATION,
  EDUCATION_LOADING,
  EDUCATION_FAILED,

} from "../constants";

import { EDUCATION } from "../../assets/education";

export function replaceEducation(educationArray) {
  console.log("ADDING EDUCATION");

  return {
    type: REPLACE_EDUCATION,
    payload: { education: educationArray }
  };
}

export function educationLoading() {
  return { type: EDUCATION_LOADING };
}

export function educationFailed(errmess) {
  return {
    type: EDUCATION_FAILED,
    payload: errmess
  };
}

export function fetchEducation() {
  console.log("DISPATCHING EDUCATION");

  return function(dispatch) {
    setTimeout(() => {
      dispatch(replaceEducation(EDUCATION));
    }, 3000);
  };
}

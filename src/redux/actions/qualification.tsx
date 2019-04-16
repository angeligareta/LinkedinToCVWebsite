import {
  REPLACE_QUALIFICATION,
  QUALIFICATION_LOADING,
  QUALIFICATION_FAILED,
  FETCH_QUALIFICATION
} from "../constants/index";

import { QUALIFICATION } from "../../assets/qualifications";

export function replaceQualification(qualificationArray) {
  console.log("ADDING");
  return {
    type: REPLACE_QUALIFICATION,
    payload: { qualifications: qualificationArray }
  };
}

export function qualificationLoading() {
  return { type: QUALIFICATION_LOADING };
}

export function qualificationFailed(errmess) {
  return {
    type: QUALIFICATION_FAILED,
    payload: errmess
  };
}

export function fetchQualifications() {
  console.log("DISPATCHING 1");

  return function(dispatch) {
    setTimeout(() => {
      dispatch(replaceQualification(QUALIFICATION));
    }, 3000);
  };
}

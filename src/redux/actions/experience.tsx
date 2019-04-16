import {
  REPLACE_EXPERIENCE,
  EXPERIENCE_LOADING,
  EXPERIENCE_FAILED,

} from "../constants";

import { EXPERIENCE } from "../../assets/experience";

export function replaceExperience(experienceArray) {
  console.log("ADDING EDUCATION");

  return {
    type: REPLACE_EXPERIENCE,
    payload: { experience: experienceArray }
  };
}

export function experienceLoading() {
  return { type: EXPERIENCE_LOADING };
}

export function experienceFailed(errmess) {
  return {
    type: EXPERIENCE_FAILED,
    payload: errmess
  };
}

export function fetchExperience() {
  console.log("DISPATCHING EDUCATION");

  return function(dispatch) {
    setTimeout(() => {
      dispatch(replaceExperience(EXPERIENCE));
    }, 3000);
  };
}

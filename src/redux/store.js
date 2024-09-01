import React from "react";
import {legacy_createStore as createStore} from "redux";

const initialState = "light"


function reducer(state = "light", action) {
  console.log("state " + state)
  switch (action.type) {
    case "DARK": {
      return state = action.text
    }
    case "LIGHT": {
      return state = action.text
    }
  }
  return state;
}

export const store = createStore(reducer)
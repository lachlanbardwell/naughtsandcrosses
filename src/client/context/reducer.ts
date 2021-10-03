import React, { useState } from 'react';

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'field': {
      // console.log(action.field);
      // console.log(action.value);
      // console.log(state.formState);
      return {
        ...state,
        formState: {
          ...state.formState,
          [action.field]: action.value,
        },
      };
    }
    case 'login': {
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    }
    case 'success': {
      return {
        ...state,
        isLoading: false,
        error: false,
        isLoggedIn: true,
      };
    }
    case 'failure': {
      return {
        ...state,
        isLoading: false,
        error: true,
        isLoggedIn: false,
      };
    }

    default:
      break;
  }
  return state;
};

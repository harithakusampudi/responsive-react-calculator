import { types } from "./types";
import { fromJS } from "immutable";

export interface CalculationProps {
  date: any;
  input: string;
  result: string;
}

export const saveCalculation = (payload: CalculationProps) => {
  return {
    type: types.SAVE,
    payload
  };
};

const initialState = fromJS({
  calculations: []
});
export default function calculations(state = initialState, action: any) {
  switch (action.type) {
    case types.SAVE:
      return state.set(
        "calculations",
        state.get("calculations").push(action.payload)
      );

    default:
      return state;
  }
}

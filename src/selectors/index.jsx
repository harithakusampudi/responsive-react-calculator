import { createSelector } from "reselect";
import { Map } from "immutable";
import moment from "moment";
import { getDateIsFrom } from "../utils";

const calculations = state => state.calculations.calculations;

const makeSelectCalculations = () =>
  createSelector(calculations, state => {
    let list = Map(state).toJS();
    let todayList = [];
    let yesterdayList = [];
    list.calculations.length &&
      list.calculations.map(each => {
        let dateIsFrom = getDateIsFrom(moment(each.date, "DD/MM/YYYY"));
        switch (dateIsFrom) {
          case "TODAY":
            todayList.push(each);
            break;
          case "YESTERDAY":
            yesterdayList.push(each);
            break;
          default:
            break;
        }
      });
    return {
      todayList,
      yesterdayList
    };
  });

export default {
  calculations: makeSelectCalculations
};

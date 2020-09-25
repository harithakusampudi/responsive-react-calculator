import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { saveCalculation } from "../modules/calculations/calculations.duck";
import Calculator from "./Calculator";

import SELECTORS from "../selectors";
const mapStateToProps = createStructuredSelector({
  calculations: SELECTORS.calculations()
});

function mapDispatchToProps(dispatch: any) {
  return {
    actions: bindActionCreators(
      {
        saveCalculation
      },
      dispatch
    )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);

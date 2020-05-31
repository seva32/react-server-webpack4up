import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as actions from "../../actions";
import RedirectWithStatus from "../../components/RedirectWithStatus/RedirectWithStatus";

function Signout({ signout }) {
  useEffect(() => {
    signout();
  }, []);
  return <RedirectWithStatus status={300} from="/signout" to="/" />;
}

Signout.propTypes = {
  signout: PropTypes.func,
};

Signout.defaultProps = {
  signout: () => {},
};

export default connect(null, actions)(Signout);

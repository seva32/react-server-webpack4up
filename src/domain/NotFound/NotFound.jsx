import React from "react";
import Status from "../../components/Status/Status";
import imgPath from "../../assets/images/notfound.png";
import * as Styles from "./NotFound.style";

const NotFound = () => (
  <Status status={404}>
    <Styles.StyledContainer img={imgPath} />
  </Status>
);

export default NotFound;

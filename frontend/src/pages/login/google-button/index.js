import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./index.module.css";

const GoogleButton = ({ isDark }) => (
  <a
    role="button"
    aria-label="Login com o Google"
    className={clsx(styles.GoogleButton, { [styles.GoogleButtonDark]: isDark })}
    tabIndex={0}
    href="/auth/google"
  >
    Login com o Google
  </a>
);

GoogleButton.propTypes = {
  isDark: PropTypes.bool.isRequired
};

export default GoogleButton;

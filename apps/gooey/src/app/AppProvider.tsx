import "../styles.css";

import React from "react";

interface Props {
  children?: React.ReactNode;
}

const AppProvider = (props: Props) => {
  return <>{props.children}</>;
};

export default AppProvider;

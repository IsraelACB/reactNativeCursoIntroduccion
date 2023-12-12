import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";

export default function Saludar(props) {
  //const { firstname = "Nombre", lastname = "Apellido" } = props;
  const { firstname, lastname } = props;
  return (
    <Text>
      Hola {firstname} {lastname}
    </Text>
  );
}

// Saludar.defaultProps = {
//   firstname: "persona sin nombre",
//   lastname: "ni apellido",
// };

Saludar.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string,
};

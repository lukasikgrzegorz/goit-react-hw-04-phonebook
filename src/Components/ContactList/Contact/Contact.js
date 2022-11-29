import React from "react";
import PropTypes from "prop-types";

const Contact = ({ children }) => {
	return <li>{children}</li>;
};

Contact.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Contact;

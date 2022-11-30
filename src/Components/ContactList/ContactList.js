import React from "react";
import Contact from "./Contact/Contact";
import PropTypes from "prop-types";

const ContactList = (props) => {
	const { contacts, filter, deleteFunction } = props;
	return (
		<ul>
			{contacts
				.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
				.map((contact) => {
					return (
						<Contact key={contact.id}>
							{contact.name} : {contact.number}{" "}
							<button id={contact.id} onClick={deleteFunction}>
								Delete
							</button>
						</Contact>
					);
				})}
		</ul>
	);
};

ContactList.propTypes = {
	contacts: PropTypes.array.isRequired,
	filter: PropTypes.string.isRequired,
	deleteFunction: PropTypes.func.isRequired,
};

export default ContactList;

import PropTypes from 'prop-types';
import { Button, ListItem } from "./ContactList.styled";

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ name, id, number }) => {
        return (
          <ListItem key={id}>
            {name}: {number}
            <Button type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </Button>
          </ListItem>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

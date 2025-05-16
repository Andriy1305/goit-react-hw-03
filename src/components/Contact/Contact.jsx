// src/components/Contact/Contact.jsx
const Contact = ({ name, number, onDelete, id }) => {
  return (
    <li>
      {name}: {number}
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;

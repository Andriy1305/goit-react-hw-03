import styles from "./Contact.module.css";
import { FaPhone, FaUser } from "react-icons/fa";

const Contact = ({ name, number, onDelete, id }) => {
  return (
    <li className={styles.item}>
      <div className={styles.text}>
        <div className={styles.row}>
          <FaUser className={styles.user} />
          <span className={styles.name}>{name}</span>
        </div>
        <div className={styles.row}>
          <FaPhone className={styles.phone} />
          <span className={styles.number}>{number}</span>
        </div>
      </div>
      <button
        type="button"
        onClick={() => onDelete(id)}
        className={styles.button}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;

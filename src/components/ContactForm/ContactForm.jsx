import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";

const ContactForm = ({ onAddContact, existingContacts }) => {
  const initialValues = {
    name: "",
    number: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Мінімум 3 символи")
      .max(50, "Максимум 50 символів")
      .required("Обов’язкове поле"),
    number: Yup.string()
      .min(3, "Мінімум 3 символи")
      .max(50, "Максимум 50 символів")
      .required("Обов’язкове поле"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const nameExists = existingContacts.some(
      (contact) => contact.name.toLowerCase() === values.name.toLowerCase()
    );
    if (nameExists) {
      alert(`${values.name} вже є у контактів.`);
      return;
    }
    onAddContact(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label htmlFor="name" className={styles.label}>
          Name
        </label>
        <Field
          id="name"
          name="name"
          placeholder="Name"
          className={styles.input}
        />
        <ErrorMessage name="name" component="div" className={styles.error} />

        <label htmlFor="number" className={styles.label}>
          Number
        </label>
        <Field
          id="number"
          name="number"
          placeholder="Phone number"
          className={styles.input}
        />
        <ErrorMessage name="number" component="div" className={styles.error} />

        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

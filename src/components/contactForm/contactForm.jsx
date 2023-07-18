import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import css from './contactForm.module.css';
import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContacts } from 'redux/operations';

const initialValues = {
  name: '',
  number: '',
};

let userSchema = object().shape({
  name: string().min(2).required(),
  number: string()
    .min(9, 'please enter number in forms: xxx-xx-xx')
    .matches(
      /^((\(\d{3}\) ?)|(\d{3}-))?\d{2}-\d{2}$/,
      'enter number in forms: xxx-xx-xx'
    )
    .required(),
});

export function ContactForm() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = ({ name, number }, action) => {
    if (contacts.find(contact => contact.name === name) !== undefined) {
      Notiflix.Notify.failure(`${name} is already saved in your contacts`);
      return;
    }

    dispatch(addContacts({ name, number }));

    Notiflix.Notify.success(
      `${name} has been successfully added to your contacts`
    );

    action.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      <Form autoComplete="off">
        <label>
          <p>Name</p>
          <Field type="text" name="name" />
          <ErrorMessage component="p" className={css.nameError} name="name" />
        </label>

        <label>
          <p>Number</p>
          <Field type="tel" name="number" />
          <ErrorMessage
            component="p"
            className={css.phoneError}
            name="number"
          />
        </label>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}

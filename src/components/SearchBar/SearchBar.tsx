import { IoSearchOutline } from "react-icons/io5";
import { Field, Form, Formik } from "formik";

import css from "./SearchBar.module.css";

type FormImage = {
  image: string;
};

type PropsSubmit = {
  onSubmit: (values: FormImage) => void;
};

export default function SearchBar({ onSubmit }: PropsSubmit) {
  return (
    <Formik initialValues={{ image: "" }} onSubmit={onSubmit}>
      <Form className={css.header}>
        <div className={css.btnInput}>
          <button className={css.inputButton} type="submit">
            <IoSearchOutline size="22px" />
          </button>
          <Field
            className={css.input}
            type="text"
            name="image"
            placeholder="Search images and photos"
          />
        </div>
      </Form>
    </Formik>
  );
}

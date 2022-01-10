import React from "react";
import { Field, reduxForm } from "redux-form";

const RegisterWizard1 = (props) => {
  const { handleSubmit ,stu ,rec} = props;

  function rFieldInput({ input, label, type }) {
    return (
      <div>
        <label for={label}>{label}</label>
        <input id={label} type={type} {...input} />
      </div>
    );
  }

  function rRadioInput({ input,label, option1, option2 }) {
    return (
      <div>
        <label>{label}</label>
        <br />
        <label for={option1}>{option1}</label>
        <input type="radio" id={option1} value={option1} name={label} {...input} onClick={stu}/>
        <label for={option2}>{option2}</label>
        <input type="radio" id={option2} value={option2} name={label} {...input} onClick={rec}/>
      </div>
    );
  }

  return (
    <div>
      <h1>Page 1</h1>
      <form onSubmit={handleSubmit}>
        <Field
          name="firstName"
          type="text"
          component={rFieldInput}
          label="First Name"
        />
        <Field
          name="lastName"
          type="text"
          component={rFieldInput}
          label="Last Name"
        />
        <Field
          name="phone"
          type="tel"
          component={rFieldInput}
          label="Phone number"
        />

        <Field
          name="birthdate"
          type="date"
          component={rFieldInput}
          label="Birthdate"
        />

        <Field
          name="class"
          component={rRadioInput}
          label="Classification"
          option1="Student"
          option2="Recruiter"
        />
        <div>
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "wizard", // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(RegisterWizard1);

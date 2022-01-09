import React from "react";
import { Field, reduxForm } from "redux-form";

const RegisterWizard3 = (props) => {
  const { handleSubmit, previousPage } = props;

  function rFieldInput({ input, label, type }) {
    return (
      <div>
        <label for={label}>{label}</label>
        <input id={label} type={type} {...input} />
      </div>
    );
  }

  function rSelectInput({ label, options }) {
    return (
      <div>
        <label>{label}</label>

        <select>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>
    );
  }

  function rRadioInput({ label, option1, option2 }) {
    return (
      <div>
        <label>{label}</label>
        <br />
        <label for={option1}>{option1}</label>
        <input type="radio" id={option1} value={option1} name={label} />
        <label for={option2}>{option2}</label>
        <input type="radio" id={option2} value={option2} name={label} />
      </div>
    );
  }

  return (
    <div>
      <h1>Page 3</h1>
      <form onSubmit={handleSubmit}>
        <Field name="bio" type="text" component={rFieldInput} label="Bio" />
        <Field
          name="contact_link"
          type="url"
          component={rFieldInput}
          label="Contact Link"
        />
        <Field
          name="is_company"
          component={rRadioInput}
          label="Company?"
          option1="Yes"
          option2="No"
        />
        {/* If company */}
        <Field
          name="company_name"
          type="text"
          component={rFieldInput}
          label="Company Name"
        />
        <Field
          name="company_size"
          type="text"
          component={rFieldInput}
          label="Company Size"
        />
        <Field
          name="industry"
          type="text"
          component={rFieldInput}
          label="Industry"
        />
        <Field
          name="company_desc"
          type="text"
          component={rFieldInput}
          label="Company Description"
        />
        {/* If company */}
        <Field
          name="profile_image"
          type="file"
          component={rFieldInput}
          label="Profile Image"
        />
        <Field
          name="verification"
          type="file"
          component={rFieldInput}
          label="Verification Document"
        />
        <div>
          <button type="button" onClick={previousPage}>
            Previous
          </button>
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
})(RegisterWizard3);

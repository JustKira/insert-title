import React from "react";
import { Field, reduxForm } from "redux-form";

const RegisterWizard2 = (props) => {
  const { handleSubmit, previousPage } = props;

  function rFieldInput({ input, label, type }) {
    return (
      <div>
        <label for={label}>{label}</label>
        <input id={label} type={type} {...input} />
      </div>
    );
  }

  function rTextAreaInput({ label }) {
    return (
      <div>
        <label>{label}</label>
        <textarea></textarea>
      </div>
    );
  }

  return (
    <div>
      <h1>Page 2</h1>
      <form onSubmit={handleSubmit}>
        <Field
          name="undergradYear"
          type="text"
          component={rFieldInput}
          label="Undergraduate Year"
        />
        <Field
          name="university"
          type="text"
          component={rFieldInput}
          label="University"
        />
        {/* //Text Area */}
        <Field
          name="work_experience"
          component={rTextAreaInput}
          label="Work Experience"
        />
        {/* //Text Area */}
        <Field
          name="vol_experience"
          component={rTextAreaInput}
          label="Volunteering Experience"
        />
        {/* //Text Area */}
        <Field
          name="memberships"
          component={rTextAreaInput}
          label="Memberships"
        />
        {/* //Text Area */}
        <Field name="langs" component={rTextAreaInput} label="Languages" />
        <Field
          name="github"
          type="url"
          component={rFieldInput}
          label="Github Link"
        />
        <Field
          name="linkedin"
          type="url"
          component={rFieldInput}
          label="Linkedin Link"
        />
        <Field
          name="other_web"
          type="url"
          component={rFieldInput}
          label="Other Website"
        />
        {/* //Text Area */}
        <Field
          name="extra_info"
          component={rTextAreaInput}
          label="Extra information"
        />
        {/* Resume */}
        <Field
          name="resume"
          type="file"
          component={rFieldInput}
          label="Resume"
        />
        {/* Image */}
        <Field
          name="profile_image"
          type="file"
          component={rFieldInput}
          label="Profile Image"
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
})(RegisterWizard2);

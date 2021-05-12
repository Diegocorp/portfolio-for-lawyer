import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./style.scss";

function ContactForm() {
  const [state, handleSubmit] = useForm("mbjqgdez");
  if (state.succeeded) {
    return <p>Thank you for contacting us, we will contact you shortly.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="contactForm">
      <div className="row">
        <div className="col-sm-6 col-12">
          <div className="formInput">
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              className="form-control"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
        </div>
        <div className="col-sm-6 col-12">
          <div className="formInput">
            <input
              id="phoneNumber"
              type="phoneNumber"
              name="phoneNumber"
              placeholder="Phone number"
              className="form-control"
            />
            <ValidationError
              prefix="Phone number"
              field="phoneNumber"
              errors={state.errors}
            />
          </div>
        </div>
        <div className="col-sm-6 col-12">
          <div className="formInput">
            <input
              id="email"
              placeholder="Email"
              type="email"
              name="email"
              className="form-control"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
        </div>
        <div className="col-sm-6 col-12">
          <div className="formInput">
            <input
              id="address"
              type="address"
              name="address"
              placeholder="Address"
              className="form-control"
            />
            <ValidationError
              prefix="Address"
              field="address"
              errors={state.errors}
            />
          </div>
        </div>
        <div className="col-12">
          <div className="formInput">
            <textarea
              id="message"
              type="text"
              name="message"
              placeholder="Message..."
              className="form-control"
            />
            <ValidationError
              prefix="Message..."
              field="message"
              errors={state.errors}
            />
          </div>
        </div>
        <div className="col-12">
          <button type="submit" disabled={state.submitting}>
            Send
          </button>
        </div>
      </div>
    </form>
  );
}

function App() {
  return <ContactForm />;
}
export default App;

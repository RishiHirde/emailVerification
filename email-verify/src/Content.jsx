import React from "react";

function Content() {
  return (
    <div className="content">
      <h1>Check your email</h1>
      <p>
        We've emailed a code to the entered email. Once you receive the code,
        enter it below to verify.
      </p>
      <form method="post">
        <input
          className="input"
          type="number"
          name="otp"
          placeholder="Enter 6 digit OTP"
          maxLength="6"
          minLength="6"
        />
        <input className="button" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Content;

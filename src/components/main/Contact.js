import React from "react";

const Contact = ({ theme__contact }) => {
  return (
    <div className="contact__wrapper ">
      <h2
        ref={theme__contact}
        className="margin__bottom font__weight__500 special__border"
      >
        To contact:
      </h2>
      <div>
        <i className="fas fa-envelope-open-text color__purple"></i>{" "}
        <a href="mailto:abhkrwt07@gmail.com">Mail Me</a>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";

const Contact = () => {
  return (
    <div className="contact__wrapper ">
      <h1 className="margin__bottom font__weight__500 special__border">
        To contact:
      </h1>
      <div>
        <i class="fas fa-envelope-open-text color-purple"></i>{" "}
        <a href="mailto:abhkrwt07@gmail.com">Mail Me</a>
      </div>
    </div>
  );
};

export default Contact;

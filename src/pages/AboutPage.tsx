import React from "react";
import { Link } from "react-router-dom";

export const AboutPage: React.FC = () => {
  return (
    <>
      <h1>About Page</h1>
      <p>
        lorem todo fdsfs lorem todo fdsfs lorem todo fdsfs lorem todo fdsfs
        lorem todo fdsfs
      </p>
      <Link className="btn" to="/">
        Back to todos page
      </Link>
    </>
  );
};

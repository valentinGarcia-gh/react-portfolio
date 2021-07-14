import React from "react";

const Contact = () => {
  return (
    <main className="container">
      <div className="row">
        <div className="col-8 mt-5">
          <div className="jumbotron">
            <div className="row">
              <div className="col-12">
                <h1 className="display-4">Let's Network!</h1>
                <hr className="my-4" />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h2 className="text-muted">LinkedIn</h2>
                <a
                  href="www.linkedin.com/in/valentin-garcia-07832665
"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>www.linkedin.com/in/valentin-garcia-07832665</p>
                </a>
                <h2 className="text-muted">GitHub</h2>
                <a
                  href="https://github.com/valentinGarcia-gh"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>https://github.com/valentinGarcia-gh</p>
                </a>

                <h2 className="text-muted">Email</h2>
                <a
                  href="mailto:vgarcia0587@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>vgarcia0587@gmail.com</p>
                </a>

                <h2 className="text-muted">Resume</h2>
                <a
                  href="https://drive.google.com/file/d/1Sji8OoCBiIE_tzzeM-V0AFg-ZVq7AT8D/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>Look At My Tech Skills</p>
                </a>

                <h2 className="text-muted">Phone</h2>
                <p>Buy me some tacos first and then maybe you might get it!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
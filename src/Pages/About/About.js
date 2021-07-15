import React from "react";

const About = () => {
  return (
    <div>
      <main className="container">
        <div className="row mt-5">
          <div className="col-12 col-md-10 col-lg-8 mt-5">
            <div className="jumbotron">
              <div className="row">
                <div className="col-12">
                  <h1 className="display-4">A little about Valentin...</h1>
                  <hr className="my-6" />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <img
                    src="https://photos.app.goo.gl/6PPwyRyT4ado9Z449"
                    className="thumbnail float-left pr-2 pb-2"
                    alt="me"
                  />
                  <p>
                    Hi! I'm Valentin. I'm a full-stack web developer based out of
                    Atlanta, Georgia that specializes in building highly responsive,
                    detailed, user-friendly, web apps. I have experience with
                    MongoDB/MySQL, Express, React, and Node.js. Or in short, MERN stack.
                    I have my Master's in Information Technology with a concentration
                    in Software Development and am also a Certified Scrum Master. My education 
                    and certifications, coupled with over 5 years of experience in Software 
                    Development make for a great background and serves as a great 
                    asset for any team in I.T. 
                  </p>

                  <p>Feel free to take a look around!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
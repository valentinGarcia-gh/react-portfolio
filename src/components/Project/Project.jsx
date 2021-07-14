import React from "react";

const Project = () => {
    return (
        <main className="container">
            <div className="row">
                <div className="col-12 mt-2">
                    <div className="jumbotron">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="display-4">Here are some of my projects I have done for your viewing pleasure.</h1>
                                <hr className="my-4" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Workday Scheduler</h5>

                                        <p className="card-text">
                                            Work Day Scheduler utilizes HTML, CSS, JavaScript, 
                                            and third-party APIs to create a simple calendar 
                                            that allow's a user to save events for each hour
                                            of the day. This app runs in the browser and features
                                            dynamically updated HTML and CSS powered by jQuery.
                                        </p>
                                        <a
                                            href="https://github.com/valentinGarcia-gh/work-day-scheduler"
                                            className="card-link"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            GitHub Repo
                                        </a>
                                        <a
                                            href="https://valentingarcia-gh.github.io/work-day-scheduler/"
                                            className="card-link"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Deployed Site
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Fitness Tracker</h5>

                                        <p className="card-text">
                                            Fitness Tracker utilizes a Mongo database with a Mongoose
                                            schema and handles routes with Express. It allows 
                                            users the ability to view, create, and track daily
                                            workouts. Users are able to log multiple exercises
                                            in a workout on any day and track the nameof the exercise, 
                                            type of workout, weight, number of sets, number of reps, 
                                            and the duration of the exercise. If the user chooses cardio 
                                            instead of resistance, they can track the distance traveled.
                                        </p>
                                        <a
                                            href="https://github.com/valentinGarcia-gh/workout-tracker"
                                            className="card-link"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            GitHub Repo
                                        </a>
                                        <a
                                            href="https://workout-trackervg.herokuapp.com/"
                                            className="card-link"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Deployed Site
                                        </a>
                                    </div>
                                </div>
                                <br />
                            </div>
                            <div className="col-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">My Mental </h5>

                                        <p className="card-text">
                                            My Mental is a web app designed to help 
                                            users improve their mental health by conducting 
                                            calming music along with yoga to put your mind at ease. 
                                            Whether your day was as stressful as 6 PM rush hour or as 
                                            easy as lying on the beach during a sunny Sunday morning. 
                                            My Mental can assist in tracking your mental state day to day, 
                                            while improving your mood and spirit.
                                        </p>
                                        <a
                                            href="https://github.com/mikebird2414/Well-Being"
                                            className="card-link"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            GitHub Repo
                                        </a>
                                        <a
                                            href="https://mikebird2414.github.io/Well-Being/"
                                            className="card-link"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Deployed Site
                                        </a>
                                    </div>
                                </div>
                                <br />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Habit Tracker</h5>

                                        <p className="card-text">
                                        Habit Tracker App that allows a user to track their habits, either good or bad.
                                        Along with Node.js, it uses Express.js to create a RESTFUL API, and Handlebars.js 
                                        as the template engine. The database uses MySQL and Sequelize ORM.
                                        </p>
                                        <a
                                            href="https://github.com/ashak90/project-02-habit-tracker"
                                            className="card-link"
                                        >
                                            GitHub Repo
                                        </a>
                                        <a
                                            href="https://habittracking-app.herokuapp.com/"
                                            className="card-link"
                                        >
                                            Deployed Site
                                        </a>
                                    </div>
                                </div>
                            </div>{" "}
                            <div className="col-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Note Taker</h5>

                                        <p className="card-text">
                                            Note Taker is an application that can be used to write and 
                                            save notes. It usesan Express.js backend and will save 
                                            and retrieve note data from a JSON file
                                        </p>
                                        <a
                                            href="https://github.com/valentinGarcia-gh/Note-Taker"
                                            className="card-link"
                                        >
                                            GitHub Repo
                                        </a>
                                        <a
                                            href="https://note-taker21119.herokuapp.com/"
                                            className="card-link"
                                        >
                                            Deployed Site
                                        </a>
                                    </div>
                                </div>
                            </div>{" "}
                            <div className="col-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Random Password Generator</h5>

                                        <p className="card-text">
                                            This application enables users to generate a random password 
                                            based on criteria that they've selected. The app runs in the 
                                            browser and features dynamically updated HTML and CSS powered
                                            by JavaScript. It has a clean, polished, responsive user interface.
                                        </p>
                                        <a
                                            href="https://github.com/valentinGarcia-gh/randomPasswordGenerator"
                                            className="card-link"
                                        >
                                            GitHub Repo
                                        </a>
                                        <a
                                            href="https://valentingarcia-gh.github.io/randomPasswordGenerator/"
                                            className="card-link"
                                        >
                                            Deployed Site
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Project;
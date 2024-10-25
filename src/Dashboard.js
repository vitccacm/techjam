import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import { Link, useNavigate } from "react-router-dom";
import { List } from "@phosphor-icons/react";
import logo from "./techjamlogo.png";
import { getCurrentUser } from "./loginMockApi.js";
import pfp1 from "./pfps/pfp1.png";
import pfp2 from "./pfps/pfp2.png";
import pfp3 from "./pfps/pfp3.png";
import pfp4 from "./pfps/pfp4.png";

// Array of profile pictures
const profilePictures = [pfp1, pfp2, pfp3, pfp4];

const DashboardNavbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  return (
    <div
      className="navbar"
      style={{ color: "white", backgroundColor: "#212121" }}
    >
      <div className="container">
        <div>
          <div className="logo" style={{ display: "flex" }}>
            <img src={logo} alt="Tech Jam Logo" style={{ width: "70px" }} />
            <span>Tech Jam</span>
          </div>
        </div>
        <div className="menu-icon" onClick={toggleNavbar}>
          <List size={30} color="white" />
        </div>

        <div className={`nav-elements ${isNavbarVisible && "active"}`}>
          <ul>
            <li>
              <Link
                to="/leaderboard"
                style={{ color: "white", textDecoration: "none" }}
              >
                Leaderboard
              </Link>
            </li>
            <li>
              <Link
                to="/content"
                style={{ color: "white", textDecoration: "none" }}
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                to="/signin"
                style={{
                  color: "#9B111E",
                  textDecoration: "none",
                  fontSize: "18px",
                  fontWeight: "700",
                }}
                onClick={() => {
                  sessionStorage.clear();
                }}
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [participant, setParticipant] = useState({});
  const [quizMarks, setQuizMarks] = useState({});
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const navigate = useNavigate(); // For redirection

  useEffect(() => {
    // Check if the user is logged in
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    const username = sessionStorage.getItem("username");

    if (isLoggedIn === "true") {
      setWelcomeMessage(`Welcome to your Dashboard`);
    } else {
      navigate("/signin"); // Redirect to login if not logged in
    }

    // Checking if participant and quizMarks exist in sessionStorage
    const storedParticipant = sessionStorage.getItem("participant");
    const storedQuizMarks = sessionStorage.getItem("quizMarks");

    if (storedParticipant && storedQuizMarks) {
      // If data exists in sessionStorage, use it
      setParticipant(JSON.parse(storedParticipant));
      setQuizMarks(JSON.parse(storedQuizMarks));
    } else {
      // Otherwise, fetch data from currentUser and save to sessionStorage
      const currentUser = getCurrentUser();

      if (currentUser) {
        const newParticipant = {
          name: currentUser.name,
          email: currentUser.email,
          imageUrl:
            profilePictures[Math.floor(Math.random() * profilePictures.length)], // Random profile picture
        };
        const newQuizMarks = currentUser.quizMarks;

        setParticipant(newParticipant);
        setQuizMarks(newQuizMarks);

        // Saving to sessionStorage
        sessionStorage.setItem("participant", JSON.stringify(newParticipant));
        sessionStorage.setItem("quizMarks", JSON.stringify(newQuizMarks));
      } else {
        console.log("No user is logged in.");
      }
    }
  }, [navigate]);

  // Function to calculate total marks only for attempted quizzes
  const calculateTotalMarks = () => {
    return Object.values(quizMarks).reduce((acc, marks) => {
      const numericMarks = parseFloat(marks); // Convert to number
      return !isNaN(numericMarks) ? acc + numericMarks : acc; // Add if valid number
    }, 0);
  };

  return (
    <div>
      <DashboardNavbar />
      <div className="dashboard">
        <div className="dash">
          <div className="profile-card">
            <p style={{ fontSize: "25px", marginBottom: "30px" }}>
              {welcomeMessage}
            </p>
            <img className="avatar" src={participant.imageUrl} alt="Profile" />
            <h2>{participant.name}</h2>
            <p>Email: {participant.email}</p>
            <p>Total Marks: {calculateTotalMarks()}</p>
          </div>
          <div className="linedash"></div>
          <div className="marks">
            <div className="titlemark">Quiz Marks</div>
            <table>
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Marks</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(quizMarks).map(
                  ([subject, marks]) =>
                    marks !== "NA" && ( // Print only if marks are not 'NA'
                      <tr key={subject}>
                        <td>{subject}</td>
                        <td>{marks}</td>
                      </tr>
                    )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

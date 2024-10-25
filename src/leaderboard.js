import React, { useState, useEffect } from "react";
import { users } from "./loginMockApi"; // Replace with the correct path to your data file
import "./leaderboard.css";
import logo from "./techjamlogo.png";
import { List } from "@phosphor-icons/react";
import { Link, useNavigate } from "react-router-dom";

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
                to="/content"
                style={{ color: "white", textDecoration: "none" }}
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                to="/Dashboard"
                style={{ color: "white", textDecoration: "none" }}
              >
                Dashboard
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

const Leaderboard = () => {
  const [quizMarks, setQuizMarks] = useState({});
  const [userRank, setUserRank] = useState(null); 
  const [currentUserDetails, setCurrentUserDetails] = useState(null); 
  const navigate = useNavigate();
  const username = sessionStorage.getItem("username"); 

  useEffect(() => {
    if (!username) {
      navigate("/signin"); 
      return;
    }

    const storedQuizMarks = sessionStorage.getItem("quizMarks");
    if (storedQuizMarks) {
      setQuizMarks(JSON.parse(storedQuizMarks)); 
    }

    const totalScores = users.map((user) => ({
      ...user,
      totalScore: Object.values(user.quizMarks).reduce(
        (acc, mark) => acc + (mark !== "NA" ? parseInt(mark) : 0),
        0
      ),
    }));

    totalScores.sort((a, b) => b.totalScore - a.totalScore);

    const rank =
      totalScores.findIndex((user) => user.username === username) + 1;
    setUserRank(rank);

    const currentUser = totalScores.find((user) => user.username === username);
    if (currentUser) {
      setCurrentUserDetails(currentUser);
    } else {
      console.error("Current user not found in total scores.");
    }
  }, [navigate, username]);

  const sortedUsers = users
    .map((user) => ({
      ...user,
      totalScore: Object.values(user.quizMarks).reduce(
        (acc, mark) => acc + (mark !== "NA" ? parseInt(mark) : 0),
        0
      ),
    }))
    .sort((a, b) => b.totalScore - a.totalScore);

  return (
    <div>
      <DashboardNavbar />
      <h2 className="h2">Leaderboard</h2>
      <table className="leader" style={{ marginBottom :"40px" }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'center' }}>Rank</th>
            <th style={{ textAlign: 'center' }}>Name</th>
            <th style={{ textAlign: 'center' }}>Total Score</th>
          </tr>
        </thead>
        <tbody>
          {currentUserDetails ? (
            <>
              <tr>
                <td style={{ textAlign: 'center' }}>{userRank}</td>
                <td style={{ textAlign: 'center' }}>{currentUserDetails.name}</td>
                <td style={{ textAlign: 'center' }}>{currentUserDetails.totalScore}</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center' }}>_</td>
                <td style={{ textAlign: 'center' }}>_</td>
                <td style={{ textAlign: 'center' }}>_</td>
              </tr>
            </>
          ) : (
            <tr>
              <td colSpan="3">User details not available</td>
            </tr>
          )}
          {sortedUsers.map((user, index) => (
            <tr key={user.username}>
              <td style={{ textAlign: 'center' }}>{index + 1}</td>
              <td style={{ textAlign: 'center' }}>{user.name}</td>
              <td style={{ textAlign: 'center' }}>{user.totalScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;

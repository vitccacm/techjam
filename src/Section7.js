import React, { useState } from "react";
import "./table.css";
import ppt1 from "./Documents/day9/Machine Learning Day 3.pptx";
import ppt2 from "./Documents/day9/Machine Learning Day 4.pptx";

import { useNavigate } from "react-router-dom";

const Table10 = () => {
  const navigate = useNavigate();

  const navigatePage = (video, title, file) => {
    console.log("n", file);

    navigate("/youtube", { state: { video, title, file } });
  };
  return (
    <div style={{ backgroundColor: "#171717" }}>
      <div class="containertable">
        <div class="tablesc">
          <div class="table-header">
            <div class="header__item">
              <a id="name" class="filter__link">
                Topic Name
              </a>
            </div>
            <div class="header__item">
              <a id="wins" class="filter__link filter__link--number">
                Video
              </a>
            </div>
            <div class="header__item">
              <a id="losses" class="filter__link filter__link--number">
                PPT
              </a>
            </div>
            <div class="header__item">
              <a id="total" class="filter__link filter__link--number">
                Quiz
              </a>
            </div>
          </div>
          <div class="table-content">
            <div class="table-row">
              <div class="table-data">Introduction</div>
              <div class="table-data">
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigatePage(
                      "https://www.youtube.com/embed/FfUYXbmMwfA?si=26ILBjy3roQSL30f",
                      "Introduction",
                      "Day1"
                    );
                  }}
                  target="_blank"
                >
                  Click here for Video
                </a>
              </div>
              <div class="table-data">
                <a
                  href={ppt1}
                  download="MSFI AI Chatbot"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click here to view PPT
                </a>
              </div>
              <div class="table-data">
                <a>-</a>
              </div>
            </div>

            <div class="table-row">
              <div class="table-data">Linux File Permissions</div>
              <div class="table-data">
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigatePage(
                      "https://www.youtube.com/embed/_JSuj5Q-NOE?si=nCAKWmhdIU4wiXfK",
                      "Linux File Permissions",
                      "sample"
                    );
                  }}
                  target="_blank"
                >
                  Click here for Video
                </a>
              </div>
              <div class="table-data">
                <a
                  href={ppt1}
                  download="MSFI AI Chatbot"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click here to view PPT
                </a>
              </div>
              <div class="table-data">
                <a>-</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table10;

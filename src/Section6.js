import React, { useState } from "react";
import "./table.css";
import ppt1 from "./Documents/day9/Machine Learning Day 3.pptx";
import ppt2 from "./Documents/day9/Machine Learning Day 4.pptx";

import { useNavigate } from "react-router-dom";

const Table9 = () => {
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
              <div class="table-data">Training a neural network</div>
              <div class="table-data">
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigatePage(
                      "https://www.youtube.com/embed/0SpGg0SdinA?si=8BaEIoLk8MqOZ9cG",
                      "Training a neural network",
                      "sample"
                    );
                  }}
                  target="_blank"
                >
                  Click here for Video
                </a>
              </div>
              <div class="table-data">
                <a href={ppt1} download="ML 3" target="_blank" rel="noreferrer">
                  Click here to view PPT
                </a>
              </div>
              <div class="table-data">
                <a>-</a>
              </div>
            </div>

            <div class="table-row">
              <div class="table-data">Optimizing Network</div>
              <div class="table-data">
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigatePage(
                      "https://www.youtube.com/embed/ROKVX02A4Lc?si=s4BqKx0UZe2Vr2n7",
                      "More layer types and optimizing a network for a task",
                      "sample"
                    );
                  }}
                  target="_blank"
                >
                  Click here for Video
                </a>
              </div>
              <div class="table-data">
                <a href={ppt2} download="ML 4" target="_blank" rel="noreferrer">
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

export default Table9;

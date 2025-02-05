import React, { useState } from "react";
import "./table.css";
import ppt1 from "./Documents/day7/Machine Learning Day 1.pptx";
import ppt2 from "./Documents/day7/Machine Learning Day 2.pptx";

import { useNavigate } from "react-router-dom";

const Table8 = () => {
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
              <div class="table-data">
                Introduction to Notebooks, Numpy, Torch
              </div>
              <div class="table-data">
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigatePage(
                      "https://www.youtube.com/embed/4eyKRGi5Sdg?si=mnSQzXadHK_-QvCO",
                      "Introduction to Notebooks, Numpy, Torch",
                      "sample"
                    );
                  }}
                  target="_blank"
                >
                  Click here for Video
                </a>
              </div>
              <div class="table-data">
                <a href={ppt1} download="ML 1" target="_blank" rel="noreferrer">
                  Click here to view PPT
                </a>
              </div>
              <div class="table-data">
                <a>-</a>
              </div>
            </div>

            <div class="table-row">
              <div class="table-data">Pytorch and Tensor Operations</div>
              <div class="table-data">
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigatePage(
                      "https://www.youtube.com/embed/DX5OMLRepK0?si=D5nNedTr7ABjkSAd",
                      "Pytorch and Tensor Operations",
                      "sample"
                    );
                  }}
                  target="_blank"
                >
                  Click here for Video
                </a>
              </div>
              <div class="table-data">
                <a href={ppt2} download="ML 2" target="_blank" rel="noreferrer">
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

export default Table8;

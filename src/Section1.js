import React, { useState } from "react";
import "./table.css";
import part1 from "./Documents/javaday1/part1.ppt";
import part2 from "./Documents/javaday1/part2.ppt";
import part3 from "./Documents/javaday1/part3.ppt";
import { useNavigate } from "react-router-dom";
const TableNew = () => {
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
              <a id="name" class="filter__link" href="#">
                Topic Name
              </a>
            </div>
            <div class="header__item">
              <a id="wins" class="filter__link filter__link--number" href="#">
                Video
              </a>
            </div>
            <div class="header__item">
              <a id="losses" class="filter__link filter__link--number" href="#">
                PPT
              </a>
            </div>
            <div class="header__item">
              <a id="total" class="filter__link filter__link--number" href="#">
                Quiz
              </a>
            </div>
          </div>
          <div class="table-content">
            <div class="table-row">
              <div class="table-data">Basic of Java</div>
              <div class="table-data">
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigatePage(
                      "https://www.youtube.com/embed/rCZWduD_kIk",
                      "Basic of Java",
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
                  href={part1}
                  download="basic_of_java"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Click here to view PPT
                </a>
              </div>
              <div class="table-data">-</div>
            </div>
            <div class="table-row">
              <div class="table-data">Operators</div>
              <div class="table-data">
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigatePage(
                      "https://www.youtube.com/embed/b5CEyhyralY",
                      "Operators",
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
                  href={part2}
                  download="Operators"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Click here to view PPT
                </a>
              </div>
              <div class="table-data">-</div>
            </div>
            <div class="table-row">
              <div class="table-data">Loop</div>
              <div class="table-data">
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigatePage(
                      "https://www.youtube.com/embed/QFLIvtKHq_4",
                      "Loop",
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
                  href={part3}
                  download="Loop"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Click here to view PPT
                </a>
              </div>
              <div class="table-data">
                <a href="#" target="_blank">
                  Yet to be announced
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableNew;

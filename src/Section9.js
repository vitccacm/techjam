import React, { useState } from "react";
import "./table.css";
import ppt1 from "./Documents/c/Arrays_draft.pptx";
import ppt2 from "./Documents/c/Dynamic Memory Allocation.pptx";
import ppt3 from "./Documents/c/functions_Draft1.pptx";
import ppt4 from "./Documents/c/Session 1_1.pptx";
import ppt5 from "./Documents/c/Session 1_2.pptx";
import ppt6 from "./Documents/c/Session 2.pptx";
import ppt7 from "./Documents/c/Session 3.pptx";
import ppt8 from "./Documents/c/structure_Draft1.pptx";

import { useNavigate } from "react-router-dom";

const Table11 = () => {
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
          <div class="table-row">
            <div class="table-data">Divide and Conquer</div>
            <div class="table-data">
              <a
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigatePage(
                    "https://www.youtube.com/embed/vnAzwUjeNDE?list=PL-P4_-NVoVhtNJdDApTiZqyHypIgKCHXo",
                    "Divide and Conquer",
                    "sample"
                  );
                }}
                target="_blank"
              >
                Click here for Video
              </a>
            </div>
            <div class="table-data">
              <a href={ppt4} download="ppt4" target="_blank" rel="noreferrer">
                {" "}
                Click here to view PPT
              </a>
            </div>
            <div class="table-data">
              <a>-</a>
            </div>
          </div>

          <div class="table-content">
            <div class="table-row">
              <div class="table-data">Graphs and Trees</div>
              <div class="table-data">
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigatePage(
                      "https://www.youtube.com/embed/mqSQvJ3x9K0?list=PL-P4_-NVoVhtNJdDApTiZqyHypIgKCHXo",
                      "Graphs and Trees",
                      "sample"
                    );
                  }}
                  target="_blank"
                >
                  Click here for Video
                </a>
              </div>
              <div class="table-data">
                <a href={ppt1} download="ppt1" target="_blank" rel="noreferrer">
                  {" "}
                  Click here to view PPT
                </a>
              </div>
              <div class="table-data">
                <a>-</a>
              </div>
            </div>

            <div class="table-row">
              <div class="table-data">Greedy Approach</div>
              <div class="table-data">
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigatePage(
                      "https://www.youtube.com/embed/s6ZaRh69zV4?list=PL-P4_-NVoVhtNJdDApTiZqyHypIgKCHXo",
                      "Greedy Approach",
                      "sample"
                    );
                  }}
                  target="_blank"
                >
                  Click here for Video
                </a>
              </div>
              <div class="table-data">
                <a href={ppt2} download="ppt2" target="_blank" rel="noreferrer">
                  {" "}
                  Click here to view PPT
                </a>
              </div>
              <div class="table-data">
                <a>-</a>
              </div>
            </div>

            <div class="table-row">
              <div class="table-data">Dynamic Programming</div>
              <div class="table-data">
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigatePage(
                      "https://www.youtube.com/embed/_t-SJ9pGk2k?list=PL-P4_-NVoVhtNJdDApTiZqyHypIgKCHXo",
                      "Dynamic Programming 1",
                      "sample"
                    );
                  }}
                  target="_blank"
                >
                  Click here for Video
                </a>
              </div>
              <div class="table-data">
                <a href={ppt3} download="ppt3" target="_blank" rel="noreferrer">
                  {" "}
                  Click here to view PPT
                </a>
              </div>
              <div class="table-data">
                <a>-</a>
              </div>
            </div>

            <div class="table-row">
              <div class="table-data">Backtracking</div>
              <div class="table-data">
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigatePage(
                      "https://www.youtube.com/embed/6IHIGA66r5I?list=PL-P4_-NVoVhtNJdDApTiZqyHypIgKCHXo",
                      "Backtracking",
                      "sample"
                    );
                  }}
                  target="_blank"
                >
                  Click here for Video
                </a>
              </div>
              <div class="table-data">
                <a href={ppt5} download="ppt5" target="_blank" rel="noreferrer">
                  {" "}
                  Click here to view PPT
                </a>
              </div>
              <div class="table-data">
                <a>-</a>
              </div>
            </div>
            <div class="table-row">
              <div class="table-data">
                Pattern Recognization
              </div>
              <div class="table-data">
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigatePage(
                      "https://www.youtube.com/embed/l1i7UbcKpOc?list=PL-P4_-NVoVhtNJdDApTiZqyHypIgKCHXo",
                      "Pattern Recognization",
                      "sample"
                    );
                  }}
                  target="_blank"
                >
                  Click here for Video
                </a>
              </div>
              <div class="table-data">
                <a href={ppt6} download="ppt6" target="_blank" rel="noreferrer">
                  {" "}
                  Click here to view PPT
                </a>
              </div>
              <div class="table-data">
                <a>-</a>
              </div>
            </div>
            <div class="table-row">
              <div class="table-data">  Branch and Bound</div>
              <div class="table-data">
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigatePage(
                      "https://www.youtube.com/embed/HMQKai4r2qE?list=PL-P4_-NVoVhtNJdDApTiZqyHypIgKCHXo",
                      "Branch and Bound",
                      "sample"
                    );
                  }}
                  target="_blank"
                >
                  Click here for Video
                </a>
              </div>
              <div class="table-data">
                <a href={ppt7} download="ppt7" target="_blank" rel="noreferrer">
                  {" "}
                  Click here to view PPT
                </a>
              </div>
              <div class="table-data">
                <a>-</a>
              </div>
            </div>
            <div class="table-row">
              <div class="table-data">Bit Manipulation</div>
              <div class="table-data">
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigatePage(
                      "https://www.youtube.com/embed/1_mhdWB2qMk?list=PL-P4_-NVoVhtNJdDApTiZqyHypIgKCHXo",
                      "Bit Manipulation",
                      "sample"
                    );
                  }}
                  target="_blank"
                >
                  Click here for Video
                </a>
              </div>
              <div class="table-data">
                <a href={ppt8} download="ppt8" target="_blank" rel="noreferrer">
                  {" "}
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

export default Table11;

import React, { useState } from "react";
import "./table.css";
import ppt3 from "./Documents/day6/Day-7 video-3.pptx";
import ppt4 from "./Documents/day6/Day-7 video-4.pptx";
import ppt1 from "./Documents/day6/Day-7 video-1.pptx";
import ppt2 from "./Documents/day6/Day-7 video-2.pptx";
import Content from "./content";
import { useNavigate } from "react-router-dom";

const Table6 = () => {
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
              <div class="table-data">Introduction to Azure</div>
              <div class="table-data">
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigatePage(
                      "https://www.youtube.com/embed/NQaod73usOY?si=yUYvmMt3c6RDFoOZ",
                      "Introduction to Azure",
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
                  download="Introduction to Azure"
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
              <div class="table-data">Cloud computing with Azure</div>
              <div class="table-data">
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigatePage(
                      "https://www.youtube.com/embed/m4BML53d8uQ?si=18oKV2WjI5eU1fAG",
                      "Cloud computing with Azure",
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
                  href={ppt2}
                  download="Cloud computing with Azure"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Click here to view PPT
                </a>
              </div>
              <div class="table-data">
                <a>-</a>
              </div>
            </div>

            <div class="table-row">
              <div class="table-data">Azure AI Services - Introduction</div>
              <div class="table-data">
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigatePage(
                      "https://www.youtube.com/embed/euIqZRer6Rg?si=4xm9MlcyLhweRAVt",
                      "Azure AI Services - Introduction",
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
                  href={ppt3}
                  download="Azure AI Services - Introduction"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Click here to view PPT
                </a>
              </div>
              <div class="table-data">
                <a>-</a>
              </div>
            </div>
            <div class="table-row">
              <div class="table-data">Introduction to Computer Vision</div>
              <div class="table-data">
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigatePage(
                      "https://www.youtube.com/embed/6OamefPgIGY?si=9czOPtcguCiHDTVr",
                      "Introduction to Computer Vision",
                      "sample"
                    );
                  }}
                >
                  Click here for Video
                </a>
              </div>
              <div class="table-data">
                <a
                  href={ppt4}
                  download="Introduction to Computer Vision"
                  target="_blank"
                  rel="noreferrer"
                >
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

export default Table6;

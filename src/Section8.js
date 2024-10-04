import React, { useState } from "react";
import "./table.css";
import ppt1 from "./Documents/day9/Machine Learning Day 3.pptx";
import ppt2 from "./Documents/day9/Machine Learning Day 4.pptx";

import { useNavigate } from "react-router-dom";

const Table11 = ({ clickedLinks, onLinkClick }) => {
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
              <a id="draws" class="filter__link filter__link--number">
                Code
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
              <div class="table-data">SQL Injection</div>
              <div class="table-data">
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() =>{
					onLinkClick('sec8video1')
                    navigatePage(
                      "https://www.youtube.com/embed/o95koZnf1nw?si=0PvfTXn_KFiTdzX_",
                      "SQL Injectonion",
                      "Day2"
                    )
                  }}
                  target="_blank"
                >
                  Click here for Video
                </a>
              </div>
              <div class="table-data">
			  <a
                href=""
                target="_blank"
                rel="noreferrer"
                onClick={() => onLinkClick('sec8code1')}
                >Click here for Code
                </a>
              </div>
              <div class="table-data">
			  <a
                  href={ppt1}
                  download="MSFI AI Chatbot"
                  target="_blank"
                  rel="noreferrer"
				  onClick={() => onLinkClick('sec8ppt1')}
                >
                  Click here to view PPT
                </a>
              </div>
              <div class="table-data">
                <a>-</a>
              </div>
            </div>

            <div class="table-row">
              <div class="table-data">Privelege escalation</div>
              <div class="table-data">
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() =>{
					onLinkClick('sec8video2')
                    navigatePage(
                      "https://www.youtube.com/embed/enoZvwxoIjI?si=9A_Po3rcmO2gcISU",
                      "Privelege escalation",
                      "sample"
                    )
                  }}
                  target="_blank"
                >
                  Click here for Video
                </a>
              </div>
              <div class="table-data">
			  <a
                href=""
                target="_blank"
                rel="noreferrer"
                onClick={() => onLinkClick('sec8code2')}
                >Click here for Code
                </a>
              </div>
              <div class="table-data">
			  <a
                  href={ppt1}
                  download="MSFI AI Chatbot"
                  target="_blank"
                  rel="noreferrer"
				  onClick={() => onLinkClick('sec8ppt2')}
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

export default Table11;

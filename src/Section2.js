import React, { useState } from "react";
import "./table.css";
import Arrays from "./Documents/day1/Arrays.pptx";
import Function from "./Documents/day1/Functions.pptx";
import Inheritance from "./Documents/day1/Inheritance.pptx";
import Strings from "./Documents/day1/Strings.pptx";
import { useNavigate } from "react-router-dom";

const Table2 = () => {
  const navigate = useNavigate();
  
    const navigatePage = (video, title, file) => {
      console.log("n", file);
  
      navigate("/youtube", { state: { video, title, file } });
    };
  const properties = ["name", "wins", "draws", "losses", "total"];

  const [orderClass, setOrderClass] = useState("");

  const handleHeaderClick = (e, val) => {
    e.preventDefault();

    const activeLink = document.querySelector(
      ".filter__link.filter__link--active"
    );
    if (activeLink && activeLink !== e.target) {
      activeLink.classList.remove("filter__link--active");
    }

    e.target.classList.toggle("filter__link--active");
    const isDescending = orderClass === "desc" || orderClass === "";

    if (isDescending) {
      e.target.classList.add("asc");
      setOrderClass("asc");
    } else {
      e.target.classList.add("desc");
      setOrderClass("desc");
    }

    const parent = e.target.closest(".header__item");
    const index = Array.from(parent.parentNode.children).indexOf(parent);

    const tableContent = document.querySelector(".table-content");
    const rows = Array.from(tableContent.querySelectorAll(".table-row"));

    rows.sort((a, b) => {
      const x = a.querySelector(".table-data").children[index].textContent;
      const y = b.querySelector(".table-data").children[index].textContent;

      if (e.target.classList.contains("filter__link--number")) {
        return isDescending ? x - y : y - x;
      } else {
        return isDescending ? x.localeCompare(y) : y.localeCompare(x);
      }
    });

    rows.forEach((row) => tableContent.appendChild(row));
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
              <div class="table-data">Array</div>
              <div class="table-data">
              <a
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigatePage(
                      "https://www.youtube.com/embed/8XrTgXNrjkg",
                      "Array",
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
                  href={Arrays}
                  download="Array"
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
              <div class="table-data">String Manipulation</div>
              <div class="table-data">
              <a
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigatePage(
                      "https://www.youtube.com/embed/38MWDM1TgwM",
                      "Strings",
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
                  href={Strings}
                  download="Strings"
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
              <div class="table-data">Functions</div>
              <div class="table-data">
              <a
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigatePage(
                      "https://www.youtube.com/embed/5KslaodVm_c",
                      "Functions",
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
                  href={Function}
                  download="Function"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click here to view PPT
                </a>
              </div>
              <div class="table-data">
                <a href="#" target="_blank"></a>
              </div>
            </div>
            <div class="table-row">
              <div class="table-data">Inheritance</div>
              <div class="table-data">
              <a
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigatePage(
                      "https://www.youtube.com/embed/2rF0Two5Cfs",
                      "Inheritance",
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
                  href={Inheritance}
                  download="Inheritance"
                  target="_blank"
                  rel="noreferrer"
                >
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

export default Table2;

import React, { useState } from "react";
import "./HomePage.css";

const HomePage = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [startIndexSecondRow, setStartIndexSecondRow] = useState(0);
  const rectangles = [
    { id: 1, name: "Receipt1" },
    { id: 2, name: "Receipt2" },
    { id: 3, name: "Receipt3" },
    { id: 4, name: "Receipt4" },
    { id: 5, name: "Receipt5" },
    { id: 6, name: "Receipt6" },
  ];
  const rectanglesSecondRow = [
    { id: 1, name: "Chef1" },
    { id: 2, name: "Chef2" },
    { id: 3, name: "Chef3" },
    { id: 4, name: "Chef4" },
    { id: 5, name: "Chef5" },
    { id: 6, name: "Chef6" },
  ];

  const onNextClick = () => {
    if (startIndex + 4 < rectangles.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const onPreviousClick = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const onNextClickSecondRow = () => {
    if (startIndexSecondRow + 4 < rectanglesSecondRow.length) {
      setStartIndexSecondRow(startIndexSecondRow + 1);
    }
  };

  const onPreviousClickSecondRow = () => {
    if (startIndexSecondRow > 0) {
      setStartIndexSecondRow(startIndexSecondRow - 1);
    }
  };

  return (
    <div className="homePageContainer">
      <div className="text-wrapper">YES, CHEF</div>
      <div className="tableContainer">
        <table>
          <tbody>
            <tr>
              <td>
                <div className="featuredText">
                  <span>FEATURED RECEPIES</span>
                  <div className="buttonHolder">
                    <div
                      className="button"
                      id="previous"
                      onClick={onPreviousClick}
                    >
                      &lt;
                    </div>
                    <div className="button" id="next" onClick={onNextClick}>
                      &gt;
                    </div>
                  </div>
                </div>
                <div className="rectangles-row">
                  {rectangles
                    .slice(startIndex, startIndex + 4)
                    .map((rectangle) => (
                      <div className="whiteRectangle" key={rectangle.id}>
                        <h4>{rectangle.name}</h4>
                        <p>Tags</p>
                      </div>
                    ))}
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="featuredText">
                  <span>FEATURED RECEPIES</span>
                  <div className="buttonHolder">
                    <div
                      className="button"
                      id="previous"
                      onClick={onPreviousClickSecondRow}
                    >
                      &lt;
                    </div>
                    <div
                      className="button"
                      id="next"
                      onClick={onNextClickSecondRow}
                    >
                      &gt;
                    </div>
                  </div>
                </div>
                <div className="rectangles-row">
                  {rectanglesSecondRow
                    .slice(startIndexSecondRow, startIndexSecondRow + 4)
                    .map((rectanglesSecondRow) => (
                      <div
                        className="whiteRectangle"
                        key={rectanglesSecondRow.id}
                      >
                        <h4>{rectanglesSecondRow.name}</h4>
                        <p>Speciality info</p>
                      </div>
                    ))}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomePage;

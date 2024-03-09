import React from "react";
import "./HomePage.css";

const HomePage = () => {
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
                    <div class="button" id="previous">
                      &lt;
                    </div>
                    <div class="button" id="next">
                      &gt;
                    </div>
                  </div>
                </div>
                <div className="rectangles-row">
                  <div className="whiteRectangle">
                    <h4>Receipt</h4>
                    <p>Tag</p>
                  </div>
                  <div className="whiteRectangle">
                    <h4>Receipt</h4>
                    <p>Tag</p>
                  </div>
                  <div className="whiteRectangle">
                    <h4>Receipt</h4>
                    <p>Tag</p>
                  </div>
                  <div className="whiteRectangle">
                    {" "}
                    <h4>Receipt</h4>
                    <p>Tag</p>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="featuredText">
                  <span>FEATURED RECEPIES</span>
                  <div className="buttonHolder">
                    <div class="button" id="previous">
                      &lt;
                    </div>
                    <div class="button" id="next">
                      &gt;
                    </div>
                  </div>
                </div>
                <div className="rectangles-row">
                  <div className="whiteRectangle">
                    <h4>Receipt</h4>
                    <p>Tag</p>
                  </div>
                  <div className="whiteRectangle">
                    <h4>Receipt</h4>
                    <p>Tag</p>
                  </div>
                  <div className="whiteRectangle">
                    {" "}
                    <h4>Receipt</h4>
                    <p>Tag</p>
                  </div>
                  <div className="whiteRectangle">
                    {" "}
                    <h4>Receipt</h4>
                    <p>Tag</p>
                  </div>
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

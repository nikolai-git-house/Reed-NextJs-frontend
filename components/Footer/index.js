import React, { Component } from "react";
import logo from "../../static/logo.svg";
import facebook from "../../static/facebook.svg";
import linkedin from "../../static/linkedin.svg";
import twitter from "../../static/twitter.svg";
import instagram from "../../static/instagram.svg";
import Link from "next/link";

export default () => {
  return (
    <React.Fragment>
      <div className="footer">
        <div className="__container">
          <div className="row">
            <div className="column--2">
              <ul>
                <li>
                  <h4>Products</h4>
                </li>
                <li>
                  <Link prefetch href="/products">
                    <a>Hardware</a>
                  </Link>
                </li>
                <li>
                  <Link prefetch href="/products">
                    <a>Plubming</a>
                  </Link>
                </li>
                <li>
                  <Link prefetch href="/products">
                    <a>Accessories</a>
                  </Link>
                </li>
                <li>
                  <Link prefetch href="/products">
                    <a>Network</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="column--2">
              <ul>
                <li>
                  <h4>How to Buy</h4>
                </li>
                <li>
                  <Link prefetch href="/howtobuy">
                    <a>Distributors</a>
                  </Link>
                </li>
                <li>
                  <Link prefetch href="/shop">
                    <a>Buy Online</a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="column--2">
              <ul>
                <li>
                  <h4>Contact</h4>
                </li>
                <li>
                  <Link prefetch href="/contact">
                    <a>Phone</a>
                  </Link>
                </li>
                <li>
                  <Link prefetch href="/contact">
                    <a>Email</a>
                  </Link>
                </li>
                <li>
                  <Link prefetch href="/contact">
                    <a>Location</a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="column--6 logo">
              <img src={logo} />
            </div>
          </div>
          <br />
          <div className="row bottom">
            <div className="column--5 extra">
              <ul>
                <li>©. Reed Controls Inc 2018</li>
                <li>Legal</li>
                <li>Privacy</li>
              </ul>
            </div>

            <div className="column--7 social">
              <ul>
                <li>
                  <img style={{ width: "25px" }} src={facebook} />
                </li>
                <li>
                  <img style={{ width: "25px" }} src={linkedin} />
                </li>
                <li>
                  <img style={{ width: "25px" }} src={twitter} />
                </li>
                <li>
                  <img style={{ width: "25px" }} src={instagram} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

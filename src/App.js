import logo from "./logo.svg";
import "./App.css";
import React, { createElement } from "react";

export const App = () => {
    const yers = new Date();
    return createElement(
        "div",
        { className: "App" },
        React.createElement(
            "header",
            { className: "App-header" },
            React.createElement("img", {
                className: "App-logo",
                src: logo,
                alt: "logo",
            }),
            React.createElement(
                "p",
                null,
                "Edit",
                React.createElement("code", null, " src/App.js"),
                "and save to reload 2.",
            ),
            React.createElement(
                "a",
                {
                    className: "App-link",
                    href: "https://reactjs.org",
                    target: "_blank",
                    ral: "noopener noreferrer",
                },
                "Learn React",
            ),
            React.createElement("span", null, `${yers.getFullYear()}`),
        ),
    );
};

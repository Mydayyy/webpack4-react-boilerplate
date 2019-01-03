import "@babel/polyfill";

import "normalize.css";
import "../scss/global.scss";

import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, StaticRouter} from "react-router-dom";
import {renderToString} from "react-dom/server";

import App from "./App";
import index from "./index.ejs";

if (typeof global.document !== "undefined") {
    ReactDOM.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
        document.getElementById("root")
    );
}

export default data => {
    const assets = Object.keys(data.webpackStats.compilation.assets);
    let htmlWebpackPlugin = {
        files: {
            css: assets.filter(filename => filename.match(/\.css$/)).map(path => __webpack_public_path__ + path),
            js: assets.filter(filename => filename.match(/\.js$/)).map(path => __webpack_public_path__ + path)
        }
    };
    return index({
        htmlWebpackPlugin,
        content: renderToString(
            <StaticRouter location={data.path}>
                <App />
            </StaticRouter>
        )
    });
};

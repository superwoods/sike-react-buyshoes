"use strict";

// App 组件
var App = React.createClass({
    displayName: "App",

    // `render` 方法将生成 `buyshoes` 网页的 Virtual DOM。
    render: function render() {
        return React.createElement(
            "div",
            { className: "site" },
            React.createElement(
                "h1",
                null,
                "Buy Some Shoes!!!"
            )
        );
    }
});
window.onload = function () {
    // 使用 App 组件替换 `#root` 的 innerHTML。
    React.render(React.createElement(App, null), document.querySelector("#root"));
};

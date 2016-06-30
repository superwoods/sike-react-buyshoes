// App 组件
let App = React.createClass({
    // `render` 方法将生成 `buyshoes` 网页的 Virtual DOM。
    render() {
        return (
            <div className="site">
                <h1>Buy Some Shoes!!!</h1>
            </div>
        );
    }
});
window.onload = () => {
    // 使用 App 组件替换 `#root` 的 innerHTML。
    React.render(<App/>, document.querySelector("#root"));
}

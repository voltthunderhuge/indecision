const appRoot = document.getElementById("app");

let showDetails = false;
const details = "Look at me, I'm a millionaire!";

const onVisibilityToggle = () => {
    showDetails = !showDetails;
    render();
};

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onVisibilityToggle}>Show Details</button>
            {showDetails && <p>details</p>}
        </div>
    );
    ReactDOM.render(template, app);
};

render();
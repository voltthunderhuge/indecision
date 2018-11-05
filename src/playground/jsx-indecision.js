console.log("App is running");

const app = {
    title: "titletrons",
    subtitle: "subtitletrons",
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const value = e.target.elements.options.value;
    if (value) {
        app.options.push(value);
        e.target.elements.options.value = '';

        console.log(app.options);

        render()
    }
}

const eraseOptions = (e) => {
    e.preventDefault();

    app.options = [];
    render();
}

const onMakeDecision = () => {
    if (app.options.length > 0) {
        const index = Math.floor(Math.random()*app.options.length);
        console.log("option is", app.options[index]);
    }
}

const appRoot = document.getElementById("app");

const render = () => {
    const template = (
    <div>
        <h1>{app.title.toUpperCase()}</h1>
  
        {app.subtitle && <p>{app.subtitle}</p>}
  
        <button disabled={app.options.length===0} onClick={onMakeDecision}>Choose wisely</button>
        <button onClick={eraseOptions}>Erase Options</button>
        {(app.options && app.options.length>0) ? <p>Here are your options</p> : <p>No options</p>}
  
        <ul>
        {
            app.options.map((option, index) => <li key={index}>Option: {option}</li>)
        }
        </ul>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="options"/>
            <button>Add Options</button>
        </form>
    </div>
    );
    ReactDOM.render(template, appRoot);
}

render();
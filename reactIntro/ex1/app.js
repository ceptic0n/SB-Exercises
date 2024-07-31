const Meow = () => {
    return (<img src="https://i.etsystatic.com/40540154/r/il/6f3e95/5056467595/il_fullxfull.5056467595_smcm.jpg"/>
    );
}

const App = () => {

    return (
        <div>
            <h1>hi</h1>
            <Meow/>
            <Meow/>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById("root"));

console.log("eek");
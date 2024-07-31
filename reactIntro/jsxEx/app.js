const FirstComponent = () => {
    return(
        <h1>My Very first Component</h1>
    )
}

const NamedComponent = (props) =>{
    return(
        <p>My name is {props.name}</p>
    )
}


const Tweet = (props) => {

    return(
        <div className="card" style={{width: '18rem'}}>
            <div className="card-body">
                <h5 className="card-title">{props.user}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{props.date}</h6>
                <p className="card-text">{props.tweet}</p>
            </div>
        </div>
    )

}





const Person = (props) =>{
    let displayedMsg;
    if(props.age >= 18){
        displayedMsg = "Please go Vote!"
    }else if(props.age < 18){
        displayedMsg = "You Must be 18!"
    }
    return(
        <div>
            <p><b>{props.name}</b> : {displayedMsg}</p>
        </div>
    )
}

const App = () => {
    return(
        <div>
            <FirstComponent />
            <NamedComponent name="Nathan" />

            <Tweet user="ceptic0n" tweet="Happy Birthday" date="5/2/2000"/>
            <Tweet user="porterrobinson" tweet="SMILE :D!" date="7/26/2024"/>
            <Tweet user="tenz_" tweet="eek we won" date="4/25/24"/>

            <Person name="Nathan" age={24}/>
            <Person name="K'Lani" age={12}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
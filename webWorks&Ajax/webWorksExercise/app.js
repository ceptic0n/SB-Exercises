
// async function getData(){
//     const response =  await axios.get("https://ghibliapi.vercel.app/people")
//     for(let people of response.data){
//         renderData(`${people.name} is ${people.age} years old. They have ${people.eye_color} eyes, and ${people.hair_color} hair`)
//     }
//     console.log("This is after the API request")
// }

// const ghibliList = document.querySelector(".ghibliList")

// function renderData(string){
//     let newli = document.createElement("LI");
//     newli.innerText = string;
//     ghibliList.appendChild(newli);
// }
// getData()



async function getUser(token){
    try{
        const response = await axios.get("https://hack-or-snooze-v3.herokuapp.com/users", {params: {token}});
        console.log(response);
    } catch(error){
        console.log(`${error}}`)
    } 
}
    

async function login(username, password){
    const response = await axios.post("https://hack-or-snooze-v3.herokuapp.com/login", {user: {username, password}})
    console.log(response);
    return response;
}

async function signUp(username, password, name){
    const response = await axios.post("https://hack-or-snooze-v3.herokuapp.com/signup", {user: {name : name, username : username, password : password}});
    console.log(response);
    console.log("help");
}

// signUp("cepticon", "poopop", "nathan");

// signUp("ceptic0n", "myPassword", "eekMan");
// login("ceptic0n", "myPassword");
// getUser()

async function getToken(){
    const token = await login("ceptic0n", "myPassword");

    for(let users of token.data.users){
        console.log(users);
    }
    console.log(token.data.token);
}


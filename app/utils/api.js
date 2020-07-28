export function fetchRepos(user) {
    // const endpoint = window.encodeURI(`https://api.github.com/users/${user}`)
    // console.log("Endpoints: ",endpoint)
    //
    // return fetch(endpoint)
    //     .then((res) => res.json())
    //     .then((data) => {
    //         if (!data.items){
    //             throw new Error(data.message)
    //         }
    //         console.log("Data: ",data)
    //         return data.items
    //     })
    let data = [{name: "jeet", username: "jeetpateljsp", email: "jeetpateljsp@gmail.com"}, {name:"jaydeep", username: "jaydeep123", email:"jaydeep123@gmail.com"}];
    return data.filter(function (data) {
        return data.username.includes(user)
    })
}
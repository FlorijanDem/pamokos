async function fetchUserData (id){
    const url = await fetch("https://jsonplaceholder.typicode.com/users/")
    url.then(res=>
        res.json()).then(id => {
            console.log(id)
        })

}

console.log(fetchUserData(1))


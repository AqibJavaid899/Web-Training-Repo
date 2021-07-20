// Using Async/Await for fetching data from an external API
const fetchApi = async () => {
    const res = await fetch('https://api.randomuser.me/')
    const data = await res.json()
    const user = data.results

    console.log(`Username: ${user.name.first} ${user.name.last} Email: ${user.email} `)
}


fetchApi()

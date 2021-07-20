// Adding, Infering and Deleting Local Storage items
const addingItem = (key, value) => {
    localStorage.setItem(key, value)
}
const gettingITem = (key) => {
    return localStorage.getItem(key)
}
const removingItem = (key) => {
    localStorage.removeItem(key)
}

const main = () => {
    // Setting Key-Value pair after 1 sec
    setTimeout(() => {
        addingItem('name', 'Aqib')
        addingItem('email', 'abc@gmail.com')
    }, 1000)

    console.log("Local Storage Items are set")
    
    // Getting the already set Local Storage items through 'keys' after 2 secs
    setTimeout(() => {
        console.log(gettingITem('name'))
    }, 2000)

    // Removing all the LocalStorage items after 3 secs of previous Timeout
    setTimeout(() => {
        removingItem('name')
        removingItem('email')
    }, 3000)

    console.log("Local Storage Items are removed")
} 

main()

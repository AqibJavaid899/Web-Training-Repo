let data = [
    {name: 'Aqib', age: 21, gender: 'Male'},
    {name: 'Ali', age: 24, gender: 'Male'},
    {name: 'Maria', age: 23, gender: 'Female'}
]

const getData = () => {
    setTimeout(() => {
        data.forEach((person) => {
            console.log(`Name: ${person.name}  Age: ${person.age}  gender: ${person.gender}`)
        })
    }, 2000)
}

const createPerson = (person) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.push(person)
            // If there is no issue then the Promise is resolve otherwise reject
            let error = false
            if(!error) {
                resolve()
            } else {
                reject('Error: Something went wrong')
            }
        }, 4000)

    })
}


// getData()
createPerson({name: 'Murtaza', age: 30, gender: 'Male'}).then(getData()).catch((err) => console.log(err))
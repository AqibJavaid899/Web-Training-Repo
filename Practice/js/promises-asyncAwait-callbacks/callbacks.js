let posts = [
    {title: 'First Picture', author: 'Ali Khan'},
    {title: 'New Profile Picture', author: 'Murtaza Fazal'},
    {title: 'Grduation Post', author: 'Muhammad Ahmed'}
]

// Getting the post
const getPosts = () => {
    setTimeout(() => {
        posts.forEach((post) => {
            console.log(`Title: ${post.title}  Author: ${post.author}`)
        })
    }, 1000)
}

// Instead of chaining function like .then(), we can pass the function as 
// callback and call the callback function from the higher order function.
const createPost = (post, callback) => {
    setTimeout(() => {
        posts.push(post)
        callback()
    }, 3000)
}

createPost({title: 'Picnic Post', author: 'Shayan Shahid'}, getPosts)


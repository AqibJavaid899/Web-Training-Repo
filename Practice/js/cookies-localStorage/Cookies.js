// Getting all the cookies related to local server
console.log(document.cookie)

// Adding Cookies

// When cookie expiration is not set by developer 
document.cookie = 'name=Aqib;' 

// Setting the cookie expiration as 2021-12-31
document.cookie = 'email=abc@gmail.com; expires=' + new Date(2021, 11, 31).toUTCString()

// In order to delete a cookie, we just need to set the cookie expiration date as past
document.cookie = 'name=Aqib; expires=' + new Date(2020,11,31).toUTCString()



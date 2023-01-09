

const login = (email, pass) => {
    return new Promise((res, rej) => {
        if (email === 'pratik' && pass === 'pratik123') {
            res('login succsess')
        } else {
            rej('invalid email or password')
        }
    })
}

login('pratik', 'pratik123').then((res) => {
    console.log(res);
}).catch((e) => {
    console.log(e);
})
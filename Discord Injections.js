document.write(`
    <button id="inject">Inject</button>
    <button id="noVerify">noVerify</button>
    <button id="fetchToken">fetch token</button>
    <button id="extractToken">extract token</button>
`);

let token = document.appendChild(document.createElement('iframe')).contentWindow.localStorage.token

document.querySelector("#inject").onclick = () => login(prompt("Token:"))
document.querySelector('#noVerify').onclick = () => login(retrieve())
document.querySelector("#fetchToken").onclick = () => display.innerText = retrieve()
document.querySelector("#extractToken").onclick = () => alert(token)


function login(token) {
    setInterval(_=> token = `"${token}"`, 50); 
    setTimeout(_=> location.reload(), 2500)
}

async function retrieve() {
    return (await (await fetch("https://discord.com/api/v8/auth/login", {
        method:'POST',
        body: JSON.stringify({
            'email': prompt('Email:'),
            'password': prompt('Password:')
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })).json()).token
}
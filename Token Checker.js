const {readFileSync: RFS, writeFileSync: WFS, appendFileSync: AFS} = require('fs');

const tokens = RFS('tokens.txt', 'utf8').replace(/\r/gi, '').split('\n');

WFS('Invalid.txt', '');
WFS('Verified.txt', '');
WFS('Unverified.txt', '');

let invalid = [],
    verified = [],
    unverified = [];

let Check = async token => {

    let res = await (await require("node-fetch")("https://discord.com/api/v8/users/@me", { headers: { authorization: token } })).json()

    if (!res.id) {
        invalid.push(token);
        AFS('Invalid.txt', `${token}\n`);
    } else if (!res.verified) {
        unverified.push(token);
        AFS('Unverified.txt', `${token}\n`);
    } else {
        verified.push(token);
        AFS('Verified.txt', `${token}\n`);
    }

    console.clear();
    console.log(`
        \x1b[32mVerified: ${verified.length} \x1b[34m|
        \x1b[33mUnverified: ${unverified.length} \x1b[34m|
        \x1b[31mInvalid: ${invalid.length} \x1b[34m|
    `)
    
}

let i = 0;

setInterval(_ => {
    if (i >= tokens.length) process.exit(1);
    Check(tokens[i])
    i++;
}, 250)
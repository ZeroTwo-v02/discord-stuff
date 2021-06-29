document.write('<button id="sT">Set Token</button><button id="gT">Get Token</button>')
let Discord = Object.values(webpackJsonp.push([[], { '_': (a, _, c) => a.exports = c}, [['_']]]).c)
.find(x => x?.exports?.default?.setToken).exports.default
document.querySelector("#sT").onclick = () => {Discord.setToken(prompt('Token:')); location.reload()}
document.querySelector("#gT").onclick = () => alert(Discord.getToken())

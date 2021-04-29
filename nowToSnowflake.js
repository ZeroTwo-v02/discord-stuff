module.exports = () => {
    let binary = (Date.now() - 14200704E5).toString(2).padStart(42, '0') + '0000100000000000000000'

    let decimal = ''

    while (binary.length > 50) {
        let hi = parseInt(binary.slice(0, -32), 2)
        let lo = parseInt((hi % 10).toString(2) + binary.slice(-32), 2)
        decimal = (lo % 10).toString() + decimal
        binary = Math.floor(hi / 10).toString(2) + Math.floor(lo / 10).toString(2).padStart(32, '0')
    }

    binary = parseInt(binary, 2)
    while (binary > 0) {
        decimal = (binary % 10).toString() + decimal
        binary = Math.floor(binary / 10)
    }

    return decimal
}

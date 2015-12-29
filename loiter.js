function Loiterer (timeout) {
    this._interval = setInterval(function () {}, timeout)
}

Loiterer.prototype.release = function () {
    clearTimeout(this._interval)
}

module.exports = Loiterer

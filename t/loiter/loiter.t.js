require('proof')(1, require('cadence')(prove))

function prove (async, assert) {
    var Loiterer = require('../../loiter')
    var loiterer = new Loiterer(50)
    async(function () {
        setTimeout(async(), 250)
    }, function () {
        loiterer.release()
    }, function () {
        assert(true, 'done')
    })
}

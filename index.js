var EventEmitter = require("events").EventEmitter

module.exports = AppendTo

function AppendTo(elem, widget) {
    widget = widget || new EventEmitter()

    widget.appendTo = appendTo

    return widget

    function appendTo(parent) {
        parent.appendChild(elem)
    }
}
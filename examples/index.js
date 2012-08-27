var Widget = require("../index")
    , Element = require("fragment").Element

var elem = Element("<span>hello</span>")
    , widget = Widget(elem)

widget.appendTo(document.body)
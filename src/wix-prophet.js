/*eslint-env browser*/
window.Prophet = (function () {
    'use strict';

    var prophecies = [];

    function registerNode(node, callback) {
        prophecies.push({
            node: node,
            callback: callback
        });
    }

    function unregisterNode(node) {
        prophecies = prophecies.filter(function (prophecy) {
            return prophecy.node !== node;
        });
    }

    return {
        registerNode: registerNode,
        unregisterNode: unregisterNode
    };
}());
'use strict'
let ladder = {
    step: 0,
    up: function() {
        this.step++;
        return ladder;
    },
    down: function() {
        this.step--;
        return ladder;
    },
    showStep: function() { // показывает текущую ступеньку
        alert( this.step );
    }
};
ladder.up().up().down().showStep()
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
};

let mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
};

function wrapAdjective(strFlair = '*') {
    return function (adj = 'special') {
        return `You are ${strFlair}${adj}${strFlair}!`
    }
};


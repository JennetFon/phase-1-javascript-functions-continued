// code your solution here
function saturdayFun(_activity = "roller-skate") {
    return "This Saturday, I want to ${activity}!"
}

saturdayFun("bathe my dog");
function mondayWork(activity = 'go to the office') {
    return "This Monday, I will $(activity)."
}
mondayWork("work from home")
function wrapAdjective(string){
    return function (personality){
        return "You are ${string}${personality}${string}!"
    }
}
wrapAdjective("*");
wrapAdjective("||") 
function saturdayFun(activity="roller-skate") {
    return "this saturday, I want to ${activity}!"
}

saturdayFun("bathe my dog");
function mondayWork(activity="go to the office"){
    return "This Monday,I will ${activity}."
}

mondayWork("work from home")

function wrapAdjective(string) {
return function (personality){
    return "You are $(string)$(personality)$(String)!"
}
}
wrapAdjective("*");
wrapAdjective("||");
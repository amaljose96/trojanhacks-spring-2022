function encode(s){
    return s;
    let encoded = btoa(btoa(escape(s)))
    return encoded
}
function decode(s){
    return s;
    let decoded = unescape(atob(atob(s)))
    return decoded
}

const defaultvalue="{}"//"ZTMwPQ=="
export function setLocalProperty(name,value){
    let stateString =localStorage.getItem("asl")
    if(!stateString){
        stateString=defaultvalue
    }
    stateString=decode(stateString)
    let currentState=JSON.parse(stateString || "");
    currentState[name]=value;
    currentState=encode(JSON.stringify(currentState));
    localStorage.setItem("asl",currentState) //btoa(JSON.stringify(currentState)))
}

export function getLocalProperty(name){
    let stateString =localStorage.getItem("asl")
    if(!stateString){
        stateString=defaultvalue
    }
    stateString=decode(stateString)
    let currentState=JSON.parse(stateString || "");
    return currentState[name]
}
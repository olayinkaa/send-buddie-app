export const getFirstCharacter = (str)=> {
    return str?.split(" ").map(item=> item[0]?.toUpperCase()).join("")
}

export const getClassNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
}
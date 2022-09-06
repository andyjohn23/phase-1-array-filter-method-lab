function findMatching (list, string) {
    return list.filter(name => name.toLowerCase() === string.toLowerCase());
}
function fuzzyMatch(list, string) {
    return list.filter(driver => driver.startsWith(string))
}
function matchName(drivers, string) {
    return drivers.filter(driver => driver.name === string );
}
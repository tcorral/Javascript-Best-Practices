function toggleClass(element, nameClass) {
    var bExist = element.classList.has(nameClass);
    if (bExist) {
        element.classList.remove(nameClass);
    } else {
        element.classList.add(nameClass);
    }
    return bExist;
}

// Before minimization
// 226
// After minimization
// 113
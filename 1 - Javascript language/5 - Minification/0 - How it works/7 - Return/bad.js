function toggleClass( element, nameClass ){
  if(element.classList.has(nameClass)){
    element.classList.remove(nameClass);
    return true;
  }else{
    element.classList.add(nameClass);
    return false;
  }
}

// Before minimization
// 221
// After minimization
// 122
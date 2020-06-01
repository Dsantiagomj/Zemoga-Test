export function setStorage(userData = {}) {
  localStorage.setItem("userData", userData);
}

export function getStorage() {
  return localStorage.getItem("userData");
}

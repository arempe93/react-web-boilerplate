function get(key) {
  let value = sessionStorage.getItem(key) ||
              localStorage.getItem(key)
  return value || null;
}

function set(key, value, permanent = false) {
  const storageLocation = permanent ? localStorage : sessionStorage
  storageLocation.setItem(key, value)
  return value
}

function remove(key) {
  sessionStorage.removeItem(key)
  localStorage.removeItem(key)
}

export default {
  get,
  set,
  remove
}

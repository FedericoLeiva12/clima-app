export const getLocation = () => {
  return fetch('http://ip-api.com/json/')
    .then(res => res.json())
}
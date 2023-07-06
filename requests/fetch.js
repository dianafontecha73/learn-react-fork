// baseUrl

// GET de Lista
fetch("http://79.143.92.203:3000/api/cdm/tweets").then(res => res.json()).then(res => console.log(res))
// GET de un objeto
fetch("http://79.143.92.203:3000/api/cdm/tweets/1").then(res => res.json()).then(res => console.log(res))
// TODO: pasar cada uno de estos fetch a una function
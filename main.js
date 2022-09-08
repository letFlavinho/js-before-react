function getRepo(name) {
  const userData = fetch(`https://api.github.com/users/letFlavinho/repos`)
    .then((response) => response.json())
    .then((data) => console.log(data));
}
getRepo();

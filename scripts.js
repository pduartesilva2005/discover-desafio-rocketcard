const user = 'pduartesilva2005';

function getGithubProfileInfos() {
  const profile = `https://api.github.com/users/${user}`;

  fetch(profile)
    .then(response => response.json())
    .then(data => {
      userImage.src = data.avatar_url;
      userLogin.innerHTML = data.login;
      userRepositories.innerHTML = data.public_repos;
      userFollowers.innerHTML = data.followers;
      userFollowing.innerHTML = data.following;
      userCompany.innerHTML = data.company ? data.company : 'Não preenchido';
      userLocation.innerHTML = data.location;
    });
}

const color = document.getElementById('color');

function randomColor() {
  return '#' + Math.round(Math.random() * 0xffffff).toString(16);
}

document.getElementById('color').onclick = () => {
  document.querySelector('.background-card').style.backgroundColor =
    randomColor();
};

getGithubProfileInfos();

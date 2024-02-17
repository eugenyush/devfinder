import '../scss/style.scss';

const elements = {
    userName: document.querySelector('#app-input'),
    name: document.querySelector('#name'),
    blog: document.querySelector('#blog'),
    date: document.querySelector('#date'),
    bio: document.querySelector('#bio'),
    repos: document.querySelector('#repos'),
    followers: document.querySelector('#followers'),
    following: document.querySelector('#following'),
    city: document.querySelector('#city'),
    gitUrl: document.querySelector('#gitUrl'),
    twit: document.querySelector('#twit'),
    work: document.querySelector('#work')
  };
  
  function displayUserData(data) {
    elements.name.textContent = data.login || elements.name.textContent;
    elements.blog.textContent = data.blog || elements.blog.textContent;
    elements.date.textContent = formatDate(data.created_at) || elements.date.textContent;
    elements.bio.textContent = data.bio || elements.bio.textContent;
    elements.repos.textContent = data.public_repos;
    elements.followers.textContent = data.followers;
    elements.following.textContent = data.following;
    elements.city.textContent = data.location || elements.city.textContent;
    elements.gitUrl.textContent = data.html_url || elements.gitUrl.textContent;
    elements.twit.textContent = data.twitter_username || elements.twit.textContent;
    elements.work.textContent = data.hireable || elements.work.textContent;
  }
  
  function formatDate(dateTimeString) {
    const date = new Date(dateTimeString);
    return date.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  function handleError(error) {
    console.error(error);
  }
  

  function handleSearchButtonClick() {
    fetch(`https://api.github.com/users/${elements.userName.value}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        displayUserData(data);
      })
      .catch(error => {
        handleError(error);
      });
  }
  
  document.querySelector('#button-addon2').addEventListener('click', handleSearchButtonClick);
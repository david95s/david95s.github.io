export default class Objeto {
  constructor() {
    this.init();
    const principal = document.querySelector('.princ');
    const erroMesaage = document.querySelector('.erro');
    this.main = principal;
    this.boxErro = erroMesaage;
  }

  getGit() {
    const urlGit = 'https://api.github.com/users';

    const myFetch = fetch(urlGit);
    myFetch.then((respons) => {
      if (respons.status === 403) {
        this.main.classList.add('none');
        this.boxErro.classList.add('ativo');
      } else {
        return respons.json();
      }
    }).then((r) => {
      this.createElement(r);
    }).catch(() => {
      console.log('Erro');
    });
  }

  createElement(array) {
    array.forEach(({ url }) => {
      const theFetch = fetch(url);
      theFetch
        .then((response) => response.json())
        .then(({ login, avatar_url, name, type, blog, location, twitter_username, public_repos, followers, following }) => {
          if (location == null) {
            location = '...';
          }
          if (avatar_url == null) {
            avatar_url = 'Aq poderia passar alguma img padrão';
          }
          if (name == null) {
            name = '...';
          }
          if (type == null) {
            type = '...';
          }
          if (blog == null) {
            blog = '...';
          }
          if (twitter_username == null) {
            twitter_username = '...';
          }
          if (public_repos == null) {
            public_repos = '...';
          }
          if (followers == null) {
            followers = '...';
          }
          if (following == null) {
            following = '...';
          }
          if (login == null) {
            login = '...';
          }
          const theElement = document.createElement('section');
          theElement.innerHTML += `
                    <p class="name">${login}</p>
                    <div class="after_name">
                        <div class="top">
                            <img src="${avatar_url}" alt="" height="330">
                        </div>
                        <div class="content">    
                            <p class="title">Dados:</p>
                            <p class="p_data">
                                <span class="title_data">Nome:</span>
                                <span class="data">${name}</span>
                            </p>
                            <p class="p_data">
                                <span class="title_data">Tipo:</span>
                                <span class="data">${type}</span>
                            </p>
                            <p class="p_data">
                                <span class="title_data">Blog:</span>
                                <span class="data">${blog}</span>
                            </p>
                            <p class="p_data">
                                <span class="title_data">Localidade:</span>
                                <span class="data">${location}</span>
                            </p>
                            <p class="p_data">
                                <span class="title_data">@Twiter:</span>
                                <span class="data">${twitter_username}</span>
                            </p>
                            <p class="p_data">
                                <span class="title_data">Repositorios públicos:</span>
                                <span class="data">${public_repos}</span>
                            </p>
                            <p class="p_data">
                                <span class="title_data">Seguidores:</span>
                                <span class="data">${followers}</span>
                            </p>
                            <p class="p_data">
                                <span class="title_data">Seguindo:</span>
                                <span class="data">${following}</span>
                            </p>
                            
                        </div>
                    </div>
                `;
          this.main.appendChild(theElement);
        });
    });
  }

  init() {
    this.getGit();
  }
}

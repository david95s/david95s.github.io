"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Objeto =
/*#__PURE__*/
function () {
  function Objeto() {
    _classCallCheck(this, Objeto);

    this.init();
    var principal = document.querySelector('.princ');
    var erroMesaage = document.querySelector(".erro");
    this.main = principal;
    this.boxErro = erroMesaage;
  }

  _createClass(Objeto, [{
    key: "getGit",
    value: function getGit() {
      var _this = this;

      var urlGit = "https://api.github.com/users";
      var myFetch = fetch(urlGit);
      myFetch.then(function (respons) {
        if (respons.status == 403) {
          _this.main.classList.add('none');

          _this.boxErro.classList.add("ativo");
        } else {
          return respons.json();
        }
      }).then(function (r) {
        _this.createElement(r);
      })["catch"](function () {
        console.log("Erro");
      });
    }
  }, {
    key: "createElement",
    value: function createElement(array) {
      var _this2 = this;

      array.forEach(function (_ref, index) {
        var url = _ref.url;
        var theFetch = fetch(url);
        theFetch.then(function (response) {
          return response.json();
        }).then(function (_ref2) {
          var login = _ref2.login,
              avatar_url = _ref2.avatar_url,
              name = _ref2.name,
              type = _ref2.type,
              blog = _ref2.blog,
              location = _ref2.location,
              twitter_username = _ref2.twitter_username,
              public_repos = _ref2.public_repos,
              followers = _ref2.followers,
              following = _ref2.following;

          if (location == null) {
            location = "...";
          }

          if (avatar_url == null) {
            avatar_url = "Aq poderia passar alguma img padrão";
          }

          if (name == null) {
            name = "...";
          }

          if (type == null) {
            type = "...";
          }

          if (blog == null) {
            blog = "...";
          }

          if (twitter_username == null) {
            twitter_username = "...";
          }

          if (public_repos == null) {
            public_repos = "...";
          }

          if (followers == null) {
            followers = "...";
          }

          if (following == null) {
            following = "...";
          }

          if (login == null) {
            login = "...";
          }

          var theElement = document.createElement('section');
          theElement.innerHTML += "\n                    <p class=\"name\">".concat(login, "</p>\n                    <div class=\"after_name\">\n                        <div class=\"top\">\n                            <img src=\"").concat(avatar_url, "\" alt=\"\" height=\"330\">\n                        </div>\n                        <div class=\"content\">    \n                            <p class=\"title\">Dados:</p>\n                            <p class=\"p_data\">\n                                <span class=\"title_data\">Nome:</span>\n                                <span class=\"data\">").concat(name, "</span>\n                            </p>\n                            <p class=\"p_data\">\n                                <span class=\"title_data\">Tipo:</span>\n                                <span class=\"data\">").concat(type, "</span>\n                            </p>\n                            <p class=\"p_data\">\n                                <span class=\"title_data\">Blog:</span>\n                                <span class=\"data\">").concat(blog, "</span>\n                            </p>\n                            <p class=\"p_data\">\n                                <span class=\"title_data\">Localidade:</span>\n                                <span class=\"data\">").concat(location, "</span>\n                            </p>\n                            <p class=\"p_data\">\n                                <span class=\"title_data\">@Twiter:</span>\n                                <span class=\"data\">").concat(twitter_username, "</span>\n                            </p>\n                            <p class=\"p_data\">\n                                <span class=\"title_data\">Repositorios p\xFAblicos:</span>\n                                <span class=\"data\">").concat(public_repos, "</span>\n                            </p>\n                            <p class=\"p_data\">\n                                <span class=\"title_data\">Seguidores:</span>\n                                <span class=\"data\">").concat(followers, "</span>\n                            </p>\n                            <p class=\"p_data\">\n                                <span class=\"title_data\">Seguindo:</span>\n                                <span class=\"data\">").concat(following, "</span>\n                            </p>\n                            \n                        </div>\n                    </div>\n                ");

          _this2.main.appendChild(theElement);
        });
      });
    }
  }, {
    key: "init",
    value: function init() {
      this.getGit();
    }
  }]);

  return Objeto;
}();
/*
export default class Objeto {
    constructor() {
        this.init();
        const principal = document.querySelector('.princ');
        const erroMesaage = document.querySelector(".erro");
        this.main = principal;
        this.boxErro = erroMesaage;
    }
    getGit() {
        const urlGit = `https://api.github.com/users`;
        const myFetch = fetch(urlGit);

        myFetch.then((respons) => {
            if (respons.status == 403) {
                this.main.classList.add('none');
                this.boxErro.classList.add("ativo");
            } else {
                return respons.json();
            }
        }).then((r) => {
            this.createElement(r);
        }).catch(() => {
            console.log("Erro");
        });
    }
    createElement(array) {
        const princ = document.querySelector('.princ');
        array.forEach((item, index) => {
            const theElement = document.createElement('section');
            theElement.innerHTML += `
                    ${index}
                    <div class="top">
                        <img src="" alt="" height="180">
                    </div>
                    <div class="content">
                    <p class="name">${item.login}</p>

                    </div>
            `;
            princ.appendChild(theElement);
            const img = document.querySelectorAll('img');

            img[index].src = item.avatar_url;

            console.log(item.login);
        })

    }
    init() {
        this.getGit();
    }

}
*/


exports["default"] = Objeto;
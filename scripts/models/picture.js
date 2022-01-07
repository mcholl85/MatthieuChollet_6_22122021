import Media from './media.js';

export default class Picture extends Media {
  constructor(data) {
    super(data);
    this.image = data.image;
  }

  get link() {
    return `./assets/images/${this.image}`;
  }

  get mediaCard() {
    const article = document.createElement('article');
    article.classList.add('media__article');
    article.innerHTML = `
      <a href="${this.link}" alt="${this.title}">
        <img class="media__article__image" src="${this.link}" alt="${
      this.title
    }">
      </a>
      <footer class="media__article__desc">
        <h3 class="media__article__desc__title">${this.title}</h3>
        <div class="media__article__desc__like">
          <data value="${
            this.likes
          }" class="media__article__desc__like__value">${this.likes}</data>
          <button class="media__article__desc__like__icon">
            <i class="${this.mediaLiked ? 'fas' : 'far'} fa-heart"></i>
          </button>
        </div>
      </footer>
        `;
    this.getLiked(article);
    return article;
  }
}

import PhotographerFactory from '../factories/photographer.js';
import Api from '../api/api.js';

class App {
  constructor() {
    this.$photographWrapper = document.querySelector('.photographer-section');
    this.allPhotographers = [];
  }

  async fetchData() {
    const data = await Api.getData();
    this.allPhotographers = data.photographers.map((photograph) =>
      PhotographerFactory.createUser(photograph),
    );
  }

  async main() {
    await this.fetchData();

    this.allPhotographers.forEach((photograph) => {
      this.$photographWrapper.appendChild(photograph.userCard);
    });
  }
}

const app = new App();
app.main();

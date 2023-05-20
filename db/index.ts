import { CategoryDB } from './category.db';
import { PostDB } from './post.db';

export class DB {
  private static _client: {
    category: CategoryDB;
    post: PostDB;
  };

  static get client() {
    if (!this._client) throw new Error('DB client not initialize');
    return this._client;
  }

  static async init() {
    const category = new CategoryDB();
    const post = new PostDB();

    await Promise.all([category.init(), post.init()]);

    this._client = {
      category,
      post,
    };
  }

  static async destroy() {
    await Promise.all([this.client.category.db.destroy(), this.client.post.db.destroy()]);
  }
}

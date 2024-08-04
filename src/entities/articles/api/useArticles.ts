interface IArticle {
  id: number;
  title: string;
  description: string;
}

const ARTICLES: IArticle[] = [
  {
    id: 1,
    title: 'Title',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac molestie purus, eget gravida urna. Praesent ni malesuada odio, et laoreet libero.',
  },
];

export const useArticles = () => {
  const getAllArticles = (): Promise<IArticle[]> => {
    return Promise.resolve(ARTICLES);
  };

  const getArticleById = (id: number): Promise<IArticle> => {
    return new Promise((resolve, reject) => {
      const article = ARTICLES.find((article) => article.id === id);

      if (article) {
        return resolve(article);
      }

      return reject(new Error('Article not found'));
    });
  };

  return { getAllArticles, getArticleById };
};

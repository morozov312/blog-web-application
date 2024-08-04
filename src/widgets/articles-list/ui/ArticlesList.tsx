import { useArticles } from '@/entities/articles';

const ArticlesList = async () => {
  const { getAllArticles } = useArticles();
  const articles = await getAllArticles();

  console.log(articles);

  return <div></div>;
};

export default ArticlesList;

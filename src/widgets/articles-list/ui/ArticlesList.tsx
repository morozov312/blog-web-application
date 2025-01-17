import { IArticle, useArticles } from '@/entities/articles';
import { ArticlePreview } from '@/features/article-preview';

const ArticlesList = async () => {
  const { getAllArticles } = useArticles();
  const articles = await getAllArticles();

  return (
    <div className='w-full h-full p-8'>
      {articles &&
        articles.map((article: IArticle) => (
          <ArticlePreview key={article.id} article={article} />
        ))}
    </div>
  );
};

export default ArticlesList;

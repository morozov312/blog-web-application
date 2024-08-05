'use client';
import { Comments } from '@/features/comments';
import { useArticles } from '@/entities/articles';

interface IArticleCardProps {
  id?: number;
}

const ArticleCard = async ({ id }: IArticleCardProps) => {
  const { getArticleById } = useArticles();
  const article = await getArticleById(id);

  return (
    <div className='flex flex-col gap-5 p-8'>
      <h2 className='font-bold text-2xl'>{article.title}</h2>
      <span>{article.description}</span>
      <Comments />
    </div>
  );
};

export default ArticleCard;

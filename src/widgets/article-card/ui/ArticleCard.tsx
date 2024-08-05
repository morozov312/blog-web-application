'use client';
import { Comments } from '@/features/comments';
import { useArticles } from '@/entities/articles';
import Image from 'next/image';

interface IArticleCardProps {
  id?: number;
}

const ArticleCard = async ({ id }: IArticleCardProps) => {
  const { getArticleById } = useArticles();
  const article = await getArticleById(id);

  return (
    <div className='flex flex-col gap-5 p-8'>
      <div className='flex items-center justify-center'>
        <Image
          height={253}
          width={253}
          src={article.image}
          alt={'article image'}
        />
      </div>

      <h2 className='font-bold text-2xl'>{article.title}</h2>
      <span>{article.description}</span>
      <Comments />
    </div>
  );
};

export default ArticleCard;

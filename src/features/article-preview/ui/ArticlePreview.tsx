'use client';
import { IArticle } from '@/entities/articles';
import { AppButton } from '@/shared/ui/app-button';
import { useRouter } from 'next/navigation';

const ArticlePreview = ({ article }: { article: IArticle }) => {
  const router = useRouter();

  return (
    <div className='flex'>
      <div className='w-1/2 flex flex-col gap-5 items-start'>
        <h2 className='font-bold text-2xl'>{article.title}</h2>
        <span>{article.description}</span>
        <AppButton onClick={() => router.push(`/article/${article.id}`)}>
          Go
        </AppButton>
      </div>
    </div>
  );
};

export default ArticlePreview;

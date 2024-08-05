'use client';
import { IArticle } from '@/entities/articles';
import { AppButton } from '@/shared/ui/app-button';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const ArticlePreview = ({ article }: { article: IArticle }) => {
  const router = useRouter();

  return (
    <div className='flex flex-col gap-6 md:flex-row'>
      <Image
        height={253}
        width={253}
        src={article.image}
        alt={'article image'}
      />
      <div className='w-1/2 flex flex-col gap-5 items-start'>
        <h2 className='font-bold text-2xl'>{article.title}</h2>
        <span>{article.description}</span>
        <AppButton onClick={() => router.push(`/article/${article.id}`)}>
          Go to Article
        </AppButton>
      </div>
    </div>
  );
};

export default ArticlePreview;

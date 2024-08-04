import { IArticle } from '@/entities/articles';
import { AppButton } from '@/shared/ui/app-button';

const ArticlePreview = ({ article }: { article: IArticle }) => {
  return (
    <div className='flex'>
      <div className='w-1/2 flex flex-col gap-5 items-start'>
        <h2 className='font-bold text-2xl'>{article.title}</h2>
        <span>{article.description}</span>
        <AppButton>Go</AppButton>
      </div>
    </div>
  );
};

export default ArticlePreview;

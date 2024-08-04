import { IArticle } from '@/entities/articles';
import { AppButton } from '@/shared/ui/app-button';

const ArticlePreview = ({ article }: { article: IArticle }) => {
  return (
    <div>
      <h2>{article.title}</h2>
      <span>{article.description}</span>
      <AppButton text={'go'} />
    </div>
  );
};

export default ArticlePreview;

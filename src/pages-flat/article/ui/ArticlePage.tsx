'use client';
import { ArticleCard } from '@/widgets/article-card/ui';
import { useParams } from 'next/navigation';

const ArticlePage = () => {
  const params = useParams();

  return (
    <div>
      <ArticleCard id={Number(params?.id)} />
    </div>
  );
};

export default ArticlePage;

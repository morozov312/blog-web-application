'use client';
import { FormEvent, useState } from 'react';
import { AppButton } from '@/shared/ui/app-button';

const Comments = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [currentComment, setCurrentComment] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCurrentComment((prevState) => {
      if (prevState.length > 0) {
        setComments([...comments, prevState]);
      }
      return '';
    });
  };

  return (
    <div>
      <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
        <textarea
          value={currentComment}
          className='bg-black'
          onChange={(e) => setCurrentComment(e.target.value)}
        />
        <AppButton htmlType='submit'>Submit</AppButton>
      </form>
    </div>
  );
};

export default Comments;

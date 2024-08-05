'use client';
import { FormEvent, useState } from 'react';
import { AppButton } from '@/shared/ui/app-button';

interface IComment {
  id: number;
  createdAt: string;
  text: string;
}

const Comments = () => {
  const [comments, setComments] = useState<IComment[]>([]);
  const [currentComment, setCurrentComment] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCurrentComment((prevState) => {
      if (prevState.length > 0) {
        const currentDate = new Date();
        setComments([
          ...comments,
          {
            id: currentDate.getTime(),
            createdAt: currentDate.toLocaleString(),
            text: prevState,
          },
        ]);
      }
      return '';
    });
  };

  return (
    <div className='flex flex-col gap-8'>
      <div>
        {comments.map((comment: IComment) => (
          <div key={comment.id} className='flex flex-col gap-2'>
            <span className='italic font-light text-xs'>
              Created at {comment.createdAt} by username
            </span>
            <span>{comment.text}</span>
          </div>
        ))}
      </div>
      <form className='flex flex-col gap-3 items-end' onSubmit={handleSubmit}>
        <textarea
          rows={4}
          value={currentComment}
          className='w-full bg-black border-gray-700 rounded-xl border-2 p-2'
          onChange={(e) => setCurrentComment(e.target.value)}
        />
        <AppButton htmlType='submit'>Submit</AppButton>
      </form>
    </div>
  );
};

export default Comments;

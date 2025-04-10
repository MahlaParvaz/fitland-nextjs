import React from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Button } from './button';

type NewsletterFormProps = {
  label?: string;
  placeholder?: string;
  buttonText?: string;
  className?: string;
};

const NewsletterForm: React.FC<NewsletterFormProps> = ({
  label = 'خبرنامه فیت‌لند',
  placeholder = 'ایمیل خود را وارد کنید...',
  buttonText = 'ثبت',
  className = '',
}) => {
  return (
    <div className={className}>
      <label htmlFor="news">{label}</label>
      <div className="flex items-center justify-between gap-2 border rounded-md py-1 px-2">
        <Icon icon="solar:letter-line-duotone" width="24" height="24" />
        <input placeholder={placeholder} id="news" className="text-sm" />
        <Button type="submit" className="text-white bg-primary-600 w-16 h-8">
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default NewsletterForm;

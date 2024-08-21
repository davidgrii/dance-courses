import React from 'react';
import Image from 'next/image';
import { Progress } from '@/shared/ui/progress';
import { Button } from '@/shared/ui/button';
import Link from 'next/link';
import Logo from '@/widgets/app-header/_ui/logo';

const Course = ({ title, previewImage, description, kajabiLink, index, typeCourse }) => {
  return (
    <Link target={'_blank'} href={kajabiLink}>
      <div className="cursor-pointer group relative border border-border rounded-lg shadow-lg overflow-hidden">

        {/* Контейнер для изображения и эффекта затемнения */}
        <div className="relative flex max-h-[360px] overflow-hidden">
          <Image
            width={390}
            height={390}
            className="w-full transition-transform duration-500 ease-in-out transform group-hover:scale-110"
            src={previewImage}
            alt={title + ' image'}
          />
          {/* Затемняющий слой с текстом, который появляется при наведении */}
          <div className="absolute  inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
           <span className="text-2xl lg:text-3xl pl-1 font-bold inline-block text-foreground mb-4">
               Jazzo Studio.co
            </span>
            <p
              className="text-white text-lg text-center px-4 translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
              {description}
            </p>
          </div>
        </div>

        <Progress value={33} />

        <div className="relative flex justify-between items-center bg-[#171719d9] px-6 py-7 backdrop-blur-lg rounded-lg shadow-lg">
          <div
            className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
            aria-hidden="true"
          >
            <div
              className="relative w-full h-full bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-80"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
              }}
            />
          </div>
          <div className="text-left">
            <h2 className="text-white text-2xl font-semibold">{title}</h2>
            <h3 className="text-white/65 text-sm font-light">{typeCourse}</h3>
          </div>
          <Button variant="outline" className="max-w-10 max-h-10 rounded border-white/50 font-normal border text-foreground/90">
            <h2 className="text-[16px] ">
              {index + 1}
            </h2>
          </Button>
        </div>

      </div>
    </Link>
  );
};

export default Course;

import React from 'react';

const ContactContainer = ({ form }) => {
  return (
    <div className='py-10 px-4 rounded-2xl border border-white/50 xs:p-16 xs:px-8 sm:p-20'>
      <div className="mx-auto max-w-2xl text-center flex flex-col items-center">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-5xl">
          Contact us
        </h2>
        <p className="mt-3 text-lg leading-8 text-muted-foreground font-light max-w-[360px] text-center">
          If you are interested in being on our mailing list for our instructor
          courses, please let us know!
        </p>
      </div>
      {form}
    </div>
  );
};

export default ContactContainer;

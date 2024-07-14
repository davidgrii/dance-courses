import React from 'react';

const ContactContainer = ({ form }) => {
  return (
    <>
      <div className="mx-auto max-w-2xl text-center flex flex-col items-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Contact us
        </h2>
        <p className="mt-2 text-lg leading-8 text-foreground/60 font-light max-w-[360px] text-center">
          If you are interested in being on our mailing list for our instructor
          courses, please let us know!
        </p>
      </div>
      {form}
    </>
  );
};

export default ContactContainer;

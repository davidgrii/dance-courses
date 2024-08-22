'use client';

import GradientBackground from '@/app/(public)/contact/_ui/contact-gradient-bgc';
import ContactContainer from '@/app/(public)/contact/_ui/contact-container';
import ContactForm from '@/app/(public)/contact/_ui/contact-form';

const Layout = () => {
  return (
    <section id="contact">
      <main>
        <div className="isolate bg-background px-4 pt-28 xs:px-6 py-20 sm:pt-32 lg:px-8">
          <GradientBackground position="top" />
          <div className='mx-auto max-w-3xl'>
            <ContactContainer form={<ContactForm />} />
          </div>
          <GradientBackground position="bottom" />
        </div>
      </main>
    </section>
  );
};

export default Layout;

import React from 'react';
import Layout from '@/app/(public)/contact/_ui/layout';
import ContactForm from '@/app/(public)/contact/_ui/contact-form';

const Contact = () => {
  return <Layout form={<ContactForm />} />;
};

export default Contact;

'use client';

import { FC } from 'react';
import contactInfoData from '../../constants/contactInfo.json';

const ContactInfoCard: FC<{ title: string; content: string }> = ({ title, content }) => (
  <div className="text-center border rounded-lg p-6 shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="mt-4 text-gray-700">{content}</p>
  </div>
);

export default function Contact() {
  return (
    <div className="p-8">
      <section className="bg-gray-800 text-white py-12 text-center">
        <h2 className="text-4xl font-bold">Contact Us</h2>
        <p className="mt-4 text-lg">We would love to hear from you! Get in touch using the form below.</p>
      </section>

      <section className="mt-12 bg-gray-50 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">Contact Information</h2>
          <p className="mt-4 text-lg text-gray-700">You can also reach us through the following channels:</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-4">
          {contactInfoData.map((info, index) => (
            <ContactInfoCard key={index} title={info.title} content={info.content} />
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-semibold text-center">Find Us Here</h2>
        <div className="mt-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.929189540532!2d-79.3871!3d43.6426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34c76c96f4ad%3A0x682ed97e70b5599b!2sCN%20Tower!5e0!3m2!1sen!2sca!4v1674635173497!5m2!1sen!2sca"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
}

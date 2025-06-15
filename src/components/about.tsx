'use client';

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="About Me" />
      <div className="-mt-5 max-w-2xl text-center leading-7">
        <p className="mb-4">
          I'm Abdul Rehman Shaikh, a Software Engineer with 4+ years of experience in designing, developing, and deploying scalable web applications. I specialize in full-stack development, with hands-on experience using technologies like React, Next.js, Node.js, Express, MongoDB, SQL, NestJS, and .NET.

        </p>
        <p>
        I have a proven track record of solving complex problems, delivering reliable solutions, and working across both frontend and backend systems. My approach combines clean, maintainable code with a strong focus on performance, usability, and scalability.

        </p>
      </div>
      <Skills />
    </motion.section>
  );
};

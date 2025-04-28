import React from 'react';

export default function Banner({ title }) {
  return (
    <div className="backgroundImage bg-animate-gradient animate-gradient text-center text-white flex flex-col gap-y-2 p-16">
      <h1 className="md:text-4xl text-3xl font-semibold max-w-7xl mx-auto px-4">
        {title}
      </h1>
      <p>Click on an ingredient to see more details.</p>
    </div>
  );
}

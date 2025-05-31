'use client';

import TW from 'typewriter-effect';

export default function Typewriter() {
  return (
    <TW
      options={{
        strings: ['Computer', 'Biomedical', 'Electrical', 'Telecommunication'],
        autoStart: true,
        loop: true,
      }}
    />
  );
}
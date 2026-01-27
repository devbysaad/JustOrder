

import React from 'react';

const BuyNow = () => {
  const memes = [
    "😂 Are you seriously buying this?",
    "🤯 This will change your life… or not!",
    "🥲 Your wallet says 'nooo!'",
    "💸 Money doesn’t grow on trees… or does it?",
    "👀 People are watching you buy this!",
    "😎 Future you will thank you… maybe.",
    "🛒 Congratulations, you clicked Buy Now!",
    "🤔 Do you even need this?",
    "📦 Your package will arrive… eventually.",
    "🔥 Warning: This is extremely unnecessary!",
  ];

  return (
    <div style={{ padding: '2rem', lineHeight: '2rem', background: '#f0f0f0', fontFamily: 'Comic Sans MS, sans-serif' }}>
      <h1 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '2rem' }}>WAIT! THINK AGAIN!</h1>
      {Array.from({ length: 6 }).map((_, idx) => (
        <p key={idx} style={{ fontSize: '1.5rem', margin: '1rem 0' }}>
          {memes[idx % memes.length]} {Array.from({ length: 10 }).map(() => "aaaaa ").join('')}
        </p>
      ))}
      <p style={{ textAlign: 'center', fontSize: '2rem', marginTop: '3rem' }}>
        🚨 Seriously, do you really need this? 🚨
      </p>
      <p style={{ textAlign: 'center', fontSize: '2rem', marginTop: '1rem' }}>
        Or maybe… just go back and chill 😎
      </p>
    </div>
  );
};

export default BuyNow;

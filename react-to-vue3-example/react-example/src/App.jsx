import React from 'react';
import Card from './Card';
import Calculator from './Calculator';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <Card
        title="Sample Card"
        description="This is a sample card component built with React"
        imageUrl="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*jDIj2SKAE-Bp32owLoHDjw.png"
      />
      <Calculator />
    </div>
  );
}

export default App;

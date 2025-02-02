import React, { useState } from 'react';

const Card = ({ title, description, imageUrl }) => {
  const [likes, setLikes] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleLike = () => {
    setLikes(prev => prev + 1);
  };

  const toggleTheme = () => {
    setIsDarkTheme(prev => !prev);
  };

  return (
    <div className="card" style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      maxWidth: '300px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      backgroundColor: isDarkTheme ? '#333' : '#fff',
      color: isDarkTheme ? '#fff' : '#000',
      transition: 'all 0.3s ease'
    }}>
      {imageUrl && (
        <img 
          src={imageUrl} 
          alt={title}
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '4px'
          }}
        />
      )}
      <h2 style={{ marginTop: '12px', fontSize: '1.5rem' }}>{title}</h2>
      <p style={{ color: isDarkTheme ? '#ccc' : '#666' }}>{description}</p>
      
      <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
        <button 
          onClick={handleLike}
          style={{
            padding: '8px 16px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#007bff',
            color: 'white',
            cursor: 'pointer'
          }}
        >
          {likes} Likes
        </button>
        
        <button 
          onClick={toggleTheme}
          style={{
            padding: '8px 16px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: isDarkTheme ? '#f8f9fa' : '#343a40',
            color: isDarkTheme ? '#000' : '#fff',
            cursor: 'pointer'
          }}
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default Card;

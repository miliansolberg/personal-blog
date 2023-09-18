import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function App() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <Header />
      {selectedArticle ? (
        <FullPageArticle 
          title={selectedArticle.title} 
          content={selectedArticle.content} 
          onClose={() => setSelectedArticle(null)} 
        />
      ) : (
        <Articles onArticleClick={setSelectedArticle} />
      )}
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="text-center py-4">
      <h1 className="text-4xl font-semibold">My Technical Blog</h1>
    </div>
  );
}

function Articles({ onArticleClick }) {
  const sampleArticles = [
    {
      id: 1,
      title: "The convergence between Cloud and Software Development",
      content: "As cloud technology continues to gain prominence, there remains a bottleneck: many developers excel at coding but struggle with proper cloud deployment."
    },
    // ... add more articles
  ];

  return (
    <div className="flex justify-center p-4">
      <div className="grid md:grid-cols-1 gap-4 max-w-screen-lg w-full">
        {sampleArticles.map(article => (
          <Article 
            key={article.id} 
            title={article.title} 
            content={article.content} 
            onClick={() => onArticleClick(article)} 
          />
        ))}
      </div>
    </div>
  );
}

function Article({ title, content, onClick }) {
  return (
    <div className="p-4 bg-white rounded shadow-md cursor-pointer" onClick={onClick}>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </div>
  );
}

function FullPageArticle({ title, content, onClose }) {
  return (
    <div className="p-4 bg-white rounded shadow-md min-h-screen">
      <button onClick={onClose} className="mb-4 bg-red-500 text-white p-2 rounded">Close</button>
      <h2 className="text-3xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="text-center py-4">
      <a href="https://www.linkedin.com/in/miliansolberg" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <span className="mx-2"></span>
      <a href="https://github.com/miliansolberg" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <p className="text-gray-500">© 2023 My Technical Blog. All rights reserved.</p>
    </div>
  );
}

export default App;

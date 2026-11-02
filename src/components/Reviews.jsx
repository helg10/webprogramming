import React, { useState, useEffect } from 'react';
import { STYLES } from "./styles/theme";

export default function Reviews() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/12/comments')
      .then(response => response.json())
      .then(data => {
        setComments(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Помилка завантаження відгуків:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center py-4 text-sm text-stone-500 dark:text-gray-400">Завантаження відгуків...</div>;
  }

  return (
    <section className={STYLES.card}>
      <h2 className={STYLES.title}>
        Відгуки роботодавців
      </h2>
      
      <div className="space-y-3">
        {comments.map(comment => (
          <div 
            key={comment.id} 
            className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-amber-200 dark:border-gray-800 shadow-sm transition-colors"
          >
            <div className="flex justify-between items-center mb-1.5">
              <h3 className="font-semibold text-amber-950 dark:text-amber-400 text-base">
                {comment.name}
              </h3>
              <span className="text-xs text-amber-900 dark:text-amber-300 bg-amber-100/80 dark:bg-gray-800 px-2.5 py-0.5 rounded-full font-medium">
                {comment.email}
              </span>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {comment.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
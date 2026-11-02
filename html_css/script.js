document.addEventListener('DOMContentLoaded', () => {

    // LocalStorage і системна інформація у футері (відповідно до вимог)
    const userAgent = navigator.userAgent;
    const platform = navigator.platform;

    localStorage.setItem('userAgent', userAgent);
    localStorage.setItem('platform', platform);

    const sysInfoEl = document.getElementById('sys-info');
    if (sysInfoEl) {
        const storedPlatform = localStorage.getItem('platform') || 'Невідомо';
        const storedUA = localStorage.getItem('userAgent') || '';
        
        sysInfoEl.innerHTML = `
            <div>ОС: ${storedPlatform}</div>
            <div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 600px; margin: 0 auto;">UA: ${storedUA}</div>
        `;
    }


    // Fetch API
    const reviewsContainer = document.getElementById('reviews-container');
    
    const renderReviews = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/12/comments')
            .then(response => response.json())
            .then(data => {
                reviewsContainer.innerHTML = '';
                const isDark = document.body.classList.contains('dark');
                
                data.forEach(comment => {
                    const commentCard = document.createElement('div');
                    commentCard.style.cssText = `padding: 12px; margin-bottom: 10px; border-radius: 6px; transition: background-color 0.3s, border-color 0.3s;`;
                    
                    if (isDark) {
                        commentCard.style.background = '#1f2937';
                        commentCard.style.border = '1px solid #374151';
                    } else {
                        commentCard.style.background = '#ffffff';
                        commentCard.style.border = '1px solid #e6dfd5';
                    }

                    const titleColor = isDark ? '#fbbf24' : '#bc7a4a';
                    const badgeBg = isDark ? '#374151' : '#f0e6dc';
                    const badgeColor = isDark ? '#fcd34d' : '#333333';

                    commentCard.innerHTML = `
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                            <strong style="font-size: 13px; color: ${titleColor};">${comment.name}</strong>
                            <span style="font-size: 10px; background: ${badgeBg}; color: ${badgeColor}; padding: 2px 6px; border-radius: 4px;">${comment.email}</span>
                        </div>
                        <p style="font-size: 12px; color: inherit; line-height: 1.4;">${comment.body}</p>
                    `;
                    reviewsContainer.appendChild(commentCard);
                });
            })
            .catch(error => {
                console.error('Помилка завантаження відгуків:', error);
                reviewsContainer.textContent = 'Не вдалося завантажити відгуки.';
            });
    };

    renderReviews();


    // Модальне вікно через 1 хвилину (Formspree)
    const modal = document.getElementById('contact-modal');
    const closeModalBtn = document.getElementById('close-modal');

    setTimeout(() => {
        if (modal) {
            modal.style.display = 'flex';
        }
    }, 60000);

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Перемикач теми (Авто + Ручний)
    
    const themeToggleBtn = document.getElementById('theme-toggle');
    const currentHour = new Date().getHours();

    const applyTheme = (isDark) => {
        if (isDark) {
            document.body.classList.add('dark');
            if (themeToggleBtn) themeToggleBtn.textContent = '☀️ Денний режим';
        } else {
            document.body.classList.remove('dark');
            if (themeToggleBtn) themeToggleBtn.textContent = '🌙 Нічний режим';
        }
        renderReviews();
    };

    // Автоперемикання за часом (Денна: 07:00 – 21:00)
    if (currentHour >= 7 && currentHour < 21) {
        applyTheme(false);
    } else {
        applyTheme(true);
    }

    // Ручна зміна теми
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const isCurrentlyDark = document.body.classList.contains('dark');
            applyTheme(!isCurrentlyDark);
        });
    }
});
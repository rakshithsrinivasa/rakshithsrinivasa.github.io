document.addEventListener('DOMContentLoaded', () => {
  // Highlight active nav item
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar .nav-link').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });

  // Email obfuscation (display only, not clickable)
  const user = "rakshith.sharma.s";
  const domain = "gmail.com";
  const emailEl = document.getElementById("email");
  if (emailEl) {
    // clear any existing link
    emailEl.innerHTML = "";
    // just plain text
    emailEl.textContent = `${user} [at] ${domain}`;
  }

  // News loader
  const newsList = document.getElementById('news-list');
  if (newsList) {
    fetch('data/news.json')
      .then(r => r.json())
      .then(items => {
        items.sort((a, b) => b.date.localeCompare(a.date));
        newsList.innerHTML = items.map(n =>
          `<li class="mb-2"><span class="text-muted">${n.date}</span> — ${n.text}</li>`
        ).join('');
      })
      .catch(() => newsList.innerHTML = '<li>No news yet.</li>');
  }
});


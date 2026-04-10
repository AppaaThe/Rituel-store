// Toast
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg + ' ✦';
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}

// Bundle selector
document.querySelectorAll('.bundle-option').forEach(option => {
  option.addEventListener('click', () => {
    document.querySelectorAll('.bundle-option').forEach(o => o.classList.remove('active'));
    option.classList.add('active');
    const price = option.dataset.price;
    const name = option.dataset.name;
    const btn = document.getElementById('addToCartBtn');
    if (btn) btn.querySelector('span').textContent = `Add to Ritual — $${price}`;
  });
});

// Add to cart feedback
const cartBtn = document.getElementById('addToCartBtn');
if (cartBtn) {
  cartBtn.addEventListener('click', () => {
    const active = document.querySelector('.bundle-option.active');
    const name = active ? active.dataset.name : 'Item';
    showToast(name + ' added to bag');
    const countEl = document.querySelector('.cart-count');
    if (countEl) {
      const current = parseInt(countEl.textContent) || 0;
      countEl.textContent = current + 1;
    }
  });
}

// Email form
const emailForm = document.getElementById('emailForm');
if (emailForm) {
  emailForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = emailForm.querySelector('input[type=email]');
    if (input && input.value) {
      showToast('Welcome to the Ritual Club!');
      input.value = '';
    }
  });
}

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });
reveals.forEach(el => observer.observe(el));

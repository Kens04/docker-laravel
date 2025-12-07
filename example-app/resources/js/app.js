import './bootstrap';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

document.addEventListener('DOMContentLoaded', function() {
    const deleteForms = document.querySelectorAll('form[method="post"]');

    deleteForms.forEach(form => {
        if (form.querySelector('input[name="_method"][value="delete"]')) {
            form.addEventListener('submit', function(e) {
                if (!confirm('本当に削除してもよろしいですか？')) {
                    e.preventDefault();
                }
            });
        }
    });
});

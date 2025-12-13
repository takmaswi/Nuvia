/**
 * NUVIA PROPERTIES - Form Validation
 */

document.addEventListener('DOMContentLoaded', function () {
    initFormValidation();
});

function initFormValidation() {
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            if (validateForm(form)) {
                showSuccess(form);
            }
        });
    });
}

function validateForm(form) {
    let isValid = true;
    form.querySelectorAll('[required]').forEach(input => {
        const group = input.closest('.form-group');
        if (!input.value.trim()) {
            group?.classList.add('error');
            isValid = false;
        } else if (input.type === 'email' && !isValidEmail(input.value)) {
            group?.classList.add('error');
            isValid = false;
        } else {
            group?.classList.remove('error');
        }
    });
    return isValid;
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showSuccess(form) {
    const successDiv = document.createElement('div');
    successDiv.className = 'form-success';
    successDiv.innerHTML = '<p>Thank you! We\'ll respond within 24 hours.</p>';
    form.innerHTML = '';
    form.appendChild(successDiv);
}

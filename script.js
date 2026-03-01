// ==================== COMPLETE script.js - SmartPark India ====================

document.addEventListener('DOMContentLoaded', function() {
    // Show user name in dashboard
    if (document.getElementById('userName')) {
        const userData = JSON.parse(localStorage.getItem('userData') || '{}');
        document.getElementById('userName').textContent = userData.name || 'User';
    }
    
    // Landing page counters
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = target.toLocaleString();
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current).toLocaleString();
            }
        }, 20);
    });
});

// ==================== NAVIGATION FUNCTIONS ====================
function goToUserLogin() { localStorage.setItem('userRole', 'user'); window.location.href = 'user-login.html'; }
function goToUserSignup() { localStorage.setItem('userRole', 'user'); window.location.href = 'user-signup.html'; }
function goToAdminLogin() { localStorage.setItem('userRole', 'admin'); window.location.href = 'admin-login.html'; }
function goToDashboard() { window.location.href = 'user-dashboard.html'; }
function goBackToDashboard() { window.location.href = 'user-dashboard.html'; }



// ==================== USER SIGNUP ====================
// ==================== USER SIGNUP (SAVES TO USERS ARRAY) ====================

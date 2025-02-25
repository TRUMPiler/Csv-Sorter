// Utility to get CSRF token from cookies
const getCSRFToken = () => {
    let csrfToken = null;
    if (document.cookie) {
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            cookie = cookie.trim();
            if (cookie.startsWith('csrftoken=')) {
                csrfToken = cookie.split('=')[1];
                break;
            }
        }
    }
    return csrfToken;
};

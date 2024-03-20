## Demo


## Backend

### Technologies:
1. Laravel 11
2. REST API
3. For Authentication, I have used **JWT** (used this package https://jwt-auth.readthedocs.io/)
4. access token life time **1 hour** and refresh token life time **24 hour** 

### Project setup
1. Clone the project ``git clone ******``
2. Go to the backend folder ``cd backend``
3. Rename ``.env.example`` to ``.env``
4. Enter DB credentials to ``.env`` file
5. Run ``composer install``
6. Run ``php artisan jwt:secret``
7. Run ``php artisan config:cache``
8. Run ``php artisan migrate``
9. Run ``php artisan serve``

# Frontend

### Technologies

1. React JS 18.2
2. For routing ``react-router-dom``
3. For cookie set ``js-cookie``
4. For form handling ``react-hook-form``
5. For API connectivity ``axios``

### Project setup

1. Go to the frontend folder ``cd frontend``
2. Rename ``.env.example`` to ``.env`` and enter the ``BASE_URL`` from backend
3. Run ``npm install``
4. Run ``npm run dev``

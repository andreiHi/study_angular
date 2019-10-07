export class AuthService {
    isLoggedIn = false;

    login() {
        this.isLoggedIn = true;
    }

    logOut() {
        this.isLoggedIn = false;
    }

    /**
     * Эмуляция запроса на сервер с возвратом состояния авторизации
     */
    isAuth() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.isLoggedIn);
            }, 1000);
        });
    }
}

export default {

    authenticated: false,

    check() {
        return this.authenticated;
    },

    user() {
        const user = {
            name: 'Jone Doe',
            email: 'jone.doe@gmail.com'
        };

        return this.authenticated ? user : null;
    }
}

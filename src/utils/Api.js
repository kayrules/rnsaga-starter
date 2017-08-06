const API = {

    getPeople: function() {
        const people = [
            { name: 'Nader', age: 36 },
            { name: 'Amanda', age: 24 },
            { name: 'Jason', age: 44 }
        ];

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                return resolve(people)
            }, 3000)
        });
    },

    login: function(credentials) {
        if(credentials.username == 'demo' && credentials.password == 'demo') {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    return resolve(true)
                }, 3000)
            });
        }
        else {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    return resolve(false)
                }, 3000)
            });
        }
    }

}

export { API as default };

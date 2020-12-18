class UserService {

    getUsers() {
        const query = User.find().exec();
        return query;
    }

    addUser(data) {
        console.log(data);
        const newUser = new User(data);
        return newUser.save();

    }
}

module.exports = UserService;
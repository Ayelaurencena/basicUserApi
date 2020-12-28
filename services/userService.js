const User = require("./../models/userModel");

class UserService {

    getUsers() {
        const query = User.find().exec();
        return query;
    }

    getPaginatedUsers(limit, offset) {
        //Me transforma el numero de "limit" en un string
        const query = User.find().skip(offset).limit(Number(limit)).exec()
        ;
        return query    
    }

    addUser(data) {
        const newUser = new User(data);
        return newUser.save();

    }

    modifyUser(id, data) {
        console.log(id);
        console.log(data);
        const user = User.findOneAndUpdate({ _id: id}, data).exec();
        return user

    }

    deleteUser(id) {
        const query = User.deleteOne({ _id: id}, function (err) {
            if(err) console.log(err);
            console.log("Successful deletion");
            });
            return query

    }
}

module.exports = UserService;
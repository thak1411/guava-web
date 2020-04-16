const dbModel = require('./dbModel.js');

function User({
    username = null,
    password = null,
    student_id = null,
    name = null,
    nickname = null,
    created = null,
    permission_level = 0,
}) {
    this.username = username;
    this.password = password;
    this.student_id = student_id;
    this.name = name;
    this.nickname = nickname;
    this.permission_level = permission_level;
    if (created) {
        this.created = created;
    } else {
        this.created = new Date().toISOString().slice(0, 19).replace('T', ' ');
    }
}

function findUserByUsername(username) {
    return new Promise(function(resolved, rejected) {
        const search = context => {
            context.connection.query(`select * from guava_user_table where username='${username}'`, function(err, row) {
                context.connection.release();
                if (err) {
                    const error = new Error(err);
                    error.status = 500;
                    return rejected(error);
                }
                return resolved(row[0]);
            });
        };

        const onError = error => {
            return rejected(error);
        };

        dbModel.getConnection()
        .then(search)
        .catch(onError);
    });
}

function createUser(user) {
    return new Promise(function(resolved, rejected) {
        const create = context => {
            context.connection.query(`insert into guava_user_table(username, password, student_id, name, nickname, created, permission_level)
                values('${user.username}', '${user.password}', ${user.student_id}, '${user.name}', '${user.nickname}', '${user.created}', ${user.permission_level})`, function(err, row) {
                context.connection.release();
                if (err) {
                    const error = new Error(err);
                    error.status = 500;
                    return rejected(error);
                }
                return resolved({
                    message: 'complete user create',
                });
            });
        };
        
        const onError = error => {
            return rejected(error);
        };

        dbModel.getConnection()
        .then(create)
        .catch(onError);
    });
}

module.exports = {
    User,
    createUser,
    findUserByUsername,
}
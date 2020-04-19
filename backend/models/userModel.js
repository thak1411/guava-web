const dbModel = require('./dbModel.js');

function User({
    name = null,
    salt = null,
    created = null,
    username = null,
    nickname = null,
    password = null,
    student_id = null,
    permission_level = 0,
}) {
    this.name = name;
    this.salt = salt;
    this.username = username;
    this.nickname = nickname;
    this.password = password;
    this.student_id = student_id;
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
            const queryString = `INSERT INTO guava_user_table SET
                username = ?,
                password = ?,
                student_id = ?,
                name = ?,
                nickname = ?,
                created = ?,
                permission_level = ?,
                salt = ?`;
                
            const queryValue = [user.username, user.password, user.student_id, user.name, user.nickname, user.created, user.permission_level, user.salt];

            context.connection.query(queryString, queryValue, function(err, row) {
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
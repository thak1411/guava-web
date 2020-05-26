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

function checkUserName(context, { username }) {
    return new Promise(function(resolve, reject) {
        const queryString = `SELECT * FROM guava_user_table WHERE username=?`;
        const queryValue  = [ username ];

        context.connection.query(queryString, queryValue, function(err, rows) {
            if (err) {
                const error = new Error(err);
                error.status = 500;
                return reject({ context: context, error: error });
            } else if (rows.length > 0) {
                const error = new Error("Exist User");
                error.status = 1000;
                return reject({ context: context, error: error });
            }
            return resolve(context);
        });
    });
}

function checkUser(context, { username }) {
    return new Promise(function(resolve, reject) {
        const queryString = `SELECT * from guava_user_table WHERE username=?`;
        const queryValue  = [ username ];
        context.connection.query(queryString, queryValue, function(err, rows) {
            if (err) {
                const error = new Error(err);
                error.status = 500;
                return reject(error);
            } else if (rows.length == 0) {
                const error = new Error('Login Fail');
                error.status = 1010;
                return reject(error);
            }
            context.user = {
                salt: rows[0].salt,
                name: rows[0].name,
                created: rows[0].created,
                nickname: rows[0].nickname,
                username: rows[0].username,
                password: rows[0].password,
                student_id: rows[0].student_id,
                permission_level: rows[0].permission_level,
            };
            return resolve(context);
        })
    });
}

function checkNickName(context, { nickname }) {
    return new Promise(function(resolve, reject) {
        const queryString = `SELECT * FROM guava_user_table WHERE nickname=?`;
        const queryValue  = [ nickname ];

        context.connection.query(queryString, queryValue, function(err, rows) {
            if (err) {
                const error = new Error(err);
                error.status = 500;
                return reject({ context: context, error: error });
            } else if (rows.length > 0) {
                const error = new Error("Exist Nickname");
                error.status = 1001;
                return reject({ context: context, error: error });
            }
            return resolve(context);
        });
    });
}

function checkStudentId(context, { student_id }) {
    return new Promise(function(resolve, reject) {
        const queryString = `SELECT * FROM guava_user_table WHERE student_id=?`;
        const queryValue  = [ student_id ];

        context.connection.query(queryString, queryValue, function(err, rows) {
            if (err) {
                const error = new Error(err);
                error.status = 500;
                return reject({ context: context, error: error });
            } else if (rows.length > 0) {
                const error = new Error("Exist Student ID");
                error.status = 1002;
                return reject({ context: context, error: error });
            }
            return resolve(context);
        });
    });
}

function getAllUsers(context) {
    return new Promise(function(resolved, rejected) {
        const queryString = `SELECT * from guava_user_table`;
        context.connection.query(queryString, '', function(err, rows) {
            if (err) {
                const error = new Error(err);
                error.status = 500;
                return rejected({ context: context, error: error });
            }
            context.userList = rows;
            return resolved(context);
        });
    });
}

function createUser(context, { user }) {
    return new Promise(function(resolve, reject) {
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
            if (err) {
                const error = new Error(err);
                error.status = 500;
                return reject({ context: context, error: error });
            }
            return resolve(context);
        });
    });
}

function deleteUser(context, { id }) {
    return new Promise(function(resolve, reject) {
        const queryString = `DELETE FROM guava_user_table WHERE id = ?`;

        const queryValue = [ id ];

        context.connection.query(queryString, queryValue, function(err, row) {
            if (err) {
                const error = new Error(err);
                error.status = 500;
                return reject({ context: context, error: error });
            }
            return resolve(context);
        });
    });
}

function editUser(context, { id, user }) {
    return new Promise(function(resolve, reject) {
        let queryString = `UPDATE guava_user_table SET`;
        let stringBuilder = [ ];
        let queryValue = [ ];
        if (user.name) {
            stringBuilder.push(` name = ?`);
            queryValue.push(user.name);
        }
        if (user.salt) {
            stringBuilder.push(` salt = ?`);
            queryValue.push(user.salt);
        }
        if (user.username) {
            stringBuilder.push(` username = ?`);
            queryValue.push(user.username);
        }
        if (user.nickname) {
            stringBuilder.push(` nickname = ?`);
            queryValue.push(user.nickname);
        }
        if (user.password) {
            stringBuilder.push(` password = ?`);
            queryValue.push(user.password);
        }
        if (user.student_id) {
            stringBuilder.push(` student_id = ?`);
            queryValue.push(user.student_id);
        }
        if (user.permission_level) {
            stringBuilder.push(` permission_level = ?`);
            queryValue.push(user.permission_level);
        }
        queryString += stringBuilder.join(',');
        queryString += ` WHERE id = ?`;
        queryValue.push(id);

        context.connection.query(queryString, queryValue, function(err, row) {
            if (err) {
                const error = new Error(err);
                error.status = 500;
                return reject({ context: context, error: error });
            }
            return resolve(context);
        });
    });
}

module.exports = {
    User,
    editUser,
    checkUser,
    createUser,
    deleteUser,
    getAllUsers,
    checkNickName,
    checkUserName,
    checkStudentId,
}
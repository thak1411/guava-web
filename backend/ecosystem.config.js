module.exports = {
	apps: [ {
        name: 'GUAVA-WEB',
        script: 'bin/www',
        args: '--log-date-format "DD-MM HH:mm:ss.SSS"',
        
        env: {
            NODE_ENV: 'local',
        },
        env_production : {
            NODE_ENV: 'production',
        },
        env_local : {
            NODE_ENV: 'local',
        },
    } ],
};
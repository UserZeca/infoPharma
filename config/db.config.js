module.exports = {
    DB: 'test',
    USER: 'root',
    PASSWORD: '',
    HOST: '127.0.0.1',
    dialect: 'mysql',
    define: {
        underscored: false,
        freezeTableName: false,
        charset: 'utf8',
        dialectOptions: {
            collate: 'utf8_general_ci'
        },
        timestaps: true
    }
}
import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin ',
        email: "admin@ind.com",
        password :  bcrypt.hashSync('123456', 10),
        isAdmin: true
    },    
    {
        name: 'user 1 ',
        email: "user1@ind.com",
        password :bcrypt.hashSync('123456', 10),
    },    
    {
        name: 'user 2 ',
        email: "user2@ind.com",
        password :bcrypt.hashSync('123456', 10),
    },
]

export default users
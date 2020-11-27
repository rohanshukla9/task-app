import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'username123',
    email: 'admin@example.com',
    password: bcrypt.hashSync('password123', 10),    
  },
  {
    name: 'mygoodapp',
    email: 'john@example.com',
    password: bcrypt.hashSync('password123', 10), 
  },
  {
    name: 'mygoodappreturns',
    email: 'biyani@example.com',
    password: bcrypt.hashSync('password123', 10), 
  },
];

export default users;

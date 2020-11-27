import mongoose from 'mongoose';
import dotenv from 'dotenv';
import users from './data/users.js';
import tasks from './data/tasks.js';
import User from './models/userModel.js';
import Task from './models/taskModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Task.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const sampleUser = createdUsers[0]._id;

    const sampleTasks = tasks.map((task) => {
      return { ...task, user: sampleUser };
    });

    await Task.insertMany(sampleTasks);

    console.log('data imported!');

    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log('data destroyed!'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}

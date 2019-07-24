const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// 连接
mongoose.connect('mongodb://localhost:27017/myapp');
// 表建立model
// const Cat = mongoose.model('Cat', { name: String, age: Number });
// // 实例
// // const kitty = new Cat({ name: 'Zildjian' });
// // kitty.save().then(() => console.log('meow'));

// const kitty2 = new Cat({ name: 'hello kitty', age: 4 });
// kitty2.save().then((data) => console.log(data));

// 建立表
let DogSchema = new Schema({
  name: String,
  age: Number,
  create: new Date()
});

DogSchema.method({

});

// 静态方法
DogSchema.statics({
  findByName: ( name ) => {

  }
});


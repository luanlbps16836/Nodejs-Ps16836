var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


const session = require('express-session');
const mongoose = require('mongoose');
require('./compoments/user/model');
require('./compoments/categories/model');
require('./compoments/products/model');

var indexRouter = require('./routes/index');
var productRouter = require('./routes/products');
var apisRoutes = require('./routes/api');
var categoriesRoute = require('./routes/categorys');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'mykey',
  resave: true,
  saveUninitialized: true,
  cookie: {secure: false}
}))

mongoose.connect('mongodb+srv://luanlbps16836:<password>@cluster0.j7mpv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {  
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('>>>>>>>>>> DB Connected!!!!!!'))
.catch(err => console.log('>>>>>>>>> DB Error: ', err));


app.use('/', indexRouter);
app.use('/san-pham', productRouter);
app.use('/api', apisRoutes);
app.use('/danh-muc', categoriesRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

/**
 * 1. http://localhost:3000/dang-nhap
 * get: hiển thị trang đăng nhập
 * post: tiến hành đăng nhập,
 *  nếu thành công chuyển qua hiển thị danh sách sp
 *  nếu không thành công vẫn ở đăng nhập
 *
 * 2.http://localhost:3000/dang-xuat
 * get: tiến hành đăng xuất, quay trở lại đăng nhập
 *
 * 3. http://localhost:3000/san-pham
 * get: hiển thị danh sách sản phẩm
 * post: thêm mới 1 sản phẩm
 *
 * 4. http://localhost:3000/san-pham/:id/edit
 * get: hiển thị chi tiết thông tin 1 sản phẩm
 * put: cập nhật thông tin sản phẩm
 *
 * 5. http://localhost:3000/san-pham/:id/delete
 * delete: xóa thông tin 1 sản phẩm
 *
 * 6. http://localhost:3000/san-pham/thong-ke
 * get: thống kê sản phẩm
 *
 * 7. http://localhost:3000/danh-muc
 * get: lấy danh sách danh mục sản phẩm
 *
 *
 * MCV: Model - View - Controller
 */
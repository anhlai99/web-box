const express = require('express');
const bodyParser =require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app= express()
//tạo chuỗi kết hợp để in data
app.use(morgan('combined'))
// tạo thông báo cho phép ứng dụng cấp tốc của chúng ta dễ dàng phân tích cú pháp bất kỳ yêu cầu nào của json được gửi đến
app.use(bodyParser.json())
// tạo đường dẫn cho phép bất kỳ máy chủ hoặc ứng dụng khách nào truy cập phần này
app.use(cors())

// tạo post nghe port
app.listen(process.env.PORT || 1702)
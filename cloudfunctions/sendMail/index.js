const cloud = require('wx-server-sdk')
cloud.init()

var nodemailer = require('nodemailer')


var config = {
  service: '163',
  port: 465, 
  secureConnection: true,
  auth: {
    user: 'jwjh1998@163.com', 
    pass: 'ljh1998' 
  }
};

var transporter = nodemailer.createTransport(config);

exports.main = async (event, context) => {
  
  var mail = {
    
    from: '来自 <jwjh1998@163.com>',
    
    subject: '预约订单',
    
    to: 'xcx2019gh@163.com',
    
    text: event.orderlist
  };

  let res = await transporter.sendMail(mail);
  return res;
}
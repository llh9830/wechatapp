# 微信小程序
功能：公司介绍、产品展示、服务预约、地图位置展示、首页轮播图


后端使用微信小程序官方提供的云开发平台，使用node.js开发，消息提醒为了节约成本在后端调用了nodemailer的api向指定邮箱发送邮件，以实现当有人预约服务，可以通过邮箱提醒，但微信云开发平台提供的免费后台性能有限，当用户量较大时建议考虑付费更换性能更好的云开发平台或者自行搭建后台服务器与微信小程序进行数据交互



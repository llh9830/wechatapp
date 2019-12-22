const cloud = require('wx-server-sdk')
cloud.init()
exports.main = async (event, context) => {
  try {
    const result = await cloud.openapi.templateMessage.send({
      touser: event.openId,
      page: '/pages/order/order',
      formId:event.formId,
      templateId: 'fpzByJqKDaqbz_J8Tw6cDShq2Fe7WoazTPD82ec3Kcc',
      data: {
        keyword1: {
          value:event.name,
        },
        keyword2: {
          value: event.contact,
        },
        keyword3: {
          value: event.address,
        },
       
        keyword4: {
          value: event.service,
        }
      },
      emphasisKeyword: 'keyword4.DATA'
    })
    console.log(result)
    return result
  } catch (err) {
    console.log(err)
    return err
  }
}

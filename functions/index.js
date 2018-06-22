const functions = require('firebase-functions')
const mailgun = require('mailgun-js')({
  apiKey: functions.config().mailgun.key,
  domain: functions.config().mailgun.domain
})

exports.contactSubmission = functions.database.ref('contact/{timestamp}')
  .onCreate(event => {
  
    const submission = event._data
    let { name, email, message } = submission

    let emailOptions = {
      from: 'Btfrost Portfolio <notifications@btfrost.com>',
      subject: `Contact Submission: ${name}`,
      html: `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Message: ${message}</p>
      `,
      'h:Reply-To': email,
      to: 'info@btfrost.com'
    }
    
    mailgun.messages().send(emailOptions, function (error, body) {
      console.log(body);
    })

})

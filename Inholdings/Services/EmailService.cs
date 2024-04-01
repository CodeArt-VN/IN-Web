using System.Net.Mail;
using System.Net;
using Inholdings.Models;

namespace Inholdings.Services
{
    public interface IEmailService
    {
        public Task SendEmailAsync(EmailModel emailModel);
    }
    public class EmailService : IEmailService
    {
        private  IConfiguration _configuration { get; set; }
        public EmailService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task SendEmailAsync(EmailModel emailModel)
        {
            try
            {
                var smtpClient = new SmtpClient(_configuration["smtp"])
                {
                    Port = int.Parse(_configuration["port"]),
                    Credentials = new NetworkCredential(_configuration["InMail"], _configuration["InPassword"]),
                    EnableSsl = bool.Parse(_configuration["EnableSsl"]),
                };

                var bodyMessage = "   <ul>\r\n            <li><strong>Email:</strong> {{ emailModel.Email }}</li>\r\n            <li><strong>Name:</strong> {{ emailModel.FirstName }} {{ emailModel.LastName }}</li>\r\n            <li><strong>Message:</strong> {{ emailModel.Message }}</li>\r\n        </ul>";



                bodyMessage = bodyMessage.Replace("{{ emailModel.Email }}", emailModel.Email);
                bodyMessage = bodyMessage.Replace("{{ emailModel.FirstName }}", emailModel.FirstName);
                bodyMessage = bodyMessage.Replace("{{ emailModel.LastName }}", emailModel.LastName);
                bodyMessage = bodyMessage.Replace("{{ emailModel.Message }}", emailModel.Message);

            
                var mailMessage = new MailMessage
                {
                    From = new MailAddress(emailModel.Email),
                    Subject = emailModel.Subject,
                    Body = bodyMessage,
                    IsBodyHtml = true,
                };

                mailMessage.To.Add(_configuration["InMail"]);
                if (!string.IsNullOrEmpty(_configuration["CopyCarbon"]))
                {
                    mailMessage.CC.Add(_configuration["CopyCarbon"]);
                }
                await smtpClient.SendMailAsync(mailMessage);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error sending email: {ex.Message}");
            }
        }
    }
}


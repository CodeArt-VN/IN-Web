using Inholdings.Common;
using Inholdings.Models;
using Inholdings.Services;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using System.Windows;
namespace Inholdings.Controllers
{
    public class HomeController : BaseController
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IEmailService _emailService;
        private string _device= "DESKTOP";
        public HomeController(ILogger<HomeController> logger, IEmailService emailService)
        {
          
            _logger = logger;
            _emailService = emailService;
        }

        public IActionResult Index()
        {
            Init("home");
            if (Utils.IsMobileBrowser(HttpContext))
            {
                _device = "MOBILE";
            }
            ViewBag.Device = _device;
            return View();
        }

        [Route("about-1")]
        public IActionResult About()
        {
            Init("about");
            if (Utils.IsMobileBrowser(HttpContext))
            {
                _device = "MOBILE";
            }
            ViewBag.Device = _device;
            return View();
        }
        [Route("in-development")]
        public IActionResult InDevelopment()
        {
            Init("in-development");
            if (Utils.IsMobileBrowser(HttpContext))
            {
                _device = "MOBILE";
            }
            ViewBag.Device = _device;

            return View();
        }

        [Route("in-hospitality")]
        public IActionResult InHospitality()
        {
            Init("in-hospitality");
            if (Utils.IsMobileBrowser(HttpContext))
            {
                _device = "MOBILE";
            }
            ViewBag.Device = _device;
            return View();
        }
        [Route("portfolio")]
        public IActionResult Portfolio()
        {
            Init("portfolio");
            if (Utils.IsMobileBrowser(HttpContext))
            {
                _device = "MOBILE";
            }
            ViewBag.Device = _device;
            return View();
        }
        [Route("blog")]
        public IActionResult Blog()
        {
            Init("news");
            if (Utils.IsMobileBrowser(HttpContext))
            {
                _device = "MOBILE";
            }
            ViewBag.Device = _device;
            return View();
        }

        [Route("general-5")]
        public IActionResult Register()
        {
            Init("register");
            if (Utils.IsMobileBrowser(HttpContext))
            {
                _device = "MOBILE";
            }
            ViewBag.Device = _device;
            return View();
        }

        [Route("gemhanoi-coming-soon")]
        public IActionResult GemHaNoi()
        {
            Init("gem-ha-noi");
            if (Utils.IsMobileBrowser(HttpContext))
            {
                _device = "MOBILE";
            }
            ViewBag.Device = _device;
            return View();
        }
        [Route("contact")]
        public IActionResult Contact()
        {
            Init("contact");
            if (Utils.IsMobileBrowser(HttpContext))
            {
                _device = "MOBILE";
            }
            ViewBag.Device = _device;
            return View();
        }

        [Route("post/our-inside-secrets-1")]
        public IActionResult BlogOurInsideSecret1()
        {
            Init("our-inside-secrets-1");
            if (Utils.IsMobileBrowser(HttpContext))
            {
                _device = "MOBILE";
            }
            ViewBag.Device = _device;
            return View();
        }

        [Route("portfolio/investors")]
        public IActionResult IR()
        {
            Init("portfolio");
            if (Utils.IsMobileBrowser(HttpContext))
            {
                _device = "MOBILE";
            }
            ViewBag.Device = _device;
            return View();
        }

        [Route("SendMail")]
        [HttpPost]
        public async Task<IActionResult> SendMail(EmailModel emailModel)
        {
            try
            {
                await _emailService.SendEmailAsync(emailModel);
            }
            catch(Exception ex){

            }
            ViewBag.Device = _device;
            return View();
        }



        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
using Inholdings.Common;
using Inholdings.Models;
using Microsoft.AspNetCore.Mvc;

namespace Inholdings.Controllers
{
    public class BaseController : Controller
    {
        public MetaTag metaTag = new MetaTag();
        private string _device = "DESKTOP";
        private string _cssSuffix = ".css";
        public BaseController()
        {
        }
        public void Init(string page)
        {
            if (Utils.IsMobileBrowser(HttpContext))
            {
                _device = "MOBILE";
                _cssSuffix = "-mobile.css";
            }
            metaTag.CssLinks.Add("/master" + _cssSuffix);
            switch (page)
            {
                case "home":
                    metaTag.Title = "HOME | Inholdings";
                    metaTag.Url = "/";
                    metaTag.CssLinks.Add("/home/site" + _cssSuffix);
                    break;

                case "about":
                    metaTag.Title = "ABOUT | Inholdings";
                    metaTag.Url = "/about-1";
                    metaTag.CssLinks.Add("/about/about" + _cssSuffix);
                    break;

                case "news":
                    metaTag.Title = "NEWS | Inholdings";
                    metaTag.Url = "/blog";
                    metaTag.CssLinks.Add("/blog/blog" + _cssSuffix);
                    break;

                case "gem-ha-noi":
                    metaTag.Title = "GEM HN - COMING SOON | Inholdings";
                    metaTag.Url = "/gemhanoi-coming-soon";
                    metaTag.CssLinks.Add("/gemhanoi-coming-soon/gemhanoi-coming-soon" + _cssSuffix);
                    break;

                case "in-development":
                    metaTag.Title = "IN DEVELOPMENT | Inholdings";
                    metaTag.Url = "/in-development";
                    metaTag.CssLinks.Add("/in-development/in-development" + _cssSuffix);
                    break;

                case "in-hospitality":
                    metaTag.Title = "IN HOSPITALITY | Inholdings";
                    metaTag.Url = "/in-hospitality";
                    metaTag.CssLinks.Add("/in-hospitality/in-hospitality" + _cssSuffix);
                    break;

                case "portfolio":
                    metaTag.Title = "PORTFOLIO | Inholdings";
                    metaTag.Url = "/portfolio";
                    metaTag.CssLinks.Add("/portfolio/portfolio" + _cssSuffix);
                    break;

                case "contact":
                    metaTag.Title = "CONTACT | Inholdings";
                    metaTag.Url = "/contact";
                    metaTag.CssLinks.Add("/contact/contact" + _cssSuffix);
                    break;

                case "our-inside-secrets-1":
                    metaTag.Title = "As International Events and Exhibitions in Saigon Grow, GEM Center Evolves";
                    metaTag.Url = "/post/our-inside-secrets-1";
                    metaTag.Description = "Vietnam’s much-publicized economic boom is fueled in part by the nation’s increasing appeal to investors and thrill seekers which has led to a rise in foreign direct investment. It's also driving many major global brands and various high-class events to come to Vietnam. Convention halls and event spaces boasting world-class standards and service are attracting a variety of international companies for conferences and exhibitions, along with private functions such as weddings and birthdays. Saigon";                    metaTag.CssLinks.Add("/post/our-inside-secrets-1" + _cssSuffix);
                    break;

                case "register":
                    metaTag.Title = "HOME | Inholdings";
                    metaTag.Url = "/general-5";
                    metaTag.CssLinks.Add("/general-5/general-5" + _cssSuffix);
                    break;

                default:
                    metaTag.Title = "HOME | Inholdings";
                    metaTag.Url = "/";
                    metaTag.CssLinks.Add("/home/site" + _cssSuffix);
                    break;
            }
            ViewBag.MetaTag = metaTag;
        }

    }
}

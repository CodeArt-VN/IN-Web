namespace Inholdings.Models
{
    public class MetaTag
    {
        public string? Title { get; set; }
        public string? Url { get; set; }
        public string? Description { get; set; }
        public List<string> CssLinks { get; set; } = new List<string>();
    }
}

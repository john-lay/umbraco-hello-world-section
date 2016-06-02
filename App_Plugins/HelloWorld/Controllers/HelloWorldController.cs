namespace umbraco_demo.App_Plugins.HelloWorld.Controllers
{
    using Umbraco.Web.Editors;
    using Umbraco.Web.Mvc;

    [PluginController("helloWorldApi")]
    public class HelloWorldController : UmbracoAuthorizedJsonController
    {
        // GET: GetContent
        // If the get method doesn't start with the word get you get a 405 for some reason.
        public ActionResult GetContent()
        {
            return new JsonResult
            {
                Data = "Hello Umbraco!",
                ContentType = "application/json"
            };
        }
    }
}

namespace umbraco_demo.App_Plugins.HelloWorld
{
    using umbraco.businesslogic;
    using umbraco.interfaces;

    public class HelloWorldSection
    {
        [Application("helloWorldSection", "Hello World", "icon-users-alt", 15)]
        public class LoyaltyAdminSection : IApplication
        {

        }
    }
}

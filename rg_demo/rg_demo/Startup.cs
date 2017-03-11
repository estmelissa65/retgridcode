using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(rg_demo.Startup))]
namespace rg_demo
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}

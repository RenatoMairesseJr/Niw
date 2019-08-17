using Domain.Dtos;
using Domain.Interface.Infrastructure.Providers;
using Microsoft.AspNetCore.Mvc;

namespace Presentation.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserMenuController : ControllerBase
    {
        public UserMenuController(IUserMenuProvider userMenuProvider)
        {
            UserMenuProvider = userMenuProvider;
        }

        public IUserMenuProvider UserMenuProvider { get; }

        // GET: api/UserGroups/5
        [HttpGet("GetUserMenu")]
        public ActionResult<ApiReturn<UserMenu>> GetUserMenu() => Ok(UserMenuProvider.GetUserMenu());
    }
}

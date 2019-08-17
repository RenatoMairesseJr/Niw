using Domain.Dtos;
using Domain.Interface.Infrastructure.Providers;
using Microsoft.AspNetCore.Mvc;

namespace Presentation.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserMenuController : ControllerBase
    {
        public UserMenuController(IUserDataProvider userMenuProvider)
        {
            UserMenuProvider = userMenuProvider;
        }

        public IUserDataProvider UserMenuProvider { get; }

        // GET: api/UserGroups/5
        [HttpGet("GetUserData")]
        public ActionResult<ApiReturn<UserData>> GetUserData() => Ok(UserMenuProvider.GetUserData());
    }
}

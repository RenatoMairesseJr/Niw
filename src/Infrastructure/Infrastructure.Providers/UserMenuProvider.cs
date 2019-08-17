using Domain.Interface.Infrastructure.Providers;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using Domain.Dtos;

namespace Infrastructure.Providers
{
    public class UserMenuProvider : IUserMenuProvider
    {
        public UserMenuProvider(ILogger<UserMenuProvider> logger)
        {
            Logger = logger;
        }

        public ILogger<UserMenuProvider> Logger { get; }

        public ApiReturn<UserMenu> GetUserMenu()
        {
            return new ApiReturn<UserMenu>(new UserMenu
            {
                MenuList = new List<string>
                {
                    "Home",
                    "About"
                }
            })
            {
                Status = 0,
                StatusDescription = "Sucess"
            };
        }
    }
}


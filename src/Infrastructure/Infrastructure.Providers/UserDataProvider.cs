using Domain.Interface.Infrastructure.Providers;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using Domain.Dtos;

namespace Infrastructure.Providers
{
    public class UserDataProvider : IUserDataProvider
    {
        public UserDataProvider(ILogger<UserDataProvider> logger)
        {
            Logger = logger;
        }

        public ILogger<UserDataProvider> Logger { get; }

        public ApiReturn<UserData> GetUserData()
        {
            return new ApiReturn<UserData>(new UserData
            {
                Name =  "",
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




using Domain.Dtos;

namespace Domain.Interface.Infrastructure.Providers
{
    public interface IUserDataProvider
    {
        ApiReturn<UserData> GetUserData();
    }
}

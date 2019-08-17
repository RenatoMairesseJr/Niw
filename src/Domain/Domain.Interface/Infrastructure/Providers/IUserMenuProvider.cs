

using Domain.Dtos;

namespace Domain.Interface.Infrastructure.Providers
{
    public interface IUserMenuProvider
    {
        ApiReturn<UserMenu> GetUserMenu();
    }
}

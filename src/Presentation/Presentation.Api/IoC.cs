using Domain.Interfaces.Infrastructure.Providers;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System.Linq;
using System.Collections.Generic;
using Infrastructure.Providers;
using Domain.Interface.Infrastructure.Providers;

namespace Presentation.Api
{
    public static class IoC
    {
        public static void SetupIoC(this IServiceCollection serviceCollection, IConfiguration configuration)
        {
            serviceCollection.SetupIoCProviders();

            foreach (var iFace in NumberIntoWordsInterfaces())
                if (!serviceCollection.Any(s => s.ServiceType.Name == iFace.Name))
                    throw new System.Exception($"No implementations of {iFace.Name} have been configured.");
        }

        public static void SetupIoCProviders(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddTransient<INumberIntoWordsProvider, NumberIntoWordsProvider>();
            serviceCollection.AddTransient<IUserMenuProvider, UserMenuProvider>();
        }

        private static IEnumerable<System.Type> NumberIntoWordsInterfaces() => System.AppDomain.CurrentDomain.GetAssemblies()
            .Where(a => a.FullName.StartsWith("Domain.Interfaces")).SelectMany(a => a.GetTypes()).Where(t => t.IsInterface);
    }
} 
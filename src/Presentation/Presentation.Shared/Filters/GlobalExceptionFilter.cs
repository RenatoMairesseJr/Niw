using Domain.Dtos.Exceptions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.IO;
using System.Net;

namespace Presentation.Shared.Filters
{
    public class GlobalExceptonFilter : ExceptionFilterAttribute
    {
        private readonly ILogger _logger;

        public GlobalExceptonFilter(ILoggerFactory logger)
        {
            if (logger == null)
            {
                throw new ArgumentNullException(nameof(logger));
            }

            this._logger = logger.CreateLogger("Global Exception Filter");
        }

        public override void OnException(ExceptionContext context)
        {
            var minException = new MinException
            {
                User = context.HttpContext?.User?.Identity?.Name,
                Method = context.HttpContext?.Request?.Method,
                Path = context.HttpContext?.Request?.Path.ToUriComponent(),
                QueryString = context.HttpContext?.Request.QueryString.ToUriComponent(),
                Body = new StreamReader(context.HttpContext?.Request.Body).ReadToEnd(),
                Message = context.Exception.Message,
                Exception = context.Exception.ToString()
            };

            _logger.LogError(context.Exception, SerializeObject(minException));

            if (context.Exception is NotFoundException)
            {
                context.HttpContext.Response.StatusCode = (int)HttpStatusCode.NotFound;
            }
            else if (context.Exception is ForbiddenException)
            {
                context.HttpContext.Response.StatusCode = (int)HttpStatusCode.Forbidden;
            }
            else
            {
                context.HttpContext.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
            }

            context.HttpContext.Response.ContentType = "application/json";
            context.HttpContext.Response.WriteAsync(SerializeObject(new { success = false, error = minException }));
            context.ExceptionHandled = true;
        }

        public class MinException
        {
            public string User { get; internal set; }
            public string Method { get; internal set; }
            public string Path { get; internal set; }
            public string QueryString { get; internal set; }
            public string Body { get; internal set; }
            public string Message { get; internal set; }
            public string Exception { get; internal set; }
        }

        public string SerializeObject(object obj)
        {
            return JsonConvert.SerializeObject(obj, Formatting.Indented, new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() });
        }
    }

}

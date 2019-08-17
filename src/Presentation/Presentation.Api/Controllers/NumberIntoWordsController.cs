using Microsoft.AspNetCore.Mvc;
using Domain.Dtos;
using Domain.Interfaces.Infrastructure.Providers;

namespace Presentation.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NumberIntoWordsController : ControllerBase
    {
        public NumberIntoWordsController(INumberIntoWordsProvider numberIntoWordsProvider){
            NumberIntoWordsProvider = numberIntoWordsProvider;
        }

        public INumberIntoWordsProvider NumberIntoWordsProvider {get;}
        // GET api/values
        [HttpGet("{name}/{inputNumber}")]
        public ActionResult<ApiReturn<NumberIntoWord>> RetunrNumberIntoWords([FromRoute] string name, [FromRoute] int inputNumber) =>
            Ok(NumberIntoWordsProvider.ReturnNumberIntoWords(name, inputNumber));
    }
}

using Microsoft.AspNetCore.Mvc;
using Domain.Dtos;
using Domain.Interfaces.Infrastructure.Providers;
using System;

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
        public ActionResult<ApiReturn<NumberIntoWord>> RetunrNumberIntoWords([FromRoute] string name, [FromRoute] long inputNumber) =>
            Ok(NumberIntoWordsProvider.ReturnNumberIntoWords(name, inputNumber));
    }
}

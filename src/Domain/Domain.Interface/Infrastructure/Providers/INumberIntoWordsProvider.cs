using Domain.Dtos;

namespace Domain.Interfaces.Infrastructure.Providers
{
    public interface INumberIntoWordsProvider
    {
        ApiReturn<NumberIntoWord> ReturnNumberIntoWords(string name, int inputNumber);
    } 
}
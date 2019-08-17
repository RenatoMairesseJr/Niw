using Domain.Dtos;
using System;

namespace Domain.Interfaces.Infrastructure.Providers
{
    public interface INumberIntoWordsProvider
    {
        ApiReturn<NumberIntoWord> ReturnNumberIntoWords(string name, long inputNumber);
    } 
}
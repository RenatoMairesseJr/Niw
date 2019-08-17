using System;
using Domain.Interfaces.Infrastructure.Providers;
using DTOSS = Domain.Dtos;

namespace Infrastructure.Providers
{
    public class NumberIntoWordsProvider : INumberIntoWordsProvider
    {
        private readonly string[] Numbers = { "Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen" };
        private readonly string[] Tens = { "", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety" };

        public DTOSS.ApiReturn<DTOSS.NumberIntoWord> ReturnNumberIntoWords(string name, int inputNumber) {
            DTOSS.ApiReturn<DTOSS.NumberIntoWord> response = new DTOSS.ApiReturn<DTOSS.NumberIntoWord>(new DTOSS.NumberIntoWord
            {
                Name = name,
                InputNumber = inputNumber,
                NumberIntoWords = ""
            })
            {
                Status = 0,
                StatusDescription = "Sucess"
            };


            if (inputNumber < 0 || inputNumber > 1000000)
            {
                response.Status = 1;
                response.StatusDescription = "Invalid range, please enter a number between 0 and 1 million inclusively";
            } else {
                response.DataReturn.NumberIntoWords = ConverNumberIntoWords(inputNumber);
            }

            return response;
        }
        private string ConverNumberIntoWords(int inputNumber){
            char[] digits = inputNumber.ToString().ToCharArray();
            string words = null;

            if (inputNumber >= 0 && inputNumber <= 19)
            {
                words = words + this.Numbers[(inputNumber)];
            }
            else if (inputNumber >= 20 && inputNumber <= 99)
            {
                int firstDigit = (int)Char.GetNumericValue(digits[0]);
                int secondPart = (inputNumber) % 10;

                words = words + this.Tens[firstDigit];

                if (secondPart > 0)
                {
                    words = words + " " + ConverNumberIntoWords(secondPart);
                }
            }
            else if (inputNumber >= 100 && inputNumber <= 999)
            {
                int firstDigit = (int)Char.GetNumericValue(digits[0]);
                int secondPart = (inputNumber) % 100;

                words = words + this.Numbers[firstDigit] + " hundred";

                if (secondPart > 0)
                {
                    words = words + " and " + ConverNumberIntoWords(secondPart);
                }
            }
            else if (inputNumber >= 1000 && inputNumber <= 19999)
            {
                int firstPart = (int)Char.GetNumericValue(digits[0]);
                if (inputNumber >= 10000)
                {
                    string twoDigits = digits[0].ToString() + digits[1].ToString();
                    firstPart = Convert.ToInt16(twoDigits);
                }
                int secondPart = (inputNumber) % 1000;

                words = words + this.Numbers[firstPart] + " thousand";

                if (secondPart > 0 && secondPart <= 99)
                {
                    words = words + " and " + ConverNumberIntoWords(secondPart);
                } else if (secondPart >= 100)
                {
                    words = words + " " + ConverNumberIntoWords(secondPart);
                }
            }
            else if (inputNumber >= 20000 && inputNumber <= 999999)
            {
                string firstStringPart = Char.GetNumericValue(digits[0]).ToString() + Char.GetNumericValue(digits[1]).ToString();

                if (inputNumber >= 100000)
                {
                    firstStringPart = firstStringPart + Char.GetNumericValue(digits[2]).ToString();
                }

                int firstPart = Convert.ToInt16(firstStringPart);
                int secondPart = inputNumber - (firstPart * 1000);

                words = words + ConverNumberIntoWords(firstPart) + " thousand";

                if (secondPart > 0 && secondPart <= 99)
                {
                    words = words + " and " + ConverNumberIntoWords(secondPart);
                } else if (secondPart >= 100)
                {
                    words = words + " " + ConverNumberIntoWords(secondPart);
                }
            }
            else if (inputNumber == 1000000)
            {
                words = words + "One million";
            }
            return words;
        }
    }
}
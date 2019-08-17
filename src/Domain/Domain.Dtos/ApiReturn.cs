using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Dtos
{
    public class ApiReturn<T>
    {
        public int Status { get; set; }
        public string StatusDescription { get; set; }
        public ApiReturn(T value)
        {
            DataReturn = value;
            Status = 0;
            StatusDescription = "Sucess";
        }


        public T DataReturn;
    }
}

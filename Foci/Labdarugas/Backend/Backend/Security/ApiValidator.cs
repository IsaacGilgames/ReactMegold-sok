using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Web;

namespace Backend.Security
{
    public class ApiValidator
    {
        public static byte[] CreatePasswordHash(string password)
        {
            var pass = Encoding.UTF8.GetBytes(password);
            return new MD5CryptoServiceProvider().ComputeHash(pass);
        }

        public static bool VerifyPasswordHash(string password, byte[] storedHash)
        {
            using (var hmac = new HMACSHA512())
            {
                var pass = Encoding.UTF8.GetBytes(password);
                var computedHash = new MD5CryptoServiceProvider().ComputeHash(pass);
                return computedHash.SequenceEqual(storedHash);
            }
        }
    }
}
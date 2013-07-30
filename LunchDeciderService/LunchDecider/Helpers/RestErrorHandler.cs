using System;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace LunchDecider.Helpers {
    public static class RestErrorHandler {
        public static void ThrowRestException(string message, HttpStatusCode httpStatusCode = HttpStatusCode.NotFound) {
            var resp = new HttpResponseMessage(httpStatusCode) {
                Content = new StringContent(message),
                ReasonPhrase = String.Empty
            };
            throw new HttpResponseException(resp);
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace LunchDecider.Data {
    public class StrongEnum<TypeToGet> {
        protected static TypeToGet GetById(Func<FieldInfo, bool> uniqueSelector) {
            var result = typeof(TypeToGet).GetFields(BindingFlags.Public | BindingFlags.Static).Where(x => x.FieldType == typeof(TypeToGet)).SingleOrDefault(uniqueSelector);
            if (result == default(FieldInfo)) {
                return default(TypeToGet);
            }
            return (TypeToGet)result.GetValue(null);
        }

        protected static IEnumerable<TypeToGet> All(Type strongEnumType) {
            var publicStaticFields = strongEnumType.GetFields(BindingFlags.Public | BindingFlags.Static).Where(x => x.FieldType == typeof(TypeToGet));
            var result = publicStaticFields.Select(x => (TypeToGet)x.GetValue(null));
            return result;
        }
    }
}
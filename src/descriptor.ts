/**
 * 异常捕获修饰器
 * @returns
 */
export function API() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const method = descriptor.value;
    descriptor.value = function (...args) {
      return method
        .apply(this, [...args])
        .then((result) => result?.data)
        .catch((error) => error.response.data);
    };
    return descriptor;
  };
}

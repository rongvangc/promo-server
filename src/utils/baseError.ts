type ApiHandleType<T> = {
  data?: T;
  message?: string;
};

export const ApiHandle = <T>({ data, message }: ApiHandleType<T>) => ({
  data: data || [],
  message: message || undefined,
});

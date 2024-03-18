type ParamsType<T = unknown> = {
  [key: string]: any;
} & T;

type ResponseInfoType = {
  is_success: boolean;
  desc: string;
};

type DefaultResponseType<T = unknown> = {
  response_info?: ResponseInfoType;
} & T;

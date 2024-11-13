import type {
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
  AxiosResponse
} from 'axios'

export interface CodaInternalRequestInterceptor<
  T = AxiosResponse,
  R = unknown
> {
  requestInterceptor?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig
  requestInterceptorCatch?: (error: R) => R
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (err: R) => R
}

export interface CodaInternalRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptor?: CodaInternalRequestInterceptor<T>
  showLoading?: boolean
}

export interface CodaRequestInterceptor<T = AxiosResponse, R = unknown> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: R) => R
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (err: R) => R
}

export interface CodaRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptor?: CodaRequestInterceptor<T>
  showLoading?: boolean
}

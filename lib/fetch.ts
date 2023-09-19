/*
 * @Author: kasuie
 * @Date: 2023-09-19 11:35:56
 * @LastEditors: kasuie
 * @LastEditTime: 2023-09-19 11:35:56
 * @Description: 
 */
import qs from "qs";

// const baseURL = "http://kasuie.cc:8001";

class API {
  static async request(url: RequestInfo | URL, options = {}) {
    try {
      const response = await fetch(url, options);
      const data = await response.json();

      if (response.ok) {
        return data;
      } else {
        throw new Error(data.message || "Request failed");
      }
    } catch (e) {
      console.log(e);
    }
  }

  static get(url: RequestInfo | URL, params: any = null, options = {}) {
    url = params ? `${url}?${qs.stringify(params)}` : url;
    return API.request(url, {
      method: "GET",
      ...options,
    });
  }

  static post(url: RequestInfo | URL, body: any, options = {}) {
    return API.request(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    });
  }

  static postQs(url: RequestInfo | URL, body?: any, options = {}) {
    return API.request(url, {
      method: "POST",
      body: qs.stringify(body),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      ...options,
    });
  }

  //请求拦截
  static async interceptRequest(url: any, options = {}) {
    return { url, options };
  }

  //响应拦截
  static async interceptResponse(response: any) {
    return response;
  }
}

export default API;

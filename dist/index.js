(()=>{"use strict";const t=new class{constructor(t){if(!t||"string"!=typeof t)return new Error("base URL must be string");this.baseURL=t}async#t(t,e="GET",r){try{const o=await fetch(`${this.baseURL}${t}`,{method:e,body:r?JSON.stringify(r):void 0});return await o.json()}catch(t){console.log(t)}}async get(t){if(!t)throw new Error("endpoint must be not empty");try{if("string"==typeof t)return await this.#t(t,"GET");throw new Error("endpoint type must be string")}catch(t){console.log(t)}}async getByParams(t,e){if(!e)throw new Error("params must be object");try{if("object"!=typeof e||!Object.keys(e).length)throw new Error("params must be a non-empty object");try{if(Array.isArray(e))throw new Error("must be a object not array");{let r=(t=>Object.entries(t).map((([t,e])=>`${t}=${e}`)).join("&"))(e),{endpointToLower:o}=(t=>({endpointToLower:t.split(" ").join("").toLowerCase()}))(t);return await this.#t(`${o}?${r}`,"GET")}}catch(t){return console.log(t)}}catch(t){return console.log(t)}}async post(t,e){await this.#t(t,"POST",e)}}("https://api.escuelajs.co/api/v1/");(async()=>{const e=await t.getByParams("products/",{id:1});console.log(await e)})()})();
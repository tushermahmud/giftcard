import crypto from "crypto";
export const gamelovHeaderDate = (date: Date): string => {
    let d = new Date(date),
        day = '' + d.getDate(),
        month = '' + (d.getMonth() + 1),
        year = d.getFullYear(),
        hour = '' + d.getHours(),
        minute = '' + d.getMinutes(),
        second = '' + d.getSeconds();
  
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    if (hour.length < 2) hour = '0' + hour;
    if (minute.length < 2) minute = '0' + minute;
    if (second.length < 2) second = '0' + second;
  
    return [day, month, year, hour, minute, second].join('');
}

export const tokenExists = (token: string | undefined): boolean | string => {
  return token? token: false;
}

export const createSignature = (path: string, method: string, queries?: any, token?: string | boolean, xGiftlovDate?: string): string => {
  const preSignatureString = `${path}${method}${queries}${xGiftlovDate}${token}`;
  const signature = crypto
    .createHmac("sha512", process.env.GIFTLOVAPI_SECRET as string)
    .update(preSignatureString)
    .digest("hex");
  return signature;
}

export const getQueries = (queries:any): string => {
  const sortedQuery = queries.sort((a:any,b:any)=>a-b);
  const joinedQuery = sortedQuery.join("");
  return joinedQuery.length? joinedQuery: "";
}



export const createOptions = (method: string, path: string, queries: any, token: string | boolean, xGiftlovDate: string, signature: string) => {
    const options = {
    method: method,
    url: `${process.env.GIFTLOVAPI}${path}`,
    params: method,
    headers: {
      signature: signature,
      "X-GIFTLOV-DATE": xGiftlovDate,
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token,
    },
  };
}

export const getPrimitiveValues = (obj: any): any[] => {
  let values: any[] = [];
  for (let key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      if (Array.isArray(obj[key])) {
        obj[key].forEach((item: any) => {
          values = values.concat(getPrimitiveValues(item));
        });
      } else {
        values = values.concat(getPrimitiveValues(obj[key]));
      }
    } else {
      values.push(obj[key].toString());
    }
  }
  return values;
}

export const sortAndConcatenate = (values: any[]): string => {
  return values.sort().join('');
}

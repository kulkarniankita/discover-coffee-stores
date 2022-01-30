export const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

export const fetcher = (url) => fetch(url).then((res) => res.json());

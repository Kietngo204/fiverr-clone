import fetcher from "./fetcherAPI";

export const getMenuJob = async () => {
  const response = await fetcher.get("/cong-viec/lay-menu-loai-cong-viec");
  return response.data?.content;
};

export const getTypeJob = async () => {
  const response = await fetcher.get("/loai-cong-viec");
  return response.data?.content;
};

export interface IImgResponse {
  analytics: {};
  id: string;
  images: IImages<{ mp4: string }>;
  type: string;
  url: string;
  user: {};
}

export interface IImages<T> {
  preview: T;
}

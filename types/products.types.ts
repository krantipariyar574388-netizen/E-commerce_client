export type TProducts = {
  name: string;
  _id: string;
  cover_image: {
    path: string;
    public_id: string;
  };
  createdAt: string;
  updatedAt: string;
  description: string;
  rate: string;
};
export type Image = {
  id: number;
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string;
};

export type ApiResponse = {
  total: number;
  total_pages: number;
  results: Image[];
};

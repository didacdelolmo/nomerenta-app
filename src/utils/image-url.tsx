export const getImageUrl = (image: string) => {
  return `${import.meta.env.VITE_REST_API_URL}/images/${image}`;
};

export const isSecretValid = () => {
  return localStorage.getItem("secret") === import.meta.env.VITE_PROJECT_SECRET;
};

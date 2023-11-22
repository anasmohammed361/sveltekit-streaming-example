import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const promise = new Promise<number>((res) => {
    setTimeout(() => {
      res(Math.random());
    }, 3000);
  });
  return { promise };
};

import { revalidateTag } from "next/cache";


export const handleRevalidate = async (formData: FormData): Promise<void> => {
  "use server";
  revalidateTag(`blog-post-${formData.get('tag')}`, 'max');
};
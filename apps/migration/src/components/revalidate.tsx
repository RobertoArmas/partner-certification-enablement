import { handleRevalidate } from "@/actions/handle-revalidate";

export const Revalidate = async () => {
    const serverAction = handleRevalidate.bind(null) as (formData: FormData) => Promise<void>;
  return (
    <form action={serverAction}>
        <label htmlFor="tag">Tag</label>
        <input type="text" name="tag" id="tag" />
        <button type="submit">Revalidate</button>
    </form>
  );
};  
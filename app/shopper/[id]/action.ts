"use server";

import { updateUser } from "@/app/data-access/shopper";
import { revalidatePath } from "next/cache";

export default async function updateNameFunction(
  userId: string,
  formData: FormData
) {
  const newName = formData.get("name") as string;
  await updateUser(userId, newName);
  revalidatePath(`/shopper/${userId}`);
}



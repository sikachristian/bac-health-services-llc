import { z } from "zod";
import { createRouter, publicQuery } from "./middleware";
import { databases, ID } from "./lib/appwrite-server";
import { DATABASE_ID, COLLECTIONS } from "./lib/appwrite-server";

export const contactRouter = createRouter({
  submit: publicQuery
    .input(
      z.object({
        firstName: z.string().min(1, "First name is required"),
        lastName: z.string().min(1, "Last name is required"),
        email: z.string().email("Valid email is required"),
        phone: z.string().optional(),
        message: z.string().min(1, "Message is required"),
        smsConsent: z.boolean().default(false),
      })
    )
    .mutation(async ({ input }) => {
      const doc = await databases.createDocument(
        DATABASE_ID,
        COLLECTIONS.CONTACT_MESSAGES,
        ID.unique(),
        {
          firstName: input.firstName,
          lastName: input.lastName,
          email: input.email,
          phone: input.phone || "",
          message: input.message,
          smsConsent: input.smsConsent,
          status: "new",
          createdAt: new Date().toISOString(),
        }
      );
      return { success: true, id: doc.$id };
    }),

  list: publicQuery.query(async () => {
    const docs = await databases.listDocuments(
      DATABASE_ID,
      COLLECTIONS.CONTACT_MESSAGES
    );
    return docs.documents;
  }),
});

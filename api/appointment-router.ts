import { z } from "zod";
import { createRouter, publicQuery } from "./middleware";
import { databases, ID } from "./lib/appwrite-server";
import { DATABASE_ID, COLLECTIONS } from "./lib/appwrite-server";

export const appointmentRouter = createRouter({
  book: publicQuery
    .input(
      z.object({
        firstName: z.string().min(1, "First name is required"),
        lastName: z.string().min(1, "Last name is required"),
        email: z.string().email("Valid email is required"),
        phone: z.string().min(10, "Valid phone number is required"),
        appointmentDate: z.string().min(1, "Appointment date is required"),
        appointmentTime: z.string().min(1, "Appointment time is required"),
        serviceType: z.string().min(1, "Service type is required"),
        notes: z.string().optional(),
        smsConsent: z.boolean().default(false),
      })
    )
    .mutation(async ({ input }) => {
      const doc = await databases.createDocument(
        DATABASE_ID,
        COLLECTIONS.APPOINTMENTS,
        ID.unique(),
        {
          firstName: input.firstName,
          lastName: input.lastName,
          email: input.email,
          phone: input.phone,
          appointmentDate: input.appointmentDate,
          appointmentTime: input.appointmentTime,
          serviceType: input.serviceType,
          notes: input.notes || "",
          smsConsent: input.smsConsent,
          status: "pending",
          createdAt: new Date().toISOString(),
        }
      );
      return { success: true, id: doc.$id };
    }),

  list: publicQuery.query(async () => {
    const docs = await databases.listDocuments(
      DATABASE_ID,
      COLLECTIONS.APPOINTMENTS
    );
    return docs.documents;
  }),
});

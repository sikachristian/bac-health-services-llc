import { z } from "zod";
import { createRouter, publicQuery } from "./middleware";
import { databases, ID } from "./lib/appwrite-server";
import { DATABASE_ID, COLLECTIONS } from "./lib/appwrite-server";

export const patientRouter = createRouter({
  submit: publicQuery
    .input(
      z.object({
        firstName: z.string().min(1, "First name is required"),
        lastName: z.string().min(1, "Last name is required"),
        email: z.string().email("Valid email is required"),
        phone: z.string().min(10, "Valid phone number is required"),
        dateOfBirth: z.string().optional(),
        gender: z.string().optional(),
        insuranceProvider: z.string().optional(),
        insuranceId: z.string().optional(),
        reasonForVisit: z.string().min(1, "Reason for visit is required"),
        preferredDate: z.string().optional(),
        preferredTime: z.string().optional(),
        smsConsent: z.boolean().default(false),
        notes: z.string().optional(),
      })
    )
    .mutation(async ({ input }) => {
      const doc = await databases.createDocument(
        DATABASE_ID,
        COLLECTIONS.PATIENTS,
        ID.unique(),
        {
          firstName: input.firstName,
          lastName: input.lastName,
          email: input.email,
          phone: input.phone,
          dateOfBirth: input.dateOfBirth || "",
          gender: input.gender || "",
          insuranceProvider: input.insuranceProvider || "",
          insuranceId: input.insuranceId || "",
          reasonForVisit: input.reasonForVisit,
          preferredDate: input.preferredDate || "",
          preferredTime: input.preferredTime || "",
          smsConsent: input.smsConsent,
          notes: input.notes || "",
          status: "new",
          createdAt: new Date().toISOString(),
        }
      );
      return { success: true, id: doc.$id };
    }),

  list: publicQuery.query(async () => {
    const docs = await databases.listDocuments(
      DATABASE_ID,
      COLLECTIONS.PATIENTS
    );
    return docs.documents;
  }),
});

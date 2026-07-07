import { Client, Account, Databases, Storage, ID, Query } from "appwrite";

const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT || "https://sfo.cloud.appwrite.io/v1")
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT || "bac-health-services");

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export { ID, Query };

// Database constants
export const DATABASE_ID = "bac-health-db";
export const COLLECTIONS = {
  PATIENTS: "patients",
  APPOINTMENTS: "appointments",
  CONTACT_MESSAGES: "contact_messages",
  TESTIMONIALS: "testimonials",
  SERVICES: "services",
  INSURANCE: "insurance",
} as const;

export default client;

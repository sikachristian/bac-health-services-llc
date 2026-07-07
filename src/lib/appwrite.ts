import { Client, Account, Databases, Storage, ID, Query } from "appwrite";

// Appwrite Configuration
export const APPWRITE_CONFIG = {
  endpoint: "https://sfo.cloud.appwrite.io/v1",
  project: "bac-health-services",
  database: "bac-health-db",
  collections: {
    PATIENTS: "patients",
    APPOINTMENTS: "appointments",
    CONTACT_MESSAGES: "contact_messages",
  },
};

const client = new Client()
  .setEndpoint(APPWRITE_CONFIG.endpoint)
  .setProject(APPWRITE_CONFIG.project);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export { ID, Query };

export default client;

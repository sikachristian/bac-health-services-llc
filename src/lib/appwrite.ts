import { Client, Databases, ID } from "appwrite";

// Appwrite Configuration
export const APPWRITE_CONFIG = {
  endpoint: "https://sfo.cloud.appwrite.io/v1",
  project: "6a4d551f0033e33d4acc",
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

export const databases = new Databases(client);
export { ID };

export default client;

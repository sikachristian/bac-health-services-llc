import { Client, Account, Databases, Storage, ID, Query } from "appwrite";

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

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export { ID, Query };

/**
 * Ping the Appwrite backend to verify connectivity.
 * Call this on app startup to confirm the SDK is properly configured.
 */
export async function pingAppwrite() {
  try {
    const result = await client.ping();
    console.log("[Appwrite] Ping successful:", result);
    return { success: true, result };
  } catch (error) {
    console.error("[Appwrite] Ping failed:", error);
    return { success: false, error };
  }
}

export default client;

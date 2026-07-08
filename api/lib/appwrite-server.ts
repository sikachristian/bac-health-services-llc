import { Client, Databases, ID, Query } from "node-appwrite";

const client = new Client()
  .setEndpoint("https://sfo.cloud.appwrite.io/v1")
  .setProject("6a4d551f0033e33d4acc")
  .setKey("standard_30ed147ca2c394503234c02f5504cf15c7428ecbbcd1032f4366291b88138ea12de5012be4dc22381ec955932b51cd4370a7f1ae1e942ff562092ad8af1b9c6dbe070a5cead382a8a14a6ce4accf88f681da43c09b1098ed8c799e7f56795de5d8afda68b2fbe54720979ec6035314f119378e71fbce0afba8ccc4556c14b2d2");

export const databases = new Databases(client);
export { ID, Query };

// Database constants
export const DATABASE_ID = "bac-health-db";
export const COLLECTIONS = {
  PATIENTS: "patients",
  APPOINTMENTS: "appointments",
  CONTACT_MESSAGES: "contact_messages",
} as const;

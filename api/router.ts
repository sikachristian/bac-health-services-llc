import { authRouter } from "./auth-router";
import { patientRouter } from "./patient-router";
import { appointmentRouter } from "./appointment-router";
import { contactRouter } from "./contact-router";
import { createRouter, publicQuery } from "./middleware";

export const appRouter = createRouter({
  ping: publicQuery.query(() => ({ ok: true, ts: Date.now() })),
  auth: authRouter,
  patient: patientRouter,
  appointment: appointmentRouter,
  contact: contactRouter,
});

export type AppRouter = typeof appRouter;

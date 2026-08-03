import { createServerFn } from "@tanstack/react-start";

// Server Function for Contact Form
export const saveEnquiry = createServerFn({ method: "POST" })
  .validator((data: {
    name: string;
    email: string;
    phone: string;
    location: string;
    serviceType: string;
    details: string;
  }) => data)
  .handler(async ({ data }) => {
    // Dynamically import server-side helper only during server-side handler execution
    const { saveEnquiryToServer } = await import("./mongodb.server");
    return saveEnquiryToServer(data);
  });

// Server Function for Help Request Form
export const saveHelpRequest = createServerFn({ method: "POST" })
  .validator((data: {
    name: string;
    email: string;
    topic: string;
    message: string;
  }) => data)
  .handler(async ({ data }) => {
    // Dynamically import server-side helper only during server-side handler execution
    const { saveHelpRequestToServer } = await import("./mongodb.server");
    return saveHelpRequestToServer(data);
  });

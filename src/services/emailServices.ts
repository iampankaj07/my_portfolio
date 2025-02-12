import emailjs from "@emailjs/browser";

// Send email using EmailJS
export const sendEmail = async (formData: any) => {
  try {
    const result = await emailjs.send("service_e9f2cdq", "template_z3pdqlc", formData, "uOscjvdCu_HXc0jiDHg0B");
    console.log("Email sent successfully", result);
  } catch (error) {
    console.error("Error sending email: ", error);
  }
};

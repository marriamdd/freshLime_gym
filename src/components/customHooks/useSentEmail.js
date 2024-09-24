import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function useSentEmail() {
  const [errorMessages, setErrorMessages] = useState({
    emailError: "",
    nameError: "",
  });

  const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  const sendEmail = (emailData) => {
    if (emailData.name.length < 2) {
      setErrorMessages((prev) => ({
        ...prev,
        nameError: "Name must be at least 2 characters long.",
      }));
      return false;
    }

    if (!gmailPattern.test(emailData.email)) {
      setErrorMessages((prev) => ({
        ...prev,
        emailError: "Please enter a valid Gmail address.",
      }));
      return false;
    }

    const serviceId = "service_qy5dvr4";
    const templateId = "template_xamgtd9";
    const publicKey = "gn2bgFcKgS8wR3zCg";
    const templateParams = {
      from_name: emailData.name,
      from_email: emailData.email,
      to_name: "Mariam",
      message: emailData.message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        setErrorMessages({ emailError: "", nameError: "" });
      })
      .catch((error) => {
        console.error("Error sending email", error);
      });

    return true;
  };

  return {
    errorMessages,
    sendEmail,
  };
}

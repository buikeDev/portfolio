import { FormEvent, useState } from "react";

type SubmissionStatus = "idle" | "submitting" | "success" | "error";

export function useContactForm() {
  const [status, setStatus] = useState<SubmissionStatus>("idle");

  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("submitting");

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Form submission failed");

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return {
    status,
    submitForm,
    isSubmitting: status === "submitting",
  };
}

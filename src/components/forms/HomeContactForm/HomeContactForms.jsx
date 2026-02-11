import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import Button from "@/components/UI/Button/Button";
import styles from "./HomeContactForm.module.scss";
import { submitContactFormHome } from "@/api/contacthome.api";

const HomeContactForms = () => {
  const initialFormState = {
    full_name: "",
    phone_number: "",
    email: "",
    country: "",
    message: ""
  };

  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: submitContactFormHome,
    retry: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // Clear field error on change
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    setSuccessMessage("");

    const payload = { ...formData };

    mutate(payload, {
      onSuccess: (response) => {
        setSuccessMessage(
          response?.data?.success_message || "Form submitted successfully"
        );
        setFormData(initialFormState);
      },
      onError: (err) => {
        setErrors(err?.response?.data?.errors || {});
      }
    });
  };

  return (
    <section className={styles.contactForm}>
      <form onSubmit={handleSubmit}>
        <div className={styles.customFormInputs}>

          {/* Full Name */}
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Name"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
            />
            {errors.full_name && (
              <p className={`${styles.errorText} primary-description mt-2`}>
                {errors.full_name[0]}
              </p>
            )}
          </div>

          {/* Phone */}
          <div className={styles.inputContainer}>
            <input
              type="tel"
              placeholder="Phone Number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
            />
            {errors.phone_number && (
              <p className={`${styles.errorText} primary-description mt-2`}>
                {errors.phone_number[0]}
              </p>
            )}
          </div>

          {/* Email */}
          <div className={styles.inputContainer}>
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className={`${styles.errorText} primary-description mt-2`}>
                {errors.email[0]}
              </p>
            )}
          </div>

          {/* Country */}
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Country"
              name="country"
              value={formData.country}
              onChange={handleChange}
            />
            {errors.country && (
              <p className={`${styles.errorText} primary-description mt-2`}>
                {errors.country[0]}
              </p>
            )}
          </div>

          {/* Message */}
          <div className={styles.inputContainer}>
            <textarea
              placeholder="Message"
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && (
              <p className={`${styles.errorText} primary-description mt-2`}>
                {errors.message[0]}
              </p>
            )}
          </div>

          {/* Submit */}
          <Button
            type="submit"
            variant="primary"
            className="w-100"
            disabled={isPending}
          >
            {isPending ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </form>

      {/* Success message */}
      {isSuccess && successMessage && (
        <p className={`${styles.textSuccess} mt-3 text-center`}>
          {successMessage}
        </p>
      )}
    </section>
  );
};

export default HomeContactForms;

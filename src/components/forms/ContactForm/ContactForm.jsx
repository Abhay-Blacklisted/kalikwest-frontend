import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import Button from "@/components/UI/Button/Button";
import styles from "./ContactForm.module.scss";
import { submitContactForm } from "@/api/contact.api";
import { NavLink } from "react-router";

const Services = [
  "Branding",
  "Web Design",
  "Development",
  "UI/UX",
  "SEO",
  "Paid Ads",
  "Social Media",
  "PR & Print",
  "E-commerce",
  "GIPHY & Stickers",
  "Merchandising",
  "Creator Launchpad",
];

const ContactForm = () => {
  const initialFormState = {
    full_name: "",
    company_name: "",
    email: "",
    phone_number: "",
    city: "",
    country: "",
    message: "",
    how_we_help: [],
  };

  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const {
    mutate,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: submitContactForm,
    retry: 0, 
  });

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
    if (isSuccess) setSuccessMessage("");
  };

  // Services toggle
  const toggleServices = (service) => {
    setFormData((prev) => ({
      ...prev,
      how_we_help: prev.how_we_help.includes(service)
        ? prev.how_we_help.filter((s) => s !== service)
        : [...prev.how_we_help, service],
    }));
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    setSuccessMessage("");

    const payload = {
      ...formData,
      how_we_help: formData.how_we_help.join(", "),
    };

    mutate(payload, {
      onSuccess: (response) => {
        setSuccessMessage(
          response?.data?.success_message || "Form submitted successfully!"
        );
        setFormData(initialFormState);
      },
      onError: (err) => {
        setErrors(err.response?.data?.errors || {});
      },
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
              placeholder="Full Name"
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

          {/* Company */}
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Company Name"
              name="company_name"
              value={formData.company_name}
              onChange={handleChange}
            />
            {errors.company_name && (
              <p className={`${styles.errorText} primary-description mt-2`}>
                {errors.company_name[0]}
              </p>
            )}
          </div>

          {/* Email */}
          <div className={styles.inputContainer}>
            <input
              type="email"
              placeholder="Email"
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

          {/* Phone */}
          <div className={styles.inputContainer}>
            <input
              type="tel"
              placeholder="Phone No."
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

          {/* City */}
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Province"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
            {errors.city && (
              <p className={`${styles.errorText} primary-description mt-2`}>
                {errors.city[0]}
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
              name="message"
              rows="4"
              placeholder="Tell us briefly what you’re looking to build, improve, or scale"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Services */}
        <div className={styles.servicesContainer}>
          <h6 className="sub-heading mb-3">How can we help you?</h6>

          <div className="servicesButtonGrid d-flex flex-wrap gap-2">
            {Services.map((service) => (
              <button
                key={service}
                type="button"
                className={`${styles.serviceButton} ${
                  formData.how_we_help.includes(service) ? styles.active : ""
                }`}
                onClick={() => toggleServices(service)}
              >
                {service}
              </button>
            ))}
          </div>

          {errors.how_we_help && (
            <p className={`${styles.errorText} primary-description mt-2`}>
              {errors.how_we_help[0]}
            </p>
          )}
        </div>

        {/* Terms */}
        <div className={styles.tcContainer}>
          <p className="primary-description mb-0">
            By submitting this form, you agree to our{" "}
            <NavLink to="/terms-&-conditions">Terms & Conditions</NavLink>
          </p>
        </div>

        {/* Submit */}
        <Button
          type="submit"
          variant="primary"
          className="w-100"
          disabled={isPending || formData.how_we_help.length === 0}
        >
          {isPending ? "Submitting..." : "Submit"}
        </Button>
      </form>

      {/* Success */}
      {isSuccess && successMessage && (
        <p className={`${styles.textSuccess} mt-3 text-center`}>
          {successMessage}
        </p>
      )}
    </section>
  );
};

export default ContactForm;

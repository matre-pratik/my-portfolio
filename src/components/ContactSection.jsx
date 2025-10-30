import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { cn } from "../lib/utils";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    const sendData = new FormData();
    sendData.append("access_key", "46a241f0-4177-4f29-b8a4-6a02361c5bc2");
    sendData.append("name", formData.name);
    sendData.append("email", formData.email);
    sendData.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: sendData,
      });
      const data = await response.json();
      if (data.success) {
        setResult("Message sent successfully ");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResult("Something went wrong ");
      }
    } catch {
      setResult("Network error ");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-foreground text-center">
          Get in <span className="text-primary">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left - Contact Info */}
          <div className="flex flex-col justify-center space-y-6 text-foreground">
            <div className="flex items-center space-x-4">
              <a
                href="mailto:matrepratik8728@gmail.com"
                className="flex items-center space-x-3 text-lg hover:text-primary transition"
              >
                <Mail className="text-primary w-6 h-6" />
                <span>matrepratik8728@gmail.com</span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="tel:+918855962708"
                className="flex items-center space-x-3 text-lg hover:text-primary transition"
              >
                <Phone className="text-primary w-6 h-6" />
                <span>+91 8855962708</span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-primary w-6 h-6" />
              <p className="text-lg">Navi Mumbai, India</p>
            </div>
          </div>

          {/* Right - Contact Form */}
          <form
            onSubmit={onSubmit}
            className="p-8 rounded-2xl border-2 border-primary shadow-lg space-y-6 text-primary-foreground"
          >
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={onChange}
                placeholder="Enter your name"
                className="w-full p-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
              />
              {errors.name && (
                <p className="text-start text-red-500 text-sm mt-1">
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={onChange}
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
              />
              {errors.email && (
                <p className="text-start text-red-500 text-sm mt-1">
                  {errors.email}
                </p>
              )}
            </div>
            <div>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={onChange}
                placeholder="Write your message..."
                className="w-full p-3 rounded-lg border border-border resize-none focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
              />
              {errors.message && (
                <p className="text-start text-red-500 text-sm mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className={cn(
                "cosmic-button",
                "w-full p-3 disabled:opacity-50 disabled:cursor-not-allowed"
              )}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            <p
              className={`text-center text-sm mt-2 ${
                result.includes("success") ? "text-green-500" : "text-red-500"
              }`}
            >
              {result}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

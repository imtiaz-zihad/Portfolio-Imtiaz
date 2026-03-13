"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "mdimtiazzihad@gmail.com",
    href: "mailto:mdimtiazzihad@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+880 1958403338",
    href: "tel:+8801958403338",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: "https://wa.me/8801958403338",
  },
];

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Toast state
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<"success" | "error">("success");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed");

      setToastType("success");
      setToastMessage("Message sent! I'll get back to you soon.");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setToastType("error");
      setToastMessage("Failed to send message.");
    }

    setTimeout(() => setToastMessage(null), 5000);

    setLoading(false);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
            Get In <span className="gradient-text">Touch</span>
          </h2>

          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-12" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-muted-foreground mb-6">
              Feel free to reach out if you want to collaborate, have a
              question, or just want to say hi!
            </p>

            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 rounded-xl flex items-center gap-4 hover:glow-border transition-shadow duration-300 block"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon size={18} className="text-primary" />
                </div>

                <div>
                  <p className="text-xs text-muted-foreground">{label}</p>
                  <p className="text-sm text-foreground">{value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="glass-card p-7 rounded-2xl space-y-5 border border-border/40 backdrop-blur-md"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-2">
              <h3 className="text-lg font-semibold text-foreground">
                Send Me a Message
              </h3>
              <p className="text-xs text-muted-foreground">
                I&apos;ll respond as soon as possible.
              </p>
            </div>

            {/* Name */}
            <div className="space-y-1">
              <label className="text-xs text-muted-foreground">Name</label>
              <Input
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="bg-muted/40 border border-cyan-400/40 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 rounded-xl transition-all duration-300"
              />
            </div>

            {/* Email */}
            <div className="space-y-1">
              <label className="text-xs text-muted-foreground">Email</label>
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="bg-muted/40 border border-cyan-400/40 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 rounded-xl transition-all duration-300"
              />
            </div>

            {/* Message */}
            <div className="space-y-1">
              <label className="text-xs text-muted-foreground">Message</label>
              <Textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="bg-muted/40 border border-cyan-400/40 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 rounded-xl resize-none transition-all duration-300"
              />
            </div>

            {/* Button */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 text-sm font-medium rounded-lg bg-primary hover:bg-primary/90 transition-all glow-border"
            >
              {loading ? (
                "Sending..."
              ) : (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </Button>
          </motion.form>
        </div>
      </div>

      {/* Toast */}
      {toastMessage && (
        <div
          className={`fixed bottom-4 right-4 z-50 px-4 py-2 rounded-md text-white shadow-lg ${
            toastType === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {toastMessage}
        </div>
      )}
    </section>
  );
};

export default Contact;

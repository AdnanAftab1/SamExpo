import ContactForm from "@/portions/clientForm";

export const metadata = {
  title: "Contact | Al-Ahad Exports",
  description: "Get in touch with Al-Ahad Exports — questions, inquiries, or custom leather project requests.",
};

export default function ContactPage() {
  return (
    <main className="w-screen bg-[#f7f7eb] pt-[88px]">
      <ContactForm />
    </main>
  );
}
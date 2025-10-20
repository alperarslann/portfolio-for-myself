import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

export const ContactSection = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(t('contact.toast.errorDesc'));
      }

      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        { publicKey }
      );

      if (result.status === 200) {
        toast({
          title: t('contact.toast.success'),
          description: t('contact.toast.successDesc'),
        });
        formRef.current.reset();
      } else {
        throw new Error(t('contact.toast.errorDesc'));
      }
    } catch (err) {
      toast({
        title: t('contact.toast.error'),
        description: err?.message || t('contact.toast.errorDesc'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t('contact.title')} <span className="text-primary">{t('contact.titleHighlight')}</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t('contact.description')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {t('contact.info')}
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">{t('contact.email')}</h4>
                  <a
                    href="mailto:alper.arslan0505@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    alper.arslan0505@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">{t('contact.phone')}</h4>
                  <a
                    href="tel:+9005438938930"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +90 (543) 893-8930
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">{t('contact.location')}</h4>
                  <p className="text-muted-foreground">
                    {t('contact.locationValue')}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">{t('contact.followMe')}</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/alperarsln/" target="_blank" rel="noopener noreferrer">
                  <Linkedin />
                </a>
                <a href="https://www.instagram.com/arslannnalper/" target="_blank" rel="noopener noreferrer">
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">{t('contact.form.title')}</h3>

            <form className="space-y-6" ref={formRef} onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder={t('contact.form.namePlaceholder')}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder={t('contact.form.emailPlaceholder')}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder={t('contact.form.messagePlaceholder')}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

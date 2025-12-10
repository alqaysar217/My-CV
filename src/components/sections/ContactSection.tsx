"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { siteData } from "@/lib/data";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionTitle from "../SectionTitle";
import GlowCard from "../GlowCard";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Youtube, Instagram, MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import FloatingShapes from "../3d/FloatingShapes";


const socialIcons = {
  github: <Github />,
  linkedin: <Linkedin />,
  youtube: <Youtube />,
  instagram: <Instagram />,
};
type SocialIconKeys = keyof typeof socialIcons;


const ContactSection = () => {
  const { language, direction } = useLanguage();
  const data = siteData[language].contact;
  const { toast } = useToast();

  const formSchema = z.object({
    name: z.string().min(2, data.form.validation.name),
    email: z.string().email(data.form.validation.email),
    message: z.string().min(10, data.form.validation.message),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values); // In a real app, this would send to a backend/Firestore
    toast({
      title: data.form.toast.title,
      description: data.form.toast.description,
    });
    form.reset();
  }

  const handleWhatsAppClick = () => {
    const phone = siteData.en.contact.info.phone.replace(/[\s+]/g, "");
    const message = encodeURIComponent("Hello Mahmoud, I'm reaching out from your portfolio website.");
    const whatsappUrl = `https://wa.me/${phone}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="relative container mx-auto py-20 md:py-32 px-4 overflow-hidden">
      <FloatingShapes />
      <SectionTitle>{data.title}</SectionTitle>
      <div className="grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2 space-y-6" dir={direction}>
            <h3 className="text-2xl font-bold">{data.info.title}</h3>
            <p className="text-muted-foreground">{data.info.description}</p>
            <div className="space-y-4">
                <a href={`mailto:${siteData.en.contact.info.email}`} className="flex items-center gap-3 group">
                    <Mail className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">{siteData.en.contact.info.email}</span>
                </a>
                <a href={`tel:${siteData.en.contact.info.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 group">
                    <Phone className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">{data.info.phone}</span>
                </a>
                <div className="flex items-center gap-3 group">
                    <MapPin className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">{data.info.location}</span>
                </div>
            </div>
            <div className="flex gap-2 pt-4">
                {siteData[language].socialLinks.map((social) => (
                    <Button
                    key={social.name}
                    variant="ghost"
                    size="icon"
                    asChild
                    className="text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors duration-300"
                    >
                    <Link
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                    >
                        {socialIcons[social.icon as SocialIconKeys]}
                    </Link>
                    </Button>
                ))}
            </div>
        </div>
        <div className="md:col-span-3">
          <GlowCard>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" dir={direction}>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground">{data.form.name}</FormLabel>
                      <FormControl>
                        <Input placeholder={data.form.name} {...field} className="bg-card" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground">{data.form.email}</FormLabel>
                      <FormControl>
                        <Input placeholder={data.form.email} {...field} className="bg-card" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground">{data.form.message}</FormLabel>
                      <FormControl>
                        <Textarea placeholder={data.form.message} {...field} className="bg-card min-h-[120px]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button type="submit" size="lg" className="flex-1 shadow-neon-cyan">{data.form.submit}</Button>
                    <Button 
                        type="button" 
                        size="lg" 
                        variant="outline" 
                        className="flex-1 border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:text-purple-300 hover:border-purple-500"
                        onClick={handleWhatsAppClick}
                    >
                        <MessageCircle className="me-2 h-5 w-5" />
                        {data.form.whatsapp}
                    </Button>
                </div>
              </form>
            </Form>
          </GlowCard>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

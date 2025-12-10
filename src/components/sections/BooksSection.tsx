"use client";

import Image from "next/image";
import { siteData } from "@/lib/data";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionTitle from "../SectionTitle";
import GlowCard from "../GlowCard";
import { Button } from "../ui/button";
import { Star, MessageCircle } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import FloatingShapes from "../3d/FloatingShapes";

const BookCard = ({ book }: { book: (typeof siteData.en.books.list)[0] }) => {
  const bookImage = PlaceHolderImages.find((img) => img.id === book.id);
  const { language, direction } = useLanguage();

  const handleOrder = () => {
    const message = siteData[language].books.whatsappMessage.replace(
      "[Book Title]",
      book.title
    );
    const whatsappUrl = `https://wa.me/${siteData.en.contact.info.phone.replace(/\s/g, "")}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <GlowCard className="h-full flex flex-col">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="mx-auto md:mx-0">
        {bookImage && (
          <Image
            src={bookImage.imageUrl}
            alt={book.title}
            width={150}
            height={225}
            className="rounded-lg shadow-lg shadow-black/30 object-cover border-2 border-primary/20"
            data-ai-hint={bookImage.imageHint}
          />
        )}
        </div>
        <div className="flex-grow flex flex-col text-center md:text-left" dir={direction}>
          <h3 className="text-xl font-bold font-headline">{book.title}</h3>
          <p className="text-sm text-muted-foreground mt-1">
            {siteData[language].books.authorLabel}: {book.author}
          </p>
          <div className="flex justify-center md:justify-start items-center gap-2 my-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(book.rating) ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              ({book.rating.toFixed(1)})
            </span>
          </div>
          <p className="text-sm text-muted-foreground flex-grow mt-2">
            {book.description}
          </p>
          <p className="text-xs text-muted-foreground mt-4">
            {book.pages} {siteData[language].books.pagesLabel}
          </p>
        </div>
      </div>
      <Button onClick={handleOrder} className="w-full mt-6 shadow-neon-cyan">
        <MessageCircle className="me-2 h-5 w-5" />
        {siteData[language].books.cta}
      </Button>
    </GlowCard>
  );
};

const BooksSection = () => {
  const { language } = useLanguage();
  const data = siteData[language].books;

  return (
    <section id="books" className="relative container mx-auto py-20 md:py-32 px-4 overflow-hidden">
      <FloatingShapes />
      <SectionTitle>{data.title}</SectionTitle>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {data.list.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
};

export default BooksSection;

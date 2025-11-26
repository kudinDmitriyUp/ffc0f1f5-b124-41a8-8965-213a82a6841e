"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardCorners from '@/components/sections/hero/HeroBillboardCorners';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Wine, Utensils, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
      contentWidth="large"
      sizing="small"
      background="grid"
      cardStyle="layered-gradient"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="DuckBar"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764141743327-p7wfhsty.jpg"
          logoAlt="DuckBar Logo"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Menu", id: "menu" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Visit Us", href: "contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCorners
          title="Welcome to DuckBar"
          description="Authentic Ukrainian hospitality and traditional flavors in the heart of the city. Experience genuine Ukrainian culture through food, drinks, and unforgettable moments with friends."
          tag="Local Ukrainian Bar"
          tagIcon={Wine}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764141743949-10vloa3t.jpg",
              imageAlt: "Cozy bar interior with wooden decor"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764141744804-0ldfvsqr.jpg",
              imageAlt: "Selection of vodka and spirits"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764141745474-8kz2oxc5.jpg",
              imageAlt: "Traditional Ukrainian dishes"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764141748520-18vhov64.jpg",
              imageAlt: "Guests enjoying time together"
            }
          ]}
          buttons={[
            { text: "View Menu", href: "menu" },
            { text: "Book a Table", href: "contact" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Our Story"
          description="DuckBar is a celebration of Ukrainian traditions and contemporary hospitality. We bring authentic recipes passed down through generations, combined with a modern bar atmosphere where locals and visitors alike gather to share stories, laughter, and the best of Ukrainian culture. From our carefully selected spirits to our homemade dishes, every detail reflects our commitment to preserving and sharing the warmth of Ukraine."
        />
      </div>

      <div id="menu" data-section="menu">
        <FeatureCardOne
          title="Our Menu Highlights"
          description="Discover the flavors of Ukraine with our signature dishes and traditional beverages"
          tag="Food & Drinks"
          tagIcon={Utensils}
          features={[
            {
              title: "Appetizers & Starters",
              description: "Start your journey with traditional Ukrainian favorites including cheese platters, pickled vegetables, and artisanal bread selections.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764141749243-dy8apydf.jpg"
            },
            {
              title: "Main Courses",
              description: "Savor authentic dishes like pierogi, varenyky, and hearty borsch that have warmed Ukrainian tables for centuries.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764141749769-rcxgoyst.jpg"
            },
            {
              title: "Spirits & Beverages",
              description: "Premium vodka selection, traditional mead, and modern cocktails crafted to complement every meal and moment.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764141750968-2ph4dfuw.jpg"
            },
            {
              title: "Desserts & Sweets",
              description: "End on a sweet note with traditional pampushky, honey cakes, and modern desserts that blend tradition with innovation.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764141751714-vtfpgggx.jpg"
            }
          ]}
          gridVariant="two-columns-alternating-heights"
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Guests Say"
          description="Real stories from the people who make DuckBar their favorite gathering place"
          tag="Guest Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Maria Ivanova",
              role: "Regular Guest",
              company: "Local Community",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764141754362-vd2u9mq7.jpg"
            },
            {
              id: "2",
              name: "Andriy Kovalenko",
              role: "Food Enthusiast",
              company: "Travel Blog",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764141757499-ms1o6wb4.jpg"
            },
            {
              id: "3",
              name: "Olena Shevchenko",
              role: "Event Organizer",
              company: "City Events",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764141758289-dhedn13h.jpg"
            },
            {
              id: "4",
              name: "Viktor Bohdan",
              role: "Food Critic",
              company: "Local Gazette",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764141759018-l0ltv21y.jpg"
            },
            {
              id: "5",
              name: "Natalia Kovalyuk",
              role: "Tourism Guide",
              company: "City Tours",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764141759769-g8d4141g.jpg"
            },
            {
              id: "6",
              name: "Serhiy Petrenko",
              role: "Neighborhood Resident",
              company: "Local Community",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764141762781-may3klyl.jpg"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Get in Touch"
          description="Have questions or want to book a reservation? Contact us today. We look forward to welcoming you to DuckBar."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: false }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your visit or any special requests...",
            rows: 5,
            required: true
          }}
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764141743327-p7wfhsty.jpg"
          copyrightText="© 2025 DuckBar. Celebrating Ukrainian Heritage."
          columns={[
            {
              title: "Hours",
              items: [
                { label: "Monday - Thursday: 5 PM - 11 PM", href: "#" },
                { label: "Friday - Saturday: 5 PM - 1 AM", href: "#" },
                { label: "Sunday: 6 PM - 10 PM", href: "#" }
              ]
            },
            {
              title: "Location",
              items: [
                { label: "123 Ukrainian Avenue", href: "#" },
                { label: "City Center District", href: "#" },
                { label: "Phone: (555) 123-4567", href: "#" }
              ]
            },
            {
              title: "Connect",
              items: [
                { label: "Facebook", href: "#" },
                { label: "Instagram", href: "#" },
                { label: "Email", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
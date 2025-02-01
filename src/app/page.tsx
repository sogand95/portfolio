"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Image from "next/image";
import Link from "next/link";
import {
  FacebookIcon,
  X,
  Instagram,
  Linkedin,
  Github,
  Menu,
  Dribbble,
} from "lucide-react";
import { useState } from "react";

const socialIcons = [
  { Icon: FacebookIcon, href: "#" },
  { Icon: X, href: "#" },
  { Icon: Instagram, href: "#" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/sogand-aghahoseini" },
  { Icon: Github, href: "https://github.com/sogand95" },
  { Icon: Dribbble, href: "https://dribbble.com/Sogand95" },
];

const projects = [
  {
    id: 1,
    lightImage: "/images/MyProjectsImage%201.svg",
    darkImage: "/images/MyProjectsImage(dark)%201.svg",
    title: "E-commerce Website",
  },
  {
    id: 2,
    lightImage: "/images/MyProjectsImage%202.svg",
    darkImage: "/images/MyProjectsImage(dark)%202.svg",
    title: "Mobile App UI",
  },
  {
    id: 3,
    lightImage: "/images/MyProjectsImage%203.svg",
    darkImage: "/images/MyProjectsImage(dark)%203.svg",
    title: "Brand Identity Design",
  },
];

const testimonials = [
  {
    id: 1,
    // cspell:ignore Mojtaba
    name: "Mojtaba",
    role: "CEO",
    image: "/images/TestimonialsImage.svg",
    content:
      "It was a pleasure to work with Sogand. Her design skills and project estimation were highly professional, exceeding our expectations and leaving a lasting impression on our team.",
  },
];

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const handleContactClick = () => {
    const subject = "Contact from Portfolio Website";
    const body = `Email from: ${userEmail}%0D%0A%0D%0A`;
    window.open(
      `mailto:sogandpersonal@gmail.com?subject=${subject}&body=${body}`
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="container mx-auto py-6">
        <nav className="flex items-start justify-between">
          <div className="flex flex-col items-start gap-4">
            <Link href="#" className="hidden md:block">
              <Image
                src="/images/NavbarLogoName.png"
                alt="Sogand Graphics Logo"
                width={120}
                height={27}
                className="dark:hidden"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LogoName-qP0dxI3A2AvuzbArlSmdrFJebktIX8.png"
                alt="Sogand Graphics Logo"
                width={120}
                height={27}
                className="hidden dark:block"
              />
            </Link>
            <div className="hidden md:flex items-center space-x-4">
              {socialIcons.map(({ Icon, href }, index) => (
                <Link
                  key={index}
                  href={href}
                  className="text-[#14C3D3] hover:text-[#14C3D3]/80"
                >
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="hover:text-primary">
              Home
            </Link>
            <Link href="#about" className="hover:text-primary">
              About Me
            </Link>
            <Link href="#services" className="hover:text-primary">
              Services
            </Link>
            <Link href="#projects" className="hover:text-primary">
              Projects
            </Link>
            <Link href="#testimonials" className="hover:text-primary">
              Testimonials
            </Link>
            <Link href="#contact" className="hover:text-primary">
              Contact
            </Link>
            <ThemeToggle />
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </nav>
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <div className="flex flex-col items-start gap-4 mb-6">
              <Link href="#">
                <Image
                  src="/images/NavbarLogoName.png"
                  // cspell:ignore Sogand
                  alt="Sogand Graphics Logo"
                  width={120}
                  height={27}
                  className="dark:hidden"
                />
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LogoName-qP0dxI3A2AvuzbArlSmdrFJebktIX8.png"
                  alt="Sogand Graphics Logo"
                  width={120}
                  height={27}
                  className="hidden dark:block"
                />
              </Link>
              <div className="flex space-x-4">
                {socialIcons.map(({ Icon, href }, index) => (
                  <Link
                    key={index}
                    href={href}
                    className="text-[#14C3D3] hover:text-[#14C3D3]/80"
                  >
                    <Icon size={20} />
                  </Link>
                ))}
              </div>
            </div>
            <Link href="#home" className="block hover:text-primary">
              Home
            </Link>
            <Link href="#about" className="block hover:text-primary">
              About Me
            </Link>
            <Link href="#services" className="block hover:text-primary">
              Services
            </Link>
            <Link href="#projects" className="block hover:text-primary">
              Projects
            </Link>
            <Link href="#testimonials" className="block hover:text-primary">
              Testimonials
            </Link>
            <Link href="#contact" className="block hover:text-primary">
              Contact
            </Link>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="container mx-auto px-6 py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
          {/* Text and buttons section - Left side */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="relative">
              <div className="z-10 relative flex flex-col items-center lg:items-start">
                <p className="text-lg mb-2">Hi, I'm</p>
                <h1 className="font-bold mb-4 leading-none">
                  <span className="text-[#14C3D3] dark:text-[#2CD3E1] text-4xl block mb-2">
                    Sogand
                  </span>
                  <span className="text-[#000000] dark:text-primary text-5xl md:text-6xl block -ml-1">
                    UI & UX
                  </span>
                  <span className="text-[#000000] dark:text-foreground text-5xl md:text-6xl block mb-4">
                    Designer
                  </span>
                </h1>
                <p className="text-lg mb-8 text-muted-foreground max-w-md">
                  Bringing your vision to life with stunning and innovative
                  designs
                </p>
                <Button
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() =>
                    window.open("https://github.com/sogand95", "_blank")
                  }
                >
                  Hire Me
                </Button>
              </div>
            </div>
          </div>

          {/* Image on the right */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-10 lg:mb-0">
            <div className="relative w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px]">
              <div className="absolute top-[-20px] right-[-20px] w-full h-full bg-[#FFF5E9] dark:bg-accent/20 rounded-full blur-3xl opacity-50"></div>
              <Image
                src="/images/HomeImage (1).png"
                alt="Workspace Illustration"
                width={400}
                height={400}
                className="relative z-20 w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto py-20">
        <div className="bg-accent/5 rounded-lg p-8">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
            {/* Image Section - Left */}
            <div className="w-full lg:w-1/2 order-1 lg:order-1">
              <div className="relative w-full h-auto">
                <Image
                  src="/images/AboutMeImage.png"
                  alt="About illustration"
                  width={500}
                  height={500}
                  className="rounded-lg object-contain"
                />
              </div>
            </div>

            {/* Text Section - Right */}
            <div className="w-full lg:w-1/2 space-y-8 order-2 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
              <p className="text-lg">
                My passion lies in creating seamless interactions that elevate
                digital products to new levels of usability and aesthetics.
              </p>
              <div className="space-y-6">
                {[
                  { title: "UI", value: 90 },
                  { title: "Website Design", value: 85 },
                  { title: "App Design", value: 80 },
                  { title: "Graphic Design", value: 95 },
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{item.title}</span>
                      <span className="text-sm font-medium">{item.value}%</span>
                    </div>
                    <Progress value={item.value} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Services
        </h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          {/* cspell:ignore transformative */}I offer innovative and
          transformative solutions that fuse functionality and aesthetics to
          bring impactful and visually captivating designs to life.
        </p>

        <div className="flex flex-col items-center lg:flex-row lg:justify-center gap-12">
          {/* Left Services */}
          <div className="flex flex-col gap-8 w-full lg:w-1/3">
            <div className="p-8 rounded-lg bg-accent/5 backdrop-blur">
              <h3 className="text-xl md:text-2xl font-bold mb-4">UI/UX</h3>
              <p>
                Creating seamless and captivating digital experiences through
                user-centered design.
              </p>
            </div>
            <div className="p-8 rounded-lg bg-accent/5 backdrop-blur">
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                Web Development
              </h3>
              <p>
                Building dynamic and responsive web applications that deliver
                exceptional user experiences.
              </p>
            </div>
          </div>

          {/* Image in Center */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="relative aspect-square w-full max-w-sm">
              <Image
                src="/images/ServicesImage.png"
                alt="Services Image"
                width={600}
                height={400}
              />
            </div>
          </div>

          {/* Right Services */}
          <div className="flex flex-col gap-8 w-full lg:w-1/3">
            <div className="p-8 rounded-lg bg-accent/5 backdrop-blur">
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                Website Design
              </h3>
              <p>
                Building visually stunning and user-friendly websites that
                captivate and engage visitors.
              </p>
            </div>
            <div className="p-8 rounded-lg bg-accent/5 backdrop-blur">
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                Graphic Design
              </h3>
              <p>
                Crafting innovative and impactful designs that bring your vision
                to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}

      <section id="projects" className="container mx-auto py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My Projects
        </h2>
        <p className="text-center mb-8"></p>
        <p className="text-center mb-8">
          My design projects blend creativity and expertise to deliver visually
          stunning solutions that resonate with audiences.
        </p>

        {/* Projects Section Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 max-w-[1200px] mx-auto px-4">
          {[
            "Web Development",
            "Web Design",
            "App Design",
            "Graphic Design",
          ].map((text) => (
            <Button
              key={text}
              variant="ghost"
              className="!bg-[#66D3E9] !text-[#000000] hover:!bg-[#FF007E] dark:!bg-[#2DD3E1] dark:!text-[#FFFFFF] dark:hover:!bg-[#F266AB] rounded-[4px] flex-1 min-w-[200px] max-w-[calc(33.333%-1rem)]"
            >
              {text}
            </Button>
          ))}
        </div>

        {/* Project Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="relative group">
              <Image
                src={project.lightImage}
                alt={project.title}
                width={800}
                height={1000}
                quality={100}
                className="rounded-xl w-full dark:hidden object-cover"
                priority
              />
              <Image
                src={project.darkImage}
                alt={project.title}
                width={800}
                height={1000}
                quality={100}
                className="rounded-xl w-full hidden dark:block object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
                <Button
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-[4px]"
                  onClick={() =>
                    window.open("https://dribbble.com/Sogand95", "_blank")
                  }
                >
                  View Project
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="container mx-auto py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Testimonials
        </h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          Clients rave about my graphic design expertise, appreciating my
          ability to consistently deliver exceptional results that elevate their
          brands and captivate their target audience.
        </p>
        <div className="flex justify-center">
          <div className="bg-[#FFE4B5] p-8 rounded-lg relative max-w-xl w-full text-[#000000]">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
              <Image
                src={testimonials[0].image}
                alt={testimonials[0].name}
                width={100}
                height={100}
                className="rounded-full border-4 border-background"
              />
            </div>
            <div className="text-center pt-12">
              <h4 className="font-bold text-xl mb-2">{testimonials[0].name}</h4>
              <p className="text-sm mb-4">{testimonials[0].role}</p>
              <p>{testimonials[0].content}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Lets Design Together
        </h2>
        <p className="text-center mb-12">
          Ready to elevate your brand with captivating design? Let's collaborate
          and create something extraordinary together.
        </p>
        <div className="max-w-md mx-auto flex flex-col md:flex-row gap-4">
          <Input
            placeholder="Enter Your Email"
            className="bg-accent/5 flex-grow"
          />
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground whitespace-nowrap">
            Contact Me
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-background py-12">
        <div className="container mx-auto">
          <div className="flex justify-center mb-8">
            <Image
              src="/images/FooterLogoNameLight.png"
              alt="Footer Logo"
              width={60}
              height={60}
              className="dark:hidden"
            />
            <Image
              src="/images/FooterLogoNameDark.png"
              alt="Footer Logo"
              width={60}
              height={60}
              className="hidden dark:block"
            />
          </div>
          <nav className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
            <Link href="#home">Home</Link>
            <Link href="#about">About Me</Link>
            <Link href="#services">Services</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#testimonials">Testimonials</Link>
            <Link href="#contact">Contact</Link>
          </nav>
          <div className="flex justify-center gap-6 mb-8">
            {socialIcons.map(({ Icon, href }, index) => (
              <Link
                key={index}
                href={href}
                className="text-primary hover:text-primary/80"
              >
                <Icon size={24} />
              </Link>
            ))}
          </div>
          <p className="text-center mt-8 text-sm">
            © 2024 SogandGraphics All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

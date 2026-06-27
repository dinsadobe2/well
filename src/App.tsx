/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Repeat, 
  Briefcase, 
  Salad, 
  Sparkles, 
  Map, 
  Dumbbell, 
  Heart, 
  Calendar, 
  UserCheck, 
  Flame, 
  ShieldCheck, 
  Smile,
  ArrowRight, 
  Check, 
  CheckCircle2, 
  Phone, 
  Mail, 
  ChevronDown, 
  Award,
  Clock,
  Menu,
  X,
  Instagram
} from "lucide-react";

import { BRAND_CONTACTS, PILLARS, FOR_YOU_PROFILES, DIFFERENCES, BENEFITS, PLANS, FAQS } from "./data";
import { Plan } from "./types";
import trainerImg from "./assets/images/trainer_priya_1782100339535.jpg";

// Explicit icon rendering mapper helper
function renderIcon(iconName: string, className?: string) {
  switch (iconName) {
    case "Repeat": return <Repeat className={className} />;
    case "Briefcase": return <Briefcase className={className} />;
    case "Salad": return <Salad className={className} />;
    case "Sparkles": return <Sparkles className={className} />;
    case "Map": return <Map className={className} />;
    case "Dumbbell": return <Dumbbell className={className} />;
    case "Heart": return <Heart className={className} />;
    case "Calendar": return <Calendar className={className} />;
    case "UserCheck": return <UserCheck className={className} />;
    case "Flame": return <Flame className={className} />;
    case "ShieldCheck": return <ShieldCheck className={className} />;
    case "Smile": return <Smile className={className} />;
    default: return <Sparkles className={className} />;
  }
}

export default function App() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("all-plans");

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="site-root" className="min-h-screen bg-cream text-charcoal font-sans selection:bg-clay-200 selection:text-clay-950 overflow-x-hidden">
      {/* HEADER & NAVIGATION */}
      <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-sand/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-clay-800 font-sans">
                Priya <span className="text-charcoal font-light">Fitness</span>
              </span>
              {/* <span className="text-[10px] tracking-wider text-sage font-medium uppercase">
                Certified Coaching
              </span> */}
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("about")}
              className="text-xs font-semibold tracking-wider uppercase text-charcoal/70 hover:text-clay-600 transition-colors cursor-pointer"
            >
              About Priya
            </button>
            <button 
              onClick={() => scrollToSection("whychose")}
              className="text-xs font-semibold tracking-wider uppercase text-charcoal/70 hover:text-clay-600 transition-colors cursor-pointer"
            >
              Philosophy
            </button>
            <button 
              onClick={() => scrollToSection("benefits")}
              className="text-xs font-semibold tracking-wider uppercase text-charcoal/70 hover:text-clay-600 transition-colors cursor-pointer"
            >
              Benefits
            </button>
            <button 
              onClick={() => scrollToSection("pricing")}
              className="text-xs font-semibold tracking-wider uppercase text-charcoal/70 hover:text-clay-600 transition-colors cursor-pointer"
            >
              Coaching Plans
            </button>
            <button 
              onClick={() => scrollToSection("faq")}
              className="text-xs font-semibold tracking-wider uppercase text-charcoal/70 hover:text-clay-600 transition-colors cursor-pointer"
            >
              FAQs
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a 
              href={BRAND_CONTACTS.consultationUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-clay-700 text-cream font-semibold text-xs tracking-wider uppercase rounded-full hover:bg-clay-800 transition-colors shadow-sm shadow-clay-600/10 cursor-pointer"
            >
              Book Consult
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden p-2 text-charcoal hover:text-clay-700 transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile slide-out drawer state */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden border-b border-sand bg-cream absolute top-20 left-0 w-full overflow-hidden shadow-lg"
            >
              <div className="px-5 py-6 flex flex-col gap-5 bg-cream">
                <button 
                  onClick={() => scrollToSection("about")}
                  className="text-left text-sm font-semibold text-charcoal/85 hover:text-clay-700 py-1"
                >
                  About Priya
                </button>
                <button 
                  onClick={() => scrollToSection("whychose")}
                  className="text-left text-sm font-semibold text-charcoal/85 hover:text-clay-700 py-1"
                >
                  Philosophy
                </button>
                <button 
                  onClick={() => scrollToSection("benefits")}
                  className="text-left text-sm font-semibold text-charcoal/85 hover:text-clay-700 py-1"
                >
                  Benefits
                </button>
                <button 
                  onClick={() => scrollToSection("pricing")}
                  className="text-left text-sm font-semibold text-charcoal/85 hover:text-clay-700 py-1"
                >
                  Coaching Plans
                </button>
                <button 
                  onClick={() => scrollToSection("faq")}
                  className="text-left text-sm font-semibold text-charcoal/85 hover:text-clay-700 py-1"
                >
                  FAQs
                </button>

                <div className="h-[1px] bg-sand/60 w-full my-1"></div>

                <div className="flex flex-col gap-3">
                  <a 
                    href={BRAND_CONTACTS.consultationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center px-4 py-3 bg-cream border border-clay-700 text-clay-700 text-xs font-semibold tracking-wider uppercase rounded-full hover:bg-clay-50/50 transition-all"
                  >
                    Free Consultation Form
                  </a>
                  <a 
                    href={BRAND_CONTACTS.transformationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center px-4 py-3 bg-clay-700 text-cream text-xs font-semibold tracking-wider uppercase rounded-full hover:bg-clay-800 transition-all shadow-sm"
                  >
                    Begin Your Transformation
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION */}
      <section id="hero" className="relative pt-10 pb-16 md:py-24 overflow-hidden border-b border-sand/30">
        {/* Subtle decorative mesh background */}
        <div className="absolute top-0 right-[-10%] w-[50%] h-[600px] bg-clay-100/35 rounded-full filter blur-[100px] pointer-events-none z-0" />
        <div className="absolute bottom-12 left-[-10%] w-[40%] h-[400px] bg-sand/30 rounded-full filter blur-[120px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content text space */}
            <div className="lg:col-span-7 flex flex-col space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-clay-100/80 border border-clay-200/50 text-clay-800 w-fit"
              >
                <Award size={14} className="text-clay-600" />
                <span className="text-[10px] font-extrabold uppercase tracking-widest">
                  Certified In Fitness &amp; Nutrition
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="space-y-4"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-sans font-extrabold text-charcoal tracking-tight leading-[1.05]">
                  Build Strength, Confidence &amp; <span className="text-clay-700">Sustainable</span> Wellness
                </h1>
                <p className="text-base sm:text-lg text-charcoal/80 max-w-xl font-normal leading-relaxed">
                  Personalized online coaching designed for busy professionals, women/new mothers, beginners, and individuals looking to build sustainable strength, fitness, and long-term well-being — without extreme routines or unrealistic expectations.
                </p>
              </motion.div>

              {/* High impact badges */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg border-l-2 border-clay-500 pl-4 py-2"
              >
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-sage mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-charcoal block">Real Results</span>
                    <span className="text-[11px] text-charcoal/60">No extreme, crash-diet regimens</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-sage mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-charcoal block">Science-Backed</span>
                    <span className="text-[11px] text-charcoal/60">Tailored completely for your lifestyle</span>
                  </div>
                </div>
              </motion.div>

              {/* Call-to-actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-4 pt-2"
              >
                <a 
                  href={BRAND_CONTACTS.transformationUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-clay-700 hover:bg-clay-800 text-cream text-center font-bold text-sm tracking-wider uppercase rounded-full shadow-md shadow-clay-800/10 hover:shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  Join the Program
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href={BRAND_CONTACTS.consultationUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-cream border border-clay-300 hover:border-clay-600 text-clay-700 hover:text-clay-900 text-center font-bold text-sm tracking-wider uppercase rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  Book Free Consultation
                </a>
              </motion.div>
            </div>

            {/* Right Side Photo framed space */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 flex justify-center relative mt-8 lg:mt-0"
            >
              <div className="relative w-full max-w-[360px] aspect-[3/4]">
                {/* Visual background accents reflecting clay borders in poster */}
                <div className="absolute inset-4 -bottom-4 -right-4 border border-clay-500/30 rounded-3xl" />
                <div className="absolute inset-0 bg-clay-800/5 rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={trainerImg} 
                    alt="Priya - Certified Fitness &amp; Nutrition Coach" 
                    className="w-full h-full object-cover select-none filter contrast-[1.02] saturate-[1.02]"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Overlay background gradient gradient bottom blur */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent p-6 pt-24 text-cream">
                    <p className="text-xl font-bold tracking-tight">Coach Priya</p>
                    <p className="text-xs text-clay-200 mt-1">Certified Fitness &amp; Nutrition Specialist</p>
                    <div className="h-[1px] bg-clay-50/20 w-full my-3" />
                    <p className="text-[10px] text-clay-300 tracking-wider uppercase">Online Coaching Expert</p>
                  </div>
                </div>

                {/* Left Absolute Badge */}
                <div className="absolute top-6 -left-6 bg-cream border border-sand shadow-lg py-2.5 px-3.5 rounded-2xl flex items-center gap-2.5 max-w-[150px] animate-bounce-subtle">
                  <div className="w-1.5 h-1.5 rounded-full bg-sage ring-4 ring-sage/20 animate-pulse" />
                  <span className="text-[10px] font-bold text-charcoal leading-tight">
                    Limited Coaching Slots Open
                  </span>
                </div>

                {/* Top Right Absolute Rounded Accent Block */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-sage rounded-full flex items-center justify-center text-cream font-handwritten text-xl font-bold shadow-md transform rotate-12">
                  1:1
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ABOUT ME & PHILOSOPHY COOPERATION */}
      <section id="about" className="py-16 md:py-24 bg-sand/35">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Story space */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-clay-600 block">
                Meet Your Coach
              </span>
              <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-charcoal tracking-tight">
                Empathy Meets Scientific Nutrition &amp; Fitness
              </h2>
              
              <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed font-normal">
                As someone who has personally gone through a transformation journey while balancing a demanding corporate career, I understand how challenging it can feel to prioritize health amidst busy schedules and responsibilities.
              </p>
              
              <blockquote className="border-l-4 border-clay-600 pl-4 py-1.5">
                <p className="font-serif italic text-lg text-charcoal leading-relaxed">
                  "I believe fitness should empower your life, not overwhelm it."
                </p>
              </blockquote>

              <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed font-normal">
                Through a combination of structured coaching, real accountability, and a science-based approach, my aim is to help individuals build healthier habits, improve overall well-being, and create a lifestyle they can permanently sustain.
              </p>

              <div className="pt-2 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-clay-100 flex items-center justify-center text-clay-800">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-charcoal">Verified Specialist</p>
                  <p className="text-[11px] text-charcoal/50">Coaching with deep industry experience</p>
                </div>
              </div>
            </div>

            {/* Philosophy Pillars side cards */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <h3 className="text-lg font-bold tracking-tight uppercase text-charcoal">
                  Our Coaching Philosophy
                </h3>
                <div className="h-1 bg-clay-600 w-16" />
                <p className="text-xs text-charcoal/60">
                  Every program I design is heavily anchored in five non-negotiable baselines:
                </p>
              </div>

              <div className="space-y-4">
                {PILLARS.map((p, i) => (
                  <motion.div 
                    key={p.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="p-5 bg-cream/90 rounded-2xl border border-sand hover:border-clay-200/50 hover:shadow-md hover:shadow-clay-900/[0.01] transition-all flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-clay-50 flex items-center justify-center text-clay-700 shrink-0 font-bold font-serif text-lg group-hover:bg-clay-100 group-hover:text-clay-800 transition-colors">
                      0{i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-charcoal text-base group-hover:text-clay-700 transition-colors">
                        {p.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-charcoal/70 mt-1 leading-relaxed">
                        {p.subtitle}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* IS THIS FOR YOU SECTION */}
      <section id="designed-for-you" className="py-16 md:py-24 border-t border-b border-sand/40 bg-clay-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-clay-600 block">
              Audience Alignment
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-charcoal tracking-tight">
              This Program Is Designed For You If…
            </h2>
            <div className="h-1 bg-clay-600 w-24 mx-auto" />
            <p className="text-sm sm:text-base text-charcoal/70 max-w-xl mx-auto">
              We focus on solving structural, real-world friction. This coaching is engineered specifically if you find yourself facing any of the following obstacles:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FOR_YOU_PROFILES.map((f, i) => (
              <motion.div 
                key={f.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-cream p-6 rounded-2xl border border-sand hover:border-clay-300/40 hover:shadow-all transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-clay-100/75 flex items-center justify-center text-clay-700">
                    {renderIcon(f.icon, "w-6 h-6")}
                  </div>
                  <p className="text-xs sm:text-sm text-charcoal/85 leading-relaxed font-semibold">
                    {f.text}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-sage text-[10px] font-bold tracking-widest uppercase">
                  <span>Match Approved</span>
                  <Check size={10} className="stroke-[3]" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xs font-serif italic text-charcoal/60">
              Your structural constraints (equipment limits, motherhood fatigue, schedules) are normal variables. We design around them.
            </p>
          </div>

        </div>
      </section>

      {/* WHAT MAKES THIS DIFFERENT SECTION (Contrast Section) */}
      <section id="whychose" className="py-16 md:py-24 bg-charcoal text-clay-100 relative overflow-hidden">
        {/* Subtle mesh details */}
        <div className="absolute top-12 left-[-10%] w-[350px] h-[350px] bg-clay-700/15 rounded-full filter blur-[80px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-sage/10 rounded-full filter blur-[100px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left intro text */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-clay-200 block">
                The Core Difference
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-sans font-extrabold text-cream tracking-tight leading-[1.1]">
                Sustainable Coaching Over Quick Fixes
              </h2>
              <div className="h-[2px] bg-clay-300 w-20" />
              <p className="text-sm sm:text-base text-clay-200/80 leading-relaxed font-normal">
                This coaching approach focuses on building realistic habits that work with your lifestyle, career, and responsibilities. 
              </p>
              <p className="text-sm text-clay-200/70 leading-relaxed">
                We believe in a strict framework: <strong>no crash diets, no unrealistic fitness standards, and absolutely no performative extremes.</strong>
              </p>
              
              <div className="p-4 bg-clay-900/60 rounded-2xl border border-clay-800/80">
                <p className="text-xs text-clay-300 font-bold uppercase tracking-wider block mb-1">Priya's Commitment</p>
                <p className="font-serif italic text-base text-cream">
                  "Fitness should improve your life — not take over it."
                </p>
              </div>
            </div>

            {/* Right Pillars List */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {DIFFERENCES.map((diff, i) => (
                <div 
                  key={i} 
                  className="p-5 bg-clay-900/45 rounded-2xl border border-clay-800/80 hover:bg-clay-800/40 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-clay-300" />
                    <h3 className="font-bold text-sm text-cream tracking-tight">
                      {diff.title}
                    </h3>
                  </div>
                  <p className="text-xs text-clay-100/60 leading-relaxed">
                    {diff.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* PROGRAM BENEFITS */}
      <section id="benefits" className="py-16 md:py-24 bg-cream relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mx-auto text-center space-y-4 mb-16">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-clay-600 block">
              Structured Outcomes
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-charcoal tracking-tight">
              How The Program Benefits You
            </h2>
            <div className="h-1 bg-clay-600 w-16 mx-auto" />
            <p className="text-sm text-charcoal/70">
              Designed using a science-backed operational approach focused on sustainable results rather than extreme, temporary methods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {BENEFITS.map((b, i) => (
              <motion.div
                key={b.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-6 bg-cream rounded-2xl border border-sand hover:border-clay-300/40 shadow-sm hover:shadow-md hover:shadow-clay-900/[0.01] transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Custom render icon */}
                  <div className="w-10 h-10 rounded-xl bg-clay-50 flex items-center justify-center text-clay-700">
                    {renderIcon(b.iconName, "w-5 h-5")}
                  </div>
                  <h3 className="font-bold text-base text-charcoal">
                    {b.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-normal">
                    {b.description}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-sand/50 flex items-center justify-between text-[11px] text-sage font-medium tracking-tight">
                  <span>Science-Backed</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-sage" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Core inclusions card based on flyer flyer */}
          <div className="mt-16 bg-sand/30 border border-sand/60 rounded-3xl p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-4 space-y-3">
                <span className="text-[10px] font-extrabold tracking-widest uppercase text-clay-600 bg-cream border border-sand py-1 px-2.5 rounded-full">
                  Included In All Plans
                </span>
                <p className="text-2xl font-sans font-extrabold text-charcoal leading-tight">
                  What You Get In This Program
                </p>
                <p className="text-[11px] text-charcoal/60 leading-normal">
                  No matter which coaching term you invest in, our focus matches raw individual attention to absolute habit accountability.
                </p>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3.5 bg-cream/80 border border-cream rounded-xl">
                  <CheckCircle2 size={16} className="text-sage shrink-0" />
                  <span className="text-xs font-semibold text-charcoal">Personalized online training (gym/home)</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 bg-cream/80 border border-cream rounded-xl">
                  <CheckCircle2 size={16} className="text-sage shrink-0" />
                  <span className="text-xs font-semibold text-charcoal">Smart nutrition guidance (tailored calorie plans)</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 bg-cream/80 border border-cream rounded-xl">
                  <CheckCircle2 size={16} className="text-sage shrink-0" />
                  <span className="text-xs font-semibold text-charcoal">Optimized fat loss + raw strength focus</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 bg-cream/80 border border-cream rounded-xl">
                  <CheckCircle2 size={16} className="text-sage shrink-0" />
                  <span className="text-xs font-semibold text-charcoal">Weekly metrics tracking &amp; alignment checkins</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 bg-cream/80 border border-cream rounded-xl">
                  <CheckCircle2 size={16} className="text-sage shrink-0" />
                  <span className="text-xs font-semibold text-charcoal">Direct WhatsApp support &amp; feedback logs</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 bg-cream/80 border border-cream rounded-xl">
                  <CheckCircle2 size={16} className="text-sage shrink-0" />
                  <span className="text-xs font-semibold text-charcoal">Active exercise video form correction</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* INVESTMENT PLANS */}
      <section id="pricing" className="py-16 md:py-24 bg-clay-50/25 border-t border-b border-sand/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-clay-600 block">
              Investment Tiers
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-charcoal tracking-tight">
              Choose Your Transformation Duration
            </h2>
            <div className="h-1 bg-clay-600 w-20 mx-auto" />
            <p className="text-sm text-charcoal/70">
              Clear structures. Zero hidden metrics. Select the volume that corresponds to your budget, milestones, and baseline willpower.
            </p>
          </div>

          {/* Pricing Grid cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {PLANS.map((plan, i) => {
              const hasTag = plan.tag;
              const isPopular = plan.tag === "Most Popular";
              
              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, scale: 0.98, y: 15 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`relative p-6 bg-cream border rounded-2xl flex flex-col justify-between transition-all duration-300 ${
                    isPopular 
                      ? "border-clay-600 ring-2 ring-clay-600/10 shadow-lg shadow-clay-800/[0.03]" 
                      : "border-sand hover:border-clay-300/60"
                  }`}
                >
                  {hasTag && (
                    <div className={`absolute top-0 right-6 -translate-y-1/2 px-3.5 py-1 text-[9px] font-extrabold uppercase tracking-widest rounded-full ${
                      isPopular 
                        ? "bg-clay-700 text-cream" 
                        : "bg-sage text-cream"
                    }`}>
                      {plan.tag}
                    </div>
                  )}

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <span className="text-[10px] font-extrabold text-clay-600 uppercase tracking-widest block">
                        Coaching Track
                      </span>
                      <h3 className="font-sans font-extrabold text-lg text-charcoal">
                        {plan.duration}
                      </h3>
                      <p className="text-[11px] font-bold text-sage">
                        {plan.bestFor}
                      </p>
                    </div>

                    <div className="border-t border-b border-sand/60 py-4 flex items-baseline gap-2.5">
                      <span className="text-3xl font-extrabold text-charcoal">
                        {plan.investment}
                      </span>
                      {plan.originalPrice && (
                        <span className="text-xs text-charcoal/40 line-through">
                          {plan.originalPrice}
                        </span>
                      )}
                      <span className="text-[10px] text-charcoal/50 font-semibold uppercase">
                        Fully Inclusive
                      </span>
                    </div>

                    <ul className="space-y-3">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Check size={14} className="text-clay-600 shrink-0 mt-0.5" />
                          <span className="text-[11px] sm:text-xs text-charcoal/75 leading-relaxed font-medium">
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 space-y-3">
                    <a
                      href={BRAND_CONTACTS.transformationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full text-center block py-3 text-xs font-semibold tracking-wider uppercase rounded-full transition-all cursor-pointer ${
                        isPopular
                          ? "bg-clay-700 text-cream hover:bg-clay-800 shadow-md shadow-clay-700/10"
                          : "bg-clay-100 text-clay-800 border border-clay-200/50 hover:bg-clay-200/40"
                      }`}
                    >
                      Begin Transformation
                    </a>
                    <p className="text-[9px] text-center text-charcoal/45 block">
                      Requires brief onboarding forms review
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Consultation CTA banner */}
          <div className="mt-12 text-center p-6 bg-cream border border-sand rounded-2xl max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left space-y-1">
              <span className="text-[9px] font-bold text-sage uppercase tracking-wider block">Not sure which to choose?</span>
              <p className="text-sm font-bold text-charcoal">Request a customized assessment with Priya</p>
            </div>
            <a 
              href={BRAND_CONTACTS.consultationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-transparent border border-clay-600 hover:bg-clay-50/50 text-clay-700 text-xs font-semibold tracking-wider uppercase rounded-full transition-colors inline-block cursor-pointer"
            >
              Consult Free Info Form
            </a>
          </div>

        </div>
      </section>

      {/* FAQS SECTION (FAQ Accordion with clean heights animations) */}
      <section id="faq" className="py-16 md:py-24 bg-cream relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mx-auto text-center space-y-4 mb-16">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-clay-600 block">
              Clarifications &amp; Details
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-charcoal tracking-tight">
              Frequently Asked Questions
            </h2>
            <div className="h-1 bg-clay-600 w-16 mx-auto" />
            <p className="text-sm text-charcoal/70">
              Clear structural queries answered directly, respecting your constraints.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div 
                  key={index}
                  className="bg-cream border border-sand/70 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:bg-clay-50/10 cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm md:text-base font-bold text-charcoal leading-tight pr-4">
                      {index + 1}. {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="text-clay-600 shrink-0"
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1 border-t border-sand/30 bg-sand/10 space-y-4">
                          <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-normal">
                            {faq.answer}
                          </p>

                          {faq.highlights && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                              {faq.highlights.map((high, hIdx) => (
                                <div key={hIdx} className="flex items-start gap-2 text-charcoal">
                                  <CheckCircle2 size={14} className="text-sage mt-0.5 shrink-0" />
                                  <span className="text-[11px] sm:text-xs font-semibold text-charcoal/75">
                                    {high}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* FINAL CONTACT & CALL-TO-ACTION SECTION */}
      <section id="contact" className="py-16 md:py-20 bg-charcoal text-cream relative overflow-hidden">
        {/* Decorative lighting mesh elements */}
        <div className="absolute top-0 right-0 w-[40%] h-full bg-clay-700/10 rounded-full filter blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-clay-950/20 rounded-full filter blur-[150px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-12">
          
          <div className="space-y-4 max-w-2xl mx-auto">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-clay-200 bg-clay-800/80 border border-clay-700 px-3.5 py-1.5 rounded-full inline-block">
              Limited Coaching Slots Open
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-cream tracking-tight leading-none">
              Begin Your Strength Transformation Today
            </h2>
            <p className="text-sm text-clay-200/70 leading-relaxed">
              If you seek realistic coaching rooted in science, habits tailored to your calendar, and true long-term lifestyle success—we are ready.
            </p>
          </div>

          {/* Contact Cards Panel */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto pt-4">
            
            {/* Direct Line / Contact */}
            <div className="p-6 bg-clay-900/65 border border-clay-800 rounded-3xl text-left flex flex-col justify-between space-y-6">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-clay-800 flex items-center justify-center text-clay-200">
                  <Phone size={18} />
                </div>
                <h3 className="text-lg font-bold text-cream">Call or Message Priya</h3>
                <p className="text-[11px] text-clay-100/60 leading-normal">
                  Inquire directly via phone call or WhatsApp query text. We resolve program parameters and support options.
                </p>
              </div>
              <div className="pt-2">
                <a 
                  href={`tel:${BRAND_CONTACTS.phone}`} 
                  className="text-lg font-bold text-clay-200 hover:text-white transition-colors tracking-tight flex items-center gap-2"
                >
                  {BRAND_CONTACTS.phoneFormatted}
                </a>
              </div>
            </div>

            {/* Email Support */}
            <div className="p-6 bg-clay-900/65 border border-clay-800 rounded-3xl text-left flex flex-col justify-between space-y-6">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-clay-800 flex items-center justify-center text-clay-200">
                  <Mail size={18} />
                </div>
                <h3 className="text-lg font-bold text-cream">Direct Email Link</h3>
                <p className="text-[11px] text-clay-100/60 leading-normal">
                  Send a structural email outlining your personal variables. Coach Priya replies to all incoming queries systematically.
                </p>
              </div>
              <div className="pt-2 overflow-hidden truncate">
                <a 
                  href={`mailto:${BRAND_CONTACTS.email}`} 
                  className="text-base font-bold text-clay-200 hover:text-white transition-colors tracking-tight block truncate"
                >
                  {BRAND_CONTACTS.email}
                </a>
              </div>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 max-w-md mx-auto">
            <a 
              href={BRAND_CONTACTS.transformationUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-clay-700 hover:bg-clay-800 text-cream text-[11px] font-bold tracking-wider uppercase rounded-full shadow-lg shadow-clay-950/20 hover:shadow-xl transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              Start Onboarding Form
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href={BRAND_CONTACTS.consultationUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-clay-700 hover:bg-clay-800/20 text-clay-200 hover:text-white text-[11px] font-bold tracking-wider uppercase rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              Consult Assessment Form
            </a>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-charcoal text-clay-200/40 border-t border-clay-800/60 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex flex-col items-center md:items-start space-y-1">
            <p className="text-xs font-semibold tracking-wider text-clay-200/70">
              Priya <span className="font-light">Fitness Program</span>
            </p>
            <p className="text-[10px]">
              Certified Online Strength &amp; Wellness Coaching
            </p>
          </div>

          <div className="flex items-center gap-6 text-[10px] sm:text-xs">
            <button 
              onClick={() => scrollToSection("about")}
              className="hover:text-clay-200/80 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("whychose")}
              className="hover:text-clay-200/80 transition-colors"
            >
              Philosophy
            </button>
            <button 
              onClick={() => scrollToSection("pricing")}
              className="hover:text-clay-200/80 transition-colors"
            >
              Plans
            </button>
            <button 
              onClick={() => scrollToSection("faq")}
              className="hover:text-clay-200/80 transition-colors"
            >
              FAQs
            </button>
          </div>

          <div className="text-center md:text-right text-[10px]">
            <p>&copy; {new Date().getFullYear()} Priya Fitness. All Rights Reserved.</p>
            <p className="mt-1">Built with high-contrast, premium, science-backed lifestyle values.</p>
          </div>

        </div>
      </footer>
    </div>
  );
}

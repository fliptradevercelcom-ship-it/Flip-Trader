"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Logo from "../../../public/images/Logo.webp";
import tradingplatform from "../../../public/images/trading.jpg";
import {
  Shield,
  Zap,
  TrendingUp,
  Lock,
  CreditCard,
  CheckCircle,
  BarChart3,
  Smartphone,
  Award,
  Users,
  Globe,
  Target,
  ArrowRight,
  Check,
  Gift,
  MessageCircle,
} from "lucide-react";
import { Phone } from "lucide-react";
import Image from "next/image";
import Promoform from "./Promoform";

const statsData = [
  {
    icon: Target,
    endValue: 10,
    label: "Years in Market",
    suffix: "+",
    format: "number",
  },
  {
    icon: Users,
    endValue: 1_000_000,
    label: "Active Traders",
    suffix: "+",
    format: "compact",
  },
  {
    icon: Globe,
    endValue: 180,
    label: "Countries",
    suffix: "+",
    format: "number",
  },
  {
    icon: BarChart3,
    endValue: 500,
    label: "Instruments",
    suffix: "+",
    format: "number",
  },
];

const REGISTRATION_URL = "https://client.fliptradegroup.com/trader/registration";

export const Promo = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [animatedStats, setAnimatedStats] = useState(() =>
    statsData.map(() => 1)
  );

  const numberFormatter = useMemo(
    () =>
      new Intl.NumberFormat("en-US", {
        maximumFractionDigits: 0,
      }),
    []
  );

  const compactFormatter = useMemo(
    () =>
      new Intl.NumberFormat("en-US", {
        notation: "compact",
        maximumFractionDigits: 1,
      }),
    []
  );

  useEffect(() => {
    let frameId;
    const duration = 4000;
    const start = performance.now();

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const animate = (timestamp) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = easeOutCubic(progress);

      setAnimatedStats(
        statsData.map((item) => {
          const nextValue = Math.round(item.endValue * eased);
          return Math.max(1, Math.min(item.endValue, nextValue));
        })
      );

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, []);

  const formatStatValue = (value, item) => {
    const safeValue = Math.min(item.endValue, value);
    if (item.format === "compact") {
      return `${compactFormatter.format(safeValue)}${item.suffix ?? ""}`;
    }
    return `${numberFormatter.format(safeValue)}${item.suffix ?? ""}`;
  };

  return (
    <div className="min-h-screen bg-[#060608] text-white">
      {/* Announcement Bar */}
      {showBanner && (
        <div className="sticky top-0 z-50 border-b border-[#6a40ec]/30 bg-[#180F36]/80 backdrop-blur-sm">
          <div className="relative flex w-full flex-col items-stretch gap-3 px-4 py-3 text-center sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:text-left">
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 animate-pulse [animation-duration:3s]" />
            <div className="relative z-[999] flex w-full items-center justify-center sm:w-auto">
              <Link href="/" target="_blank" rel="noopener noreferrer">
                <span className="inline-flex items-center gap-2 px-5 py-2 sm:px-6">
                  <Image
                    src={Logo}
                    alt="FlipTrade Logo"
                    width={2000}
                    height={500}
                    className="max-w-28 sm:max-w-32 lg:max-w-40 2xl:max-w-56"
                    priority
                  />
                </span>
              </Link>
            </div>
            <div className="relative flex w-full flex-1 flex-col items-center justify-center gap-3 sm:flex-row">
              <div className="flex items-center gap-2 text-sm sm:text-base">
                <Gift className="h-5 w-5 animate-bounce text-white" />
                <span className="font-semibold">Get a 100% deposit bonus</span>
              </div>
              <Link
                href={'https://wa.me/+66815837672'}
               className="group inline-flex w-full max-w-xs items-center justify-center rounded-full border-2 border-white bg-white px-6 py-2 text-sm font-semibold text-[#6a40ec] transition-all duration-300 hover:scale-105 hover:bg-transparent hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] sm:w-auto sm:max-w-xs sm:px-8"
               target="_blank"
               rel="noopener noreferrer"
              >
                <span className="flex items-center gap-1">
                  Sign Up Today
                  <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#1a0f2e] via-[#0f0820] to-[#060608] px-4 py-12 md:py-18 lg:py-24 text-center">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-1/4 top-20 h-[500px] w-[500px] animate-pulse rounded-full bg-[#6a40ec] blur-[120px]" />
          <div className="absolute right-1/4 top-40 h-[400px] w-[400px] animate-pulse rounded-full bg-[#9679f0] blur-[100px] [animation-delay:1s]" />
        </div>
       <div className="flex flex-col-reverse xl:flex-row px-[3%] gap-6">
         <div className="relative my-auto max-w-5xl xl:w-[60%]">
          <h1 className="mb-6 bg-gradient-to-r from-white via-[#b39cff] to-white bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-7xl leading-[normal] lg:leading-24 text-center xl:text-start">
            Get a Deposit Bonus of <br/> up to $250
          </h1>
          <h2 className="mb-4 text-xl sm:text-2xl md:text-3xl text-center xl:text-start">
            Fliptrade will credit a 100% bonus on your first deposit
          </h2>
          <p className="mb-10 text-base text-gray-400 sm:text-lg md:text-xl text-center xl:text-start">
            According to the promotion terms in your personal account
          </p>
          <div className="flex flex-wrap justify-center xl:justify-start gap-4">
            <Link
              href={REGISTRATION_URL}
              className="group relative inline-flex w-full max-w-xs items-center justify-center overflow-hidden rounded-full bg-primary px-8 py-3 text-base shadow-[0_0_30px_rgba(106,64,236,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(106,64,236,0.6)] sm:w-auto sm:max-w-none sm:px-12 sm:py-4 sm:text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Claim Your Bonus
              </span>
              <div className="absolute inset-0 bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Link>
            {/* <Link
              href={REGISTRATION_URL}
              className="group inline-flex w-full max-w-xs items-center justify-center rounded-full border-2 border-primary bg-transparent px-8 py-3 text-base backdrop-blur-sm transition-all duration-300 hover:border-primary hover:bg-primary hover:shadow-[0_0_30px_rgba(106,64,236,0.3)] sm:w-auto sm:max-w-none sm:px-12 sm:py-4 sm:text-lg"
            >
              <span className="flex items-center gap-2">
                <Award className="h-5 w-5 text-[#9679f0]" />
                Try Demo
              </span>
            </Link> */}
            <Link
              href="https://wa.me/+918852099227"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full max-w-xs items-center justify-center rounded-full border-2 border-[#25D366] bg-[#25D366] px-8 py-3 text-base text-[#060608] transition-all duration-300 hover:scale-105 hover:bg-transparent hover:text-white hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] sm:w-auto sm:max-w-none sm:px-12 sm:py-4 sm:text-lg"
            >
              <span className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </span>
            </Link>
          </div>
        </div>
        <div className="flex justify-center pb-12 xl:pb-0 xl:w-[40%]">
        <Promoform/>
        </div>
       </div>
        
      </section>

      {/* Stats Section */}
      <section className="relative border-y border-white/5 bg-black/40 px-4 py-16 backdrop-blur-sm">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {statsData.map((item, i) => (
            <div
              key={i}
              className="group relative cursor-pointer text-center transition-transform duration-300 hover:scale-110"
            >
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary to-primary opacity-0 blur-xl transition-all duration-300 group-hover:from-primary group-hover:to-[#9679f0]/20 group-hover:opacity-100" />
              <item.icon
                className="mx-auto mb-3 h-10 w-10 transition-all duration-300"
                style={{ color: item.color }}
              />
              <div className="mb-2 bg-gradient-to-r from-white to-[#b39cff] bg-clip-text text-4xl font-bold text-transparent">
                {formatStatValue(animatedStats[i], item)}
              </div>
              <div className="text-sm text-gray-400">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-5xl font-bold">
            Why Traders Choose{" "}
            <span className="gradient_text bg-clip-text text-transparent">
              FlipTrade
            </span>
          </h2>
          <p className="mb-16 text-center text-gray-400">
            Seamless trading across Forex, CFDs, metals, and more
          </p>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                icon: Shield,
                title: "Segregated Accounts",
                description:
                  "Client funds are kept in top tier banks, separate from company funds",
              },
              {
                icon: Zap,
                title: "Fast Execution",
                description:
                  "Orders are executed in milliseconds with no requotes",
              },
              {
                icon: TrendingUp,
                title: "Advanced Trading Tools",
                description:
                  "Access professional trading platforms and analytical tools",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 backdrop-blur-sm transition-all duration-500 hover:border-primary hover:shadow-[0_0_40px_rgba(106,64,236,0.3)]"
              >
                {/* Hover background effect */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary via-[#9679f0]/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-20" />

                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-[#9679f0]/20 transition-all duration-500 group-hover:scale-110 group-hover:from-primary group-hover:to-[#9679f0]/40">
                  <item.icon className="h-8 w-8 text-[#9679f0] transition-colors duration-500 group-hover:text-[#b39cff]" />
                </div>
                <h3 className="mb-3 text-xl font-semibold transition-colors duration-500 group-hover:text-[#b39cff]">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0a0612] to-[#1a0f2e] px-4 py-24">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute right-1/3 top-20 h-[400px] w-[400px] rounded-full bg-primary blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-6xl text-center">
          <h2 className="mb-16 text-5xl font-bold">Our Awards</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                year: "2022",
                title: "Best Forex Broker",
                org: "Global Banking & Finance",
              },
              {
                year: "2023",
                title: "Best Trading Platform",
                org: "International Finance Awards",
              },
              {
                year: "2024",
                title: "Most Trusted Broker",
                org: "Forex Awards",
              },
            ].map((award, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-primary bg-white/5 p-10 backdrop-blur-sm transition-all duration-500 hover:border-primary hover:shadow-[0_0_50px_rgba(106,64,236,0.4)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-[#9679f0]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-20" />

                <Award className="mx-auto mb-6 h-16 w-16 text-primary transition-all duration-500 group-hover:scale-110 group-hover:text-[#9679f0]" />
                <div className="mb-3 text-3xl font-bold text-primary transition-colors duration-500 group-hover:text-[#9679f0]">
                  {award.year}
                </div>
                <div className="mb-2 text-xl font-semibold">{award.title}</div>
                <div className="text-sm text-gray-400">{award.org}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safe Deposits Section */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-16 text-center text-5xl font-bold">
            Safe Deposits
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                icon: Lock,
                title: "Secure Storage",
                description: "Your funds are protected in segregated accounts",
              },
              {
                icon: CreditCard,
                title: "Multiple Payment Methods",
                description:
                  "Deposit and withdraw using various payment options",
              },
              {
                icon: CheckCircle,
                title: "Regulated Broker",
                description: "Licensed and regulated by top-tier authorities",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-primary to-transparent p-8 transition-all duration-500 hover:border-primary hover:shadow-[0_0_40px_rgba(106,64,236,0.3)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-[#9679f0]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-30" />

                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-[#9679f0]/20 transition-all duration-500 group-hover:scale-110 group-hover:from-primary group-hover:to-[#9679f0]/40">
                  <item.icon className="h-8 w-8 text-[#9679f0] transition-colors duration-500 group-hover:text-[#b39cff]" />
                </div>
                <h3 className="mb-3 text-xl font-semibold transition-colors duration-500 group-hover:text-[#b39cff]">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Account Types Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#1a0f2e] to-[#060608] px-4 py-24">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-1/3 top-40 h-[500px] w-[500px] rounded-full bg-[#9679f0] blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <h2 className="mb-16 text-center text-5xl font-bold">
            Choose Your Account Type
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Standard Account",
                minDeposit: "$25",
                spreads: "12",
                swapFree: "No",
                commission: "No",
              },
              {
                name: "Classic Account",
                minDeposit: "$100",
                spreads: "0.8",
                swapFree: "No",
                commission: "No",
                featured: true,
              },
              {
                name: "ECN Account",
                minDeposit: "$200",
                spreads: "Raw Spread",
                swapFree: "No",
                commission: "Yes",
              },
              {
                name: "Professional Account",
                minDeposit: "$500",
                spreads: "Raw Spread",
                swapFree: "No",
                commission: "Yes",
              },
            ].map((account, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-3xl border p-5 transition-all duration-500 sm:p-6 ${
                  account.featured
                    ? "border-primary bg-gradient-to-b from-primary to-transparent shadow-[0_0_50px_rgba(106,64,236,0.4)] hover:shadow-[0_0_80px_rgba(106,64,236,0.6)]"
                    : "border-white/10 bg-white/5 hover:border-primary hover:shadow-[0_0_40px_rgba(106,64,236,0.3)]"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-[#9679f0]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-20" />

                <h3 className="mb-6 bg-gradient-to-r from-[#9679f0] to-[#b39cff] bg-clip-text text-center text-2xl font-bold text-transparent transition-all duration-500 group-hover:from-[#b39cff] group-hover:to-[#9679f0]">
                  {account.name}
                </h3>

                <div className="mb-6 space-y-4">
                  <div className="rounded-xl bg-[#9679f0]/10 p-4 text-center">
                    <div className="mb-1 text-sm text-gray-400">
                      Min Deposit
                    </div>
                    <div className="font-semibold">{account.minDeposit}</div>
                  </div>

                  <div className="border-t border-dashed border-white/20 pt-4">
                    <div className="mb-1 text-center text-sm text-gray-400">
                      Spreads
                    </div>
                    <div className="text-center font-semibold">
                      {account.spreads}
                    </div>
                  </div>

                  <div className="border-t border-dashed border-white/20 pt-4">
                    <div className="mb-1 text-center text-sm text-gray-400">
                      Swap Free
                    </div>
                    <div className="text-center font-semibold">
                      {account.swapFree}
                    </div>
                  </div>

                  <div className="border-t border-dashed border-white/20 pt-4">
                    <div className="mb-1 text-center text-sm text-gray-400">
                      Commission
                    </div>
                    <div className="text-center font-semibold">
                      {account.commission}
                    </div>
                  </div>
                </div>

                <Link
                  href={REGISTRATION_URL}
                  className={`group/btn relative block w-full overflow-hidden rounded-full px-5 py-3 text-sm transition-all duration-300 sm:px-6 sm:text-base ${
                    account.featured
                      ? "bg-gradient-to-r from-primary to-[#8b5cf6] shadow-[0_0_20px_rgba(106,64,236,0.5)] hover:scale-105 hover:shadow-[0_0_30px_rgba(106,64,236,0.7)]"
                      : "border border-primary bg-transparent hover:border-primary hover:bg-primary"
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Zap className="h-4 w-4" />
                    Open Account
                  </span>
                  {account.featured && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6] to-primary opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100" />
                  )}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Platform Section */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-5xl font-bold">
                A Trading Platform That
                <br />
                <span className="gradient_text bg-clip-text text-transparent">
                  Fits Your Needs
                </span>
              </h2>
              <p className="mb-8 text-lg text-gray-400">
                Trade on desktop, mobile, or web. Access advanced charts,
                technical indicators, and trading tools.
              </p>
              <ul className="mb-10 space-y-4">
                {[
                  "MetaTrader 4 & 5 available",
                  "Mobile apps for iOS and Android",
                  "WebTrader - no download required",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-base sm:text-lg">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#6a40ec]/20">
                      <Check className="h-5 w-5 text-[#9679f0]" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="https://apps.apple.com/us/app/metatrader-5/id413251709"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full max-w-xs items-center justify-center rounded-full bg-gradient-to-r from-[#6a40ec] to-[#8b5cf6] px-10 py-3 text-base shadow-[0_0_30px_rgba(106,64,236,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(106,64,236,0.6)] sm:w-auto sm:max-w-none sm:px-12 sm:text-lg"
              >
                <span className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5" />
                  Download Platform
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#6a40ec]/30 to-[#9679f0]/30 blur-3xl" />
              <div className="relative aspect-square overflow-hidden rounded-3xl border border-[#6a40ec]/30 bg-gradient-to-br from-[#6a40ec]/10 to-[#9679f0]/10 p-12 backdrop-blur-sm">
              <Image src={tradingplatform} alt="Platform" width={2000} height={1000} className="w-full h-full object-cover" />
                {/* <div className="flex h-full items-center justify-center">
                  <Smartphone className="h-48 w-48 text-[#9679f0] opacity-50" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Start Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0a0612] to-[#1a0f2e] px-4 py-24">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute right-1/4 top-20 h-[500px] w-[500px] rounded-full bg-[#6a40ec] blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-5xl font-bold">
            How to{" "}
            <span className="gradient_text bg-clip-text text-transparent">
              Start Trading
            </span>
          </h2>
          <p className="mb-16 text-center text-gray-400">in 3 Easy Steps</p>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Register",
                description: "Create your account in minutes",
              },
              {
                step: "2",
                title: "Deposit",
                description: "Fund your account securely",
              },
              {
                step: "3",
                title: "Trade",
                description: "Start trading instantly",
              },
            ].map((item, i) => (
              <div key={i} className="group text-center">
            <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#6a40ec] to-[#9679f0] text-2xl font-bold shadow-[0_0_40px_rgba(106,64,236,0.4)] transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_60px_rgba(106,64,236,0.6)] sm:h-20 sm:w-20 sm:text-3xl">
                  {item.step}
                  {i < 2 && (
                    <ArrowRight className="absolute -right-12 top-1/2 hidden h-8 w-8 -translate-y-1/2 text-[#6a40ec]/30 md:block" />
                  )}
                </div>
                <h3 className="mb-3 text-2xl font-semibold transition-colors duration-500 group-hover:text-[#b39cff]">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-primary px-4 py-24 text-center">
        <div className="absolute inset-0">
          <div className="absolute left-1/4 top-0 h-full w-1/2 bg-white/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-3xl">
          <h2 className="mb-6 text-5xl font-bold">Ready to Start Trading?</h2>
          <p className="mb-10 text-xl opacity-90">
            Join thousands of traders who trust our platform
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={REGISTRATION_URL}
              className="group inline-flex w-full max-w-xs items-center justify-center rounded-full border-2 border-white bg-white px-8 py-3 text-base text-[#6a40ec] transition-all duration-300 hover:scale-105 hover:bg-transparent hover:text-white hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] sm:w-auto sm:max-w-none sm:px-12 sm:py-4 sm:text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Open an Account 
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
            {/* <Link
              href={REGISTRATION_URL}
              className="group inline-flex w-full max-w-xs items-center justify-center rounded-full border-2 border-white bg-transparent px-8 py-3 text-base transition-all duration-300 hover:bg-white/10 sm:w-auto sm:max-w-none sm:px-12 sm:py-4 sm:text-lg"
            >
              Try Demo Account
            </Link> */}
            <Link
              href="https://wa.me/66815837672"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full max-w-xs items-center justify-center rounded-full border-2 border-[#25D366] bg-[#25D366] px-8 py-3 text-base text-[#060608] transition-all duration-300 hover:scale-105 hover:bg-transparent hover:text-white hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] sm:w-auto sm:max-w-none sm:px-12 sm:py-4 sm:text-lg"
            >
              <span className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </span>
            </Link>
          </div>
        </div>
      </section>
      <footer className="border-t border-white/10 bg-[#030213] px-4 py-16">
        <div className="mx-auto max-w-6xl">
           <div className="mb-12 grid grid-cols-1 gap-8 text-center sm:grid-cols-2 md:grid-cols-4 sm:text-left">
             <div className="flex flex-col items-center sm:items-start">
               <h4 className="mb-4 text-base font-semibold text-[#9679f0] sm:text-lg">Company</h4>
               <ul className="space-y-2 text-sm text-gray-400 sm:text-base">
                 <li className="cursor-pointer transition-colors hover:text-[#9679f0]">
                   <Link href="/why-fliptrade" target="_blank" rel="noopener noreferrer">About Us</Link>
                 </li>
                 <li className="cursor-pointer transition-colors hover:text-[#9679f0]">
                   <Link href="/contact-us" target="_blank" rel="noopener noreferrer">Contact</Link>
                 </li>
                 <li className="cursor-pointer transition-colors hover:text-[#9679f0]">
                   <Link href="/ib-partner" target="_blank" rel="noopener noreferrer">Careers</Link>
                 </li>
               </ul>
             </div>
             <div className="flex flex-col items-center sm:items-start">
               <h4 className="mb-4 text-base font-semibold text-[#9679f0] sm:text-lg">Trading</h4>
               <ul className="space-y-2 text-sm text-gray-400 sm:text-base">
                 <li className="cursor-pointer transition-colors hover:text-[#9679f0]">
                   <Link href="/accounts-types" target="_blank" rel="noopener noreferrer">Account Types</Link>
                 </li>
                 <li className="cursor-pointer transition-colors hover:text-[#9679f0]">
                   <Link href="/platform" target="_blank" rel="noopener noreferrer">Platforms</Link>
                 </li>
                 <li className="cursor-pointer transition-colors hover:text-[#9679f0]">
                   <Link href="/forex" target="_blank" rel="noopener noreferrer">Instruments</Link>
                 </li>
               </ul>
             </div>
             <div className="flex flex-col items-center sm:items-start">
               <h4 className="mb-4 text-base font-semibold text-[#9679f0] sm:text-lg">Support</h4>
               <ul className="space-y-2 text-sm text-gray-400 sm:text-base">
                 <li className="cursor-pointer transition-colors hover:text-[#9679f0]">
                   <Link href="/faq" target="_blank" rel="noopener noreferrer">Help Center</Link>
                 </li>
                 <li className="cursor-pointer transition-colors hover:text-[#9679f0]">
                   <Link href="/faq" target="_blank" rel="noopener noreferrer">FAQ</Link>
                 </li>
                 <li className="cursor-pointer transition-colors hover:text-[#9679f0]">
                   <Link href="/contact-us" target="_blank" rel="noopener noreferrer">Contact Us</Link>
                 </li>
               </ul>
             </div>
             <div className="flex flex-col items-center sm:items-start">
               <h4 className="mb-4 text-base font-semibold text-[#9679f0] sm:text-lg">Legal</h4>
               <ul className="space-y-2 text-sm text-gray-400 sm:text-base">
                 <li className="cursor-pointer transition-colors hover:text-[#9679f0]">
                   <Link href="/terms-and-conditions" target="_blank" rel="noopener noreferrer">Terms & Conditions</Link>
                 </li>
                 <li className="cursor-pointer transition-colors hover:text-[#9679f0]">
                   <Link href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</Link>
                 </li>
                 <li className="cursor-pointer transition-colors hover:text-[#9679f0]">
                   <Link href="/risk-warning" target="_blank" rel="noopener noreferrer">Risk Disclosure</Link>
                 </li>
               </ul>
             </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} FlipTrade. All rights reserved.</p>
            <p className="mt-2">
              Risk Warning: Trading involves risk. Only trade with money you can afford to lose.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

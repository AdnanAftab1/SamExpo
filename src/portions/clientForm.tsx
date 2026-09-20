"use client";

import Image from "next/image";
import { sendmessage } from "./serverSide";
import { useActionState, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { BlurFade } from "@/components/ui/blur-fade";

export default function ContactForm() {
  const [formState, formAction, isPending] = useActionState(sendmessage, {
    success: false,
    message: "Loading.......... ",
  });
  const [isValid, setValid] = useState(false);

  function handleInput(e: React.FormEvent<HTMLFormElement>) {
    setValid(e.currentTarget.checkValidity());
  }

  return (
    <section className="relative w-screen bg-[#f7f7eb] py-[80px] px-5 sm:px-8 lg:px-20 overflow-hidden">

      {/* Decorative rotated leather image (bottom-right) */}
      <div
        aria-hidden
        className="hidden lg:block absolute pointer-events-none"
        style={{
          width: 220,
          height: 293.33,
          right: "calc(50% - 309px - 110px)",
          top: "calc(50% + 275.67px - 146.67px)",
          transform: "rotate(6.98deg)",
          opacity: 0.99,
        }}
      >
        <Image
          src="/12299.jpg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Centered form card with double bronze border */}
      <BlurFade inView duration={0.7} delay={0}>
        <div
          className="relative mx-auto bg-[#f7f7eb]"
          style={{
            width: "min(618px, 100%)",
            padding: 4,
            border: "1.5px solid #947534",
          }}
        >
          <form
            action={formAction}
            onInput={handleInput}
            className="w-full flex flex-col gap-6 bg-[#f7f7eb]"
            style={{
              padding: 24,
              border: "1px solid #947534",
            }}
          >

            {/* Heading + Description */}
            <div className="flex flex-col gap-1">
              <h1 className="font-instrument uppercase text-[#193827] text-[32px] sm:text-[36px] lg:text-[42px] leading-[1.2] lg:leading-[55px]">
                Transforming Spaces<br />with<br />Premium Leather
              </h1>
              <p className="font-dmsans font-light text-[#193827] text-[15px] sm:text-base leading-[21px] mt-1">
                Questions or inquiries? We&apos;re here to assist! Contact our friendly team via the form below, phone, or email. We&apos;re eager to hear from you!
              </p>
            </div>

            {/* Fields container */}
            <div className="flex flex-col gap-[18px]">

              {/* Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-dmsans font-light text-[14px] leading-[18px] text-[#193827]">
                  Name
                </label>
                <div
                  className="flex items-center w-full"
                  style={{
                    background: "#F0F1E5",
                    border: "0.8px solid #193827",
                    padding: "10px 0 10px 16px",
                    height: 46,
                  }}
                >
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="w-full bg-transparent font-dmsans text-[16px] leading-[26px] text-[#193827] placeholder:text-[#193827]/30 focus:outline-none"
                  />
                </div>
              </div>

              {/* Email + Mobile row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[18px]">

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-dmsans font-light text-[14px] leading-[18px] text-[#193827]">
                    Email
                  </label>
                  <div
                    className="flex items-center w-full"
                    style={{
                      background: "#F0F1E5",
                      border: "0.8px solid #193827",
                      padding: "10px 0 10px 16px",
                      height: 46,
                    }}
                  >
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="Enter your email address"
                      className="w-full bg-transparent font-dmsans text-[16px] leading-[26px] text-[#193827] placeholder:text-[#193827]/30 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="font-dmsans font-light text-[14px] leading-[18px] text-[#193827]">
                    Mobile
                  </label>
                  <div
                    className="flex items-center w-full"
                    style={{
                      background: "#F0F1E5",
                      border: "0.8px solid #193827",
                      padding: "10px 0 10px 16px",
                      height: 46,
                    }}
                  >
                    <input
                      id="phone"
                      name="phone"
                      type="text"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full bg-transparent font-dmsans text-[16px] leading-[26px] text-[#193827] placeholder:text-[#193827]/30 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-dmsans font-light text-[14px] leading-[18px] text-[#193827]">
                  Message
                </label>
                <div
                  className="flex items-start w-full"
                  style={{
                    background: "#F0F1E5",
                    border: "0.8px solid #193827",
                    padding: "10px 0 10px 16px",
                    minHeight: 142,
                  }}
                >
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Looking for a leather partner for my brand"
                    className="w-full bg-transparent font-dmsans text-[16px] leading-[26px] text-[#193827] placeholder:text-[#193827]/30 focus:outline-none resize-none"
                  />
                </div>
              </div>

              {/* Submit */}
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <div style={{ border: "1px solid #EFC250", padding: 2, width: 160 }}>
                    <button
                      type="submit"
                      disabled={!isValid}
                      className="w-full h-[42px] inline-flex items-center justify-center font-dmsans text-[16px] leading-[21px] text-[#EFC250] transition-colors hover:bg-[#193827]/90 disabled:opacity-40 disabled:cursor-not-allowed"
                      style={{ background: "#193827", border: "1px solid #EFC250" }}
                    >
                      Submit
                    </button>
                  </div>
                </AlertDialogTrigger>

                <AlertDialogContent className="bg-[#f7f7eb] border border-[#947534]">
                  <AlertDialogHeader>
                    <AlertDialogTitle className="font-instrument uppercase text-[#193827] text-2xl font-normal">
                      Thanks for reaching out
                    </AlertDialogTitle>
                    <AlertDialogDescription className="font-dmsans text-[#193827]/70 text-base font-light">
                      {isPending ? "Loading.............." : formState.message}
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="font-dmsans border border-[#193827]/30 bg-transparent text-[#193827] hover:bg-[#193827] hover:text-[#EFC250] rounded-none transition-colors">
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction className="font-dmsans bg-[#193827] text-[#EFC250] hover:bg-[#193827]/90 rounded-none transition-colors">
                      Continue
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

            </div>
          </form>
        </div>
      </BlurFade>

    </section>
  );
}
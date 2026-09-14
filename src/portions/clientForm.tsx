"use client"
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
} from "@/components/ui/alert-dialog"
import { BlurFade } from "@/components/ui/blur-fade";

export const FormClient = () => {
  const [formState, formAction, isPending] = useActionState(sendmessage, { success: false, message: "Loading.......... " });
  const [isValid, setValid] = useState(false);

  function handleInput(e: React.FormEvent<HTMLFormElement>) {
    setValid(e.currentTarget.checkValidity());
  }

  return (
    <form
      action={formAction}
      onInput={handleInput}
      className="space-y-5 w-full max-w-[550px] mt-0 border border-[#193827]/15 bg-[#f7f7eb] p-6 relative"
    > 


    
      <BlurFade inView={true} offset={0.2}>

        <div>
          <label htmlFor="name" className="block mb-2 font-dmsans text-sm font-medium text-[#193827]">
            Name
          </label>
          <input
            type="text"
            required
            name="name"
            className="block p-3 w-full font-dmsans text-sm text-[#193827] bg-transparent border border-[#193827]/25 focus:border-[#efc250] focus:outline-none transition-colors placeholder:text-[#193827]/40"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mt-4 mb-2 font-dmsans text-sm font-medium text-[#193827]">
            Your email
          </label>
          <input
            type="email"
            required
            name="email"
            className="block p-3 w-full font-dmsans text-sm text-[#193827] bg-transparent border border-[#193827]/25 focus:border-[#efc250] focus:outline-none transition-colors placeholder:text-[#193827]/40"
            placeholder="youremail@example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block mt-4 mb-2 font-dmsans text-sm font-medium text-[#193827]">
            Phone Number
          </label>
          <input
            type="text"
            required
            name="phone"
            className="block p-3 w-full font-dmsans text-sm text-[#193827] bg-transparent border border-[#193827]/25 focus:border-[#efc250] focus:outline-none transition-colors placeholder:text-[#193827]/40"
            placeholder="+987654321"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="block mt-4 mb-2 font-dmsans text-sm font-medium text-[#193827]">
            Your message
          </label>
          <textarea
            name="message"
            rows={6}
            className="block p-3 w-full font-dmsans text-sm text-[#193827] bg-transparent border border-[#193827]/25 focus:border-[#efc250] focus:outline-none transition-colors resize-none placeholder:text-[#193827]/40"
            placeholder="What can I do for you..."
          />
        </div>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <div className="mt-6 sa-cta-outline w-full">
              <button
                type="submit"
                disabled={!isValid}
                className="sa-cta-inner filled w-full disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Send message
              </button>
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-[#f7f7eb] border border-[#193827]/15">
            <AlertDialogHeader>
              <AlertDialogTitle className="font-instrument text-[#193827] text-2xl">
                Thanks for reaching out
              </AlertDialogTitle>
              <AlertDialogDescription className="font-dmsans text-[#193827]/70 text-base font-light">
                {isPending ? "Loading.............." : formState.message}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="font-dmsans border border-[#193827]/30 bg-transparent text-[#193827] hover:bg-[#193827] hover:text-[#efc250] rounded-none transition-colors">
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction className="font-dmsans bg-[#193827] text-[#efc250] hover:bg-[#193827]/90 rounded-none transition-colors">
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </BlurFade>
    </form>
  )
}
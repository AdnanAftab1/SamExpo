import { BlurFade } from "@/components/ui/blur-fade";
import { FormClient } from "@/portions/clientForm"

function Contact() {
    return (
        <section id="contact" className="w-full min-h-screen bg-[#f7f7eb] pt-[140px] pb-24 px-5 sm:px-8 lg:px-20">
            <div className="mx-auto w-full max-w-[1280px] flex flex-col items-center gap-12">

                {/* Header */}
                <header className="flex flex-col items-center gap-2 text-center">
                    <h1 className="font-instrument text-[42px] max-md:text-3xl font-normal leading-none text-[#193827]">
                        CONTACT B2B
                    </h1>
                    <p className="max-w-[560px] font-dmsans text-base font-light leading-normal text-[#193827]">
                        Questions or inquiries? We&apos;re here to assist — reach our team via the form, phone, or email.
                    </p>
                </header>

                <div className="flex flex-wrap items-start justify-center gap-10 lg:gap-16 w-full">

                    {/* Info Block */}
                    <BlurFade inView={true} duration={0.7} delay={0}>
                        <div className="w-full max-w-[550px] p-6 border border-[#193827]/15 bg-[#f7f7eb] inline-flex flex-col justify-between items-start gap-6">
                            <div className="self-stretch flex flex-col justify-start items-start gap-2">
                                <h2 className="self-stretch font-instrument text-[#193827] text-4xl max-md:text-3xl leading-none">
                                    Get in touch today
                                </h2>
                                <p className="self-stretch font-dmsans text-[#193827]/70 text-base font-light leading-relaxed">
                                    Questions or inquiries? We&apos;re here to assist! Contact our friendly team via the form below, phone, or email. We&apos;re eager to hear from you!
                                </p>
                            </div>

                            <div className="self-stretch flex flex-col justify-start items-start gap-4">

                                {/* India Phone */}
                                <div className="inline-flex justify-start items-start gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22" fill="#947534" className="shrink-0 mt-0.5">
                                        <path d="M162-120q-18 0-30-12t-12-30v-162q0-13 9-23.5t23-14.5l138-28q14-2 28.5 2.5T342-374l94 94q38-22 72-48.5t65-57.5q33-32 60.5-66.5T681-524l-97-98q-8-8-11-19t-1-27l26-140q2-13 13-22.5t25-9.5h162q18 0 30 12t12 30q0 125-54.5 247T631-329Q531-229 409-174.5T162-120Zm556-480q17-39 26-79t14-81h-88l-18 94 66 66ZM360-244l-66-66-94 20v88q41-3 81-14t79-28Zm358-356ZM360-244Z"/>
                                    </svg>
                                    <div className="font-dmsans text-[#193827] text-base font-light leading-[18px]">
                                        India: +91 95727 65108
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="inline-flex justify-start items-start gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22" fill="#947534" className="shrink-0 mt-0.5">
                                        <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/>
                                    </svg>
                                    <div className="font-dmsans text-[#193827] text-base font-light leading-[18px]">
                                        sales@al-ahadexports.com
                                    </div>
                                </div>

                                {/* Germany Phone */}
                                <div className="inline-flex justify-start items-start gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22" fill="#947534" className="shrink-0 mt-0.5">
                                        <path d="M162-120q-18 0-30-12t-12-30v-162q0-13 9-23.5t23-14.5l138-28q14-2 28.5 2.5T342-374l94 94q38-22 72-48.5t65-57.5q33-32 60.5-66.5T681-524l-97-98q-8-8-11-19t-1-27l26-140q2-13 13-22.5t25-9.5h162q18 0 30 12t12 30q0 125-54.5 247T631-329Q531-229 409-174.5T162-120Zm556-480q17-39 26-79t14-81h-88l-18 94 66 66ZM360-244l-66-66-94 20v88q41-3 81-14t79-28Zm358-356ZM360-244Z"/>
                                    </svg>
                                    <div className="font-dmsans text-[#193827] text-base font-light leading-[18px]">
                                        Germany: +49 176 29027289
                                    </div>
                                </div>

                                {/* Registered Office */}
                                <div className="w-full flex flex-col justify-start items-start gap-2">
                                    <h3 className="self-stretch font-dmsans text-[#193827] text-base font-medium leading-[normal]">
                                        Registered Corporate Office
                                    </h3>
                                    <div className="self-stretch inline-flex justify-start items-start gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22" fill="#947534" className="shrink-0 mt-0.5">
                                            <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/>
                                        </svg>
                                        <p className="w-full font-dmsans text-[#193827] text-base font-light leading-5">
                                            55A, GJ Khan Road, Topsia, Kolkata - 700039
                                        </p>
                                    </div>
                                </div>

                                {/* Factory Address */}
                                <div className="w-full flex flex-col justify-start items-start gap-2">
                                    <h3 className="self-stretch font-dmsans text-[#193827] text-base font-medium leading-[normal]">
                                        Production Floor Unit
                                    </h3>
                                    <div className="self-stretch inline-flex justify-start items-start gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22" fill="#947534" className="shrink-0 mt-0.5">
                                            <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/>
                                        </svg>
                                        <p className="w-full font-dmsans text-[#193827] text-base font-light leading-5">
                                            Plot - 367, Zone - 5, Bantalla, Kolkata Leather Complex - 743502
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </BlurFade>

                    {/* Form */}
                    <FormClient />
                </div>
            </div>
        </section>
    )
}

export default Contact;
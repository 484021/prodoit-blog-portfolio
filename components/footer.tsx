"use client";

// import { POSTS } from "@/lib/constants";
// // import { POSTS } from "@/lib/constants";
// import { Icons } from "./icons";
import Link from "next/link";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { RssIcon } from "lucide-react";
// import { Input } from "./ui/input";
// import { Button } from "./ui/button";
// import { createSubscriber } from "@/lib/actions";
// import { useFormState } from "react-dom";

export default function Footer() {
  //   const initialState = { message: "", errors: {} };
  //   const [state, dispatch] = useFormState(createSubscriber, initialState);
  return (
    // <footer className="bg-zinc-100 py-8 dark:bg-zinc-800 mt-auto">
    //   <div className="container mx-auto px-4 md:px-6">
    //     <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
    //       <div className="space-y-4">
    //         <div className="flex items-center space-x-2">
    //           <Icons.logo className="h-6 w-6" />
    //           <span className="text-md font-semibold">Santhosh</span>
    //         </div>
    //         <p className="text-zinc-500 dark:text-zinc-400 text-sm">
    //           {/* persuasive website description */}
    //           Crafting captivating digital solutions for brands and individuals.
    //         </p>
    //         <div className="flex space-x-4">
    //           <a
    //             href="https://twitter.com/"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             aria-label="Twitter"
    //           >
    //             <Icons.twitter className="h-6 w-6 text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300" />
    //           </a>
    //           <a
    //             href="/"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             aria-label="Github"
    //           >
    //             <Icons.gitHub className="h-6 w-6 text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300" />
    //           </a>
    //         </div>
    //       </div>
    //       <div className="space-y-4">
    //         <h3 className="text-md font-semibold">Blog</h3>
    //         <ul className="space-y-2 text-sm">
    //           {POSTS.map((post) => (
    //             <li key={post.title}>
    //               <Link
    //                 href={post.href}
    //                 className="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300"
    //               >
    //                 {post.title}
    //               </Link>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //       <div className="space-y-4">
    //         <h3 className="text-md font-semibold">Links</h3>
    //         <ul className="space-y-2 text-sm">
    //           <li>
    //             <a
    //               href="mailto:bhoopalsanthosh@gmail.com"
    //               className="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300"
    //             >
    //               Contact
    //             </a>
    //           </li>
    //           <li>
    //             <Link
    //               href="/terms-of-services"
    //               className="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300"
    //             >
    //               Terms of Services
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               href="/privacy-policy"
    //               className="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300"
    //             >
    //               Privacy Policy
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               href="/sitemap.xml"
    //               className="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300"
    //             >
    //               Sitemap
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //       <div className="space-y-4">
    //         <h3 className="text-md font-semibold">Newsletter</h3>
    //         <p className="text-zinc-500 dark:text-zinc-400 text-sm">
    //           Subscribe to my newsletter to stay up-to-date with the latest
    //           news and updates.
    //         </p>
    //         {/* <form action={dispatch}>
    //           <div className="flex space-x-2">
    //             <Input
    //               type="email"
    //               name="email"
    //               id="email"
    //               placeholder="Enter your email"
    //               className="flex-1"
    //               defaultValue=""
    //               aria-describedby="email-error"
    //             />
    //             <Button>Subscribe</Button>
    //           </div>
    //           <div
    //             id="email-error"
    //             aria-label="polite"
    //             aria-atomic="true"
    //             className="px-1"
    //           >
    //             {state?.errors?.email &&
    //               state.errors.email.map((error: string) => (
    //                 <p key={error} className="text-xs text-red-500">
    //                   {error}
    //                 </p>
    //               ))}
    //             {!state?.errors?.email && (
    //               <p className="text-xs text-green-500">{state?.message}</p>
    //             )}
    //           </div>
    //         </form> */}
    //       </div>
    //     </div>
    //     <div className="mt-8 border-t border-zinc-200 pt-4 text-center text-xs text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
    //     {`© ${new Date().getFullYear()} Santhosh Bhoopal | Prodoit`}
    //     </div>
    //   </div>
    // </footer>

    <footer className="text-center mb-12 mt-12">
      <div className=" flex justify-center space-x-4 tracking-tight">
        <div className="flex items-center group focus:scale-110 hover:scale-110 active:scale-105 transition hover:-translate-y-1">
          <Link href="https://www.linkedin.com/in/sanbho/">linkedin</Link>
          <ArrowTopRightIcon className=" text-violet-500  h-5 w-5 mt-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        </div>
        <div className="flex items-center group focus:scale-110 hover:scale-110 active:scale-105 transition hover:-translate-y-1">
          <Link href="https://github.com/484021">github</Link>
          <ArrowTopRightIcon className=" text-violet-500  h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        </div>
      </div>
      {/* <div className="mt-12 mb-5">
        <Link href="/rss">
          <RssIcon className="mx-auto hover:scale-110 hover:text-orange-500" />
        </Link>
      </div> */}
    </footer>
  );
}

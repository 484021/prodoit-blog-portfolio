import Image from "next/image";
import Link from "next/link";
import santhosh from "@/lib/assets/santhosh.jpg";
import { ContactForm } from "@/components/component/contact-form";

export default function Page() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background px-20">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10 mb-20">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Welcome to My Web Solutions Agency
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I understand that you may have come here searching for something
            specific, and while you might not have found it right away, I assure
            you, you&apos;re exactly where you need to be! This space is dedicated to
            exploring possibilities and uncovering solutions that can elevate
            your digital presence.
          </p>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Let’s connect! Reach out to me directly, and together, we’ll dive
            into your needs, brainstorm fresh ideas, and craft a personalized
            solution that meets your goals. Don’t let uncertainty hold you
            back—your next step toward success is just a message away, and I’m
            excited to help you discover it!
          </p>
          <Link
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Let&apos;s get in touch!
          </Link>
        </div>
        <Image
          src={santhosh}
          width="550"
          height="400"
          alt="Welcome"
          className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
        />
      </div>
      <ContactForm />
    </section>
  );
}

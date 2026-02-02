import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Ready to build your second brain?
          </h2>
          <p className="mt-4">
            DraftPad grows with you. From quick thoughts to long-form notes,
            everything lives in one place — organized, searchable, and always
            accessible.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/dashboard">
                <span>Start Writing</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

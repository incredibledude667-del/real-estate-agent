"use client";

import Image from "next/image";
import Link from "next/link";
import { useTina, tinaField } from "tinacms/dist/react";
import type { LandingQuery } from "../../tina/__generated__/types";

type ThemeKey = "auto" | "beauty" | "estate";

const themes: Record<
  ThemeKey,
  {
    page: string;
    nav: string;
    eyebrow: string;
    headline: string;
    sub: string;
    solidBtn: string;
    ghostBtn: string;
    muted: string;
    hairline: string;
    closing: string;
  }
> = {
  auto: {
    page: "bg-zinc-950 text-zinc-100",
    nav: "border-white/10 bg-zinc-950/75 backdrop-blur-xl",
    eyebrow: "text-orange-400/90",
    headline: "text-white",
    sub: "text-zinc-400",
    solidBtn:
      "rounded-full bg-white px-7 py-3 text-sm font-medium text-zinc-950 shadow-sm transition hover:bg-zinc-200",
    ghostBtn:
      "rounded-full border border-white/20 px-7 py-3 text-sm font-medium text-white transition hover:bg-white/10",
    muted: "text-zinc-500",
    hairline: "border-white/10",
    closing: "bg-zinc-900/80",
  },
  beauty: {
    page: "bg-[#faf8f6] text-stone-900",
    nav: "border-stone-200/80 bg-[#faf8f6]/85 backdrop-blur-xl",
    eyebrow: "text-rose-500",
    headline: "text-stone-900",
    sub: "text-stone-600",
    solidBtn:
      "rounded-full bg-stone-900 px-7 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-stone-800",
    ghostBtn:
      "rounded-full border border-stone-300 px-7 py-3 text-sm font-medium text-stone-800 transition hover:bg-stone-100",
    muted: "text-stone-500",
    hairline: "border-stone-200",
    closing: "bg-white/90",
  },
  estate: {
    page: "bg-black text-zinc-100",
    nav: "border-white/10 bg-black/70 backdrop-blur-xl",
    eyebrow: "text-amber-400/95",
    headline: "text-white",
    sub: "text-zinc-400",
    solidBtn:
      "rounded-full bg-amber-400 px-7 py-3 text-sm font-medium text-black shadow-sm transition hover:bg-amber-300",
    ghostBtn:
      "rounded-full border border-white/25 px-7 py-3 text-sm font-medium text-white transition hover:bg-white/10",
    muted: "text-zinc-500",
    hairline: "border-white/10",
    closing: "bg-zinc-950/90",
  },
};

function resolveTheme(v: string | null | undefined): ThemeKey {
  if (v === "beauty" || v === "estate") return v;
  return "auto";
}

type ImageFieldName = "heroImage" | "supportImage" | "detailImage";

function MediaBlock({
  src,
  alt,
  priority,
  fieldName,
  land,
}: {
  src: string | null | undefined;
  alt: string;
  priority?: boolean;
  fieldName: ImageFieldName;
  land: LandingQuery["landing"];
}) {
  return (
    <div
      className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-black/5 shadow-[0_32px_120px_-48px_rgba(0,0,0,0.55)] ring-1 ring-black/5"
      data-tina-field={tinaField(land, fieldName)}
      data-tina-field-overlay
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      ) : (
        <div className="flex h-full items-center justify-center bg-gradient-to-br from-zinc-200 to-zinc-400 text-sm text-zinc-700">
          Добавьте фото в Tina
        </div>
      )}
    </div>
  );
}

export default function LandingApple(props: {
  query: string;
  variables: { relativePath: string };
  data: LandingQuery;
}) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const land = data.landing;
  const t = themes[resolveTheme(land.variant)];

  return (
    <div className={`min-h-svh ${t.page}`}>
      <header
        className={`sticky top-0 z-40 border-b ${t.nav}`}
        aria-label="Primary"
      >
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-5 sm:h-16 sm:px-8">
          <Link
            href="/"
            className={`text-[15px] font-semibold tracking-tight sm:text-base ${t.headline}`}
          >
            <span data-tina-field={tinaField(land, "brand")}>{land.brand}</span>
          </Link>
          <div
            className={`max-w-[55%] truncate text-right text-xs sm:max-w-none sm:text-sm ${t.sub}`}
            data-tina-field={tinaField(land, "phone")}
          >
            {land.phone}
          </div>
        </div>
      </header>

      <main>
        <section className="relative isolate min-h-[calc(100svh-3.5rem)] sm:min-h-[calc(100svh-4rem)]">
          <div className="absolute inset-0">
            <div
              className="relative h-full w-full"
              data-tina-field={tinaField(land, "heroImage")}
              data-tina-field-overlay
            >
              {land.heroImage ? (
                <Image
                  src={land.heroImage}
                  alt=""
                  fill
                  priority
                  className="object-cover"
                  sizes="100vw"
                />
              ) : (
                <div className="h-full w-full bg-zinc-800" />
              )}
            </div>
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10"
              aria-hidden
            />
          </div>
          <div className="relative mx-auto flex min-h-[inherit] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-24 sm:pt-32">
            <p
              className={`mb-4 text-xs font-medium uppercase tracking-[0.22em] sm:text-sm ${t.eyebrow}`}
            >
              <span data-tina-field={tinaField(land, "heroEyebrow")}>
                {land.heroEyebrow}
              </span>
            </p>
            <h1
              className="max-w-xl text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:max-w-2xl sm:text-6xl sm:leading-[1.02]"
              data-tina-field={tinaField(land, "heroTitle")}
            >
              {land.heroTitle}
            </h1>
            <p
              className="mt-6 max-w-md text-base leading-relaxed text-white/80 sm:text-lg"
              data-tina-field={tinaField(land, "heroSubtitle")}
            >
              {land.heroSubtitle}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={land.primaryCtaUrl ?? "#"}
                className={t.solidBtn}
                data-tina-field={tinaField(land, "primaryCtaUrl")}
              >
                <span data-tina-field={tinaField(land, "primaryCta")}>
                  {land.primaryCta}
                </span>
              </a>
              <a
                href={land.secondaryCtaUrl ?? "#support"}
                className="rounded-full border border-white/25 px-7 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                data-tina-field={tinaField(land, "secondaryCtaUrl")}
              >
                <span data-tina-field={tinaField(land, "secondaryCta")}>
                  {land.secondaryCta}
                </span>
              </a>
            </div>
          </div>
        </section>

        <section
          id="support"
          className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28"
        >
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p
                className={`text-xs font-medium uppercase tracking-[0.2em] ${t.muted}`}
                data-tina-field={tinaField(land, "supportKicker")}
              >
                {land.supportKicker}
              </p>
              <h2
                className={`mt-4 text-3xl font-semibold tracking-tight sm:text-4xl ${t.headline}`}
                data-tina-field={tinaField(land, "supportTitle")}
              >
                {land.supportTitle}
              </h2>
              <p
                className={`mt-5 max-w-md text-base leading-relaxed ${t.sub}`}
                data-tina-field={tinaField(land, "supportBody")}
              >
                {land.supportBody}
              </p>
            </div>
            <MediaBlock
              src={land.supportImage}
              alt=""
              fieldName="supportImage"
              land={land}
            />
          </div>
        </section>

        <section
          className={`border-y ${t.hairline} mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28`}
        >
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="order-2 lg:order-1">
              <MediaBlock
                src={land.detailImage}
                alt=""
                fieldName="detailImage"
                land={land}
              />
            </div>
            <div className="order-1 lg:order-2">
              <p
                className={`text-xs font-medium uppercase tracking-[0.2em] ${t.muted}`}
                data-tina-field={tinaField(land, "detailKicker")}
              >
                {land.detailKicker}
              </p>
              <h2
                className={`mt-4 text-3xl font-semibold tracking-tight sm:text-4xl ${t.headline}`}
                data-tina-field={tinaField(land, "detailTitle")}
              >
                {land.detailTitle}
              </h2>
              <p
                className={`mt-5 max-w-md text-base leading-relaxed ${t.sub}`}
                data-tina-field={tinaField(land, "detailBody")}
              >
                {land.detailBody}
              </p>
            </div>
          </div>
        </section>

        <section
          className={`mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 ${t.closing}`}
        >
          <div className="rounded-[2rem] border border-black/5 px-8 py-12 text-center sm:px-16 sm:py-16">
            <p
              className={`text-xs font-medium uppercase tracking-[0.2em] ${t.muted}`}
              data-tina-field={tinaField(land, "closingEyebrow")}
            >
              {land.closingEyebrow}
            </p>
            <h2
              className={`mt-4 text-3xl font-semibold tracking-tight sm:text-4xl ${t.headline}`}
              data-tina-field={tinaField(land, "closingTitle")}
            >
              {land.closingTitle}
            </h2>
            <p
              className={`mx-auto mt-5 max-w-lg text-base leading-relaxed ${t.sub}`}
              data-tina-field={tinaField(land, "closingBody")}
            >
              {land.closingBody}
            </p>
            <a
              href={land.closingCtaUrl ?? "#"}
              className={`mt-10 inline-flex ${t.solidBtn}`}
              data-tina-field={tinaField(land, "closingCtaUrl")}
            >
              <span data-tina-field={tinaField(land, "closingCta")}>
                {land.closingCta}
              </span>
            </a>
          </div>
          <p
            className={`mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed ${t.muted}`}
            data-tina-field={tinaField(land, "footerNote")}
          >
            {land.footerNote}
          </p>
        </section>
      </main>

      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
        <a
          href="/admin/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto rounded-full border border-black/10 bg-white/95 px-5 py-2.5 text-sm font-medium text-zinc-900 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.35)] backdrop-blur-md transition hover:bg-white"
        >
          Поменять текст и фото мышкой
        </a>
      </div>
    </div>
  );
}

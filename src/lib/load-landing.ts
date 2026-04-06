import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { LandingDocument } from "../../tina/__generated__/types";
import type { LandingQuery } from "../../tina/__generated__/types";

const landingQueryString: string = LandingDocument;

function str(v: unknown): string | null {
  if (v == null) return null;
  const s = String(v).trim();
  return s === "" ? null : s;
}

export function loadLandingForTina(relativePath: string): {
  data: LandingQuery;
  query: string;
  variables: { relativePath: string };
} {
  const filePath = path.join(process.cwd(), "content/landings", relativePath);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data } = matter(raw);
  const filename = relativePath;
  const basename = filename.replace(/\.md$/, "");

  const landing: LandingQuery["landing"] = {
    __typename: "Landing",
    id: `content/landings/${filename}`,
    brand: str(data.brand) ?? "Brand",
    variant: str(data.variant),
    heroEyebrow: str(data.heroEyebrow),
    heroTitle: str(data.heroTitle),
    heroSubtitle: str(data.heroSubtitle),
    heroImage: str(data.heroImage),
    primaryCta: str(data.primaryCta),
    primaryCtaUrl: str(data.primaryCtaUrl),
    secondaryCta: str(data.secondaryCta),
    secondaryCtaUrl: str(data.secondaryCtaUrl),
    supportKicker: str(data.supportKicker),
    supportTitle: str(data.supportTitle),
    supportBody: str(data.supportBody),
    supportImage: str(data.supportImage),
    detailKicker: str(data.detailKicker),
    detailTitle: str(data.detailTitle),
    detailBody: str(data.detailBody),
    detailImage: str(data.detailImage),
    closingEyebrow: str(data.closingEyebrow),
    closingTitle: str(data.closingTitle),
    closingBody: str(data.closingBody),
    closingCta: str(data.closingCta),
    closingCtaUrl: str(data.closingCtaUrl),
    phone: str(data.phone),
    footerNote: str(data.footerNote),
    _sys: {
      __typename: "SystemInfo",
      filename,
      basename,
      hasReferences: false,
      breadcrumbs: [basename],
      path: `content/landings/${filename}`,
      relativePath: filename,
      extension: ".md",
    },
  };

  return {
    data: { landing },
    query: landingQueryString,
    variables: { relativePath: filename },
  };
}

export { landingQueryString };

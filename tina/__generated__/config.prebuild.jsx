// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "landing",
        label: "Landing",
        path: "content/landings",
        format: "md",
        ui: {
          router: () => "/"
        },
        fields: [
          {
            type: "string",
            name: "brand",
            label: "Brand name",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "variant",
            label: "Visual theme",
            options: ["auto", "beauty", "estate"],
            ui: { component: "select" }
          },
          { type: "string", name: "heroEyebrow", label: "Hero eyebrow" },
          { type: "string", name: "heroTitle", label: "Hero headline" },
          {
            type: "string",
            name: "heroSubtitle",
            label: "Hero subtitle",
            ui: { component: "textarea" }
          },
          {
            type: "image",
            name: "heroImage",
            label: "Hero photo"
          },
          { type: "string", name: "primaryCta", label: "Primary button" },
          { type: "string", name: "primaryCtaUrl", label: "Primary link" },
          { type: "string", name: "secondaryCta", label: "Secondary button" },
          {
            type: "string",
            name: "secondaryCtaUrl",
            label: "Secondary link"
          },
          { type: "string", name: "supportKicker", label: "Support kicker" },
          { type: "string", name: "supportTitle", label: "Support title" },
          {
            type: "string",
            name: "supportBody",
            label: "Support body",
            ui: { component: "textarea" }
          },
          {
            type: "image",
            name: "supportImage",
            label: "Support photo"
          },
          { type: "string", name: "detailKicker", label: "Detail kicker" },
          { type: "string", name: "detailTitle", label: "Detail title" },
          {
            type: "string",
            name: "detailBody",
            label: "Detail body",
            ui: { component: "textarea" }
          },
          {
            type: "image",
            name: "detailImage",
            label: "Detail photo"
          },
          { type: "string", name: "closingEyebrow", label: "Closing eyebrow" },
          { type: "string", name: "closingTitle", label: "Closing title" },
          {
            type: "string",
            name: "closingBody",
            label: "Closing body",
            ui: { component: "textarea" }
          },
          { type: "string", name: "closingCta", label: "Closing button" },
          { type: "string", name: "closingCtaUrl", label: "Closing button link" },
          { type: "string", name: "phone", label: "Phone / contact line" },
          {
            type: "string",
            name: "footerNote",
            label: "Footer note",
            ui: { component: "textarea" }
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};

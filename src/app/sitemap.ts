import type { MetadataRoute } from "next";

const locales = ["ar", "en"] as const;
type Locale = (typeof locales)[number];

const staticPaths = [
    "",          // home
    "about",
    "gallery",
    "careers",
    "clients",
    "contact",
    "get_a_qoute",
    "products",
    "products/color-masterbatch",
    "products/custom-masterbatch-solutions",
    "products/filler-masterbatch",
];

function url(base: string, locale: Locale, path: string) {
    const cleanPath = path ? `/${path}` : "";
    return `${base}/${locale}${cleanPath}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
    const now = new Date();

    // كل صفحة “canonical” هنعملها entry واحد ونحط alternates للغتين
    return staticPaths.map((path) => ({
        url: url(baseUrl, "en", path), // اختار واحدة كـ canonical (مثلاً en)
        lastModified: now,
        changeFrequency: "weekly",
        priority: path === "" ? 1 : 0.7,

        // hreflang alternates
        alternates: {
            languages: {
                ar: url(baseUrl, "ar", path),
                en: url(baseUrl, "en", path),
            },
        },
    })) as any; // بعض إصدارات TS/Next بتكون صارمة هنا
}

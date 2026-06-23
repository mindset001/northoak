// Source: Internal Memo, ICT Department to MD, 27 March 2026 — "Information for
// website content" — Northoak Global Investment Limited entry. All facts below
// are drawn directly from that memo; nothing here is invented.

export const company = {
  name: "Northoak Global Investment Limited",
  rcNumber: "RC 707217",
  incorporated: "5th September, 2007",
  incorporatedYear: 2007,
  address: "No. 8, Kinshasa Street, Wuse Zone 6, Abuja, Nigeria",
  emails: ["info@northoakglobalinvestment.com", "northoakgil@gmail.com"],
  website: "www.northoakglobalinvestment.com",
};

export const about = {
  eyebrow: "Since 2007",
  heading: "Building Nigeria's infrastructure, one delivery at a time",
  paragraphs: [
    "Northoak Global Investment Limited was incorporated on the 5th of September 2007 as a limited liability company with the aim of providing general contract services, transportation and all types of construction to government and private sector clients both in Nigeria and abroad.",
    "We specialize in the building construction process from concept, design, and procurement. Our company is largely into transportation of petroleum products throughout the country, especially the northern region.",
    "Northoak is most proud of an unparalleled reputation for client service, dedication, successful project delivery, and integrity of staff.",
  ],
};

export const mission =
  "To provide innovative, optimal and strategic services aimed at availing our clients with total solutions to enable them achieve their business objectives and gain a competitive edge in today's business environment.";

export const vision =
  "To be the foremost and leading company in the provision of quality, reliable and affordable services across the country.";

export const philosophy =
  "Each project reveals its own distinct requirements and challenges, requiring a firm of specialists for all stages of the design and construction process — one that can provide leadership to prevent problems, control costs and schedule, assure a safe and accident-free construction site, and deliver a high-quality facility.";

export type Service = {
  title: string;
  description: string;
};

export const coreServices: Service[] = [
  {
    title: "Engineering",
    description:
      "Specialists across every stage of the design and construction process, from concept through to a high-quality, accident-free delivery.",
  },
  {
    title: "Transportation",
    description:
      "Nationwide transportation of petroleum products, with deep operational strength across Nigeria's northern region.",
  },
  {
    title: "Procurement",
    description:
      "End-to-end procurement services for government and private sector clients, built on cost control and schedule discipline.",
  },
  {
    title: "Agricultural Services & Solutions",
    description:
      "Agricultural services and solutions delivered as part of Northoak's general contracting capability.",
  },
];

export const otherServices: Service[] = [
  {
    title: "Water Reticulation",
    description: "Planning and execution of water reticulation works.",
  },
  {
    title: "Borehole Drilling",
    description: "Borehole drilling services for communities and facilities.",
  },
  {
    title: "Equipment Supplies",
    description: "Supply of equipment to government and private sector clients.",
  },
  {
    title: "General Supplies",
    description: "General supply of goods and services on a turnkey basis.",
  },
];

export type Project = {
  title: string;
  client: string;
  category: string;
};

export const projects: Project[] = [
  {
    title: "Replacement and Upgrade of Air-Conditioning System",
    client: "Central Bank of Nigeria (CBN), Kano Branch",
    category: "Engineering & Facilities",
  },
];

export const clients = ["Central Bank of Nigeria (CBN)"];

type Stat = { label: string; value: number; suffix: string; display?: string };

export const stats: Stat[] = [
  { label: "Founded", value: company.incorporatedYear, suffix: "" },
  { label: "Years of operation", value: new Date().getFullYear() - company.incorporatedYear, suffix: "+" },
  { label: "Core service lines", value: coreServices.length + otherServices.length, suffix: "" },
  { label: "RC Number", value: 707217, suffix: "", display: company.rcNumber },
];

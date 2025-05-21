import fetzerImg from "../assets/images/fetzer.PNG";
import mvsImg from "../assets/images/mvs-project.png";
import adfaImg from "../assets/images/adfa.PNG";

const projectsData = [
  {
    id: 1,
    slug: "fetzer-wines",
    title: "Fetzer Wines Migration",
    description: "Full migration to WordPress Multisite.",
    image: fetzerImg,
    projectOverview:
      "Managed the full migration of all Fetzer Wines brand websites from multiple hosting providers and proprietary CMS platforms to a centralized WordPress Multisite setup on Bluehost. Ensured seamless domain transfers and accurately replicated existing site designs, layouts, and features.",
    keyFeatures: [
      "Seamless domain transfers",
      "Replication of existing site designs and layouts",
      "Centralized multisite management"
    ],
    tools: "WordPress Multisite, PHP, MySQL, Bluehost, CSS, HTML, DNS Management",
    outcome: "Successfully migrated all websites without downtime, improving site manageability and scalability.",
    detailLink: "/projects/fetzer-wines",
  },
  {
    id: 2,
    slug: "mountain-valley",
    title: "Mountain Valley Spring",
    description: "Shopify store enhancements.",
    image: mvsImg,
    projectOverview:
      "Worked with Mountain Valley Spring Water to enhance their Shopify store and internal lead management system reporting.",
    keyFeatures: [
      "Created custom landing pages for marketing campaigns",
      "Updated and managed product catalog",
      "Built custom forms to improve conversion rates"
    ],
    tools: ["Shopify", "PHP", "WordPress", "ACF"],
    outcome:
      "Increased conversions and streamlined internal reporting processes.",
    detailLink: "/projects/mountain-valley",
  },
  {
    id: 3,
    slug: "adfa",
    title: "ADFA Website Migration",
    description: "CMS migration to Webflow.",
    image: adfaImg,
    projectOverview:
      "Participated in the migration of the adfa.arkansas.gov website from Malbec CMS to Webflow, focusing on rebuilding the Files & Documents section.",
    keyFeatures: [
      "Rebuilt complex hierarchical categories",
      "Migrated documents and files without data loss",
      "Improved CMS usability"
    ],
    tools: ["Webflow", "React", "Chart.js", "Tailwind"],
    outcome:
      "Delivered a fully functional and user-friendly site on Webflow.",
    detailLink: "/projects/adfa",
  },
];

export default projectsData;

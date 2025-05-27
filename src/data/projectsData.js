import fetzerImg from "../assets/images/fetzer.PNG";
import mvsImg from "../assets/images/mvs-project.png";
import adfaImg from "../assets/images/adfa.PNG";
import rebelImg from "../assets/images/rebel.png";
import natfImg from "../assets/images/natf.png";
import vdgnImg from "../assets/images/vdgn.PNG";

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
    tools: "Retool, Python, PostgreSQL, Google Analytics",
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
    tools: "Webflow, Ruby on Rails",
    outcome:
      "Delivered a fully functional and user-friendly site on Webflow.",
    detailLink: "/projects/adfa",
  },
  {
    id: 4,
    slug: "rebel-athletic",
    title: "Rebel Athletic",
    description: "Sales & Reconciliation Dashboard",
    image: rebelImg,
    projectOverview:
      "Developed a custom Retool dashboard for Rebel Athletic to track and manage their Amazon Vendor Central sales. The dashboard consolidates sales data from multiple reports — including Purchase Orders, Invoice Summaries, and Co-op Invoices — and calculates both the total sales for Rebel Athletic products and the amounts owed to the primary (mother) account managing the Vendor Central store.",
    keyFeatures: [
      "Custom Retool dashboard for sales and financial tracking",
      "Automated data fetching from Vendor Central sales reports",
      "Queries to filter Rebel Athletic’s product sales",
      "Consolidated financial calculations from multiple data sources",
      "Automated formulas to compute amounts payable to the main account",
      "User-friendly reporting interface for internal finance and operations teams"
    ],
    tools: "Retool, PostgresQL, Python, Amazon Vendor Central",
    outcome:
      "Streamlined Rebel Athletic’s financial reporting and settlement process within Amazon Vendor Central, reducing manual work, improving accuracy, and ensuring timely financial reconciliations between brands.",
    detailLink: "/projects/rebel-athletic",
  },
 {
    id: 5,
    slug: "natf",
    title: "NATF File Reorganization",
    description: "Python script for reorganizing apprentice files",
    image: natfImg,
    projectOverview:
      "Developed a Python script for the North American Training Foundation (NATF) to reorganize over 7,000 files from their server into individual folders for each apprentice. The script scanned existing files, identified file ownership based on naming conventions and metadata, and automatically sorted them into properly named apprentice folders — significantly reducing manual file management work.",
    keyFeatures: [
      "Automated reorganization of 7,000+ files",
      "Created individual folders for each apprentice",
      "Improved file management and retrieval efficiency",
      "Eliminated manual sorting, saving hours of admin time"
    ],
    tools: "Python, OS Module, File System Automation",
    outcome: "Streamlined NATF’s file management process by fully automating the sorting and organizing of apprentice documents on their server.",
    detailLink: "/projects/natf",
  },
 {
    id: 6,
    slug: "vdgn",
    title: "Vardagen Custom Shopify Dashboard",
    description: "Shopify GraphQL and Retool Integration",
    image: vdgnImg,
    projectOverview:
      "Developed a custom dashboard for Vardagen by integrating Shopify GraphQL API with Retool. The dashboard categorizes buyers based on their purchase behavior, differentiating between POS-only buyers and POS-to-Online buyers. It also tracks the last order made for specific products, providing a deeper insight into customer behavior and sales trends. The integration streamlined Vardagen’s data analysis and reporting capabilities.",
    keyFeatures: [
      "Integration of Shopify GraphQL API with Retool",
      "Categorized buyers based on POS and online purchases",
      "Tracked the last order for specific products",
      "Custom dashboard for real-time sales insights",
      "Improved decision-making by categorizing buyer behavior"
    ],
    tools: "Shopify GraphQL API, Retool, JavaScript, SQL Queries",
    outcome: "Enhanced Vardagen’s ability to analyze buyer trends and product performance through a real-time, customizable dashboard, providing valuable insights for inventory and marketing strategies.",
    detailLink: "/projects/vdgn",
  },
];

export default projectsData;

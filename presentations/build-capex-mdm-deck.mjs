/**
 * Generates presentations/capex-mdm-council-kickoff.pptx
 * Run: node presentations/build-capex-mdm-deck.mjs
 */
import pptxgen from "pptxgenjs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "capex-mdm-council-kickoff.pptx");

const C = {
  navy: "1B2A4A",
  accent: "2E6DA4",
  dark: "333333",
  mid: "555555",
  light: "F4F6F8",
  white: "FFFFFF",
  red: "C0392B",
  amber: "D68910",
  green: "1E8449",
};

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "Control Governance";
pres.company = "CapEx MDM Council";
pres.title = "CapEx Master Data Governance — Council Kickoff";

function addHeader(slide, title, subtitle) {
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0,
    y: 0,
    w: 10,
    h: 0.9,
    fill: { color: C.navy },
    line: { color: C.navy },
  });
  slide.addText(title, {
    x: 0.5,
    y: 0.15,
    w: 9,
    h: 0.55,
    fontSize: 22,
    bold: true,
    color: C.white,
    margin: 0,
  });
  if (subtitle) {
    slide.addText(subtitle, {
      x: 0.5,
      y: 0.95,
      w: 9,
      h: 0.35,
      fontSize: 11,
      color: C.mid,
      margin: 0,
    });
  }
}

function bulletSlide(title, subtitle, bullets, opts = {}) {
  const slide = pres.addSlide();
  addHeader(slide, title, subtitle);
  const textRuns = bullets.map((b) => ({
    text: b,
    options: {
      bullet: opts.numbered ? { type: "number" } : true,
      breakLine: true,
      paraSpaceAfter: 8,
    },
  }));
  slide.addText(textRuns, {
    x: 0.55,
    y: opts.y ?? 1.45,
    w: 8.9,
    h: opts.h ?? 4.0,
    fontSize: opts.fontSize ?? 16,
    color: C.dark,
    valign: "top",
  });
  return slide;
}

function tableSlide(title, subtitle, headers, rows, colW) {
  const slide = pres.addSlide();
  addHeader(slide, title, subtitle);
  const tableRows = [
    headers.map((h) => ({
      text: h,
      options: {
        bold: true,
        color: C.white,
        fill: { color: C.accent },
        fontSize: 9,
        align: "center",
        valign: "middle",
      },
    })),
    ...rows.map((row) =>
      row.map((cell) => ({
        text: cell,
        options: { fontSize: 9, color: C.dark, valign: "middle" },
      }))
    ),
  ];
  slide.addTable(tableRows, {
    x: 0.4,
    y: 1.35,
    w: 9.2,
    colW,
    border: { type: "solid", color: "CCCCCC", pt: 0.5 },
    autoPage: false,
  });
  return slide;
}

// Slide 1 — Title
{
  const slide = pres.addSlide();
  slide.background = { color: C.navy };
  slide.addText("CapEx Master Data Governance", {
    x: 0.6,
    y: 1.6,
    w: 8.8,
    h: 0.9,
    fontSize: 36,
    bold: true,
    color: C.white,
  });
  slide.addText("Council Kickoff", {
    x: 0.6,
    y: 2.45,
    w: 8.8,
    h: 0.6,
    fontSize: 28,
    color: "A8C4E8",
  });
  slide.addText(
    [
      { text: "Purpose: ", options: { bold: true, color: C.white } },
      {
        text: "Ratify CapEx MDM framework, confirm ownership, approve Phase 0–1 mobilization",
        options: { color: "D0DCE8" },
      },
    ],
    { x: 0.6, y: 3.5, w: 8.5, h: 0.5, fontSize: 14 }
  );
  slide.addText("Meeting date: [TBD]  |  Audience: CapEx committee, domain owners, data stewards", {
    x: 0.6,
    y: 4.2,
    w: 8.5,
    h: 0.4,
    fontSize: 12,
    color: "A8C4E8",
  });
  slide.addText("Source: control-governance / architecture / capex-master-data-management-framework.md", {
    x: 0.6,
    y: 5.0,
    w: 8.5,
    h: 0.35,
    fontSize: 10,
    color: "8099B8",
  });
}

// Slide 2 — Executive takeaway
bulletSlide(
  "Cross-domain master data breaks at handoffs — not inside Oracle modules",
  "Executive takeaway",
  [
    "Domain CapEx controls exist in Procurement, Projects, AP, and Fixed Assets — the gap is identifier continuity across boundaries.",
    "Fix the chain with five global identifiers (CapExInvestmentID, ProjectNumber, GlobalAssetTag, SupplierPartyNumber, LocationCode) and ten enterprise DQ rules (MDQ-01–10) before new MDM tooling.",
    "Highest near-term value: L4→L5 investment-to-project linkage and MDQ-01/02 enforcement at requisition.",
  ]
);

// Slide 3 — Decisions
tableSlide(
  "Approve framework, name the chair, and fund Phase 0–1 only",
  "Decision requests",
  ["#", "Decision", "Options", "Recommended"],
  [
    ["D1", "Adopt CapEx MDM framework", "Approve / Revise / Defer", "Approve MDM-1–10"],
    ["D2", "Name MDM Council chair", "Finance / PMO nominee", "CapEx process owner"],
    ["D3", "Ratify identifier policy", "Approve / Workshop formats", "Approve; workshop in Phase 1"],
    ["D4", "Upstream pattern L1–L4", "A: EPM · B: PPM · C: Intake", "Time-box to Phase 1"],
    ["D5", "Fund mobilization", "Yes / No / Partial", "Yes — weeks 1–10 only"],
  ],
  [0.5, 2.4, 2.8, 3.5]
);

// Slide 4 — KPI snapshot
tableSlide(
  "Metrics are defined — baseline and enforce are the gaps",
  "KPI and control health",
  ["KPI / control", "Target", "Current", "Status"],
  [
    ["CXM-01 Reqs w/ valid project + category", "≥ 95%", "Not baselined", "Phase 0"],
    ["CXM-03 CIP aging > 90 days", "< 10%", "Not baselined", "Phase 0"],
    ["CXM-05 FA–GL recon exceptions", "0 material", "Not baselined", "Per close"],
    ["MDQ-01 Valid ProjectNumber + task", "100%", "Not enforced", "Phase 2"],
    ["MDQ-10 Investment ID traceable", "100%", "Not enforced", "Phase 1"],
    ["Handoff SLA H-01–H-06", "≥ 90%", "Not measured", "CXM-07"],
  ],
  [3.2, 1.2, 1.5, 1.5]
);

// Slide 5 — Risks
tableSlide(
  "Seven open risks — three are high severity at capitalization and authorization",
  "Top risks and issue status",
  ["Risk / issue", "Sev", "Owner", "Status", "ETA"],
  [
    ["Investment ID not on project (L4→L5)", "High", "CapEx owner", "Open", "Wk 10"],
    ["Duplicate asset cap (MDQ-09)", "High", "Asset Acct Mgr", "Manual only", "Wk 20"],
    ["Opex on CapEx req (MDQ-02)", "High", "Controllership", "Not blocked", "Wk 16"],
    ["Duplicate / unqualified supplier", "Med", "Supplier MDM", "Partial", "Wk 18"],
    ["CIP not cleared after PIS", "Med", "Asset Accountant", "Open", "Wk 28"],
    ["Upstream pattern undecided", "Med", "CFO delegate", "Open", "Wk 8"],
    ["CapEx funnel distrusted", "Med", "Controllership", "No lineage", "Wk 28"],
  ],
  [3.0, 0.6, 1.5, 1.4, 0.9]
);

// Slide 6 — Root causes
bulletSlide(
  "Boundary master data fails — not in-domain quality",
  "Root-cause themes",
  [
    "No golden keys: H-01–H-06 fail when CapExInvestmentID, ProjectNumber, or GlobalAssetTag break.",
    "Strong domain MD, weak boundary MD: enterprise MDQ-01–10 not operational.",
    "Process gates without data contracts: overlay SLAs exist; required fields and MDQ enforcement do not.",
    "Upstream portfolio disconnected: L1–L4 in EPM/PPM/spreadsheet without L4→L5 cross-reference.",
    "Detection after the fact: post-hoc audit instead of system block at requisition (MDQ-01/02).",
  ]
);

// Slide 7 — Remediation
tableSlide(
  "Ten actions over 28 weeks — stewards before automation",
  "Remediation plan",
  ["Action", "Owner", "Start", "End"],
  [
    ["Ratify MDM + identifier policy", "CapEx owner", "Wk 1", "Wk 1"],
    ["Charter MDM Council + Steward WG", "Ent. data architect", "Wk 1", "Wk 2"],
    ["Baseline MDQ-01/02 (top 3 categories)", "P2P + Control", "Wk 2", "Wk 4"],
    ["Select upstream pattern A/B/C", "Portfolio Forum", "Wk 5", "Wk 8"],
    ["Publish Investment ID ↔ Project cross-ref", "Portfolio steward", "Wk 6", "Wk 10"],
    ["Enforce MDQ-01/02 at requisition", "IT ERP + Proc", "Wk 11", "Wk 16"],
    ["MDQ-09 at FA mass additions", "Asset Accountant", "Wk 14", "Wk 20"],
    ["CapEx funnel + MD quality dashboard", "Control + BI", "Wk 21", "Wk 28"],
  ],
  [4.2, 2.0, 0.9, 0.9]
);

// Slide 8 — Milestones
bulletSlide(
  "Name the chair today and fund weeks 1–10 mobilization",
  "Open decisions and milestones",
  [
    "Open today: Name CapEx process owner / MDM Council chair.",
    "Open today: Confirm stewards — portfolio, project, supplier MDM, asset, GL.",
    "Open today: Limit Phase 0–1 to top 3 asset categories.",
    "Wk 4: Baseline audit — MDQ-01/02 pass rate published.",
    "Wk 8: Upstream pattern A/B/C selected.",
    "Wk 10: L4→L5 cross-reference live; MDQ-10 pilot.",
    "Wk 16: MDQ-01/02 system enforcement on pilot categories.",
    "Wk 28: Certified CapEx funnel dashboard with MD quality overlay.",
  ],
  { fontSize: 14, h: 4.2 }
);

// Slide 9 — Appendix definitions
tableSlide(
  "Appendix — Governed terms",
  "Definitions",
  ["Term", "Definition"],
  [
    ["CapExInvestmentID", "Enterprise ID from intake through retirement"],
    ["ProjectNumber", "Oracle authoritative project ID"],
    ["GlobalAssetTag", "Unique physical asset ID in FA register"],
    ["CIP", "Costs accumulated before place in service"],
    ["PIS", "Depreciation start trigger"],
    ["MDQ-01–10", "Enterprise cross-domain data-quality rules"],
  ],
  [2.5, 6.7]
);

// Slide 10 — Appendix lifecycle
bulletSlide(
  "Appendix — Twelve-stage CapEx lifecycle",
  "L1–L4 upstream · L5–L12 maps to overlay S1–S6",
  [
    "L1 Strategy → L2 Demand → L3 Feasibility → L4 Authorization",
    "L5 Budgeting → L6 Design → L7 Sourcing → L8 Construction",
    "L9 Capitalization → L10 Commissioning → L11 Operational handoff → L12 Retirement",
    "Six data domains: Investment & Portfolio · Project & WBS · Financial Coding · Supplier & Contract · Location & Site · Asset Register",
    "Platform: Oracle Fusion 26B; optional EPM or external PPM for L1–L4",
  ],
  { fontSize: 14 }
);

// Slide 11 — Appendix evidence
bulletSlide(
  "Appendix — Supporting evidence",
  "Repository references",
  [
    "architecture/capex-master-data-management-framework.md",
    "architecture/capex-lifecycle-governance-overlay.md",
    "packages/oracle-fusion-procurement-26b/02-governed-data-and-analytics.md",
    "packages/oracle-fusion-project-management-26b/02-governed-data-and-analytics.md",
    "packages/oracle-fusion-fixed-assets-26b/02-governed-data-and-analytics.md",
    "packages/oracle-fusion-general-ledger-26b/02-governed-data-and-analytics.md",
  ],
  { fontSize: 13 }
);

await pres.writeFile({ fileName: OUT });
console.log("Wrote", OUT);

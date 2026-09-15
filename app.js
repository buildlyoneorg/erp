const modules = [
  {
    title: "Finance & Accounting",
    kicker: "Financial control",
    icon: "FA",
    summary: "Controls the company's financial records and receives the accounting effect of every operating activity.",
    functions: ["Chart of Accounts", "General Ledger", "Accounts Payable", "Accounts Receivable", "Cash & Bank", "Bank Reconciliation", "Petty Cash & Expenses", "Budgets & Cost Centres", "Supplier & Customer Invoices", "Payments & Receipts", "Taxes", "Inventory Accounting", "WIP & FG Accounting", "Product Costing", "Basic Fixed Assets", "Financial Statements"],
    outcome: "Reliable accounts, controlled spending, credible product cost and financial reports management can trust."
  },
  {
    title: "Supply Chain Management",
    kicker: "Buy, receive, store and move",
    icon: "SC",
    summary: "Brings Procurement, Supplier Management, Stores & Inventory and Logistics into one connected group.",
    functions: ["Purchase Requisitions", "Approvals", "RFQs & Quotations", "Supplier Evaluation", "Purchase Orders", "Supplier Onboarding", "Contracts & Price Lists", "Goods Receiving & GRN", "Warehouses & Bins", "Stock Issues & Returns", "Transfers & Counts", "Batch/Lot Tracking", "Reorder Controls", "Inbound Logistics", "Dispatch & Delivery", "Proof of Delivery"],
    outcome: "Every commitment, delivery, stock movement and transport activity remains visible and traceable."
  },
  {
    title: "Manufacturing & Production",
    kicker: "Materials into finished goods",
    icon: "MP",
    summary: "Controls how materials become semi-finished and finished products across every production stage.",
    functions: ["Product Master", "BOMs, Recipes & Formulas", "Production Routes", "Planning & MRP", "Manufacturing Orders", "Production Batches", "Material Reservation & Issue", "WIP", "Semi-Finished Goods", "Process, Split & Pack", "Output Recording", "Yield & Process Loss", "Waste, Scrap & By-Products", "Rework", "Finished-Goods Receipt", "Production Cost & Variance"],
    outcome: "Accurate production quantities and costs, with nothing disappearing between raw material and finished product."
  },
  {
    title: "Quality Management",
    kicker: "Inspect, hold and release",
    icon: "QM",
    summary: "Applies quality control to incoming materials, production stages, finished goods and returns.",
    functions: ["Quality Specifications", "Incoming Inspection", "In-Process Checks", "Final Inspection", "Sampling & Test Results", "Accept / Reject / Quarantine", "Partial Acceptance", "Deviation & Concession", "Non-Conformance", "Corrective Actions", "Supplier Quality", "Customer Complaints", "Quality Certificates", "Recall & Traceability"],
    outcome: "Only approved material can be consumed and only released finished goods can be sold."
  },
  {
    title: "Sales & Distribution",
    kicker: "Order to delivery and cash",
    icon: "SD",
    summary: "Manages customers and finished goods from quotation and order through delivery, invoice and collection.",
    functions: ["Customers & Distributors", "Credit Limits & Terms", "Price Lists", "Sales Quotations", "Sales Orders", "Price & Discount Approval", "Stock Availability", "FG Reservation", "Picking & Dispatch", "Delivery & POD", "Customer Invoicing", "Receivables", "Payments & Statements", "Returns", "Credit & Debit Notes", "Sales & Margin Reports"],
    outcome: "Sales promises are tied to released stock, approved pricing, completed delivery and collectible invoices."
  },
  {
    title: "Enterprise Controls & Information",
    kicker: "Governance across the ERP",
    icon: "EC",
    summary: "Provides the common approvals, access, audit and management information used by every ERP group.",
    functions: ["Companies, Sites & Departments", "Users, Roles & Permissions", "Approval Workflows", "Approval Limits", "Delegation & Escalation", "Separation of Duties", "Audit Trail", "Documents & Comments", "Notifications", "Master-Data Control", "Transaction Numbering", "Period & Backdating Controls", "Reversals & Corrections", "Exception Monitoring", "Executive Dashboards", "Department Reports"],
    outcome: "Management can see what is waiting, what changed, who approved it and where attention is required."
  }
];

const flow = [
  { name: "Plan & Budget", owner: "Finance & Management", description: "Management sets budgets and demand expectations before money is committed or production is released.", records: "Budget · Demand forecast · Production plan", result: "Approved demand and spending limits" },
  { name: "Purchase", owner: "Supply Chain", description: "A need becomes an approved requisition, competitive sourcing decision and purchase order.", records: "PR · RFQ · Evaluation · PO", result: "Controlled supplier commitment" },
  { name: "Receive", owner: "Supply Chain & Quality", description: "The company confirms what arrived, its quantity, condition and inspection status before it becomes usable stock.", records: "Gate entry · Weight ticket · GRN · Incoming QC", result: "Accepted, rejected or quarantined receipt" },
  { name: "Store", owner: "Stores & Inventory", description: "Released material is placed in a known location and tracked through every issue, return, transfer and count.", records: "Receipt lot · Bin · Stock ledger", result: "Visible quantity, status and value" },
  { name: "Produce", owner: "Manufacturing", description: "Approved materials move into WIP and through the required processing, conversion and packing stages.", records: "MO · Batch · Work order · WIP transfer", result: "Traceable semi-finished and finished output" },
  { name: "Inspect", owner: "Quality", description: "Quality tests the product at defined checkpoints and controls whether it can progress or be sold.", records: "IPQC · FQC · NCR · Release", result: "Released, held, rejected or rework decision" },
  { name: "Sell", owner: "Sales & Finance", description: "Customer demand is checked against price, credit and available released finished goods.", records: "Quotation · SO · Reservation", result: "Approved and fulfilable customer order" },
  { name: "Deliver", owner: "Warehouse & Logistics", description: "The correct lot is picked, loaded, dispatched and confirmed at the customer location.", records: "Pick list · Shipment · DN · POD", result: "Delivered goods with proof and traceability" },
  { name: "Account", owner: "Finance & Management", description: "Invoices, payments, stock value, production cost and balances reconcile into management and financial reporting.", records: "Invoice · Receipt/Payment · Journal · Reports", result: "Trusted financial position and performance" }
];

const moduleGrid = document.querySelector("#moduleGrid");
const dialog = document.querySelector("#moduleDialog");
const closeDialog = document.querySelector("#closeDialog");

modules.forEach((module, index) => {
  const card = document.createElement("button");
  card.type = "button";
  card.className = "module-card";
  card.innerHTML = `
    <span class="module-top"><span>0${index + 1}</span><span>${module.functions.length} functions</span></span>
    <span class="module-icon" aria-hidden="true">${module.icon}</span>
    <h3>${module.title}</h3>
    <p>${module.summary}</p>
    <span class="module-link">View included functions →</span>`;
  card.addEventListener("click", () => openModule(module, index));
  moduleGrid.appendChild(card);
});

function openModule(module, index) {
  document.querySelector("#dialogIndex").textContent = `0${index + 1}`;
  document.querySelector("#dialogKicker").textContent = module.kicker;
  document.querySelector("#dialogTitle").textContent = module.title;
  document.querySelector("#dialogSummary").textContent = module.summary;
  document.querySelector("#dialogFunctions").innerHTML = module.functions.map(item => `<li>${item}</li>`).join("");
  document.querySelector("#dialogOutcome").textContent = module.outcome;
  dialog.showModal();
}

closeDialog.addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => {
  if (event.target === dialog) dialog.close();
});

const flowTrack = document.querySelector("#flowTrack");
flow.forEach((step, index) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `flow-step${index === 0 ? " active" : ""}`;
  button.setAttribute("role", "listitem");
  button.setAttribute("aria-pressed", index === 0 ? "true" : "false");
  button.innerHTML = `<small>0${index + 1}</small><strong>${step.name}</strong>`;
  button.addEventListener("click", () => selectFlow(index));
  flowTrack.appendChild(button);
});

function selectFlow(index) {
  const step = flow[index];
  document.querySelectorAll(".flow-step").forEach((button, buttonIndex) => {
    const active = buttonIndex === index;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", active ? "true" : "false");
  });
  document.querySelector("#flowNumber").textContent = `0${index + 1}`;
  document.querySelector("#flowOwner").textContent = step.owner;
  document.querySelector("#flowName").textContent = step.name;
  document.querySelector("#flowDescription").textContent = step.description;
  document.querySelector("#flowRecords").textContent = step.records;
  document.querySelector("#flowResult").textContent = step.result;
}

selectFlow(0);

document.querySelectorAll("[data-scope]").forEach(tab => {
  tab.addEventListener("click", () => {
    const core = tab.dataset.scope === "core";
    document.querySelector("#coreTab").setAttribute("aria-selected", core ? "true" : "false");
    document.querySelector("#futureTab").setAttribute("aria-selected", core ? "false" : "true");
    document.querySelector("#corePanel").hidden = !core;
    document.querySelector("#futurePanel").hidden = core;
  });
});

document.querySelector("#printButton").addEventListener("click", () => window.print());

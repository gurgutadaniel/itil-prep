// 50 hard-mode ITIL 5 Foundation exam questions
// Format matches the example provided by the user.
// These are original scenario-based questions written to test precise
// understanding of ITIL 5 (and retained ITIL 4) concepts — not reproductions
// of any official/copyrighted exam bank.

export const questions = [
  {
    "q": "A global organization introduces an AI-enabled digital service. The technical team measures success only through system availability and response time. However, business stakeholders complain that the service does not support their desired outcomes. According to ITIL 5, what should the organization focus on first?",
    "options": [
      "Improving infrastructure performance metrics because technical excellence creates value automatically",
      "Understanding how stakeholders perceive value and adjusting the service accordingly",
      "Replacing the AI solution with a traditional service model",
      "Creating additional operational procedures to control the service"
    ],
    "answer": 1,
    "explanation": "ITIL emphasizes value co-creation. A service is successful only when it enables desired outcomes for stakeholders, not only when technical metrics are good."
  },
  {
    "q": "A digital product vendor supplies a component that a service provider embeds into a customer-facing product. The vendor has no direct relationship with the end users and does not participate in defining outcomes. Which statement correctly classifies this arrangement?",
    "options": [
      "This is a collaborative (partnership) relationship, because the vendor's component is essential to the product",
      "This is a basic service relationship between the service provider and the vendor, separate from the cooperative relationship between the provider and the consumer",
      "The vendor is automatically a sponsor, since it funds the development of the component",
      "No service relationship exists because the vendor does not interact with users directly"
    ],
    "answer": 1,
    "explanation": "A digital product vendor supplying a component without co-defining outcomes is a basic relationship (transactional supply), distinct from whatever relationship (basic/cooperative/collaborative) exists between the provider and the actual consumer."
  },
  {
    "q": "During a retrospective, a team notices that a change was approved quickly by an emergency change authority but caused a major outage. Some team members argue the guiding principle 'progress iteratively with feedback' was violated; others argue 'keep it simple and practical' was the one broken. What is the most defensible assessment?",
    "options": [
      "Neither principle applies to emergency changes, since emergency changes are exempt from guiding principles",
      "The principles are not mutually exclusive; the failure likely reflects insufficient feedback loops before deployment, which is squarely 'progress iteratively with feedback', while simplicity is a separate, not necessarily violated, concern",
      "Only 'collaborate and promote visibility' applies, because the emergency CAB should have included more stakeholders",
      "The scenario shows a governance failure, not a guiding-principle failure, so no principle applies"
    ],
    "answer": 1,
    "explanation": "Guiding principles can overlap in relevance but each has a distinct core idea. Deploying without adequate validation loops is most precisely a violation of iterating with feedback; simplicity is not evidenced as the cause unless the change itself was over-engineered, which isn't stated."
  },
  {
    "q": "A service level agreement guarantees 99.95% uptime and is consistently met. Users still report that the service 'doesn't work for them' because it lacks a feature required for their workflow. Which pairing correctly diagnoses this?",
    "options": [
      "Warranty is failing, utility is fine",
      "Utility is failing, warranty is fine",
      "Both utility and warranty are failing simultaneously",
      "This is a value co-creation issue unrelated to utility or warranty"
    ],
    "answer": 1,
    "explanation": "Utility = fitness for purpose (does it do what's needed). Warranty = fitness for use (performance guarantees like uptime). Missing functionality is a utility gap; the uptime SLA being met means warranty holds."
  },
  {
    "q": "An organization's continual improvement register contains 40 open items. Leadership wants to know which ONE step of the continual improvement model they are systematically skipping, given that initiatives are frequently started but rarely evaluated for whether they achieved the intended outcome.",
    "options": [
      "Where do we want to be?",
      "How do we get there?",
      "Did we get there?",
      "What is the vision?"
    ],
    "answer": 2,
    "explanation": "'Did we get there?' is the step that checks whether the target state was achieved and metrics were met — skipping it explains why initiatives close without outcome validation."
  },
  {
    "q": "A service desk agent resolves a recurring issue by applying a workaround documented in the knowledge base, without identifying the underlying cause. Which management practice's core purpose has NOT been fulfilled?",
    "options": [
      "Incident management",
      "Problem management",
      "Service request management",
      "Service configuration management"
    ],
    "answer": 1,
    "explanation": "Incident management successfully restored service (its purpose). Problem management, whose purpose includes identifying and managing causes of incidents, has not been engaged since the root cause is unaddressed."
  },
  {
    "q": "A company adopts ITIL 5's expanded emphasis on sustainability. A project team proposes decommissioning legacy servers to cut carbon footprint, but this would remove a system three regional offices still depend on for compliance reporting. What does ITIL 5 guiding principles suggest should happen?",
    "options": [
      "Proceed immediately, since sustainability outranks all other guiding principles",
      "Balance sustainability goals against 'think and work holistically' and 'optimize and automate' considerations before acting, since guiding principles must be applied together, not in isolation",
      "Cancel the sustainability initiative entirely because compliance reporting cannot ever be disrupted",
      "Delegate the decision solely to the sustainability officer, bypassing the four dimensions"
    ],
    "answer": 1,
    "explanation": "No single guiding principle overrides the others; ITIL explicitly states principles should be applied together and considerations weighed holistically across dependent systems."
  },
  {
    "q": "In the ITIL Value Chain, a request from a customer triggers 'Engage', which passes information to 'Design & transition' to build a new capability, which then requires input from external suppliers via 'Obtain/build', before 'Deliver & support' fulfills the request. Which statement about value chain activities is correct?",
    "options": [
      "Value chain activities must always execute in the fixed sequence Engage → Design & transition → Obtain/build → Deliver & support",
      "Value chain activities are combined in different ways to form value streams, and can be entered/exited in various orders depending on the demand",
      "'Obtain/build' can only be triggered by 'Plan', never by 'Design & transition'",
      "'Deliver & support' cannot occur unless 'Improve' has run first"
    ],
    "answer": 1,
    "explanation": "The six value chain activities are not a rigid pipeline; organizations combine them flexibly into value streams based on the specific demand and scenario."
  },
  {
    "q": "A sponsor authorizes budget for a new service but never uses it. A separate group of employees uses the service daily but has no budget authority. According to ITIL, who defines the requirements the service must meet to be considered successful?",
    "options": [
      "Only the sponsor, since budget authority equals requirement authority",
      "Only the users, since they interact with the service directly",
      "Both roles typically contribute — sponsor articulates outcomes/value justifying investment, while users' experience determines whether utility/warranty are actually delivered",
      "Neither; only the customer role can define requirements"
    ],
    "answer": 2,
    "explanation": "Sponsor, customer, and user are distinguishable roles that can be held by different people; overall success depends on satisfying the outcomes the sponsor is paying for AND the practical experience of users, not one alone."
  },
  {
    "q": "A change is classified as 'standard' because it follows a pre-authorized, low-risk, well-documented procedure. A junior analyst insists it should go through the full change authority approval because 'all changes carry risk.' What is the flaw in the analyst's reasoning?",
    "options": [
      "Standard changes are not really changes at all, so no reasoning about risk applies",
      "Standard changes are pre-authorized precisely because their risk is well understood and low, so re-approving them individually adds no value and contradicts the purpose of the standard-change category",
      "The analyst is correct; ITIL 5 requires all changes to go through a change authority regardless of classification",
      "Standard changes only apply to emergency scenarios"
    ],
    "answer": 1,
    "explanation": "Change enablement categorizes changes (standard/normal/emergency) precisely so routine, low-risk changes don't require repeated individual authorization — the risk assessment was already done once at the procedure level."
  },
  {
    "q": "An organization measures its four dimensions of service management and finds: Organizations & People = strong, Information & Technology = strong, Value Streams & Processes = weak, Partners & Suppliers = strong. A consultant claims the weak dimension can be ignored 'since three out of four are healthy.' What is wrong with this claim?",
    "options": [
      "Nothing — dimensions are independently scored and averaged for an overall health metric",
      "The four dimensions are interdependent (PESTLE-influenced) and a weakness in one can undermine value creation regardless of strength in the others, so it cannot simply be averaged away",
      "Value Streams & Processes is not actually one of the four dimensions in ITIL 5",
      "The claim is correct only if the organization operates in a regulated industry"
    ],
    "answer": 1,
    "explanation": "The four dimensions are meant to be viewed holistically; a systemic weakness in one (e.g., poor processes) can bottleneck value delivery even when other dimensions are strong — they aren't averaged."
  },
  {
    "q": "A digital product team ships a feature update weekly using automated pipelines with minimal human review, arguing this exemplifies 'optimize and automate.' A governance reviewer flags this as a guiding-principle violation. Which principle is most likely being under-applied?",
    "options": [
      "Focus on value",
      "Keep it simple and practical",
      "Collaborate and promote visibility",
      "Start where you are"
    ],
    "answer": 2,
    "explanation": "Removing human review can reduce visibility and collaborative oversight; 'optimize and automate' does not exempt a team from ensuring transparency and stakeholder involvement — automation should follow optimization and visibility, not replace it."
  },
  {
    "q": "A newly formed digital transformation office wants to redesign the entire IT operating model from scratch, discarding all existing practices because 'legacy processes are the problem.' Which guiding principle most directly cautions against this approach?",
    "options": [
      "Progress iteratively with feedback",
      "Start where you are",
      "Think and work holistically",
      "Focus on value"
    ],
    "answer": 1,
    "explanation": "'Start where you are' warns against discarding existing capabilities without first assessing what can be reused or built upon — starting from zero is rarely necessary or efficient."
  },
  {
    "q": "A service provider offers 24/7 support but users in a specific region report the service is unusable because response times regularly exceed 10 seconds during their business hours, despite meeting the aggregate global SLA of under 3 seconds average. What does this scenario best illustrate?",
    "options": [
      "Aggregate SLA metrics can mask localized warranty failures that materially affect the experienced value for a subset of users",
      "This is purely a utility problem since the feature set is unaffected",
      "SLAs are irrelevant once a service passes 99% availability globally",
      "The users are misinterpreting warranty as utility"
    ],
    "answer": 0,
    "explanation": "Warranty concerns performance experienced by the actual user base, not just averaged global metrics — regional degradation is a real warranty issue hidden by aggregation."
  },
  {
    "q": "During a service value stream mapping exercise, the team discovers that 'Design & transition' hands off work to 'Obtain/build' and back to 'Design & transition' multiple times before reaching 'Deliver & support.' A stakeholder claims this proves the value chain model is broken. What is the correct response?",
    "options": [
      "The stakeholder is right — value chain activities must not repeat",
      "This is expected; activities can be revisited multiple times within a single value stream as needed, since the value chain is not a linear pipeline",
      "This only happens when 'Improve' has been skipped",
      "Repetition indicates the organization should abandon the ITIL value chain model"
    ],
    "answer": 1,
    "explanation": "Value streams are flexible combinations of value chain activities and commonly loop back and forth between activities (e.g. iterative build/design cycles) — this isn't a flaw in the model."
  },
  {
    "q": "A company treats 'governance' as something only the board handles, separate from daily service management practices. Within the ITIL Value System, why is this framing incomplete?",
    "options": [
      "Governance sits outside the ITIL Value System entirely",
      "Governance directs the whole Value System (evaluate, direct, monitor) and shapes how the value chain and practices operate — it is not isolated from operational activity",
      "Governance is identical to the 'Improve' value chain activity",
      "Governance only applies to organizations with external regulators"
    ],
    "answer": 1,
    "explanation": "In the ITIL Value System, governance (Evaluate–Direct–Monitor) directs and constrains the value chain and practices; it is integrated into, not separate from, operational value creation."
  },
  {
    "q": "A problem manager closes a known error record after a permanent fix is deployed, but does not update the CMDB entries for affected configuration items. Which practice's data integrity has been compromised?",
    "options": [
      "Change enablement",
      "Service configuration management",
      "Release management",
      "Deployment management"
    ],
    "answer": 1,
    "explanation": "Service configuration management maintains accurate information about configuration items and their relationships; failing to update CI records after a fix undermines its purpose regardless of problem management's own success."
  },
  {
    "q": "A team introduces an AI chatbot to triage incidents automatically before human involvement. Six months later, mean-time-to-resolution has worsened because the bot frequently misclassifies complex incidents, delaying escalation. Under ITIL 5's AI governance emphasis, what is the most accurate takeaway?",
    "options": [
      "AI should never be used in incident management",
      "Automation must be governed and validated against outcomes, not adopted purely because it is technologically capable — an ungoverned AI deployment can degrade value",
      "The problem is solely with incident management practice design, unrelated to AI governance",
      "MTTR is not a valid metric once AI is introduced"
    ],
    "answer": 1,
    "explanation": "ITIL 5's AI-native guidance stresses governing AI adoption against real outcomes and risk, not deploying automation for its own sake; a misclassifying bot without oversight is a governance failure."
  },
  {
    "q": "An organization's 'focus on value' initiative results in cutting a monitoring capability that customers never directly see, since it doesn't obviously map to a customer-facing outcome. Post-cut, unnoticed outages increase. What was misapplied?",
    "options": [
      "Nothing — indirect/internal value enablers were correctly deprioritized",
      "'Focus on value' was applied too narrowly to only customer-visible features, ignoring that internal capabilities (like monitoring) enable the warranty aspects (availability, reliability) that customers do value, even if indirectly",
      "This is a 'keep it simple and practical' failure, unrelated to value focus",
      "Monitoring is never considered part of value in ITIL"
    ],
    "answer": 1,
    "explanation": "Value includes enabling capabilities that support warranty and reliability even when invisible to the customer; narrowly equating 'value' with visible features is a common misapplication of the principle."
  },
  {
    "q": "A customer organization insists on defining every operational procedure for a supplier delivering a collaborative (partnership) service, leaving the supplier no autonomy in how outcomes are achieved. What tension does this create relative to the nature of a collaborative relationship?",
    "options": [
      "None — collaborative relationships require the customer to control all procedures",
      "It undermines the collaborative nature, which involves shared risk, mutual objective-setting, and co-creation rather than one party dictating all operational detail to the other",
      "This actually describes a basic relationship, not a partnership issue",
      "Collaborative relationships are only about pricing, not procedures"
    ],
    "answer": 1,
    "explanation": "A collaborative/partnership relationship implies shared goals, mutual investment, and joint decision-making — dictating every procedure resembles a basic/transactional dynamic, contradicting the partnership model."
  },
  {
    "q": "A service provider reports 100% of change requests were approved by the Change Authority within SLA. However, post-implementation reviews show 30% of changes required rollback. What does this combination most likely indicate?",
    "options": [
      "Change enablement is fully successful because approval SLA was met",
      "The approval process may be a procedural checkbox rather than a genuine risk assessment — meeting approval SLA does not equal effective change evaluation",
      "The rollback rate is unrelated to change enablement practice performance",
      "This indicates a problem management failure exclusively"
    ],
    "answer": 1,
    "explanation": "Meeting a procedural SLA (timeliness of approval) is a different measure than the practice achieving its purpose (ensuring changes are successfully implemented with minimized risk) — high rollback rates suggest the evaluation itself is weak."
  },
  {
    "q": "A 'basic' service relationship exists between a small vendor and a customer purchasing a standardized off-the-shelf digital tool with no customization. Later, the customer requests custom integrations and ongoing joint roadmap planning. What should happen to the classification of the relationship?",
    "options": [
      "Nothing changes — relationship types are fixed at initial contract signing",
      "The relationship may evolve toward cooperative or collaborative, since the nature of interaction (joint planning, customization) reflects deeper interdependence than a basic transactional exchange",
      "It becomes a digital product vendor relationship automatically",
      "Custom integration always indicates a basic relationship regardless of planning involvement"
    ],
    "answer": 1,
    "explanation": "Relationship types (basic/cooperative/collaborative) reflect the actual nature and depth of interaction, which can change over time as engagement deepens — they aren't permanently fixed by the original contract type."
  },
  {
    "q": "A continual improvement initiative is stalled because every proposed metric for 'Did we get there?' is disputed by stakeholders as 'not the right measure.' What foundational step was most likely skipped earlier in the model?",
    "options": [
      "'What is the vision?' was skipped, so there's no shared direction to measure against",
      "'Where are we now?' should have defined agreed metrics/targets earlier ('Where do we want to be?') so that success criteria wouldn't be contested this late",
      "'How do we keep the momentum going?' was skipped",
      "This is unrelated to the continual improvement model"
    ],
    "answer": 1,
    "explanation": "Disputes over what counts as 'getting there' usually trace back to '(Where do we want to be?' not producing clear, agreed, measurable targets earlier in the model — that step should define the success criteria used later."
  },
  {
    "q": "An organization's service desk practice is measured purely on average call handling time, driving agents to close tickets quickly without fully resolving user issues, leading to repeat contacts. What ITIL principle-and-practice mismatch does this best illustrate?",
    "options": [
      "The service desk practice's true purpose (being the entry point providing a good experience and effective resolution) is undermined by a metric optimizing a proxy (handling time) rather than actual value/outcome",
      "This shows incident management is broken, not the service desk",
      "Handling time is the correct primary metric per ITIL 5 and repeat contacts are unrelated",
      "This is exclusively a problem management issue"
    ],
    "answer": 0,
    "explanation": "Measuring and rewarding a proxy metric (speed) instead of outcome (resolution quality, user experience) is a classic case of practice purpose being subverted by poorly chosen KPIs — a recurring exam trap."
  },
  {
    "q": "A company claims it has 'adopted ITIL 5' because it renamed its ITIL 4 process documents to reference the new terminology (e.g., 'service relationships' instead of 'service consumer roles') without changing any actual practice behavior. What is the most accurate critique?",
    "options": [
      "This is a valid and sufficient adoption of ITIL 5",
      "Terminology changes alone do not constitute adoption; ITIL 5's value lies in genuinely applying its expanded concepts (co-creation, lifecycle thinking, sustainability, AI governance) to behavior and decision-making, not just relabeling documents",
      "ITIL 5 adoption is purely a documentation exercise by design",
      "This critique doesn't apply since ITIL 4 and ITIL 5 terminology are identical"
    ],
    "answer": 1,
    "explanation": "A frequent 'trap' theme in ITIL exams: frameworks are meant to change practical behavior and decision-making, not just vocabulary — cosmetic relabeling isn't genuine adoption."
  },
  {
    "q": "A supplier delivering a critical component experiences a disruption. The customer organization has no visibility into the supplier's incident status and only finds out about the impact when their own users start reporting problems. Which management practice gap does this best represent?",
    "options": [
      "Supplier management — insufficient integration/communication mechanisms between the organization's and supplier's practices",
      "Service level management, exclusively",
      "Incident management within the customer's organization only",
      "This is not a practice gap; it is unavoidable with external suppliers"
    ],
    "answer": 0,
    "explanation": "Supplier management's purpose includes ensuring suppliers and their performance are managed appropriately, including communication/escalation mechanisms — a blind spot here is a supplier management gap, not just an internal one."
  },
  {
    "q": "A team debates whether 'Engage' or 'Deliver & support' is the correct value chain activity for handling a user's request to reset a password. Which reasoning is correct?",
    "options": [
      "It must be 'Engage' only, since any interaction with a user starts there",
      "It is most directly 'Deliver & support', since fulfilling routine service requests is its core purpose, though 'Engage' may play a minor supporting role in the interaction channel",
      "It must be 'Obtain/build', since resetting a password involves a technical resource",
      "Value chain activities never apply to routine requests, only to major changes"
    ],
    "answer": 1,
    "explanation": "'Deliver & support' covers day-to-day operational delivery of services and requests, including password resets; 'Engage' is more about relationship-building and gathering demand/requirements broadly, not routine fulfillment."
  },
  {
    "q": "A sponsor cuts funding for a service improvement initiative after seeing a dashboard showing 'Green' status on all KPIs, unaware that the KPIs were all output metrics (e.g., number of tickets closed) rather than outcome metrics (e.g., reduction in business disruption). What systemic issue does this reveal?",
    "options": [
      "Sponsors should never see dashboards",
      "A disconnect between measured outputs and actual value/outcomes can mislead decision-makers, undermining the value co-creation this initiative was meant to support",
      "KPI dashboards are inherently unreliable and should be abandoned",
      "This is purely a governance issue with no connection to value co-creation"
    ],
    "answer": 1,
    "explanation": "This tests the recurring exam theme that output metrics ≠ outcome/value metrics; sponsors making decisions on the wrong type of metric can inadvertently harm value co-creation."
  },
  {
    "q": "A release is deployed successfully with zero incidents in the first 24 hours. The release manager declares full success. A senior stakeholder disagrees. What is the most likely valid basis for disagreement?",
    "options": [
      "There is no valid basis; zero incidents in 24 hours defines success",
      "Absence of incidents shortly after release does not confirm the release achieved its intended value/outcomes for users, which may take longer to observe or require explicit outcome measurement",
      "Release management's purpose is solely to avoid incidents",
      "The stakeholder is only disagreeing due to unrelated organizational politics"
    ],
    "answer": 1,
    "explanation": "Technical stability (no incidents) is necessary but not sufficient evidence of value delivery; outcomes and adoption often take longer to assess than 24 hours — a classic 'don't confuse absence of failure with presence of value' trap."
  },
  {
    "q": "A cooperative service relationship is described in a customer contract as if it were a basic relationship — fixed-price, fixed-scope, minimal engagement — but in practice, the customer and provider co-invest in roadmap planning and jointly review outcomes quarterly. Which is more accurate?",
    "options": [
      "The contract's classification is authoritative and overrides actual behavior",
      "The lived nature of the relationship (co-investment, joint review) is cooperative regardless of how the contract labels it, since relationship type reflects actual interaction patterns",
      "This is impossible; contracts and relationship types must always match",
      "Quarterly reviews alone always indicate a collaborative, not cooperative, relationship"
    ],
    "answer": 1,
    "explanation": "Relationship classification (basic/cooperative/collaborative) is about the substance of interaction, not merely contractual labeling — mismatches between paperwork and practice are a recurring nuanced exam theme."
  },
  {
    "q": "A practice owner insists that 'service level management' and 'supplier management' are entirely independent practices with no meaningful overlap. Under what circumstance is this claim most clearly wrong?",
    "options": [
      "It is never wrong; these practices are fully independent by design",
      "When a supplier's performance directly determines whether SLAs to the end customer can be met, the two practices must coordinate — supplier-side SLAs (underpinning agreements) feed into customer-facing service levels",
      "Supplier management does not exist as a distinct practice in ITIL 5",
      "Service level management only concerns internal teams, never suppliers"
    ],
    "answer": 1,
    "explanation": "Practices are not meant to be siloed; supplier performance commonly underpins the organization's ability to meet its own SLAs, requiring coordination between supplier management and service level management."
  },
  {
    "q": "An organization wants to apply 'think and work holistically' but interprets it as 'every decision requires sign-off from every department.' What is the flaw in this interpretation?",
    "options": [
      "There is no flaw; this is the correct application",
      "Holistic thinking means considering interdependencies and end-to-end impact in decisions, not mandating universal bureaucratic sign-off — the latter actually conflicts with 'keep it simple and practical'",
      "Holistic thinking applies only to the four dimensions, never to decision-making processes",
      "This interpretation is correct only for emergency changes"
    ],
    "answer": 1,
    "explanation": "A common exam trap: guiding principles are frequently misapplied as excuses for excessive process. Holistic thinking is about awareness of interdependencies, not universal committee approval, which would violate simplicity."
  },
  {
    "q": "A monitoring practice detects an anomaly and automatically triggers a predefined remediation script without any human review, per the organization's automation policy. The remediation inadvertently causes a service disruption. Whose practice purpose was most directly compromised?",
    "options": [
      "Monitoring and event management — automated response mechanisms were not adequately validated before being trusted to act autonomously",
      "Only incident management, since disruption occurred",
      "Only change enablement, since a script counts as an unauthorized change",
      "No practice purpose was compromised, since automation acted as designed"
    ],
    "answer": 0,
    "explanation": "Monitoring and event management's purpose includes appropriately detecting and responding to events; if automated responses aren't properly validated/governed, the practice has failed its core purpose despite technically 'working as designed'."
  },
  {
    "q": "A team debates whether digital product lifecycle management in ITIL 5 replaces the ITIL 4 service value system, or extends it. What is the accurate relationship?",
    "options": [
      "It replaces the ITIL 4 service value system entirely with a new incompatible model",
      "It extends and builds upon the retained ITIL Value System concepts (guiding principles, governance, value chain, practices, continual improvement) with an explicit lifecycle lens for digital products, not a wholesale replacement",
      "Digital product lifecycle management is unrelated to the ITIL Value System",
      "The two concepts exist in separate, non-interacting frameworks within the same certification"
    ],
    "answer": 1,
    "explanation": "ITIL 5 retains core ITIL 4 structures while adding lifecycle-oriented and product-centric emphasis; it is evolutionary, not a replacement of the underlying value system."
  },
  {
    "q": "A user experience researcher argues that 'user experience' and 'warranty' are the same concept because both relate to how a service 'feels' when used. What is the precise distinction?",
    "options": [
      "They are indeed identical concepts in ITIL 5",
      "Warranty specifically concerns assurance that a product/service meets agreed performance requirements (availability, capacity, security, continuity); user experience is broader, covering perception and interaction quality that may be influenced by, but is not limited to, warranty factors",
      "User experience is a subset of utility only, unrelated to warranty",
      "Warranty only applies to physical products, not digital services"
    ],
    "answer": 1,
    "explanation": "Warranty is a defined, narrower assurance concept (performance-related); user experience is broader and can be shaped by utility, warranty, interface design, support quality, etc. — conflating them is a common imprecision the exam tests."
  },
  {
    "q": "A company's practice for 'workforce and talent management' is scored highly because turnover is low. However, employee engagement surveys reveal widespread disengagement and reluctance to propose improvements. What does this suggest about the chosen metric?",
    "options": [
      "Low turnover is a perfect proxy for practice success; no issue exists",
      "Turnover alone is an incomplete metric — the practice's purpose extends to ensuring the organization has the right people with the right skills/culture engaged in continual improvement, which disengagement directly undermines",
      "This is a facilities management issue, unrelated to workforce and talent management",
      "Employee engagement is not connected to any ITIL practice"
    ],
    "answer": 1,
    "explanation": "Another output-vs-outcome trap: retention (an output/proxy) does not guarantee the practice's real purpose — an engaged, skilled, improvement-oriented workforce — is being achieved."
  },
  {
    "q": "During an exam-style case study, a candidate is told a service 'meets all warranty requirements' and asked whether the service is therefore guaranteed to deliver value. What is the correct reasoning?",
    "options": [
      "Yes, meeting warranty always guarantees value delivery",
      "No — value delivery also depends on utility (fitness for purpose) and the broader co-creation context (stakeholder perception, outcomes achieved); warranty alone is necessary but not sufficient",
      "No, because warranty is irrelevant to value",
      "Yes, but only if the service also has zero incidents reported"
    ],
    "answer": 1,
    "explanation": "This tests the core utility+warranty=value relationship precisely: both dimensions (plus the co-creation context) are required; warranty compliance alone doesn't guarantee value."
  },
  {
    "q": "A CAB (Change Authority) rejects a normal change due to insufficient rollback planning. The requester resubmits it labeled as a 'standard change' to bypass review. What principle and practice failure does this represent?",
    "options": [
      "This is legitimate reclassification and no failure occurs",
      "This misuses the standard-change category (meant for pre-authorized, well-understood, low-risk changes) to circumvent proper risk evaluation — undermining change enablement's purpose and violating 'collaborate and promote visibility'",
      "This is only a documentation error with no practice implications",
      "Standard changes do not require any classification criteria, so this is valid"
    ],
    "answer": 1,
    "explanation": "Gaming classification categories to avoid scrutiny defeats the purpose of change enablement (balancing risk with delivery speed) and reduces transparency — a nuanced but realistic exam scenario."
  },
  {
    "q": "An organization achieves ISO 27001 certification and assumes its information security management practice is therefore 'complete' and needs no further continual improvement. What is wrong with this assumption?",
    "options": [
      "Nothing; certification is the final state of a practice",
      "Certification reflects a point-in-time conformance to a standard, not an exemption from ongoing continual improvement — threats, technology, and business context evolve, requiring the practice to keep adapting",
      "ISO 27001 has no relationship to ITIL practices",
      "Information security management is not considered a practice in ITIL"
    ],
    "answer": 1,
    "explanation": "Continual improvement is meant to apply to every practice at every stage, including certified ones — certification is a milestone, not an endpoint, given evolving risk landscapes."
  },
  {
    "q": "A digital service's 'utility' is defined during initial design and never revisited, even as customer needs evolve over three years. Users increasingly rely on workarounds outside the platform. What ITIL concept explains why this is problematic?",
    "options": [
      "Utility, like value, is not static — it must be continually reassessed against evolving stakeholder needs (co-creation, continual improvement); freezing it at initial design risks the service losing fitness for purpose over time",
      "Utility is fixed by definition and cannot change after design",
      "This is purely a warranty issue, not a utility issue",
      "Workarounds indicate a service desk failure exclusively"
    ],
    "answer": 0,
    "explanation": "Fitness for purpose (utility) must track evolving needs; treating it as a one-time design decision contradicts ITIL's continual improvement and value co-creation philosophy."
  },
  {
    "q": "A practice consultant claims 'service configuration management' and 'IT asset management' are the same practice with different names. What is the precise distinction according to ITIL?",
    "options": [
      "They are indeed the same practice under different labels",
      "IT asset management focuses on planning and managing the full lifecycle and financial/contractual/inventory aspects of assets; service configuration management focuses on ensuring accurate information about CIs and their relationships to support other practices — related but distinct purposes",
      "IT asset management only applies to hardware, and this makes it identical to configuration management for software",
      "Service configuration management is a subset with no distinct purpose of its own"
    ],
    "answer": 1,
    "explanation": "These are two distinct practices with overlapping subject matter but different core purposes (lifecycle/financial/inventory control vs. relationship/configuration accuracy) — a classic fine-distinction exam question."
  },
  {
    "q": "A junior consultant argues that because ITIL 5 is 'AI-native by design,' every management practice must now include an AI component to be compliant. Is this accurate?",
    "options": [
      "Yes, all practices must incorporate AI to be ITIL 5 compliant",
      "No — 'AI-native by design' means the framework provides native guidance for governing and integrating AI where relevant and appropriate, not a mandate that every practice must use AI",
      "AI-native only applies to the service desk practice",
      "ITIL 5 forbids AI usage in most practices except monitoring"
    ],
    "answer": 1,
    "explanation": "'AI-native by design' refers to built-in guidance for governing AI adoption responsibly where it's used — it is not a blanket requirement to inject AI into every practice."
  },
  {
    "q": "A service provider's 'Plan' value chain activity produces a strategic roadmap that is never referenced again by 'Improve' or 'Engage' activities during execution. What systemic risk does this create?",
    "options": [
      "None, since 'Plan' is a one-time activity disconnected from ongoing operations",
      "Strategic direction can drift from operational reality and improvement efforts may become misaligned with overall direction, since value chain activities are meant to interact continuously, not operate in isolation",
      "This is expected behavior; 'Plan' should never be revisited",
      "This only matters if the organization uses Agile methods"
    ],
    "answer": 1,
    "explanation": "Value chain activities are interconnected and meant to inform each other continuously; treating 'Plan' as a disconnected, one-off output risks strategic-operational misalignment."
  },
  {
    "q": "A company measures 'guiding principle adherence' using a single organization-wide numeric score computed by averaging self-assessment ratings across all seven principles. A reviewer flags this approach as fundamentally flawed. Why?",
    "options": [
      "There is nothing flawed about this approach",
      "Guiding principles are contextual — their relative importance shifts depending on the situation, and reducing them to one averaged score obscures which principle(s) are actually critical to a given decision or initiative",
      "Guiding principles cannot be assessed at all under any circumstances",
      "Only 'focus on value' can legitimately be measured; the rest are qualitative only"
    ],
    "answer": 1,
    "explanation": "Guiding principles are meant to be applied contextually, weighing relevance to the specific situation — collapsing them into a single blended score misrepresents how they're meant to guide decisions."
  },
  {
    "q": "A candidate reads a case study describing a service provider who 'delivers what was contractually specified' but stakeholders still feel underserved. Which concept best explains the gap between contractual compliance and perceived value?",
    "options": [
      "Value is co-created and subjectively perceived by stakeholders based on outcomes, experience, and context — meeting a contract's literal terms does not guarantee that perceived value, especially if requirements were static or outcomes/needs evolved",
      "This gap cannot exist if the contract was properly written",
      "Perceived value is irrelevant to ITIL; only contractual compliance matters",
      "This is exclusively a legal issue, outside the scope of service management"
    ],
    "answer": 0,
    "explanation": "ITIL frames value as co-created and perceived, not merely contractually defined — satisfying the letter of an agreement doesn't guarantee stakeholders experience the intended value, especially amid evolving needs."
  },
  {
    "q": "A team wants to skip 'Where are we now?' in the continual improvement model for a new initiative, arguing 'we already know our baseline from last year's audit.' Under what condition would this be a legitimate shortcut, and under what condition would it be risky?",
    "options": [
      "It is always legitimate to skip regardless of time elapsed or context changes",
      "It is legitimate only if the prior baseline remains accurate and relevant to current conditions; if significant time has passed or context has changed materially, skipping risks basing improvement plans on stale, inaccurate data",
      "It is never legitimate to reuse any prior baseline under any circumstances",
      "This step can be skipped only for initiatives sponsored by IT, not the business"
    ],
    "answer": 1,
    "explanation": "Reusing valid, current data is reasonable and efficient; the risk lies in assuming stale data still reflects reality — this tests nuanced judgment rather than a rigid rule."
  },
  {
    "q": "A practice owner for 'monitoring and event management' argues their practice is 'purely technical' and has no connection to value co-creation. What is the counterargument?",
    "options": [
      "The practice owner is correct; monitoring is purely operational with no link to value",
      "Monitoring and event management enables timely detection of conditions affecting warranty (availability, performance) and utility (functionality), which directly underpins the organization's ability to co-create and assure value with stakeholders",
      "Monitoring only relates to governance, not value co-creation",
      "This practice was removed in ITIL 5 and no longer applies"
    ],
    "answer": 1,
    "explanation": "Even 'technical' practices ultimately serve value co-creation by protecting the utility/warranty stakeholders depend on — a recurring exam theme is connecting seemingly operational practices back to value."
  },
  {
    "q": "A vendor proposes an AI governance framework that focuses solely on compliance checklists (e.g., 'model documented: yes/no') without addressing ongoing monitoring of AI decision quality or bias drift over time. Under ITIL 5's approach to responsible AI, what is missing?",
    "options": [
      "Nothing; checklist-based compliance is sufficient for AI governance",
      "Genuine AI governance requires ongoing oversight of outcomes, risk, and ethical considerations over the AI system's lifecycle, not a one-time compliance checklist — this mirrors ITIL's broader continual-improvement philosophy applied to AI",
      "AI governance is unrelated to continual improvement principles",
      "Bias drift is not a legitimate governance concern under ITIL 5"
    ],
    "answer": 1,
    "explanation": "ITIL 5's AI governance guidance reflects the framework's general philosophy: static, one-time compliance is insufficient; ongoing monitoring and improvement is required, especially for evolving AI risk."
  },
  {
    "q": "A candidate is asked to identify the single BEST answer among four technically-true statements about service relationships in a complex multi-tier supply scenario (customer → provider → sub-provider → digital product vendor). What test-taking principle should guide the choice under ITIL 5 exam conventions?",
    "options": [
      "Always choose the most detailed and lengthy option, since detail implies correctness",
      "Choose the option that most completely and precisely reflects ITIL's defined roles and relationship types for the SPECIFIC parties named in the scenario, rather than a generally true but less precisely applicable statement",
      "Always choose the shortest option to save time",
      "Choose whichever option mentions 'value co-creation,' since it is always the correct theme"
    ],
    "answer": 1,
    "explanation": "In 'best answer' style questions, precision and specificity to the exact scenario (correct roles/relationship types for the parties described) determines the best answer — not length, buzzwords, or generic truth."
  },
  {
    "q": "A service is described as having excellent utility and warranty, positive user experience scores, and full guiding-principle alignment documented in an audit — yet the sponsor still cancels funding, citing 'this no longer aligns with our digital product strategy.' What does this scenario ultimately demonstrate?",
    "options": [
      "The sponsor's decision must be wrong since all measurable factors are positive",
      "Value is contextual and tied to strategic fit and evolving organizational priorities, not solely to internal service quality metrics — a service can excel operationally yet still lose value/relevance at the portfolio or strategic level",
      "Utility and warranty guarantee continued funding regardless of strategic context",
      "This indicates a guiding-principle audit was performed incorrectly"
    ],
    "answer": 1,
    "explanation": "This is a high-difficulty synthesis question: it tests whether the candidate understands that operational excellence (utility/warranty/UX) doesn't override strategic/portfolio-level value judgments — value is ultimately contextual and can shift independent of service quality."
  },
  {
    "q": "A 'digital product' team debates whether their internally-built recommendation engine, used only by other internal teams and never exposed externally, still qualifies as a 'service' under ITIL 5's definitions. What is the correct reasoning?",
    "options": [
      "It cannot be a service because it is not customer-facing externally",
      "A service can exist between internal parties — the consuming internal teams act as customers/users of the recommendation engine, and the same utility/warranty/co-creation concepts apply regardless of whether consumption is internal or external",
      "Internal tools are governed by a completely separate framework outside ITIL",
      "It only becomes a service once it is monetized"
    ],
    "answer": 1,
    "explanation": "ITIL's service and value concepts apply to internal consumer relationships just as much as external ones — 'service' is not defined by being customer-facing to the outside world."
  },
  {
    "q": "During a mock exam, a question states a change was 'implemented outside of the normal change process due to time pressure, but was ultimately successful with no negative impact.' Which conclusion is exam-appropriate?",
    "options": [
      "Success justifies bypassing the process, so no practice failure occurred",
      "Even a successful outcome does not validate bypassing change enablement's evaluation and authorization steps — the practice's purpose is to manage risk proactively, and a good outcome from an ungoverned action reflects luck, not a properly functioning practice",
      "This scenario has no bearing on change enablement, since the change succeeded",
      "This is a problem management issue exclusively"
    ],
    "answer": 1,
    "explanation": "A classic 'outcome bias' trap: a lucky successful result from bypassing controls does not retroactively validate the bypass — the practice's purpose (risk management via proper evaluation) was still violated."
  },
  {
    "q": "A stakeholder claims that since ITIL 5 retains roughly 40% of ITIL 4 content unchanged, 'anyone certified in ITIL 4 already effectively knows ITIL 5.' What is the most defensible critique of this claim?",
    "options": [
      "The claim is entirely accurate and no further study is needed",
      "While a substantial core is retained, the newly introduced and modified content (roughly 60% new/modified, including lifecycle thinking, expanded relationships, sustainability, and AI governance) represents materially different exam-relevant knowledge that ITIL 4 certification alone does not cover",
      "ITIL 4 and ITIL 5 are entirely unrelated, sharing no content",
      "The percentage split is irrelevant since exams only test terminology, not concepts"
    ],
    "answer": 1,
    "explanation": "A meaningful majority of content is new or modified, meaning genuine gaps exist despite retained foundations — this tests whether the candidate understands the scale of what's actually new, not just that some overlap exists."
  }
];

/**
 * Legal copy, kept out of site-content.ts because it is long-form prose rather
 * than site data.
 *
 * disclaimerSections is a faithful port of the /disclaimer/ page from the
 * previous WordPress site (TermsFeed plugin). Wording is preserved. The only
 * edit is the company name: the original read "Vibrant, Incs" throughout,
 * which is a typo of the registered name.
 *
 * privacySections is NEW. The old site had no privacy policy (/privacy-policy/
 * returned 404) even though its contact form collected personal data. This is a
 * plain-language draft describing what the site actually does. IT HAS NOT BEEN
 * REVIEWED BY A LAWYER and should be before launch.
 */

export type LegalSection = { heading?: string; body: string[] };

export const legalLastUpdated = "August 2026";

export const disclaimerSections: LegalSection[] = [
  {
    body: [
      "Access to and use of Vibrant, Inc.'s website and its contents are subject to the disclaimers, terms and conditions set forth below, and all applicable laws and regulations in the United States, including all applicable export laws, regulations and restrictions, all of which are subject to change and revision from time to time without prior notice.",
      "Vibrant, Inc. reserves the right to terminate access to this website or take other actions it reasonably believes necessary to comply with the law or to protect its rights. Any access or attempt to access this website for any unauthorized purpose is strictly prohibited."
    ]
  },
  {
    heading: "Trademarks and copyright",
    body: [
      "Except as otherwise identified, the trademarks appearing on this website, whether registered or unregistered, are the property of Vibrant, Inc. Such marks may not be used without the written permission of Vibrant, Inc. or the identified owner of the trademarks.",
      "Except as otherwise identified, the copyright in the content of this website is owned by Vibrant, Inc. No part of Vibrant, Inc.'s website may be copied or reproduced for commercial purposes without the express written permission of Vibrant, Inc. or the identified owner of the information and content. However, one copy of the content on any or all pages of this website may be made by the user for personal use."
    ]
  },
  {
    heading: "Security and system integrity",
    body: [
      "The user acknowledges that electronic communications, databases and websites are subject to errors, malfunctions, tampering and break-ins, or that use thereof may result in damages to the user's systems or operations. While Vibrant, Inc. will implement reasonable precautions to attempt to prevent such occurrences, the user further acknowledges that Vibrant, Inc. does not guarantee such events will not take place and that Vibrant, Inc. will not be liable for any such occurrences.",
      "The user shall be solely responsible for ensuring that any information or content downloaded from Vibrant, Inc.'s website or any other website accessed from Vibrant, Inc.'s website does not contain any virus or other computer software code or subroutine designed to disable, erase, impair or otherwise damage its systems, software or data, and the user shall indemnify, defend and hold Vibrant, Inc. harmless from any liability, claim, cost or damage arising out of any third-party claim or suit caused by such virus or code or subroutine."
    ]
  },
  {
    heading: "Third-party websites",
    body: [
      "Vibrant, Inc. advises all users to exercise discretion while browsing the Internet. Hyperlinks on Vibrant, Inc.'s website and other websites may direct users to websites containing information that some people may find offensive or inappropriate. Such linked websites are not under the control of Vibrant, Inc., and Vibrant, Inc. makes no representations concerning any such websites.",
      "Vibrant, Inc. is not responsible for the accuracy, intellectual property compliance, legality, legitimacy or decency of any information or content contained on any websites accessible directly or indirectly via a hyperlink to or from Vibrant, Inc.'s website."
    ]
  },
  {
    heading: "No professional relationship",
    body: [
      "The information and content provided on Vibrant, Inc.'s website and the user's access of Vibrant, Inc.'s website does not create a client-consultant or any other professional relationship between the user and Vibrant, Inc.",
      "By making this website available, Vibrant, Inc. is not engaged in rendering any industry-related, legal, accounting, tax, consulting, investment or other professional advice or services to the user or any other party. The information and content provided on this website are not intended to be relied upon for making business, investment or other decisions."
    ]
  },
  {
    heading: "Warranties and limitation of liability",
    body: [
      "ALL INFORMATION AND CONTENT ON OR OBTAINED THROUGH THIS WEBSITE ARE PROVIDED “AS IS” AND WITHOUT WARRANTY OF ANY KIND. THE USER HEREBY WAIVES ALL OTHER WARRANTIES RELATING THERETO, INCLUDING BUT NOT LIMITED TO ANY WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE OR WARRANTY AGAINST INTERFERENCE OR INFRINGEMENT. VIBRANT, INC. DOES NOT WARRANT THAT THE USE OF VIBRANT, INC.'S WEBSITE WILL BE UNINTERRUPTED OR ERROR FREE OR THAT ANY ERROR OR DEFECTS WILL BE OR CAN BE CORRECTED. SOME JURISDICTIONS MAY NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES, IN WHICH CASE SOME OF THE ABOVE EXCLUSIONS MAY NOT APPLY TO ALL USERS.",
      "VIBRANT, INC. SHALL NOT IN ANY EVENT BE LIABLE TO ANY USER OR TO ANY THIRD PARTY FOR ANY DIRECT DAMAGES, LOST PROFITS, REVENUES, BUSINESS OPPORTUNITIES OR BUSINESS ADVANTAGES WHATSOEVER, NOR FOR ANY SPECIAL, CONSEQUENTIAL, INDIRECT OR INCIDENTAL LOSSES, DAMAGES OR EXPENSES DIRECTLY OR INDIRECTLY RELATING TO THE USE OR MISUSE OF VIBRANT, INC.'S WEBSITE, OR THE INFORMATION OR CONTENT, WHETHER SUCH CLAIM IS BASED UPON BREACH OF CONTRACT, BREACH OF WARRANTY, NEGLIGENCE, GROSS NEGLIGENCE, STRICT LIABILITY IN TORT OR ANY OTHER THEORY OF RELIEF, OR WHETHER OR NOT VIBRANT, INC. IS INFORMED IN ADVANCE OF THE POSSIBILITY OF SUCH DAMAGES."
    ]
  },
  {
    heading: "Severability and contact",
    body: [
      "If any part of this disclaimer is held to be invalid, the remaining parts will continue to be valid and enforceable.",
      "If the user has any questions or comments regarding Vibrant, Inc.'s website or would like to obtain permission to use any of the information or content on it, please use our contact form."
    ]
  }
];

export const privacySections: LegalSection[] = [
  {
    body: [
      "This policy explains what personal information Vibrant, Inc. collects through vibrantinc.com, why we collect it, and what we do with it. It covers this website only. It does not cover information you give us under a signed client agreement, which is governed by that agreement."
    ]
  },
  {
    heading: "What we collect",
    body: [
      "We collect personal information only when you choose to give it to us. That happens when you submit the contact form on this site. The form asks for your first and last name, work email address, phone number, and optionally your company, the service you are interested in, and a short description of what you are trying to solve.",
      "We do not ask for, and you should not send us, sensitive personal information through this website. That includes government identification numbers, financial account details, health information, and login credentials."
    ]
  },
  {
    heading: "Why we collect it",
    body: [
      "We use the information you submit for one purpose: to respond to your enquiry and, where relevant, to discuss whether we are a fit for the work you described. A senior practitioner reviews your enquiry and contacts you directly.",
      "We do not sell your personal information. We do not share it with third parties for their own marketing. We do not add you to a marketing mailing list on the basis of a contact form submission."
    ]
  },
  {
    heading: "How the form is processed",
    body: [
      "This website is a set of static files and has no database of its own. Contact form submissions are transmitted through a third-party form processing service, which forwards them to our team by email. That provider handles the submission in transit and under its own privacy terms.",
      "Once we receive your enquiry it is held in our business email system, operated by Google Workspace."
    ]
  },
  {
    heading: "Cookies and analytics",
    body: [
      "This website does not set advertising or tracking cookies, and does not build a profile of you across other websites.",
      "If we introduce website analytics in future, we will update this policy to say what is collected before doing so."
    ]
  },
  {
    heading: "How long we keep it",
    body: [
      "We keep enquiry correspondence for as long as needed to respond and to maintain a record of our business communications. If you ask us to delete your enquiry, we will do so unless we are required to retain it."
    ]
  },
  {
    heading: "Your choices",
    body: [
      "You can ask us what personal information we hold about you, ask us to correct it, or ask us to delete it. Email us and we will action the request. Depending on where you live, you may have additional rights under local data protection law.",
      "You are never required to use the contact form. You can call us or email us directly instead. Those details are on our contact page."
    ]
  },
  {
    heading: "Security",
    body: [
      "This site is served over HTTPS. We take reasonable measures to protect the information you send us, but no method of transmission over the Internet is completely secure, and we cannot guarantee absolute security."
    ]
  },
  {
    heading: "Changes and contact",
    body: [
      "We may update this policy from time to time. The date at the top of this page shows when it was last revised.",
      "If you have questions about this policy or about how we handle your information, contact us using the details on our contact page."
    ]
  }
];

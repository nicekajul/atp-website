// ============================================================
// FAQ Data — all categories and items
// ============================================================

export interface FAQItem {
  question: string
  answer: string
}

export interface FAQCategory {
  id: string
  label: string
  icon: string
  items: FAQItem[]
}

export const faqCategories: FAQCategory[] = [
  {
    id: 'getting-started',
    label: 'Getting Started',
    icon: '📖',
    items: [
      {
        question: "I've never published before — where do I start?",
        answer:
          "Start by taking our free 30-second Package Quiz on the website — it asks a few quick questions about your manuscript and goals, then recommends the right package for you. You can also book a free consultation call with our publishing advisors who will walk you through the entire process step by step.",
      },
      {
        question: 'What genres and book types do you work with?',
        answer:
          "We work across all genres and formats — fiction, non-fiction, memoir, biography, business, self-help, children's picture books, early readers, poetry, academic, and more. Our team has experience with both first-time authors and seasoned publishing professionals.",
      },
      {
        question: 'Do you offer a free consultation?',
        answer:
          "Yes. We offer a complimentary publishing consultation where one of our specialists reviews your project, answers your questions, and recommends the best path forward — with no obligation to purchase.",
      },
      {
        question: 'How long does the publishing process take?',
        answer:
          "Typical turnaround is 8–12 weeks for standard publishing packages. Elite and Premium packages may take up to 16 weeks to ensure high-end editorial and marketing execution. Specialty projects like children's books or audiobooks have their own timelines, which are detailed on each service page.",
      },
      {
        question: 'Can I work with you if I live outside the United States?',
        answer:
          "Absolutely. Authors Tranquility Press works with authors worldwide. Our process is fully remote — all communication, file sharing, and approvals are handled digitally. We distribute to global retail platforms including Amazon, IngramSpark, and Barnes & Noble regardless of where you are located.",
      },
      {
        question: 'What do I need to have ready before I get started?',
        answer:
          "For most publishing services, you'll need a completed manuscript (or a draft ready for editing). For design-only services, you may only need your text. Our team will assess your materials during onboarding and let you know exactly what to prepare.",
      },
    ],
  },
  {
    id: 'publishing-packages',
    label: 'Publishing Packages',
    icon: '📦',
    items: [
      {
        question: 'How much does it cost to publish a book?',
        answer:
          "Professional publishing packages range from $599 for basic guided self-publishing to $6,499+ for full-service executive packages. Most authors choose our Professional tier at $2,499 for the best balance of editing, design, and distribution.",
      },
      {
        question: "What's included in each package?",
        answer:
          "Every package includes at least interior formatting, ISBN assignment, and global distribution. Higher tiers add professional editing, custom cover concepts, marketing tools, and dedicated launch support. Visit our Publishing Packages page for a full feature comparison.",
      },
      {
        question: 'Can I upgrade my package later?',
        answer:
          "Absolutely. You can start with a lower-tier package and add services à la carte or upgrade to a higher tier as your publishing needs evolve during the process.",
      },
      {
        question: 'Will my book be available in physical print and digital formats?',
        answer:
          "Yes. All packages include distribution in both print-on-demand (paperback and/or hardcover) and digital (eBook) formats. Your book will be listed on Amazon, Barnes & Noble, and distributed through Ingram's global network of 40,000+ retailers and libraries.",
      },
      {
        question: 'Do you publish books in languages other than English?',
        answer:
          "Yes, we can publish books written in other languages. However, translation services are separate. If you need your manuscript translated before publishing, contact us to discuss your project and we will recommend the right approach.",
      },
    ],
  },
  {
    id: 'editorial-design',
    label: 'Editorial & Design',
    icon: '✏️',
    items: [
      {
        question: 'Which editing service do I need?',
        answer:
          "Most manuscripts benefit from developmental editing first, then line editing, copyediting, and finally proofreading. We offer a free 10-page sample edit to assess your specific needs before you commit to a service.",
      },
      {
        question: 'Do you work with all genres?',
        answer:
          "Yes — fiction, non-fiction, memoir, children's books, academic, and business books are all covered. Our editorial team matches you with an editor experienced in your genre.",
      },
      {
        question: 'Can I provide my own images or artwork for my cover?',
        answer:
          "Yes. You can supply your own images (with proof of license) or we can source premium stock images for your cover. Our designers will incorporate your assets into a professional layout.",
      },
      {
        question: 'What formats do you deliver for book design?',
        answer:
          "We deliver print-ready PDFs for KDP, IngramSpark, and other printers, plus eBook covers in PNG and EPUB-ready formats. All files are formatted to the exact specifications of your chosen distribution platform.",
      },
      {
        question: 'How many revisions are included in design packages?',
        answer:
          "The number of revision rounds depends on your selected package. Standard packages include 2–3 revision rounds. Our Shine-level and Elite packages include unlimited revisions to ensure the final product matches your vision exactly.",
      },
    ],
  },
  {
    id: 'digital-audiobook',
    label: 'Digital & Audiobook',
    icon: '🎧',
    items: [
      {
        question: 'What file formats do you accept for eBook conversion?',
        answer:
          "We work with Word (.docx), Google Docs exports, InDesign (.idml), and plain text. PDFs are accepted with limitations. Our team will review your manuscript format during onboarding.",
      },
      {
        question: 'What eBook formats will I receive?',
        answer:
          "We deliver EPUB and MOBI files, making your book compatible with Kindle, iPad, Android devices, and all major e-reader platforms and apps.",
      },
      {
        question: 'How is the page count determined for eBook pricing?',
        answer:
          "Page count is based on your final manuscript as submitted. If you are unsure of your page count, our team can assess it before you commit to a package.",
      },
      {
        question: 'How much does audiobook production cost?',
        answer:
          "Our audiobook service starts at $4,500 for manuscripts up to 30,000 words. For longer manuscripts, additional words beyond 30,000 are charged at $0.10 per word. For example, a 50,000-word manuscript would be $4,500 + (20,000 × $0.10) = $6,500.",
      },
      {
        question: 'Who will narrate my audiobook?',
        answer:
          "Your audiobook will be narrated by one of our professional voice-over actors who specialize in audiobook production. We match narrators to your genre and tone to ensure the most engaging listening experience for your audience.",
      },
      {
        question: 'What background music is included in audiobook production?',
        answer:
          "We include professionally licensed background music for your intro, chapter transitions, and outro. The music is selected to complement your book's genre and mood, creating a polished and immersive listening experience.",
      },
      {
        question: 'Where will my audiobook be distributed?',
        answer:
          "Your audiobook will be made available on all major platforms including Audible, Amazon, and iTunes, as well as other leading audiobook retailers. We handle the full submission and approval process on your behalf.",
      },
      {
        question: 'How long does audiobook production take?',
        answer:
          "Our typical turnaround time is 5–6 months from manuscript submission to retail availability. Timelines can vary based on manuscript length and production complexity. We'll give you a precise timeline during onboarding.",
      },
    ],
  },
  {
    id: 'marketing-promotion',
    label: 'Marketing & Promotion',
    icon: '📣',
    items: [
      {
        question: 'When should I start marketing my book?',
        answer:
          "Ideally 3–6 months before your launch date. The earlier you start building your audience, the stronger your launch day will be. We recommend combining pre-launch social media, ARC distribution, and press release campaigns for the best results.",
      },
      {
        question: 'How long does it take to receive a book review?',
        answer:
          "Turnaround times vary by platform — typically 4 to 12 weeks. Kirkus Reviews and Publishers Weekly tend to take longer due to high submission volume. ATP will keep you informed throughout the process.",
      },
      {
        question: 'Will my book review be positive?',
        answer:
          "Reviews are independent and honest. While we cannot guarantee outcomes, the platforms we work with are professional and constructive. Many authors use candid feedback to strengthen future editions or marketing messaging.",
      },
      {
        question: 'Can I use my review for marketing purposes?',
        answer:
          "Yes. Once published, you may quote and excerpt your review in press kits, on your author website, in social media posts, and in other promotional materials — in line with each platform's usage guidelines.",
      },
      {
        question: 'What is the Trifecta Review Bundle?',
        answer:
          "The Trifecta combines three independently produced editorial reviews from Kirkus Indie, Clarion by ForeWord, and BlueInk Review. It's our most comprehensive review package and offers the best value for authors seeking wide critical coverage from multiple respected sources.",
      },
      {
        question: 'Do I need to have a professionally published book to enter awards?',
        answer:
          "Most awards on our platform are open to self-published, independently published, and traditionally published books. Eligibility requirements vary by award and are outlined on each award's detail card.",
      },
      {
        question: 'Is winning a literary award guaranteed?',
        answer:
          "No. Awards are judged independently by each organization. ATP handles your submission professionally and accurately, but cannot guarantee a win or shortlisting. The value is in the visibility, credibility, and professional exposure that comes from entering.",
      },
      {
        question: 'Can I enter multiple awards at the same time?',
        answer:
          "Yes. Entering multiple awards simultaneously is a recommended strategy for maximizing recognition opportunities. ATP can manage submissions across multiple award programs on your behalf.",
      },
      {
        question: 'Where is the Times Square billboard located?',
        answer:
          "Your book will be featured on a large-format LED digital billboard at 1560 Broadway — one of the most trafficked and photographed corners in all of Times Square, New York City.",
      },
      {
        question: 'How long does my book appear on the Times Square billboard?',
        answer:
          "Your custom promotional display runs for 15 seconds during each scheduled rotation cycle throughout your campaign period, whether you choose the 24-hour or 5-day package.",
      },
      {
        question: 'Can I use Times Square billboard footage for my own marketing?',
        answer:
          "Absolutely. Your Times Square feature makes excellent content for social media campaigns, press releases, author websites, and interviews. We provide campaign proof and documentation for your PR use.",
      },
    ],
  },
  {
    id: 'specialty-services',
    label: "Children's & Specialty",
    icon: '✨',
    items: [
      {
        question: "What age range are your children's book packages suited for?",
        answer:
          "Our packages are designed for picture books (ages 2–8), early readers (ages 5–10), and middle-grade chapter books (ages 8–12). We tailor illustration style and layout to your target age group during onboarding.",
      },
      {
        question: "What does the illustration level mean in children's book packages?",
        answer:
          "Illustration levels reflect the complexity and detail of the artwork. Level 1 (Sprout) features clean, vibrant character-focused illustrations ideal for picture books. Level 2 (Bloom) includes more detailed scene compositions with richer backgrounds. Level 3 (Shine) delivers fully detailed, multi-layered illustrations with premium visual storytelling suitable for high-end picture books and collectors' editions.",
      },
      {
        question: "Do I need to provide my own illustrator for a children's book?",
        answer:
          "No. Our in-house illustration team handles all artwork based on your manuscript, character descriptions, and creative direction. You will review and approve each illustration before it is finalised.",
      },
      {
        question: "How many revision rounds are included in children's book packages?",
        answer:
          "Sprout includes 3 revision rounds plus 1 post-publication revision. Bloom includes 5 rounds plus 1 post-publication revision. Shine includes unlimited revisions to ensure the final book is exactly as you envisioned.",
      },
      {
        question: "What is the Bologna Book Fair inclusion in the Shine package?",
        answer:
          "The Bologna Children's Book Fair is the world's leading international publishing event for children's content. Your book will be showcased at our ATP stand at the fair, giving it exposure to publishers, agents, and distributors from over 75 countries.",
      },
      {
        question: 'How do ghostwriters capture my voice?',
        answer:
          "We conduct extensive interviews and review any existing writing samples to mirror your tone, vocabulary, and perspective precisely. The goal is for the final manuscript to feel authentically yours — because it is.",
      },
      {
        question: 'Who owns the rights to a ghostwritten book?',
        answer:
          "You own 100% of the rights and the copyright. The ghostwriter receives no royalties or credit unless specifically agreed upon in writing beforehand.",
      },
      {
        question: 'How long does it take to build an author website?',
        answer:
          "Most custom author websites are completed in 3–6 weeks, depending on the complexity, number of books, and content readiness.",
      },
      {
        question: 'Will I be able to update my author website myself?',
        answer:
          "Yes. We build on user-friendly content management systems (CMS) that allow you to add blog posts, update book info, and manage events without any technical knowledge.",
      },
      {
        question: 'Can my author website grow as I release more books?',
        answer:
          "Yes. Every site we build is scalable. You can easily add new series, book pages, and landing campaigns as your publishing career evolves.",
      },
    ],
  },
  {
    id: 'rights-royalties',
    label: 'Rights & Royalties',
    icon: '⚖️',
    items: [
      {
        question: 'Do I retain full rights and royalties?',
        answer:
          "Yes, 100%. At Authors Tranquility Press, you retain all intellectual property rights and receive 100% of the royalties from your book sales. We are your service partner, not your publisher — you own everything.",
      },
      {
        question: "What's the difference between self-publishing and traditional publishing?",
        answer:
          "In traditional publishing, you sign over rights to a publisher who covers production costs but takes the majority of royalties and creative control. With self-publishing through ATP, you pay for services upfront, retain all rights and 100% of royalties, and maintain full creative control over your book.",
      },
      {
        question: 'Will I receive an ISBN for my book?',
        answer:
          "Yes. Every publishing package includes ISBN assignment. Your book receives a unique identifier that makes it discoverable and purchasable through global retail channels, libraries, and book databases.",
      },
      {
        question: 'How do royalties work after my book is published?',
        answer:
          "Royalties from retail sales are paid directly to you by the distribution platform (Amazon KDP, IngramSpark, etc.). ATP does not take a cut of your ongoing book sales — ever. Payout schedules and rates vary by platform, typically ranging from 35% to 70% of list price.",
      },
      {
        question: 'Are payment plans available?',
        answer:
          "Yes. We understand that publishing is an investment. We offer flexible payment arrangements for select packages. Contact our team to discuss options that fit your budget and timeline.",
      },
      {
        question: 'What payment methods do you accept?',
        answer:
          "We accept all major credit and debit cards, bank transfers, and PayPal. For larger packages, milestone-based payment schedules are available. Contact us to discuss the right arrangement for your project.",
      },
      {
        question: 'What is your refund policy?',
        answer:
          "We are committed to your satisfaction. If work has not yet begun on your project, a full refund is available. Once production starts, refunds are prorated based on the work completed. We encourage open communication throughout the process to address any concerns early.",
      },
    ],
  },
]

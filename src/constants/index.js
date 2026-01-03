import {
  TriangleAlert,
  BadgeEuro,
  Gavel,
  IdCard,
  Lightbulb,
  UserStar,
  SearchCheck,
  ScrollText,
} from "lucide-react";

const cards = [
  {
    title: "Fast Performance",
    description:
      "Optimized architecture ensuring fast load times and smooth interactions.",
  },
  {
    title: "Secure by Design",
    description:
      "Built with best practices to keep your data safe and protected.",
  },
  {
    title: "Scalable Solution",
    description: "Designed to grow seamlessly with your business needs.",
  },
];

const howWeHelp = [
  {
    icon: TriangleAlert,

    title: "Sexual harassment",
  },
  {
    icon: BadgeEuro,
    title: "Discrimination",
  },
  {
    icon: Gavel,
    title: "Wrongful termination",
  },
  {
    icon: IdCard,
    title: "Wage and hour violations",
  },
];

const howWeHelpSec = [
  {
    icon: Lightbulb,
    title: "Startups & Entrepreneurs",
  },
  {
    icon: UserStar,
    title: "Counseling",
  },
  {
    icon: SearchCheck,
    title: "Disputes and Investigations",
  },
  {
    icon: ScrollText,
    title: "Competition",
  },
];

const about =[
  {
    id: 1,
    description: "Meredith is a seasoned employment litigator and trusted advisor to both individuals and companies.  ",
  },
    {
    id: 2,
    description: "Meredith has been practicing employment law exclusively for her entire legal career.  She has handled hundreds of employment disputes involving sexual harassment, discrimination, equal pay, trade secrets, whistleblowers, retaliation and restrictive covenants, among others.  She is deeply committed to every case that she selects and optimizes the litigation strategy for her client’s goals, whether that is an early resolution or taking a case to trial.",
  },
    {
    id: 3,
    description: "Meredith translates complex legal issues into business-minded solutions.  She advises individual and corporate clients on all types of employment issues, including employment policies and handbooks, internal investigations, terminations, disability accommodations, and employment agreements.  ",
  },
    {
    id: 4,
    description: "Meredith conducts workplace training programs on harassment prevention, leadership and management skills, diversity, inclusion and respect in the workplace.  She is a frequent presenter at legal and industry conferences on employment law and compliance.",
  },
     {
    id: 5,
    description: "Prior to founding Kaufman Law, Meredith was a partner at Baker McKenzie, a global law firm, and Littler Mendelson, the world’s largest employment and labor practice.  She graduated from Columbia Law School and Duke University",
  }
]

const aboutSec = [
  {
    title: "Education",
    description: "Columbia Law School, J.D., 2008",
    description2: "Duke University, B.A.. 2005"

  },
  {
    title: "BAR Admission",
    description: "New York"
  },
  {
    title: "COURT Admissions",
    description: "U.S. Court of Appeals, 2nd Circuit ",
    description2:"U.S. District Court, Southern District of NY",
    description3:"U.S. District Court, Eastern District of NY"

  }
]

  const accordionItems = [
    {
      id:1,
      icon: TriangleAlert,
      title: "Sexual Harassment",
      content:
        "Sexual harassment continues to be one of the most pervasive problems in our workplaces.  Many people who experience sexual harassment at work unfortunately feel they must suffer in silence or risk retaliation for coming forward.  Our firm can help whether you have experienced sexual harassment or retaliation for resisting a sexual advance or reporting harassing conduct.",
        title2:"What is sexual harassment",
        content2:"There is no place for sexual harassment in the workplace, whether done by a manager, executive, co-worker, subordinate, client or contractor.   Legal protections against sexual harassment extend beyond the physical workplace.  Behavior that occurs offsite or online can also constitute harassment.",
        title3:"HOW WE HELP",
        content3:"We represent employees and executives who have been subjected to sexual harassment or suffered retaliation for opposing or reporting such conduct.   We also work with companies to remedy and prevent sexual harassment through investigations, trainings and policies."
    },
    {
      id:2,
      icon:BadgeEuro,
      title: "Discrimination",
      content:
        "Workplace discrimination remains a serious and persistent issue that affects employees across all industries. Individuals may face unfair treatment based on protected characteristics, often leaving them feeling marginalized, silenced, or fearful of retaliation if they speak out. Our firm is committed to protecting the rights of those who have experienced discrimination and ensuring accountability under the law.",
        title2:"What Is Discrimination",
        content2:"Discrimination occurs when an employer, supervisor, or organization treats an individual unfairly because of characteristics such as race, gender, age, religion, disability, national origin, or other legally protected statuses. Discriminatory conduct can include unequal pay, denial of promotions, wrongful termination, harassment, or exclusion from opportunities. These protections apply not only within the workplace but also to work-related events, communications, and remote environments.",
        title3:"How We Help",
        content3:"We represent employees and executives who have been subjected to unlawful discrimination or retaliation for asserting their rights. Our firm also advises employers on compliance, internal investigations, and the development of effective workplace policies to prevent discrimination and foster equitable work environments."


    },
    {
      id:3,
      icon: Gavel,
      title:"Wage and Hour Violations",
      content:"Wage and hour violations occur when employers fail to compensate employees fairly and lawfully for their work. These violations can quietly erode an employee’s livelihood over time and often go unnoticed due to complex pay structures or fear of retaliation. Our firm is committed to ensuring that workers receive the full compensation they are legally entitled to",
      title2:"Common Wage and Hour Issues",
      content2:"Wage and hour violations may include unpaid overtime, failure to pay minimum wage, employee misclassification, improper deductions, off-the-clock work, or denial of legally required meal and rest breaks. These issues can affect hourly workers, salaried employees, and independent contractors alike. Employers are required to follow strict labor laws governing pay practices and recordkeeping",
      title3:"Our Approach",
      content3:"We advocate for employees and executives in wage and hour disputes, including individual claims and collective actions. Our firm carefully reviews pay records, employment classifications, and company policies to identify violations and recover unpaid wages. We also advise employers on wage compliance, audits, and policy development to reduce legal exposure and ensure lawful compensation practices"

    },
    {
      id:4,
      icon:IdCard,
      title: "Wrongful Termination",
      content:
        "Wrongful termination occurs when an employee is dismissed in violation of the law or contractual obligations. Losing a job under unfair or unlawful circumstances can have serious financial and emotional consequences. Employees often feel powerless or uncertain about their rights, especially when termination follows retaliation or discriminatory treatment. Our firm is dedicated to protecting employees from unlawful termination practices.",
        title2:"What Is Wrongful Termination",
        content2:"Wrongful termination may arise when an employer terminates an employee for illegal reasons, such as discrimination, retaliation for reporting misconduct, whistleblowing, or exercising legal rights. It can also occur when an employer breaches an employment contract or violates established company policies. Termination decisions made in bad faith or contrary to labor laws may give rise to legal claims",
        title3:"How We Help",
        content3:"We represent employees and executives who have been wrongfully terminated or forced out of their positions. Our firm evaluates the circumstances of each case, advises clients on their legal options, and pursues appropriate remedies through negotiation or litigation. We also counsel employers on lawful termination practices and risk mitigation strategies."
    }
  ];

export { cards, howWeHelp, howWeHelpSec, aboutSec, about, accordionItems };

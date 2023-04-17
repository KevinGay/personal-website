import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  MapIcon,
  BuildingOfficeIcon,
  SparklesIcon,
  TrophyIcon,
} from '@heroicons/react/24/solid';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import headerImage from '../images/header-background.jpg';
import profilepic from '../images/profilepic.jpg';
import {About, ContactSection, ContactType, Intro, HomepageMeta, SkillGroup, Social, TimelineItem} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Kevin Gay Developer Website',
  description: 'Personal Website for Kevin Gay',
};

/**
 * Section definition
 */
export const SectionId = {
  Intro: 'Intro',
  About: 'about',
  Contact: 'contact',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Intro section
 */
export const introData: Intro = {
  imageSrc: headerImage,
  name: `I'm Kevin Gay.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a back-end software engineer based in North Carolina with expertise in AWS, databases, API design and
        implementation, and automated build and deployment. I'm proficient in Typescript/JavaScript and Python, and have
        a proven track record of delivering scalable and high-performing systems, particularly in the financial
        technology industry.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Outside of work, I enjoy playing guitar, surfing, snowboarding, and running. I also enjoy spending quality time
        with my wife and dog and watching sports.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  // TODO: add description?
  // description: ``,
  aboutItems: [
    {label: 'Location', text: 'Charlotte, North Carolina', Icon: MapIcon},
    {label: 'Interests', text: 'Surfing, Playing guitar, Snowboarding', Icon: SparklesIcon},
    {label: 'Sports', text: 'Carolina Panthers, Charlotte FC', Icon: TrophyIcon},
    {label: 'Study', text: 'University of North Carolina Wilmington', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Apiture', Icon: BuildingOfficeIcon},
  ],
};

/**
 * TODO: Add certifications and publications section
 */

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 9,
      },
      {
        name: 'Python',
        level: 5,
      },
      {
        name: 'C#',
        level: 3,
      },
    ],
  },
  {
    name: 'Databases',
    skills: [
      {
        name: 'MySQL',
        level: 9,
      },
      {
        name: 'NoSQL',
        level: 6,
      },
      {
        name: 'Data Warehouses',
        level: 2,
      },
    ],
  },
  {
    name: 'Frontend development (very little)',
    skills: [
      {
        name: 'React',
        level: 2,
      },
      {
        name: 'Angular',
        level: 2,
      },
    ],
  },
];

/**
 * Resume section
 */
export const education: TimelineItem[] = [
  {
    date: '2019',
    location: 'University of North Carolina Wilmington',
    title: 'M.S. Computer Science and Information Systems ',
    content: <p>Grade: 4.0 GPA</p>,
  },
  {
    date: '2017',
    location: 'University of North Carolina Wilmington',
    title: 'B.S. Computer Science, Minor: Mathematics',
    content: (
      <>
        <p>Grade: 3.7 GPA</p>
        <br />
        <p>
          Activities and societies: Upsilon Pi Epsilon Computing Honor Society Chapter President, recipient of Upsilon
          Pi Epsilon honorable mention scholarship in 2017
        </p>
      </>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Nov 2021 - Present',
    location: 'Apiture',
    title: 'Senior Software Engineer',
    content: (
      <ul>
        <li>
          • Worked on several REST APIs, which utilize several AWS services, namely ECS (Docker containers), Lambda, API
          Gateway, CloudFormation, RDS, and DynamoDB. The business logic is handled using TypeScript. The work is done
          as part of a sprint team where tools include JIRA, Confluence, and Bitbucket. Unit tests are written in
          Jasmine and Jest for any additions or changes of features. I also created automated API contract tests for any
          new API endpoints.
        </li>
        <br />
        <li>
          • Designed and implemented a database migration strategy across numerous dev and production environments
          (using Lambda, Jenkins, Gulp, Node, MySQL and TypeORM). This project was later converted to use ECS Fargate
          containers, since Lambda has a runtime limit. This system has been working in production for several years
          now, and is integrated with CICD for releases. This project is definitely my claim to fame thus far.
        </li>
        <br />
        <li>
          • Increased performance of MySQL database by adding indexes based on frequently used queries • Implemented
          schema validation between API specification documents and API request bodies. Validates data types, required
          fields, format types (date-time), and length/precision constraints.
        </li>
        <br />
        <li>• Time zone handling for datetimes (mainly transfer dates)</li>
        <br />
        <li>• Encryption in transit for passwords, tax IDs, and other personal information</li>
        <br />
        <li>
          • Mobile check deposit processing using alerts from a third party. Several processing workflows were developed
          as part of this work, and are controlled by configuration values. The workflows determine when the transaction
          is sent to the core and when notifications are sent.
        </li>
        <br />
        <li>
          • Built custom registration workflows for several clients, including severable configurable banking
          application questions • Write documentation for all new libraries, features, and configurations
        </li>
      </ul>
    ),
  },
  {
    date: 'Jan 2019 - Nov 2021',
    location: 'Apiture',
    title: 'Software Engineer',
    content: (
      <ul>
        <li>
          <li>
            • Built an entire Wire Transfers API, with support for payees and trailblazing for other payment types, such
            as p2p and billpay. This work included database design, API implementation, unit tests (in jest), and API
            tests.
          </li>
        </li>
      </ul>
    ),
  },
  {
    date: 'Apr 2018 - Dec 2018',
    location: 'Apiture',
    title: 'Software Development Intern',
    content: (
      <ul>
        <li>
          • Worked on several serverless REST APIs which utilize the following AWS services: CloudFormation, Lambda, S3,
          DynamoDB, Route53, Cognito, RDS, and API Gateway. The business logic is handled using TypeScript. The work is
          done as part of a sprint team where requirements are managed using Jira and source control was managed using
          Bitbucket. Unit tests were written in Jasmine for any additions or changes of features.
        </li>
        <br />
        <li>• Migrated several microservices from using Sequelize to TypeORM</li>
        <br />
        <li>
          • Created a logging package that logs all requests made to each endpoint. The logger puts the data into an AWS
          Kinesis stream which then inserts the data into DynamoDB tables. Package exists as an internal npm repo in
          nexus
        </li>
        <br />
        <li>• Migrated several microservices from using Sequelize to TypeORM</li>
        <br />
        <li>• Altered specifications of API Designs using Swagger and OpenAPI 2.0</li>
        <br />
        <li>• Improved Jenkins CICD pipeline by adding code coverage checks and detailed unit test reporting</li>
        <br />
        <li>• Added to CloudFormation deployment scripts using serverless package</li>
      </ul>
    ),
  },
  {
    date: 'Nov 2017 - Apr 2018',
    location: 'Apiture',
    title: 'Software Quality Assurance Intern',
    content: (
      <ul>
        <li>
          • Created 100s of automated tests for the user interfaces of multiple web applications and a mobile
          application (on both iOS and Android) using Java and Selenium WebDriver
        </li>
        <br />
        <li>
          • Built the framework for the UI tests of a new web application using TypeScript, webdriver.io, and the Page
          Object Model design pattern. Automated UI tests are still being developed over this framework
        </li>
        <br />
        <li>
          • Implemented a java package that checks the API calls to ensure what is being returned is displayed correctly
          on the UI
        </li>
        <br />
        <li>• Created test cases in TestRails</li>
      </ul>
    ),
  },
  {
    date: 'Dec 2015 - May 2019',
    location: 'Face Aging Group',
    title: 'Graduate Researcher / Software Engineer',
    content: (
      <ul>
        <li>
          • Contracted by army to build circuit board component recognition system. I built the front-end component that
          abstracts the back-end deep learning networks, displays the results, allows the user to edit and save the
          results, and processes the images to optimize the inputs of the network (Using PyQt/Python)
        </li>
        <br />
        <li>
          • Designed and built multiple versions of an image annotation tool. The tool is used by entire group for
          annotating images for PCB component recognition, emotion detection, and tattoo/piercing detection for Oak
          Ridge National Lab and the Army
        </li>
        <br />
        <li>
          • Created an HD dataset of over 200 printed circuit boards using image stacking and stitching technology
        </li>
        <br />
        <li>• Designed the lab's website in WordPress</li>
        <li>• Used webscraping (Selenium WebDriver) and face processing tools to create datsets</li>
        <li>
          • Presented on work numerous times for the CIA, Army, and Chancellor and Deans of UNCW. Also presented for
          general public at a few conferences
        </li>
      </ul>
    ),
  },
];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Connect with me via the following links.',
  items: [
    {
      type: ContactType.Email,
      text: '12.kevin.gay@gmail.com',
      href: 'mailto:12.kevin.gay@gmail.com',
    },
    {
      type: ContactType.LinkedIn,
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/kevin-m-gay/',
    },
    {
      type: ContactType.Github,
      text: 'kevingay',
      href: 'https://github.com/kevingay',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/kevingay'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/kevin-m-gay/'},
];

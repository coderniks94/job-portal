import { serverTimestamp, Timestamp } from "firebase/firestore";

const jobs = [
	{
		id: "63e09d8f2076",
		positionName: "Sr Sales Enablement Manager",
		company: {
			id: "d9fd3ee39588",
			name: "Amazon",
			companyLogoUrl: "https://firebasestorage.googleapis.com/v0/b/job-portal-prod.appspot.com/o/amazon_logo.jpeg?alt=media&token=4b4e6640-0415-4752-b90a-777e5f058374",
		},
		location: {
			id: "834ca110ebe1",
			city: "Chicago",
			state: "Illinois",
			country: "USA",
		},
		department: { id: "649670c03b0d", name: "Sales" },
		postedDate: serverTimestamp(new Date("2021-03-25 12:25:00")), //Timestamp.fromDate(new Date("2021-03-25 12:25:00")),
		status: "Open",
		workPersona: "Remote",
		jobDecription:
			"<ul> <li>Proactively engage with the EMEA management team to identify, prioritize, develop, and execute a quarterly enablement plan; create and maintain a local training calendar&nbsp;</li> <li>When developing plans, always think about the Partner and how we can enable them to be an extension of our sales team</li> <li>Identify gaps in knowledge and processes and work with necessary Managers and Directors to ensure rapid deployment of training and tools needed to address.</li> <li>Drive community and collaboration through the wider Enablement team</li> <li>Prioritize needs around 3rd party training and events, work to secure budget, plan and deliver events&nbsp;</li> <li>Participate in the creation and delivery of all enablement activities including Sales Kickoff and other enablement events</li> <li>Coach at the Manager and Director level</li> <li>Leverage assets from the global programs to drive knowledge acquisition and skills development</li> <li>Be maniacal about metrics and impact</li> <li>Build content and facilitate deliveries as appropriate</li> </ul>",
		qualifications:
			"<ul><li>Strong experience in training and enablement, ideally in technology organizations with a demonstrated track record of successfully executing advanced sales training and enablement programs</li><li>Preferably experience working in a sales role</li><li>Work with SMEs (both internal and external) to capture knowledge and real-world experience to be delivered within enablement initiatives and programs</li><li>Determine the appropriate vehicles (training, tools, portals, resources, etc.) to deliver the desired outcomes</li><li>Highly responsive to internal customer requests</li><li>High energy level and a “can do” attitude</li><li>Effective time manager, capable of developing the strategy and delivering/executing on the tactics on multiple projects, on time and on budget</li><li>Ability to maintain a high level of productivity in a fast-paced, team environment while managing multiple competing priorities</li><li>Diplomacy, integrity, and presence that enables you to work effectively at all levels within large organization</li><li>Positive demeanor, with a sense of purpose and the ability to have fun</li><li>Hands on experience and in depth understanding of virtualization, storage and data protection, security and/or cloud computing products will be a significant plus</li><li>Understanding of what motivates your internal customer</li><li>Ability to travel</li><li>Must be fluent in Japanese and Engllish</li><li>Must be authorized to work in Japan already</li></ul>",
		additionalInfo:
			'<p><span>Amazon is an Equal Employment Opportunity Employer. All qualified applicants will receive consideration for employment without regard to race, color, creed, religion, sex, sexual orientation, national origin or nationality, ancestry, age, disability, gender identity or expression, marital status, veteran status or any other category protected by law.</span></p><hr/><p><span>At Amazon, we lead with flexibility and trust in our distributed world of work. <a href="https://www.Amazon.com/content/dam/Amazon-assets/public/en-us/doc-type/other-document/careers/new-world-of-work-personas.pdf">Click here</a> to learn about our work personas: flexible, remote and required-in-office.</span></p>',
	},
	{
		id: "b97b3b464d12",
		positionName: "Sr Software Engineer",
		company: {
			id: "d9fd3ee39588",
			name: "Amazon",
			companyLogoUrl: "https://firebasestorage.googleapis.com/v0/b/job-portal-prod.appspot.com/o/amazon_logo.jpeg?alt=media&token=4b4e6640-0415-4752-b90a-777e5f058374",
		},
		location: {
			id: "40897bf948fd",
			city: "Hyderabad",
			state: "Telangana",
			country: "India",
		},
		department: { id: "649670c03b0d", name: "Sales" },
		postedDate: Timestamp.fromDate(new Date("2021-06-25 11:25:00")),
		status: "Open",
		workPersona: "Remote",
		jobDecription:
			"<ul> <li>Build high-quality, clean, scalable and reusable code by enforcing best practices around software engineering architecture and processes (Code Reviews, Unit testing, etc.)</li> <li>Work with the product owners to understand detailed requirements and own your code from design, implementation, test automation and delivery of high-quality product to our users.</li> <li>Implement software that is simple to use to allow customers to extend and customize the functionality to meet their specific needs</li> <li>Contribute to the design and implementation of new products and features while also enhancing the existing product suite</li> <li>Be a mentor for colleagues and help promote knowledge-sharing<br></li> </ul>",
		qualifications:
			"<ul> <li>4+ years of experience with Java or a similar OO language</li> <li>Passion for JavaScript and the Web as a platform, reusability, and componentization</li> <li>Experience with data structures, algorithms, object-oriented design, design patterns, and performance/scale considerations</li> <li>Experience with any of the modern UI frameworks like Angular, React or Vue</li> <li>Analytical and design skills<br></li> </ul>",
		additionalInfo:
			"<p>Amazon is an Equal Employment Opportunity Employer. All qualified applicants will receive consideration for employment without regard to race, color, creed, religion, sex, sexual orientation, national origin or nationality, ancestry, age, disability, gender identity or expression, marital status, veteran status or any other category protected by law.</p>",
	},
	{
		id: "d0b9473313ac",
		positionName: "Advisory Solution Consultant",
		company: {
			id: "d9fd3ee39588",
			name: "Amazon",
			companyLogoUrl: "https://firebasestorage.googleapis.com/v0/b/job-portal-prod.appspot.com/o/amazon_logo.jpeg?alt=media&token=4b4e6640-0415-4752-b90a-777e5f058374",
		},
		location: {
			id: "834ca110ebe1",
			city: "Chicago",
			state: "Illinois",
			country: "USA",
		},
		department: { id: "649670c03b0d", name: "Sales" },
		postedDate: Timestamp.fromDate(new Date("2021-06-25 11:25:00")),
		status: "Open",
		workPersona: "Remote",
		jobDecription:
			"<p>As a member of our Solution Consulting team, you will have a major impact on our future success by supporting [Employee Experience, Customer Workflow, ITX] Solution Sales. You will guide revenue for one of our  products with the support and partnership of Sales, Product Management, and the executive team. This is a hands-on technical consultant who can go wide and deep on solution delivery and solution positioning during sales cycles.</p><hr/><ul><li>7+ years of pre-sales solution consulting or sales engineering experience in (product specific area)</li><li>Proficiency with the Amazon platform or technical expertise with cloud software solutions</li><li>Experience working collaboratively with product management, product marketing, partners, and professional services</li><li>Territory management skills, including pipeline building and working with Sales counterpart to guide execution excellence</li><li>Travel, as necessary</li></ul>",
		qualifications:
			"<ul><li>7+ years of pre-sales solution consulting or sales engineering experience in (product specific area)</li><li>Proficiency with the Amazon platform or technical expertise with cloud software solutions</li><li>Experience working collaboratively with product management, product marketing, partners, and professional services</li><li>Territory management skills, including pipeline building and working with Sales counterpart to guide execution excellence</li><li>Travel, as necessary</li></ul>",
		additionalInfo:
			"<p>Amazon is an Equal Employment Opportunity Employer. All qualified applicants will receive consideration for employment without regard to race, color, creed, religion, sex, sexual orientation, national origin or nationality, ancestry, age, disability, gender identity or expression, marital status, veteran status or any other category protected by law.</p>",
	},
	{
		id: "517911b102ac",
		positionName: "Senior Manager",
		company: {
			id: "d9fd3ee39588",
			name: "Amazon",
			companyLogoUrl: "https://firebasestorage.googleapis.com/v0/b/job-portal-prod.appspot.com/o/amazon_logo.jpeg?alt=media&token=4b4e6640-0415-4752-b90a-777e5f058374",
		},
		location: {
			id: "834ca110ebe1",
			city: "Chicago",
			state: "Illinois",
			country: "USA",
		},
		department: { id: "649670c03b0d", name: "Sales" },
		postedDate: Timestamp.fromDate(new Date("2021-06-25 11:25:00")),
		status: "Open",
		workPersona: "Remote",
		jobDecription:
			"<p>We’re not yesterday’s IT department, we're Digital Technology. The world around us keeps changing and so do we. We’re redefining what it means to be IT with a mindset centered on transformation, experience, AI-driven automation, innovation, and growth. We’re all about delivering delightful, secure customer and employee experiences that accelerate ServiceNow’s journey to become the defining enterprise software company of the 21st century. And we love co-creating, using, and highlighting our own products to do it.</p>",
		qualifications:
			"<ul><li>Be technically hands on and guide the team leading from the front</li><li>Work closely with the technical product managers to understand detailed requirements and deliver high quality products to our users</li><li>Collaborate closely with other development teams (and managers) across Business Units to help with continuous improvement of the architecture, tools and processes.</li><li>Develop on the best cloud software for businesses using ServiceNow platform.</li><li>Ability to drive roadmap, work across organizational boundaries, and exercise appropriate influence to ensure commitment to customers and product quality.</li><li>Responsible for the overall systems development life cycle.</li><li>Management and execution against project plans and delivery commitments.</li><li>Manage the day-to-day activities of the engineering team within an Agile/Scrum environment.</li></ul>",
		additionalInfo:
			"<p>Amazon is an Equal Employment Opportunity Employer. All qualified applicants will receive consideration for employment without regard to race, color, creed, religion, sex, sexual orientation, national origin or nationality, ancestry, age, disability, gender identity or expression, marital status, veteran status or any other category protected by law.</p>",
	},
	{
		id: "d63d783fee0f",
		positionName: "Sr Revenue Accountant",
		company: {
			id: "9c056b8d8677",
			name: "Meta",
			companyLogoUrl: "https://firebasestorage.googleapis.com/v0/b/job-portal-prod.appspot.com/o/meta_logo.jpeg?alt=media&token=7ea75ce2-2e3d-4a33-aa7d-87b93bf80a2c",
		},
		location: {
			id: "834ca110ebe1",
			city: "Chicago",
			state: "Illinois",
			country: "USA",
		},
		department: { id: "649670c03b0d", name: "Sales" },
		postedDate: Timestamp.fromDate(new Date("2021-06-25 11:25:00")),
		status: "Open",
		workPersona: "Flexible",
		jobDecription:
			"<ul><li>Support month-end revenue accounting close including journal entries preparation, reconciliations, reporting, and audits</li><li>Partner closely with FP&amp;A to bridge forecasts to actuals and understand the business “story” behind the financial results</li><li>Execute and own transaction-related analyses to identify potential gaps or issues and coordinate among team members to address as needed</li><li>Enable deal velocity by providing timely revenue reviews and approvals for a variety of non-standard deal requests</li><li>Regularly support system enhancement projects, new business initiatives, and UATs to drive projects to successful completion</li><li>Liaison with stakeholders across multiple offices and teams (OM, AR, IT, Sales Ops, Deal Desk, etc.)</li><li>Understand the “why” and “how” behind Revenue and Order to Cash business processes to effectively resolve issues</li></ul>",
		qualifications:
			"<ul><li>Working knowledge of US GAAP including ASC 606, as well as prior experience with SOX, internal, and external audits</li><li>3-5 years relevant work experience in Accounting, Finance, or related fields</li><li>CPA or equivalent qualification</li><li>Big Four or Software-as-a-Service (SaaS) revenue accounting experience is a plus</li><li>Full professional proficiency in English is a must</li><li>Strong data analytical skills and proficiency in tools like Excel, Power BI, Alteryx, etc.</li><li>Prior experience with SAP is a plus</li><li>Passion for learning, and the ability to comprehend complex topics quickly</li><li>Effective communicator, able to convey complex ideas in a clear, concise manner</li><li>Great interpersonal skills and ability to work well with diverse cultures&nbsp;&nbsp;&nbsp;</li></ul>",
		additionalInfo:
			'<p><span>At ServiceNow, we lead with flexibility and trust in our distributed world of work. <a href="https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/other-document/careers/new-world-of-work-personas.pdf">Click here</a> to learn about our work personas: flexible, remote and required-in-office.</span></p>',
	},
	{
		id: "0e028c84f3ef",
		positionName: "Sr Sales Enablement Manager",
		company: {
			id: "9c056b8d8677",
			name: "Meta",
			companyLogoUrl: "https://firebasestorage.googleapis.com/v0/b/job-portal-prod.appspot.com/o/meta_logo.jpeg?alt=media&token=7ea75ce2-2e3d-4a33-aa7d-87b93bf80a2c",
		},
		location: {
			id: "40897bf948fd",
			city: "Hyderabad",
			state: "Telangana",
			country: "India",
		},
		department: { id: "649670c03b0d", name: "Sales" },
		postedDate: Timestamp.fromDate(new Date("2021-06-25 11:25:00")),
		status: "Open",
		workPersona: "Remote",
		jobDecription:
			"<p>As a member of our Solution Consulting team, you will have a major impact on our future success by supporting [Employee Experience, Customer Workflow, ITX] Solution Sales. You will guide revenue for one of our  products with the support and partnership of Sales, Product Management, and the executive team. This is a hands-on technical consultant who can go wide and deep on solution delivery and solution positioning during sales cycles.</p><hr/><ul><li>7+ years of pre-sales solution consulting or sales engineering experience in (product specific area)</li><li>Proficiency with the Amazon platform or technical expertise with cloud software solutions</li><li>Experience working collaboratively with product management, product marketing, partners, and professional services</li><li>Territory management skills, including pipeline building and working with Sales counterpart to guide execution excellence</li><li>Travel, as necessary</li></ul>",
		qualifications:
			"<ul><li>7+ years of pre-sales solution consulting or sales engineering experience in (product specific area)</li><li>Proficiency with the Amazon platform or technical expertise with cloud software solutions</li><li>Experience working collaboratively with product management, product marketing, partners, and professional services</li><li>Territory management skills, including pipeline building and working with Sales counterpart to guide execution excellence</li><li>Travel, as necessary</li></ul>",
		additionalInfo:
			"<p>Amazon is an Equal Employment Opportunity Employer. All qualified applicants will receive consideration for employment without regard to race, color, creed, religion, sex, sexual orientation, national origin or nationality, ancestry, age, disability, gender identity or expression, marital status, veteran status or any other category protected by law.</p>",
	},
	{
		id: "ed0718fd0352",
		positionName: "Sr Software Engineer",
		company: {
			id: "9c056b8d8677",
			name: "Meta",
			companyLogoUrl: "https://firebasestorage.googleapis.com/v0/b/job-portal-prod.appspot.com/o/meta_logo.jpeg?alt=media&token=7ea75ce2-2e3d-4a33-aa7d-87b93bf80a2c",
		},
		location: {
			id: "834ca110ebe1",
			city: "Chicago",
			state: "Illinois",
			country: "USA",
		},
		department: { id: "649670c03b0d", name: "Sales" },
		postedDate: Timestamp.fromDate(new Date("2021-06-25 11:25:00")),
		status: "Open",
		workPersona: "Remote",
		jobDecription:
			"<p>As a member of our Solution Consulting team, you will have a major impact on our future success by supporting [Employee Experience, Customer Workflow, ITX] Solution Sales. You will guide revenue for one of our  products with the support and partnership of Sales, Product Management, and the executive team. This is a hands-on technical consultant who can go wide and deep on solution delivery and solution positioning during sales cycles.</p><hr/><ul><li>7+ years of pre-sales solution consulting or sales engineering experience in (product specific area)</li><li>Proficiency with the Amazon platform or technical expertise with cloud software solutions</li><li>Experience working collaboratively with product management, product marketing, partners, and professional services</li><li>Territory management skills, including pipeline building and working with Sales counterpart to guide execution excellence</li><li>Travel, as necessary</li></ul>",
		qualifications:
			"<ul><li>7+ years of pre-sales solution consulting or sales engineering experience in (product specific area)</li><li>Proficiency with the Amazon platform or technical expertise with cloud software solutions</li><li>Experience working collaboratively with product management, product marketing, partners, and professional services</li><li>Territory management skills, including pipeline building and working with Sales counterpart to guide execution excellence</li><li>Travel, as necessary</li></ul>",
		additionalInfo:
			"<p>Amazon is an Equal Employment Opportunity Employer. All qualified applicants will receive consideration for employment without regard to race, color, creed, religion, sex, sexual orientation, national origin or nationality, ancestry, age, disability, gender identity or expression, marital status, veteran status or any other category protected by law.</p>",
	},
	{
		id: "ef6007336eee",
		positionName: "Senior Manager",
		company: {
			id: "9c056b8d8677",
			name: "Meta",
			companyLogoUrl: "https://firebasestorage.googleapis.com/v0/b/job-portal-prod.appspot.com/o/meta_logo.jpeg?alt=media&token=7ea75ce2-2e3d-4a33-aa7d-87b93bf80a2c",
		},
		location: {
			id: "40897bf948fd",
			city: "Hyderabad",
			state: "Telangana",
			country: "India",
		},
		department: { id: "649670c03b0d", name: "Sales" },
		postedDate: Timestamp.fromDate(new Date("2021-06-25 11:25:00")),
		status: "Open",
		workPersona: "Remote",
		jobDecription:
			"<p>We’re not yesterday’s IT department, we're Digital Technology. The world around us keeps changing and so do we. We’re redefining what it means to be IT with a mindset centered on transformation, experience, AI-driven automation, innovation, and growth. We’re all about delivering delightful, secure customer and employee experiences that accelerate ServiceNow’s journey to become the defining enterprise software company of the 21st century. And we love co-creating, using, and highlighting our own products to do it.</p>",
		qualifications:
			"<ul><li>Be technically hands on and guide the team leading from the front</li><li>Work closely with the technical product managers to understand detailed requirements and deliver high quality products to our users</li><li>Collaborate closely with other development teams (and managers) across Business Units to help with continuous improvement of the architecture, tools and processes.</li><li>Develop on the best cloud software for businesses using ServiceNow platform.</li><li>Ability to drive roadmap, work across organizational boundaries, and exercise appropriate influence to ensure commitment to customers and product quality.</li><li>Responsible for the overall systems development life cycle.</li><li>Management and execution against project plans and delivery commitments.</li><li>Manage the day-to-day activities of the engineering team within an Agile/Scrum environment.</li></ul>",
		additionalInfo:
			"<p>Amazon is an Equal Employment Opportunity Employer. All qualified applicants will receive consideration for employment without regard to race, color, creed, religion, sex, sexual orientation, national origin or nationality, ancestry, age, disability, gender identity or expression, marital status, veteran status or any other category protected by law.</p>",
	},
	{
		id: "73561a77db4b",
		positionName: "Sr Revenue Accountant",
		company: {
			id: "9c056b8d8677",
			name: "Meta",
			companyLogoUrl: "https://firebasestorage.googleapis.com/v0/b/job-portal-prod.appspot.com/o/meta_logo.jpeg?alt=media&token=7ea75ce2-2e3d-4a33-aa7d-87b93bf80a2c",
		},
		location: {
			id: "834ca110ebe1",
			city: "Chicago",
			state: "Illinois",
			country: "USA",
		},
		department: { id: "649670c03b0d", name: "Sales" },
		postedDate: Timestamp.fromDate(new Date("2021-06-25 11:25:00")),
		status: "Open",
		workPersona: "Flexible",
		jobDecription:
			"<p>As a member of our Solution Consulting team, you will have a major impact on our future success by supporting [Employee Experience, Customer Workflow, ITX] Solution Sales. You will guide revenue for one of our  products with the support and partnership of Sales, Product Management, and the executive team. This is a hands-on technical consultant who can go wide and deep on solution delivery and solution positioning during sales cycles.</p><hr/><ul><li>7+ years of pre-sales solution consulting or sales engineering experience in (product specific area)</li><li>Proficiency with the Amazon platform or technical expertise with cloud software solutions</li><li>Experience working collaboratively with product management, product marketing, partners, and professional services</li><li>Territory management skills, including pipeline building and working with Sales counterpart to guide execution excellence</li><li>Travel, as necessary</li></ul>",
		qualifications:
			"<ul><li>7+ years of pre-sales solution consulting or sales engineering experience in (product specific area)</li><li>Proficiency with the Amazon platform or technical expertise with cloud software solutions</li><li>Experience working collaboratively with product management, product marketing, partners, and professional services</li><li>Territory management skills, including pipeline building and working with Sales counterpart to guide execution excellence</li><li>Travel, as necessary</li></ul>",
		additionalInfo:
			"<p>Amazon is an Equal Employment Opportunity Employer. All qualified applicants will receive consideration for employment without regard to race, color, creed, religion, sex, sexual orientation, national origin or nationality, ancestry, age, disability, gender identity or expression, marital status, veteran status or any other category protected by law.</p>",
	},
	{
		id: "b54d3ee911c4",
		positionName: "Sr Sales Enablement Manager",
		company: {
			id: "8256545b890f",
			name: "Salesforce",
			companyLogoUrl:
				"https://firebasestorage.googleapis.com/v0/b/job-portal-prod.appspot.com/o/salesforce_logo.jpeg?alt=media&token=cc5875ee-2261-4aba-8841-252d57f4529a",
		},
		location: {
			id: "834ca110ebe1",
			city: "Chicago",
			state: "Illinois",
			country: "USA",
		},
		department: { id: "649670c03b0d", name: "Sales" },
		postedDate: Timestamp.fromDate(new Date("2021-06-25 11:25:00")),
		status: "Open",
		workPersona: "Remote",
		jobDecription:
			"<p>As a member of our Solution Consulting team, you will have a major impact on our future success by supporting [Employee Experience, Customer Workflow, ITX] Solution Sales. You will guide revenue for one of our  products with the support and partnership of Sales, Product Management, and the executive team. This is a hands-on technical consultant who can go wide and deep on solution delivery and solution positioning during sales cycles.</p><hr/><ul><li>7+ years of pre-sales solution consulting or sales engineering experience in (product specific area)</li><li>Proficiency with the Amazon platform or technical expertise with cloud software solutions</li><li>Experience working collaboratively with product management, product marketing, partners, and professional services</li><li>Territory management skills, including pipeline building and working with Sales counterpart to guide execution excellence</li><li>Travel, as necessary</li></ul>",
		qualifications:
			"<ul><li>7+ years of pre-sales solution consulting or sales engineering experience in (product specific area)</li><li>Proficiency with the Amazon platform or technical expertise with cloud software solutions</li><li>Experience working collaboratively with product management, product marketing, partners, and professional services</li><li>Territory management skills, including pipeline building and working with Sales counterpart to guide execution excellence</li><li>Travel, as necessary</li></ul>",
		additionalInfo:
			"<p>Amazon is an Equal Employment Opportunity Employer. All qualified applicants will receive consideration for employment without regard to race, color, creed, religion, sex, sexual orientation, national origin or nationality, ancestry, age, disability, gender identity or expression, marital status, veteran status or any other category protected by law.</p>",
	},
	{
		id: "5facb43d12af",
		positionName: "Sr Software Engineer",
		company: {
			id: "8256545b890f",
			name: "Salesforce",
			companyLogoUrl:
				"https://firebasestorage.googleapis.com/v0/b/job-portal-prod.appspot.com/o/salesforce_logo.jpeg?alt=media&token=cc5875ee-2261-4aba-8841-252d57f4529a",
		},
		location: {
			id: "40897bf948fd",
			city: "Hyderabad",
			state: "Telangana",
			country: "India",
		},
		department: { id: "649670c03b0d", name: "Sales" },
		postedDate: Timestamp.fromDate(new Date("2021-06-25 11:25:00")),
		status: "Open",
		workPersona: "Remote",
		jobDecription:
			"<p>As a member of our Solution Consulting team, you will have a major impact on our future success by supporting [Employee Experience, Customer Workflow, ITX] Solution Sales. You will guide revenue for one of our  products with the support and partnership of Sales, Product Management, and the executive team. This is a hands-on technical consultant who can go wide and deep on solution delivery and solution positioning during sales cycles.</p><hr/><ul><li>7+ years of pre-sales solution consulting or sales engineering experience in (product specific area)</li><li>Proficiency with the Amazon platform or technical expertise with cloud software solutions</li><li>Experience working collaboratively with product management, product marketing, partners, and professional services</li><li>Territory management skills, including pipeline building and working with Sales counterpart to guide execution excellence</li><li>Travel, as necessary</li></ul>",
		qualifications:
			"<ul><li>7+ years of pre-sales solution consulting or sales engineering experience in (product specific area)</li><li>Proficiency with the Amazon platform or technical expertise with cloud software solutions</li><li>Experience working collaboratively with product management, product marketing, partners, and professional services</li><li>Territory management skills, including pipeline building and working with Sales counterpart to guide execution excellence</li><li>Travel, as necessary</li></ul>",
		additionalInfo:
			"<p>Amazon is an Equal Employment Opportunity Employer. All qualified applicants will receive consideration for employment without regard to race, color, creed, religion, sex, sexual orientation, national origin or nationality, ancestry, age, disability, gender identity or expression, marital status, veteran status or any other category protected by law.</p>",
	},
	{
		id: "655abaf400cc",
		positionName: "Senior Manager",
		company: {
			id: "8256545b890f",
			name: "Salesforce",
			companyLogoUrl:
				"https://firebasestorage.googleapis.com/v0/b/job-portal-prod.appspot.com/o/salesforce_logo.jpeg?alt=media&token=cc5875ee-2261-4aba-8841-252d57f4529a",
		},
		location: {
			id: "340f0d96ef75",
			city: "Bengaluru",
			state: "Karnataka",
			country: "India",
		},
		department: { id: "649670c03b0d", name: "Sales" },
		postedDate: Timestamp.fromDate(new Date("2021-06-25 11:25:00")),
		status: "Open",
		workPersona: "Flexible",
		jobDecription:
			"<p>We’re not yesterday’s IT department, we're Digital Technology. The world around us keeps changing and so do we. We’re redefining what it means to be IT with a mindset centered on transformation, experience, AI-driven automation, innovation, and growth. We’re all about delivering delightful, secure customer and employee experiences that accelerate ServiceNow’s journey to become the defining enterprise software company of the 21st century. And we love co-creating, using, and highlighting our own products to do it.</p>",
		qualifications:
			"<ul><li>Be technically hands on and guide the team leading from the front</li><li>Work closely with the technical product managers to understand detailed requirements and deliver high quality products to our users</li><li>Collaborate closely with other development teams (and managers) across Business Units to help with continuous improvement of the architecture, tools and processes.</li><li>Develop on the best cloud software for businesses using ServiceNow platform.</li><li>Ability to drive roadmap, work across organizational boundaries, and exercise appropriate influence to ensure commitment to customers and product quality.</li><li>Responsible for the overall systems development life cycle.</li><li>Management and execution against project plans and delivery commitments.</li><li>Manage the day-to-day activities of the engineering team within an Agile/Scrum environment.</li></ul>",
		additionalInfo:
			"<p>Amazon is an Equal Employment Opportunity Employer. All qualified applicants will receive consideration for employment without regard to race, color, creed, religion, sex, sexual orientation, national origin or nationality, ancestry, age, disability, gender identity or expression, marital status, veteran status or any other category protected by law.</p>",
	},
	{
		id: "aa1436ba3048",
		positionName: "Sr Revenue Accountant",
		company: {
			id: "8256545b890f",
			name: "Salesforce",
			companyLogoUrl:
				"https://firebasestorage.googleapis.com/v0/b/job-portal-prod.appspot.com/o/salesforce_logo.jpeg?alt=media&token=cc5875ee-2261-4aba-8841-252d57f4529a",
		},
		location: {
			id: "834ca110ebe1",
			city: "Chicago",
			state: "Illinois",
			country: "USA",
		},
		department: { id: "649670c03b0d", name: "Sales" },
		postedDate: Timestamp.fromDate(new Date("2021-06-25 11:25:00")),
		status: "Open",
		workPersona: "Remote",
		jobDecription:
			"<p>As a member of our Solution Consulting team, you will have a major impact on our future success by supporting [Employee Experience, Customer Workflow, ITX] Solution Sales. You will guide revenue for one of our  products with the support and partnership of Sales, Product Management, and the executive team. This is a hands-on technical consultant who can go wide and deep on solution delivery and solution positioning during sales cycles.</p><hr/><ul><li>7+ years of pre-sales solution consulting or sales engineering experience in (product specific area)</li><li>Proficiency with the Amazon platform or technical expertise with cloud software solutions</li><li>Experience working collaboratively with product management, product marketing, partners, and professional services</li><li>Territory management skills, including pipeline building and working with Sales counterpart to guide execution excellence</li><li>Travel, as necessary</li></ul>",
		qualifications:
			"<ul><li>7+ years of pre-sales solution consulting or sales engineering experience in (product specific area)</li><li>Proficiency with the Amazon platform or technical expertise with cloud software solutions</li><li>Experience working collaboratively with product management, product marketing, partners, and professional services</li><li>Territory management skills, including pipeline building and working with Sales counterpart to guide execution excellence</li><li>Travel, as necessary</li></ul>",
		additionalInfo:
			"<p>Amazon is an Equal Employment Opportunity Employer. All qualified applicants will receive consideration for employment without regard to race, color, creed, religion, sex, sexual orientation, national origin or nationality, ancestry, age, disability, gender identity or expression, marital status, veteran status or any other category protected by law.</p>",
	},
	{
		id: "c2c5142fb6e5",
		positionName: "Advisory Solution Consultant",
		company: {
			id: "8256545b890f",
			name: "Salesforce",
			companyLogoUrl:
				"https://firebasestorage.googleapis.com/v0/b/job-portal-prod.appspot.com/o/salesforce_logo.jpeg?alt=media&token=cc5875ee-2261-4aba-8841-252d57f4529a",
		},
		location: {
			id: "834ca110ebe1",
			city: "Chicago",
			state: "Illinois",
			country: "USA",
		},
		department: { id: "649670c03b0d", name: "Sales" },
		postedDate: Timestamp.fromDate(new Date("2021-06-25 11:25:00")),
		status: "Open",
		workPersona: "Remote",
		jobDecription:
			"<p>As a member of our Solution Consulting team, you will have a major impact on our future success by supporting [Employee Experience, Customer Workflow, ITX] Solution Sales. You will guide revenue for one of our  products with the support and partnership of Sales, Product Management, and the executive team. This is a hands-on technical consultant who can go wide and deep on solution delivery and solution positioning during sales cycles.</p><hr/><ul><li>7+ years of pre-sales solution consulting or sales engineering experience in (product specific area)</li><li>Proficiency with the Amazon platform or technical expertise with cloud software solutions</li><li>Experience working collaboratively with product management, product marketing, partners, and professional services</li><li>Territory management skills, including pipeline building and working with Sales counterpart to guide execution excellence</li><li>Travel, as necessary</li></ul>",
		qualifications:
			"<ul><li>7+ years of pre-sales solution consulting or sales engineering experience in (product specific area)</li><li>Proficiency with the Amazon platform or technical expertise with cloud software solutions</li><li>Experience working collaboratively with product management, product marketing, partners, and professional services</li><li>Territory management skills, including pipeline building and working with Sales counterpart to guide execution excellence</li><li>Travel, as necessary</li></ul>",
		additionalInfo:
			"<p>Amazon is an Equal Employment Opportunity Employer. All qualified applicants will receive consideration for employment without regard to race, color, creed, religion, sex, sexual orientation, national origin or nationality, ancestry, age, disability, gender identity or expression, marital status, veteran status or any other category protected by law.</p>",
	},
	{
		id: "5636a9ee3039",
		positionName: "Sr Sales Enablement Manager",
		company: {
			id: "3ddfcd79ca72",
			name: "Google",
			companyLogoUrl:
				"https://firebasestorage.googleapis.com/v0/b/job-portal-prod.appspot.com/o/google_logo.jpeg?alt=media&token=7ee5de97-6ff5-4b60-9c6e-abef8bc474d3",
		},
		location: {
			id: "40897bf948fd",
			city: "Hyderabad",
			state: "Telangana",
			country: "India",
		},
		department: { id: "649670c03b0d", name: "Sales" },
		postedDate: Timestamp.fromDate(new Date("2021-06-25 11:25:00")),
		status: "Open",
		workPersona: "Remote",
		jobDecription:
			"<p>As a member of our Solution Consulting team, you will have a major impact on our future success by supporting [Employee Experience, Customer Workflow, ITX] Solution Sales. You will guide revenue for one of our  products with the support and partnership of Sales, Product Management, and the executive team. This is a hands-on technical consultant who can go wide and deep on solution delivery and solution positioning during sales cycles.</p><hr/><ul><li>7+ years of pre-sales solution consulting or sales engineering experience in (product specific area)</li><li>Proficiency with the Amazon platform or technical expertise with cloud software solutions</li><li>Experience working collaboratively with product management, product marketing, partners, and professional services</li><li>Territory management skills, including pipeline building and working with Sales counterpart to guide execution excellence</li><li>Travel, as necessary</li></ul>",
		qualifications:
			"<ul><li>7+ years of pre-sales solution consulting or sales engineering experience in (product specific area)</li><li>Proficiency with the Amazon platform or technical expertise with cloud software solutions</li><li>Experience working collaboratively with product management, product marketing, partners, and professional services</li><li>Territory management skills, including pipeline building and working with Sales counterpart to guide execution excellence</li><li>Travel, as necessary</li></ul>",
		additionalInfo:
			"<p>Amazon is an Equal Employment Opportunity Employer. All qualified applicants will receive consideration for employment without regard to race, color, creed, religion, sex, sexual orientation, national origin or nationality, ancestry, age, disability, gender identity or expression, marital status, veteran status or any other category protected by law.</p>",
	},
	{
		id: "fac2f2545420",
		positionName: "Sr Software Engineer",
		company: {
			id: "3ddfcd79ca72",
			name: "Google",
			companyLogoUrl:
				"https://firebasestorage.googleapis.com/v0/b/job-portal-prod.appspot.com/o/google_logo.jpeg?alt=media&token=7ee5de97-6ff5-4b60-9c6e-abef8bc474d3",
		},
		location: {
			id: "340f0d96ef75",
			city: "Bengaluru",
			state: "Karnataka",
			country: "India",
		},
		department: { id: "649670c03b0d", name: "Sales" },
		postedDate: Timestamp.fromDate(new Date("2022-06-25 10:20:00")),
		status: "Open",
		workPersona: "Remote",
		jobDecription:
			"<p>As a member of our Solution Consulting team, you will have a major impact on our future success by supporting [Employee Experience, Customer Workflow, ITX] Solution Sales. You will guide revenue for one of our  products with the support and partnership of Sales, Product Management, and the executive team. This is a hands-on technical consultant who can go wide and deep on solution delivery and solution positioning during sales cycles.</p><hr/><ul><li>7+ years of pre-sales solution consulting or sales engineering experience in (product specific area)</li><li>Proficiency with the Amazon platform or technical expertise with cloud software solutions</li><li>Experience working collaboratively with product management, product marketing, partners, and professional services</li><li>Territory management skills, including pipeline building and working with Sales counterpart to guide execution excellence</li><li>Travel, as necessary</li></ul>",
		qualifications:
			"<ul><li>7+ years of pre-sales solution consulting or sales engineering experience in (product specific area)</li><li>Proficiency with the Amazon platform or technical expertise with cloud software solutions</li><li>Experience working collaboratively with product management, product marketing, partners, and professional services</li><li>Territory management skills, including pipeline building and working with Sales counterpart to guide execution excellence</li><li>Travel, as necessary</li></ul>",
		additionalInfo:
			"<p>Amazon is an Equal Employment Opportunity Employer. All qualified applicants will receive consideration for employment without regard to race, color, creed, religion, sex, sexual orientation, national origin or nationality, ancestry, age, disability, gender identity or expression, marital status, veteran status or any other category protected by law.</p>",
	},
	{
		id: "aba43e5e0c00",
		positionName: "Senior Manager",
		company: {
			id: "3ddfcd79ca72",
			name: "Google",
			companyLogoUrl:
				"https://firebasestorage.googleapis.com/v0/b/job-portal-prod.appspot.com/o/google_logo.jpeg?alt=media&token=7ee5de97-6ff5-4b60-9c6e-abef8bc474d3",
		},
		location: {
			id: "834ca110ebe1",
			city: "Chicago",
			state: "Illinois",
			country: "USA",
		},
		department: { id: "649670c03b0d", name: "Sales" },
		postedDate: Timestamp.fromDate(new Date("2021-07-21 06:25:00")),
		status: "Open",
		workPersona: "Flexible",
		jobDecription:
			"<p>As a member of our Solution Consulting team, you will have a major impact on our future success by supporting [Employee Experience, Customer Workflow, ITX] Solution Sales. You will guide revenue for one of our  products with the support and partnership of Sales, Product Management, and the executive team. This is a hands-on technical consultant who can go wide and deep on solution delivery and solution positioning during sales cycles.</p><hr/><ul><li>7+ years of pre-sales solution consulting or sales engineering experience in (product specific area)</li><li>Proficiency with the Amazon platform or technical expertise with cloud software solutions</li><li>Experience working collaboratively with product management, product marketing, partners, and professional services</li><li>Territory management skills, including pipeline building and working with Sales counterpart to guide execution excellence</li><li>Travel, as necessary</li></ul>",
		qualifications:
			"<ul><li>7+ years of pre-sales solution consulting or sales engineering experience in (product specific area)</li><li>Proficiency with the Amazon platform or technical expertise with cloud software solutions</li><li>Experience working collaboratively with product management, product marketing, partners, and professional services</li><li>Territory management skills, including pipeline building and working with Sales counterpart to guide execution excellence</li><li>Travel, as necessary</li></ul>",
		additionalInfo:
			"<p>Amazon is an Equal Employment Opportunity Employer. All qualified applicants will receive consideration for employment without regard to race, color, creed, religion, sex, sexual orientation, national origin or nationality, ancestry, age, disability, gender identity or expression, marital status, veteran status or any other category protected by law.</p>",
	},
	{
		id: "a012469a936e",
		positionName: "Sr Revenue Accountant",
		company: {
			id: "3ddfcd79ca72",
			name: "Google",
			companyLogoUrl:
				"https://firebasestorage.googleapis.com/v0/b/job-portal-prod.appspot.com/o/google_logo.jpeg?alt=media&token=7ee5de97-6ff5-4b60-9c6e-abef8bc474d3",
		},
		location: {
			id: "834ca110ebe1",
			city: "Chicago",
			state: "Illinois",
			country: "USA",
		},
		department: { id: "649670c03b0d", name: "Sales" },
		postedDate: Timestamp.fromDate(new Date("2022-03-23 11:25:00")),
		status: "Open",
		workPersona: "Remote",
		jobDecription:
			"<p>As a member of our Solution Consulting team, you will have a major impact on our future success by supporting [Employee Experience, Customer Workflow, ITX] Solution Sales. You will guide revenue for one of our  products with the support and partnership of Sales, Product Management, and the executive team. This is a hands-on technical consultant who can go wide and deep on solution delivery and solution positioning during sales cycles.</p><hr/><ul><li>7+ years of pre-sales solution consulting or sales engineering experience in (product specific area)</li><li>Proficiency with the Amazon platform or technical expertise with cloud software solutions</li><li>Experience working collaboratively with product management, product marketing, partners, and professional services</li><li>Territory management skills, including pipeline building and working with Sales counterpart to guide execution excellence</li><li>Travel, as necessary</li></ul>",
		qualifications:
			"<ul><li>7+ years of pre-sales solution consulting or sales engineering experience in (product specific area)</li><li>Proficiency with the Amazon platform or technical expertise with cloud software solutions</li><li>Experience working collaboratively with product management, product marketing, partners, and professional services</li><li>Territory management skills, including pipeline building and working with Sales counterpart to guide execution excellence</li><li>Travel, as necessary</li></ul>",
		additionalInfo:
			"<p>Amazon is an Equal Employment Opportunity Employer. All qualified applicants will receive consideration for employment without regard to race, color, creed, religion, sex, sexual orientation, national origin or nationality, ancestry, age, disability, gender identity or expression, marital status, veteran status or any other category protected by law.</p>",
	},
	{
		id: "3e31e379f707",
		positionName: "Advisory Solution Consultant",
		company: {
			id: "3ddfcd79ca72",
			name: "Google",
			companyLogoUrl:
				"https://firebasestorage.googleapis.com/v0/b/job-portal-prod.appspot.com/o/google_logo.jpeg?alt=media&token=7ee5de97-6ff5-4b60-9c6e-abef8bc474d3",
		},
		location: {
			id: "834ca110ebe1",
			city: "Chicago",
			state: "Illinois",
			country: "USA",
		},
		department: { id: "649670c03b0d", name: "Sales" },
		postedDate: Timestamp.fromDate(new Date("2022-04-27 11:25:00")),
		status: "Open",
		workPersona: "Remote",
		jobDecription:
			"<p>As a member of our Solution Consulting team, you will have a major impact on our future success by supporting [Employee Experience, Customer Workflow, ITX] Solution Sales. You will guide revenue for one of our  products with the support and partnership of Sales, Product Management, and the executive team. This is a hands-on technical consultant who can go wide and deep on solution delivery and solution positioning during sales cycles.</p><hr/><ul><li>7+ years of pre-sales solution consulting or sales engineering experience in (product specific area)</li><li>Proficiency with the Amazon platform or technical expertise with cloud software solutions</li><li>Experience working collaboratively with product management, product marketing, partners, and professional services</li><li>Territory management skills, including pipeline building and working with Sales counterpart to guide execution excellence</li><li>Travel, as necessary</li></ul>",
		qualifications:
			"<ul><li>7+ years of pre-sales solution consulting or sales engineering experience in (product specific area)</li><li>Proficiency with the Amazon platform or technical expertise with cloud software solutions</li><li>Experience working collaboratively with product management, product marketing, partners, and professional services</li><li>Territory management skills, including pipeline building and working with Sales counterpart to guide execution excellence</li><li>Travel, as necessary</li></ul>",
		additionalInfo:
			"<p>Amazon is an Equal Employment Opportunity Employer. All qualified applicants will receive consideration for employment without regard to race, color, creed, religion, sex, sexual orientation, national origin or nationality, ancestry, age, disability, gender identity or expression, marital status, veteran status or any other category protected by law.</p>",
	},
	{
		id: "037b782eaaac",
		positionName: "Advisory Solution Consultant",
		company: {
			id: "3ddfcd79ca72",
			name: "Google",
			companyLogoUrl:
				"https://firebasestorage.googleapis.com/v0/b/job-portal-prod.appspot.com/o/google_logo.jpeg?alt=media&token=7ee5de97-6ff5-4b60-9c6e-abef8bc474d3",
		},
		location: {
			id: "834ca110ebe1",
			city: "Chicago",
			state: "Illinois",
			country: "USA",
		},
		department: { id: "649670c03b0d", name: "Sales" },
		postedDate: Timestamp.fromDate(new Date("2022-09-02 11:25:00")),
		status: "Open",
		workPersona: "Remote",
		jobDecription:
			"<p>As a member of our Solution Consulting team, you will have a major impact on our future success by supporting [Employee Experience, Customer Workflow, ITX] Solution Sales. You will guide revenue for one of our  products with the support and partnership of Sales, Product Management, and the executive team. This is a hands-on technical consultant who can go wide and deep on solution delivery and solution positioning during sales cycles.</p><hr/><ul><li>7+ years of pre-sales solution consulting or sales engineering experience in (product specific area)</li><li>Proficiency with the Amazon platform or technical expertise with cloud software solutions</li><li>Experience working collaboratively with product management, product marketing, partners, and professional services</li><li>Territory management skills, including pipeline building and working with Sales counterpart to guide execution excellence</li><li>Travel, as necessary</li></ul>",
		qualifications:
			"<ul><li>7+ years of pre-sales solution consulting or sales engineering experience in (product specific area)</li><li>Proficiency with the Amazon platform or technical expertise with cloud software solutions</li><li>Experience working collaboratively with product management, product marketing, partners, and professional services</li><li>Territory management skills, including pipeline building and working with Sales counterpart to guide execution excellence</li><li>Travel, as necessary</li></ul>",
		additionalInfo:
			"<p>Amazon is an Equal Employment Opportunity Employer. All qualified applicants will receive consideration for employment without regard to race, color, creed, religion, sex, sexual orientation, national origin or nationality, ancestry, age, disability, gender identity or expression, marital status, veteran status or any other category protected by law.</p>",
	},
	{
		id: "e769093c232c",
		positionName: "Sr Sales Enablement Manager",
		company: {
			id: "dc0322c76aff",
			name: "Microsoft",
			companyLogoUrl: "https://firebasestorage.googleapis.com/v0/b/job-portal-prod.appspot.com/o/msft_logo.jpeg?alt=media&token=825b84bf-bb00-423d-9107-8b623f9d4256",
		},
		location: {
			id: "834ca110ebe1",
			city: "Chicago",
			state: "Illinois",
			country: "USA",
		},
		department: { id: "649670c03b0d", name: "Sales" },
		postedDate: Timestamp.fromDate(new Date("2022-07-15 11:25:00")),
		status: "Open",
		workPersona: "Flexible",
		jobDecription:
			"<p>As a member of our Solution Consulting team, you will have a major impact on our future success by supporting [Employee Experience, Customer Workflow, ITX] Solution Sales. You will guide revenue for one of our  products with the support and partnership of Sales, Product Management, and the executive team. This is a hands-on technical consultant who can go wide and deep on solution delivery and solution positioning during sales cycles.</p><hr/><ul><li>7+ years of pre-sales solution consulting or sales engineering experience in (product specific area)</li><li>Proficiency with the Amazon platform or technical expertise with cloud software solutions</li><li>Experience working collaboratively with product management, product marketing, partners, and professional services</li><li>Territory management skills, including pipeline building and working with Sales counterpart to guide execution excellence</li><li>Travel, as necessary</li></ul>",
		qualifications:
			"<ul><li>7+ years of pre-sales solution consulting or sales engineering experience in (product specific area)</li><li>Proficiency with the Amazon platform or technical expertise with cloud software solutions</li><li>Experience working collaboratively with product management, product marketing, partners, and professional services</li><li>Territory management skills, including pipeline building and working with Sales counterpart to guide execution excellence</li><li>Travel, as necessary</li></ul>",
		additionalInfo:
			"<p>Amazon is an Equal Employment Opportunity Employer. All qualified applicants will receive consideration for employment without regard to race, color, creed, religion, sex, sexual orientation, national origin or nationality, ancestry, age, disability, gender identity or expression, marital status, veteran status or any other category protected by law.</p>",
	},
	{
		id: "50322f5b32a9",
		positionName: "Sr Software Engineer",
		company: {
			id: "dc0322c76aff",
			name: "Microsoft",
			companyLogoUrl: "https://firebasestorage.googleapis.com/v0/b/job-portal-prod.appspot.com/o/msft_logo.jpeg?alt=media&token=825b84bf-bb00-423d-9107-8b623f9d4256",
		},
		location: {
			id: "340f0d96ef75",
			city: "Bengaluru",
			state: "Karnataka",
			country: "India",
		},
		department: { id: "649670c03b0d", name: "Sales" },
		postedDate: Timestamp.fromDate(new Date("2023-08-27 11:25:00")),
		status: "Open",
		workPersona: "Remote",
		jobDecription:
			"<p>As a member of our Solution Consulting team, you will have a major impact on our future success by supporting [Employee Experience, Customer Workflow, ITX] Solution Sales. You will guide revenue for one of our  products with the support and partnership of Sales, Product Management, and the executive team. This is a hands-on technical consultant who can go wide and deep on solution delivery and solution positioning during sales cycles.</p><hr/><ul><li>7+ years of pre-sales solution consulting or sales engineering experience in (product specific area)</li><li>Proficiency with the Amazon platform or technical expertise with cloud software solutions</li><li>Experience working collaboratively with product management, product marketing, partners, and professional services</li><li>Territory management skills, including pipeline building and working with Sales counterpart to guide execution excellence</li><li>Travel, as necessary</li></ul>",
		qualifications:
			"<ul><li>7+ years of pre-sales solution consulting or sales engineering experience in (product specific area)</li><li>Proficiency with the Amazon platform or technical expertise with cloud software solutions</li><li>Experience working collaboratively with product management, product marketing, partners, and professional services</li><li>Territory management skills, including pipeline building and working with Sales counterpart to guide execution excellence</li><li>Travel, as necessary</li></ul>",
		additionalInfo:
			"<p>Amazon is an Equal Employment Opportunity Employer. All qualified applicants will receive consideration for employment without regard to race, color, creed, religion, sex, sexual orientation, national origin or nationality, ancestry, age, disability, gender identity or expression, marital status, veteran status or any other category protected by law.</p>",
	},
	{
		id: "4472659f6c1c",
		positionName: "Senior Manager",
		company: {
			id: "dc0322c76aff",
			name: "Microsoft",
			companyLogoUrl: "https://firebasestorage.googleapis.com/v0/b/job-portal-prod.appspot.com/o/msft_logo.jpeg?alt=media&token=825b84bf-bb00-423d-9107-8b623f9d4256",
		},
		location: {
			id: "40897bf948fd",
			city: "Hyderabad",
			state: "Telangana",
			country: "India",
		},
		department: { id: "649670c03b0d", name: "Sales" },
		postedDate: Timestamp.fromDate(new Date("2022-09-11 11:25:00")),
		status: "Open",
		workPersona: "Remote",
		jobDecription:
			"<p>We’re not yesterday’s IT department, we're Digital Technology. The world around us keeps changing and so do we. We’re redefining what it means to be IT with a mindset centered on transformation, experience, AI-driven automation, innovation, and growth. We’re all about delivering delightful, secure customer and employee experiences that accelerate ServiceNow’s journey to become the defining enterprise software company of the 21st century. And we love co-creating, using, and highlighting our own products to do it.</p>",
		qualifications:
			"<ul><li>Be technically hands on and guide the team leading from the front</li><li>Work closely with the technical product managers to understand detailed requirements and deliver high quality products to our users</li><li>Collaborate closely with other development teams (and managers) across Business Units to help with continuous improvement of the architecture, tools and processes.</li><li>Develop on the best cloud software for businesses using ServiceNow platform.</li><li>Ability to drive roadmap, work across organizational boundaries, and exercise appropriate influence to ensure commitment to customers and product quality.</li><li>Responsible for the overall systems development life cycle.</li><li>Management and execution against project plans and delivery commitments.</li><li>Manage the day-to-day activities of the engineering team within an Agile/Scrum environment.</li></ul>",
		additionalInfo:
			"<p>Amazon is an Equal Employment Opportunity Employer. All qualified applicants will receive consideration for employment without regard to race, color, creed, religion, sex, sexual orientation, national origin or nationality, ancestry, age, disability, gender identity or expression, marital status, veteran status or any other category protected by law.</p>",
	},
	{
		id: "47d7412eafd1",
		positionName: "Sr Revenue Accountant",
		company: {
			id: "dc0322c76aff",
			name: "Microsoft",
			companyLogoUrl: "https://firebasestorage.googleapis.com/v0/b/job-portal-prod.appspot.com/o/msft_logo.jpeg?alt=media&token=825b84bf-bb00-423d-9107-8b623f9d4256",
		},
		location: {
			id: "340f0d96ef75",
			city: "Bengaluru",
			state: "Karnataka",
			country: "India",
		},
		department: { id: "649670c03b0d", name: "Sales" },
		postedDate: Timestamp.fromDate(new Date("2022-02-08 11:25:00")),
		status: "Open",
		workPersona: "Flexible",
		jobDecription:
			"<p>As a member of our Solution Consulting team, you will have a major impact on our future success by supporting [Employee Experience, Customer Workflow, ITX] Solution Sales. You will guide revenue for one of our  products with the support and partnership of Sales, Product Management, and the executive team. This is a hands-on technical consultant who can go wide and deep on solution delivery and solution positioning during sales cycles.</p><hr/><ul><li>7+ years of pre-sales solution consulting or sales engineering experience in (product specific area)</li><li>Proficiency with the Amazon platform or technical expertise with cloud software solutions</li><li>Experience working collaboratively with product management, product marketing, partners, and professional services</li><li>Territory management skills, including pipeline building and working with Sales counterpart to guide execution excellence</li><li>Travel, as necessary</li></ul>",
		qualifications:
			"<ul><li>7+ years of pre-sales solution consulting or sales engineering experience in (product specific area)</li><li>Proficiency with the Amazon platform or technical expertise with cloud software solutions</li><li>Experience working collaboratively with product management, product marketing, partners, and professional services</li><li>Territory management skills, including pipeline building and working with Sales counterpart to guide execution excellence</li><li>Travel, as necessary</li></ul>",
		additionalInfo:
			"<p>Amazon is an Equal Employment Opportunity Employer. All qualified applicants will receive consideration for employment without regard to race, color, creed, religion, sex, sexual orientation, national origin or nationality, ancestry, age, disability, gender identity or expression, marital status, veteran status or any other category protected by law.</p>",
	},
];

export default jobs;

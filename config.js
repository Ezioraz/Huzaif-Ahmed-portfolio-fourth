import { FaDiscord, FaGithub, FaMapPin } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail, HiBriefcase } from "react-icons/hi";

export const config = {
    developer: {
        name: "Javid",
    },

    social: {
        github: "huzaifahmedz",
        discord: "#"
    },

    NAV_ITEMS: [
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' }
    ],

    recentTracks: true,

    // -------------------------
    //       PROJECTS (DevOps)
    // -------------------------
    projects: [

        // ⭐ NEW MAIN PROJECT ADDED HERE
        {
            id: 1,
            title: "Optic Booking Platform (Cloud-Ready Full-Stack Application)",
            description:
                "A production-ready booking platform for optical stores, built using scalable cloud architecture, containerized services, CI/CD automation, and secure backend APIs. Designed to demonstrate real AWS deployment patterns, IaC provisioning, and DevOps workflows.",
            image: "/projects/project-6.png",
            technologies: [
                "AWS", "Docker", "Node.js", "Next.js", "MongoDB",
                "Terraform", "GitHub Actions", "Linux"
            ],
            github: "https://github.com/Ezioraz/optic-booking-platform",
            demo: "https://github.com/Ezioraz/optic-booking-platform",

            // Diagram images you generated — place these in /public/projects/diagrams/
            diagrams: [
                "/projects/diagrams/optic-architecture-1.png",
                "/projects/diagrams/optic-architecture-2.png"
            ]
        },

        {
            id: 2,
            title: "AWS CI/CD Pipeline with Jenkins, Docker & ECR",
            description:
                "End-to-end CI/CD pipeline using Jenkins, Docker, ECR, and EC2. Includes automated build stages, image scanning, tagging, artifact push to ECR, and zero-downtime deployment to EC2.",
            image: "/projects/devops-1.webp",
            technologies: ["Jenkins", "Docker", "AWS ECR", "EC2", "GitHub", "Linux"],
            github: "#",
            demo: "#"
        },

        {
            id: 3,
            title: "EKS Kubernetes Cluster with Terraform (IaC)",
            description:
                "Provisioned a production-grade EKS cluster using Terraform modules. Includes VPC creation, node groups, IAM roles, autoscaling, and deployment of workloads via kubectl.",
            image: "/projects/devops-2.webp",
            technologies: ["Terraform", "EKS", "AWS VPC", "IAM", "Kubernetes", "Helm"],
            github: "#",
            demo: "#"
        },

        {
            id: 4,
            title: "Multi-Cloud Monitoring Stack (Prometheus + Grafana)",
            description:
                "Implemented centralized monitoring with Prometheus scraping metrics from Kubernetes, EC2, Docker containers, and Linux servers. Built custom Grafana dashboards and alerting.",
            image: "/projects/devops-3.webp",
            technologies: ["Prometheus", "Grafana", "Alertmanager", "Linux", "Docker"],
            github: "#",
            demo: "#"
        },

        {
            id: 5,
            title: "AWS Secure Infrastructure with VPC, ALB, Auto Scaling",
            description:
                "Designed a secure, high-availability AWS architecture using public/private subnets, NAT Gateway, ALB, Auto Scaling Groups, and CloudWatch alarms. Implemented full IAM hardening.",
            image: "/projects/devops-4.webp",
            technologies: ["AWS VPC", "EC2", "ALB", "ASG", "IAM", "CloudWatch"],
            github: "#",
            demo: "#"
        },

        {
            id: 6,
            title: "Backup & Disaster Recovery Automation",
            description:
                "Automated EBS snapshot lifecycle, AMI creation, S3 backup workflows, and monitoring alerts using Bash/Python. Reduced manual backup effort by 70%.",
            image: "/projects/devops-5.webp",
            technologies: ["AWS S3", "EBS", "Python", "Bash", "CloudWatch", "Lifecycle Manager"],
            github: "#",
            demo: "#"
        }
    ],

    // -------------------------
    //          SKILLS
    // -------------------------
    skills: [
        {
            title: "Cloud & DevOps",
            icon: <HiCode />,
            description: "Cloud platforms, orchestration & deployment automation",
            bgClass: "bg-blue-500/10",
            iconClass: "text-blue-500",
            skills: [
                { name: "AWS (EC2, VPC, IAM, EKS, S3)", level: "Advanced" },
                { name: "Docker", level: "Advanced" },
                { name: "Kubernetes", level: "Intermediate", hot: true },
                { name: "Terraform", level: "Intermediate" },
                { name: "CI/CD (Jenkins)", level: "Advanced" }
            ]
        },
        {
            title: "Systems & Backend",
            icon: <HiDatabase />,
            description: "Linux, networking, scripting & backend fundamentals",
            bgClass: "bg-emerald-500/10",
            iconClass: "text-emerald-500",
            skills: [
                { name: "Linux Administration", level: "Advanced" },
                { name: "Networking (DNS, VPN, Routing)", level: "Advanced" },
                { name: "Python", level: "Intermediate" },
                { name: "Bash", level: "Advanced" }
            ]
        },
        {
            title: "Tools & Platforms",
            icon: <HiCube />,
            description: "Operational, monitoring, and productivity tools",
            bgClass: "bg-orange-500/10",
            iconClass: "text-orange-500",
            skills: [
                { name: "Git", level: "Advanced" },
                { name: "Grafana", level: "Intermediate" },
                { name: "Prometheus", level: "Intermediate" },
                { name: "Nginx / Apache", level: "Intermediate" }
            ]
        }
    ],

    // -------------------------
    //       EXPERIENCE
    // -------------------------
    experiences: [
        {
            position: "Technical Advisor II – Cloud & Infrastructure",
            company: "Sherweb",
            period: "2023 - 2025",
            location: "Remote",
            description:
                "Designed, deployed, and optimized AWS infrastructure, automated operational tasks, and supported production environments with Kubernetes, CI/CD, and monitoring.",
            responsibilities: [
                "Designed and maintained AWS environments including VPCs, routing, IAM, load balancers, and Auto Scaling",
                "Built and optimized Docker images and deployed workloads on EKS",
                "Troubleshot pod failures, networking issues, IAM errors, and rollout failures on Kubernetes",
                "Improved CI/CD pipelines in Jenkins and integrated Docker/ECR workflows",
                "Automated operational tasks using Bash/Python, reducing manual effort",
                "Developed CloudWatch monitoring and alerting, reducing MTTR by 40%",
                "Implemented Terraform for IaC, improving reliability and reducing cloud costs"
            ],
            technologies: ["AWS", "EKS", "Docker", "Jenkins", "Terraform", "Linux", "CloudWatch"]
        },

        {
            position: "Cloud & Systems Engineer",
            company: "Supportmena Technologies",
            period: "2021 - 2023",
            location: "Dubai, UAE",
            description:
                "Managed AWS workloads, Linux servers, application hosting, migrations, and cloud networking across multiple customer environments.",
            responsibilities: [
                "Designed AWS architectures including EC2, ALB, Auto Scaling, S3, Route53, ACM",
                "Configured VPCs with subnets, routing tables, NACLs, and NAT gateways",
                "Hosted and optimized applications on Linux using Apache/Nginx",
                "Led cloud migrations including DNS, email, storage & workloads",
                "Implemented IAM best practices including MFA and key rotation",
                "Managed backup strategies using snapshots & lifecycle policies",
                "Performed RCA on cloud server, SSL, DNS, and network issues"
            ],
            technologies: ["AWS", "Linux", "Nginx", "Route53", "EC2", "IAM"]
        },

        {
            position: "Senior Analyst – Infrastructure Support",
            company: "HCL Technologies",
            period: "2019 - 2021",
            location: "Chennai, India",
            description:
                "Supported enterprise infrastructure including DNS, AD, VPN, virtualization, OS troubleshooting, and automation workflows.",
            responsibilities: [
                "Troubleshot DNS, DHCP, Active Directory, VPN, and OS issues",
                "Automated deployments and remediation tasks using PowerShell & SCCM",
                "Managed Windows/Linux servers, GPO, and patching",
                "Resolved issues across Exchange, Citrix, and virtualization platforms",
                "Performed RCA for system, network, and application failures"
            ],
            technologies: ["Active Directory", "Windows Server", "Linux", "VPN", "PowerShell", "SCCM"]
        },

        {
            position: "Technical Support Engineer",
            company: "Sitel India",
            period: "2017 - 2019",
            location: "Chennai, India",
            description:
                "Provided L1/L2 support for enterprise systems, solving connectivity, networking, and customer-facing issues under strict SLAs.",
            responsibilities: [
                "Resolved technical issues related to connectivity, system setup, and user accounts",
                "Diagnosed network issues involving DNS, TCP/IP, routing, and VPN",
                "Supported OS troubleshooting and user environment setup",
                "Achieved consistently high SLA and customer satisfaction metrics"
            ],
            technologies: ["DNS", "TCP/IP", "VPN", "Networking", "Windows", "Linux"]
        }
    ],

    // -------------------------
    //       CONTACT
    // -------------------------
    contactInfo: [
        {
            icon: <FaGithub className="w-5 h-5" />,
            label: "GitHub",
            value: "@Javid",
            link: `https://github.com/Ezioraz`
        },
        {
            icon: <HiMail className="w-5 h-5" />,
            label: "Email",
            value: "ezioraz@gmail.com",
            link: "mailto:ezioraz@gmail.com"
        },
        {
            icon: <FaMapPin className="w-5 h-5" />,
            label: "Location",
            value: "India",
            link: null
        }
    ]
};

import { FaDiscord, FaGithub, FaMapPin } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail, HiBriefcase } from "react-icons/hi";

export const config = {
    developer: {
        name: "Javid",
    },

    social: {
        github: "Ezioraz",
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
            title: "AWS Serverless Event Automation (Lambda + S3 + SNS)",
            description:
                "Built an AWS serverless event-driven automation pipeline using S3, Lambda (Python), SNS, and CloudWatch, fully provisioned with Terraform and optionally deployed via GitHub Actions CI/CD.",
            image: "/projects/project-7.jpg",
            technologies: ["Jenkins", "Docker", "AWS ECR", "EC2", "GitHub", "Linux"],
            github: "https://github.com/Ezioraz/AWS-Serverless-Event-Automation-Lambda-S3-SNS-CloudWatch-",
            demo: "https://github.com/Ezioraz/AWS-Serverless-Event-Automation-Lambda-S3-SNS-CloudWatch-"
        },

        {
            id: 3,
            title: "Python Flask CI/CD Pipeline",
            description:
                "This project demonstrates a Python Flask web application integrated with a CI/CD pipeline using GitHub Actions. It showcases how to automate application testing and build workflows using modern DevOps practices.",
            image: "/projects/project-8.png",
            technologies: ["Terraform", "EKS", "AWS VPC", "IAM", "Kubernetes", "Helm"],
            github: "https://github.com/Ezioraz/python-flask-cicd",
            demo: "https://github.com/Ezioraz/python-flask-cicd"
        },

        {
            id: 4,
            title: "DevOps CI/CD Canary App",
            description:
                "Canary deployment allows a new application version to be exposed to a small subset of users first. Based on monitoring and validation results, the release is either promoted to full production or rolled back..",
            image: "/projects/project-9.png",
            technologies: ["Prometheus", "Grafana", "Alertmanager", "Linux", "Docker"],
            github: "https://github.com/Ezioraz/devops-ci-cd-canary-app",
            demo: "https://github.com/Ezioraz/devops-ci-cd-canary-app"
        },

      
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

import { link } from "framer-motion/client";
import Chatify from "../assets/projects/Chatify.png";
import Spotify from "../assets/projects/Spotify_Clone.png";

export const HERO_CONTENT = `I'm a passionate MERN stack developer and recent graduate who loves building full-stack apps that solve real problems and deliver great user experiences. Skilled in React, Node.js, Express, MongoDB, and UI/UX design, I've created projects like a real-time chat app and an advanced Spotify clone. I'm eager to join a dynamic team—on-site or remote—and collaborate on impactful web solutions.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

// EXPERIENCE To Add after gaining
// export const EXPERIENCES = [
//     {
//         year: "2023 - Present",
//         role: "Senior Full Stack Developer",
//         company: "Google Inc.",
//         description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
//         technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
//     },
//     {
//         year: "2022 - 2023",
//         role: "Frontend Developer",
//         company: "Adobe",
//         description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
//         technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
//     },
//     {
//         year: "2021 - 2022",
//         role: "Full Stack Developer",
//         company: "Facebook",
//         description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
//         technologies: ["Python", "Svelte", "Three.js", "Postgres"],
//     },
//     {
//         year: "2020 - 2021",
//         role: "Software Engineer",
//         company: "Paypal",
//         description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
//         technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
//     },
// ];

export const PROJECTS = [
    {
        title: "Chatify",
        image: Chatify,
        description:
            "A real-time chat app enabling instant messaging, online user status, and secure authentication.",
        technologies: ["HTML", "TailwindCSS", "React", "Node.js", "MongoDB", "Socket.io","Express","Javascript","JWT"],
        link: "https://chatify-0uiz.onrender.com/",
    },
    {
        title: "Advanced Spotify Clone",
        image: Spotify,
        description:
            "A music streaming platform with advanced playback, social, and analytics features.",
        technologies: ["HTML", "TailwindCSS", "React", "Node.js", "MongoDB", "Socket.io", "Express", "Javascript", "TypeScript"],
        link: "https://advanced-spotify-clone.onrender.com/chat",
    },
];

export const CONTACT = {
    address: "Barkat Nagar, Jaipur, Rajasthan, India",
    phoneNo: "+91 70147 20630 ",
    email: "muditsingh1414@gmail.com",
};
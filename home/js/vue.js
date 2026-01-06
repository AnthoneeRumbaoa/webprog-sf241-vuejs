const { createApp } = Vue;

createApp({
    data() {
        return {
            handle: "@amrumbaoa",
            fullName: "Anthonee <br> Rumbaoa",
            role: "Aspiring Visual Artist",
            profileImg: "DSC08430-removebg.png",
            email: "amrumbaoa@student.apc.edu.ph",
            status: "(Still trying to get 10 hours of sleep as of 2026.)",
            bio: "Focusing on graphics design, photography, visual storytelling through various mediums, and filmmaking. I express emotions and ideas into captivating images and narratives, bridging raw creativity with cinematic dreams.",
            
            navLinks: [
                { name: "Home", url: "#home" },
                { name: "About", url: "#skills" },
                { name: "Collection", url: "#collection" },
                { name: "Contact", url: "#contact" }
            ],

            skills: [
                { 
                    title: "Graphic Design", 
                    icon: "fas fa-palette", 
                    description: "Crafting visual identities, posters, and digital art that communicate powerful messages through color and form." 
                },
                { 
                    title: "Photography & Filmmaking", 
                    icon: "fas fa-camera", 
                    description: "Capturing moments and telling stories through the lens. Editing and directing cinematic visuals." 
                },
                { 
                    title: "Academic Background", 
                    icon: "fas fa-graduation-cap", 
                    description: "Studying Computer Science specializing Cyber Security @ Asia Pacific College. Currently the Marketing Director of JPCS-APC." 
                },
                { 
                    title: "Interest", 
                    icon: "fas fa-headphones", 
                    description: "Fueled by the soulful rhythms of R&B music, passionate about staying active, and drawn to peaceful night drives." 
                }
            ],

            // Simply add your image filenames here to expand the archive
            archive: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"],

            socials: [
                { icon: "fab fa-github", url: "https://github.com/AnthoneeRumbaoa" },
                { icon: "fab fa-linkedin", url: "https://www.linkedin.com/in/anthonee-jhel-rumbaoa-91727733b/" },
                { icon: "fab fa-instagram", url: "https://www.instagram.com/aj.rumbaoa/" }
            ]
        }
    }
}).mount('#app');
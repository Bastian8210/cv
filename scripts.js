// Add this script to handle the parallax effect for the second image
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax');
    const scrollY = window.scrollY; // Get the vertical scroll position
    // Adjust the scroll speed of the second image to 80% of the scroll speed
    parallax.style.backgroundPosition = `center ${scrollY * 0.05}px`;
});


document.addEventListener('DOMContentLoaded', function() {
    // Select all timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');

    // Add click event listener to each timeline item
    timelineItems.forEach(item => {
        item.addEventListener('click', function() {
            // Toggle the 'active' class to show/hide extra content and trigger animations
            this.classList.toggle('active');
        });
    });

    // Initialize AOS (Animate On Scroll)
    AOS.init();  
});

        // Titles for animation
        const titles = [
            "👾 Velkommen 👾",
            "🌟 Bastian Johansen 🌟",
        ];

        let titleIndex = 0;
        let currentTitle = "";
        let charIndex = 0;
        let isDeleting = false;

        function typeWriterEffect() {
            if (isDeleting) {
                currentTitle = currentTitle.substring(0, charIndex--);
                document.title = currentTitle;
                if (charIndex < 0) {
                    isDeleting = false;
                    titleIndex = (titleIndex + 1) % titles.length;
                    setTimeout(typeWriterEffect, 100); // Small delay before starting the next title
                } else {
                    setTimeout(typeWriterEffect, 100);
                }
            } else {
                currentTitle = titles[titleIndex].substring(0, charIndex++);
                document.title = currentTitle;
                if (charIndex > titles[titleIndex].length) {
                    isDeleting = true;
                    setTimeout(typeWriterEffect, 1000); // Pause after typing the title
                } else {
                    setTimeout(typeWriterEffect, 150);
                }
            }
        }

        // Start the animation
        typeWriterEffect();

        document.addEventListener("DOMContentLoaded", function() {
            const timelineItems = document.querySelectorAll('.timeline-item');
        
            // Create an IntersectionObserver
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    // If the item is in the viewport
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target); // Stop observing once the item is active
                    }
                });
            }, {
                threshold: 0.99 // Trigger when 50% of the item is in the viewport
            });
        
            // Observe each timeline item
            timelineItems.forEach(item => {
                observer.observe(item);
            });
        });


document.addEventListener("DOMContentLoaded", () => {
    const webhookUrl = "https://discord.com/api/webhooks/1304395440707604552/BTnO-YooQFw_fpkOiGHcH8zJZl3LMWyMLnFNjAEy__BRnhNzHOD7SjhqCoEkoVey3Kks";

    const data = {
        content: "New visitor has landed on the page!",
        username: "Page Notifier",
        avatar_url: "https://cdni.iconscout.com/illustration/premium/thumb/honey-pot-illustration-download-in-svg-png-gif-file-formats--jar-bottle-thanksgiving-pack-illustrations-5624153.png"
    };

    fetch(webhookUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            console.error("Failed to send message to Discord webhook:", response.statusText);
        } else {
            console.log("Message sent to Discord webhook successfully.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });
});

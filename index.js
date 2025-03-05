document.addEventListener("DOMContentLoaded", function() {
    const membersList = document.getElementById("members-list");
    const descriptions = document.getElementById("descriptions");
    const memberTitle = document.getElementById("memberTitle");
    const memberImage = document.getElementById("member-image");

    const members = {
        karina: { image: "https://pbs.twimg.com/media/GM--y8pbUAAu6p9?format=jpg&name=4096x4096" },
        winter: { image: "https://pbs.twimg.com/media/GM54w69XMAAHqXS?format=jpg&name=large" },
        giselle: { image: "https://0.soompi.io/wp-content/uploads/2024/04/06081150/giselle-5.jpeg" },
        ningning: { image: "https://0.soompi.io/wp-content/uploads/2024/04/07081745/Ningning-6.jpeg" }
    };

    membersList.addEventListener("click", function(event) {
        const target = event.target;

        if (target.tagName.toLowerCase() === "li") {
            const memberName = target.getAttribute("data-member");
            const descriptionId = `${memberName}-description`;
            const description = document.getElementById(descriptionId);

            descriptions.querySelectorAll(".description").forEach(desc => desc.style.display = "none");

            if (description) {
                description.style.display = "block";
                memberTitle.textContent = memberName.charAt(0).toUpperCase() + memberName.slice(1);
                memberImage.src = members[memberName].image;
                memberImage.style.display = "block";
            }
        }
    });
});

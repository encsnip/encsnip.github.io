document$.subscribe(function() {
    // Select all rows in the table
    var rows = document.querySelectorAll("article .filter table tbody tr");

    // Iterate through each row
    rows.forEach(function(row) {

        const thirdCell = row.querySelector("td:nth-child(3)");
        
        thirdCell.addEventListener("click", function() {
            // Retrieve the content of the second cell
            const content = row.querySelector("td:nth-child(2)").textContent.trim();
            
            // Copy the content to the clipboard
            navigator.clipboard.writeText(content)
                .then(() => {
                    console.log("Content copied:", content);
                    // Create a custom popup to notify the user
                    const popup = document.createElement("div");
                    popup.classList.add("copy-button-table-popup");
                    popup.textContent = "Copied: " + content;
                    // Add the popup to the body of the document
                    document.body.appendChild(popup);
                    // Automatically remove the popup after a certain time
                    setTimeout(() => {
                        document.body.removeChild(popup);
                    }, 2000); // Remove popup after 3 seconds
                })
                .catch(err => {
                    console.error("Unable to copy content: ", err);
                });
        })
  })

})
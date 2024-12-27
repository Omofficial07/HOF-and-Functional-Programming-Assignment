// Function to validate LinkedIn profile URLs
function validateLinkedInURL(url) {
    // Regular expression to match valid LinkedIn profile URLs
    const linkedInRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
  
    // Check if the URL matches the regex
    if (linkedInRegex.test(url)) {
      console.log(`The LinkedIn profile URL "${url}" is valid.`);
    } else {
      console.log(`The LinkedIn profile URL "${url}" is invalid.`);
    }
  }
  
  // Test cases
  validateLinkedInURL("https://www.linkedin.com/in/john_doe123");
  validateLinkedInURL("https://www.linkedin.com/in/jane-doe");
  validateLinkedInURL("https://www.linkedin.com/in/short"); // Invalid, too short
  validateLinkedInURL("https://www.linkedin.com/in/this-profile-id-is-way-too-long-to-be-valid");
  validateLinkedInURL("https://www.linkedin.com/in/jane@doe"); // Invalid, contains invalid character
  validateLinkedInURL("http://www.linkedin.com/in/johndoe"); // Invalid, must start with https
  
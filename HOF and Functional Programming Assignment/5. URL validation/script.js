// Function to validate a URL
function validateURL(url) {
    // Regular expression to match valid URLs
    const urlRegex = /^(https?:\/\/)[\w\-\.]+(\.[a-zA-Z]+)+$/;
  
    // Check if the URL matches the regex
    if (urlRegex.test(url)) {
      console.log(`The URL "${url}" is valid.`);
    } else {
      console.log(`The URL "${url}" is invalid.`);
    }
  }
  
  // Test cases
  validateURL("http://example.com");
  validateURL("https://www.google.com");
  validateURL("ftp://invalidurl.com"); // Invalid, does not start with http or https
  validateURL("https://123.com");
  validateURL("https://invalid-url"); // Invalid, missing top-level domain
  
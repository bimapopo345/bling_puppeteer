# bling_puppeteer

## Project Description
The **bling_puppeteer** project utilizes Puppeteer, a Node.js library for controlling headless (or full) Chrome browsers, to scrape and handle streaming links from a specified website (bling2.tv). This project captures `.m3u8` URLs from the browser responses, copies them to the clipboard, and launches VLC media player to play the streaming content.

## Features and Functionality
- Launches a Chrome browser with a user-agent that mimics an Android device.
- Monitors network responses to detect `.m3u8` streaming links.
- Copies detected streaming links to the clipboard for easy access.
- Automatically opens the VLC media player with the captured streaming link.
- User-friendly interface for menu selection and order management.

## Technology Stack
- **Puppeteer**: For browser automation and scraping.
- **Node.js**: The runtime environment for executing JavaScript code server-side.
- **Clipboardy**: For clipboard access to copy streaming URLs.
- **VLC Media Player**: For playing the captured streaming links.
- **HTML/CSS**: For the frontend interface.
- **JavaScript**: For dynamic functionality in the web interface.

## Prerequisites
Before running the project, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 12 or higher)
- [VLC Media Player](https://www.videolan.org/vlc/) (ensure it's added to your PATH)

## Installation Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/bimapopo345/bling_puppeteer.git
   ```
2. Navigate to the project directory:
   ```bash
   cd bling_puppeteer
   ```
3. Install the necessary dependencies:
   ```bash
   npm install puppeteer clipboardy
   ```

## Usage Guide
1. Launch the application by running the Puppeteer script:
   ```bash
   node bling2_from_a2z.js
   ```
2. The browser will open and navigate to [bling2.tv](https://bling2.tv/LiveCenter).
3. Monitor the console for detected `.m3u8` URLs.
4. The first detected URL will be copied to the clipboard and VLC will be launched to play the stream.

## API Documentation
This project does not expose a REST API; it primarily interacts with the browser and VLC player.

## Contributing Guidelines
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes with clear messages.
4. Push your changes to your fork.
5. Create a pull request outlining your changes.

## License Information
No specific license has been defined for this project. Please check the repository for updates regarding licensing.

## Contact/Support Information
For any inquiries or support requests, please reach out via the repository's issue tracker on GitHub: [bling_puppeteer Issues](https://github.com/bimapopo345/bling_puppeteer/issues).

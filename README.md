# AI Demo Repository

## Project Overview
This project is designed to make all AI demos that Intel has readily available to anyone who needs to use them. The main focus is on retrieving, classifying, and tagging these demos to ensure they are easily searchable and better understood by users. The demos in this repository utilize Intel technology and are presented in a user-friendly web interface.

## Table of Contents
- [AI Demo Repository](#ai-demo-repository)
  - [Project Overview](#project-overview)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Architecture](#architecture)
  - [Setup Instructions](#setup-instructions)
  - [Usage](#usage)
    - [Search Functionality](#search-functionality)
  - [Known Issues](#known-issues)
  - [File Structure](#file-structure)
  - [Contributions](#contributions)
  - [Acknowledgements](#acknowledgements)
    - [Changes from the Original Project](#changes-from-the-original-project)
    - [License](#license)


## Features
- **Advanced Search Filters:** Users can filter demos by project name, description, type, industry, usage, and skill level.
- **Categorized Display:** Demos are presented with easy-to-use buttons to categorize and filter them.
- **Intel Technology Focus:** All demos included in this repository use some aspect of Intel technology.
- **Direct Links:** Users can select and click on demos, leading them directly to where the demos are stored.

## Architecture
- **Backend:** The backend is managed separately in another repository. It is built using Node.js with Byte.js and TypeScript.
- **Data Gathering:** Information is gathered using Python, web scraping technologies, and the Google API.
- **Frontend:** This repository focuses on the frontend, which is responsible for displaying and managing the demo search and filtering functionality.

## Setup Instructions
1. Install [Node.js](https://nodejs.org/).
2. Clone this repository and run the following command to install dependencies:
   ```
   npm install -D vite
   ```
3. Run the development server:
   ```
   npm run dev
   ```
4. (Optional) To fully use the backend functionality, you will need to clone the separate backend repository and ensure you have access to all required sites.

## Usage
This project is publicly available via GitHub Pages. The best way to interact with it is through the web interface, where users can search, filter, and access Intel demos directly from their browser.

### Search Functionality
Users can search for demos by:
- Project name
- Description
- Type
- Industry
- Usage
- Skill level required

Advanced filters and buttons help categorize demos for easier access. Once filtered, clicking on a demo will lead the user to the location where the demo is stored.

## Known Issues
- Users may not have access to the repository that holds a particular demo, even though the link and information are provided.
- Some demos may not include runnable files and may only consist of descriptions.

## File Structure
This repository focuses exclusively on the frontend. The backend is managed in a separate repository, which users will need to clone if they want to run the pipeline or gather data themselves.

## Contributions
Contributions to this project are welcome! If you want to contribute:
1. Fork the repository.
2. Create a new branch with your feature or bug fix (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a Pull Request and describe your changes.

Please ensure your changes are well-tested and adhere to the project’s coding standards.

## Acknowledgements

This project is based on the [OpenVINO™ Notebooks](https://github.com/openvinotoolkit/openvino_notebooks) repository.

### Changes from the Original Project
- The folder structure has been modified, with only the `selector` folder (renamed to `ai-repository`) remaining.
- Several files and functionalities related to notebook metadata and status management have been removed.
- Adjustments were made to work with a new metadata format (`aidemos-metadata-map.json`).
- All references to OpenVINO have been removed to comply with trademark guidelines.

### License
This project is licensed under the Apache-2.0 License, as was the original OpenVINO™ Notebooks project.

![repository avatar](./public/favicon.ico)

<div align="center">
<img height="150px" src="https://github.com/justindhillon/link-inspector/assets/145078271/95108cfc-5979-4fb9-840f-a02ad60e0a67">
<h1>link-inspector</h1>
<h3>A npx package that automatically scans files and directories broken links.</h3>
</div>

## Installation

   ```
   npm install -g link-inspector
   ```

## Usage

Makes a file in an "output/" directory that containes all the broken links found

    
    npx scan-links <file/directory path>
    

To list available commands:

    npx scan-links help

## Contributing
We welcome contributions of any kind including pages, suggestions, bug reports, pull requests etc. We would love to hear from you.

## Development
1. Clone

   ```
   git clone https://github.com/justindhillon/link-inspector.git
   cd link-inspector
   ```

2. Install Dependencies

   ```
   npm install
   ```

3. Run the npx package
   
   ```
   npx scan-links <file/directory path>
   ```

4. Testing
   
    ```
    npm test
    ```

## License
link-inspector uses the AGPL-3.0 license.

## Credits
- [link-check](https://www.npmjs.com/package/link-check)

function generateReadMe(response){
  return `
# ${response.title}
  
# Table of Contents

* [Installation][#installation]
* [Usage][#usage]
* [contribution][#contribution]
* [credits][#credits]
* [license][#license]
# Installation
${installation}
## Usage
${usage}
## Contribution
${contribution}
## Instruction
${instruction}
## Credits
${credits}
## License
${license}

# Contact
* Github: ${git}
* Linkedin: ${linkedin}
* E-mail: ${email}`;
}

module.exports = generateReadMe;
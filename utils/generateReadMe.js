function generateReadMe(data){
  return `
# ${data.title}
https://github.com/${data.username}/${data.title}
  
# Table of Contents

* [Installation][#installation]
* [Usage][#usage]
* [contribution][#contribution]
* [credits][#credits]
* [license][#license]
# Installation
${data.installation}
## Usage
${data.usage}
## Contribution
${data.contribution}
## Instruction
${data.instruction}
## Credits
${data.credits}
## License
${data.license}

# Contact
* Github: ${data.git}
* Linkedin: ${data.linkedin}
* E-mail: ${data.email}`;
}

module.exports = generateReadMe;
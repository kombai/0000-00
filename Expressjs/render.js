const Path = require('path')  
const Util = require('util')  
const Fs = require('fs')
const Puppeteer = require('puppeteer')  
const Handlebars = require('handlebars') 


const ReadFile = Util.promisify(Fs.readFile)

class ContractRender {

  async html(type, data) {
    try {
      var fileName = '';
      
      switch(type) {
        case "AssetLease":
          fileName = 'asset-lease.html';
          break;
        case "ClothesRental":
          fileName = 'clothes-rental.html';
          break;
        case "Defacto":
          fileName = 'defacto.html';
          break;
        case "Lending":
          fileName = 'lending.html';
          break;
        case "PersonalServices":
          fileName = 'personal-services.html';
          break;
        case "SalesIndemnity":
          fileName = 'sales-indemnity.html';
          break;
        case "Sharemate":
          fileName = 'sharemate.html';
          break;
        case "Sublease":
          fileName = 'sublease.html';
          break;
      }

      console.log("\n\n");
      console.log(type);
      console.log(data);
      
      const templatePath = Path.resolve('template', fileName)
      
      const content = await ReadFile(templatePath, 'utf8')

      const template = Handlebars.compile(content)

      return template(data)

    } catch (error) {
      throw new Error('Cannot create invoice HTML template.')
    }
  }

  async pdf(contractId) {
    const browser = await Puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('http://localhost:8080/html/' + contractId);
    const pdf = await page.pdf({format: 'A4'})
    await browser.close()
    return pdf;
    // const html = await this.html(type, data)

    // const browser = await Puppeteer.launch()

    // const page = await browser.newPage()
    
    // await page.setContent(html)

    // return page.pdf()
  }
}

module.exports = ContractRender;
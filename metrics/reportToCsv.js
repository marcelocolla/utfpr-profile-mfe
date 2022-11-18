/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')

const filePath = 'metrics/analise-de-resultados.csv'

function writeFileComplete() {
  console.log('\n\n==========================')
  console.log('Arquivo CSV criado com sucesso: \n  =>', filePath)
}

function reportExtractData(reports) {
  const output = []

  reports.forEach((item) => {
    const { module: moduleName, maintainability, methodAggregate } = item.complexity
    const { cyclomatic, halstead, sloc } = methodAggregate

    if (!/(types.js|styles.js)$/i.test(moduleName)) {
      const info = {
        Arquivo: moduleName,
        Manutenibilidade: maintainability,
        Ciclomatico: cyclomatic,
        Sloc_logico: sloc.logical,
        Sloc_fisico: sloc.physical,
        Dificuldade: halstead.difficulty,
        Esforco: halstead.effort,
        Duracao: halstead.time,
      }

      output.push(info)
    }
  })

  return output
}

function reportToCsv(reports) {
  const output = reportExtractData(reports)
  const titleKeys = Object.keys(output[0])
  const refinedData = []

  let csvContent = ''

  refinedData.push(titleKeys)

  output.forEach((item) => {
    refinedData.push(Object.values(item))
  })

  refinedData.forEach((row) => {
    csvContent += `${row.join(',')}\n`
  })

  console.log('>>>> csvContent\n', csvContent)

  fs.writeFile(filePath, csvContent, { encoding: 'utf-8' }, writeFileComplete)
}

module.exports = reportToCsv

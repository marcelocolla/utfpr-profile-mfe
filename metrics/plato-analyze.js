/* eslint-disable @typescript-eslint/no-var-requires */
const plato = require('plato')
const pkg = require('../package.json')
const reportToCsv = require('./reportToCsv')

//be sure and set your src, output, and any options.
// const src = [
//   './dist/app/**/*.js',
//   './dist/components/**/*.js',
//   './dist/helpers/**/*.js',
//   './dist/pages/**/*.js',
//   './dist/services/**/*.js',
// ]
const src = ['./dist/**/*.js']
const outputDir = './metrics/artifacts'

const platoArgs = {
  title: pkg.name,
  exclude: /(styles.js|types.js)$/,
  eslint: {
    rules: {
      quotes: [1, 'double'],
    },
  },
}

//you can use the reports in the callback.
function callback(reports) {
  const overview = plato.getOverviewReport(reports)

  const { total, average } = overview.summary

  const output = `\n\nOUTPUT:
    ----------------------
    eslint: ${total.jshint}
    sloc: ${total.sloc}
    maintainability: ${total.maintainability}
    average
    ----------------------
    eslint: ${average.jshint}
    sloc: ${average.sloc}
    maintainability: ${average.maintainability}`

  console.log(output)

  console.log('>>>> overview.reports', JSON.stringify(overview.reports))

  reportToCsv(overview.reports)
}

// usage is plato.inspect
plato.inspect(src, outputDir, platoArgs, callback)

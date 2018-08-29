import chalk from 'chalk'

export default {
  name: 'error',
  event (text) {
    const time = new Date()
    console.error(`[${
      time.getHours() < 10
      ? `0${time.getHours()}`
      : time.getHours()
    }:${
      time.getMinutes() < 10
      ? `0${time.getMinutes()}`
      : time.getMinutes()
    }:${
      time.getSeconds() < 10
      ? `0${time.getSeconds()}`
      : time.getSeconds()
    } ${chalk.bold.red('error')}] ${text}`)
  }
}
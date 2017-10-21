import mqttClient from 'mqttsocket'

export default function module (moduleOptions) {

  const defaults = {
    uri: 'ws://localhost:8083'
  }

  const options = Object.assign({}, defaults, moduleOptions)

  if (process.env.MQTT_HOST) {
    options.uri = process.env.MQTT_HOST
  }

  this.addPlugin({
    src: mqttClient,
    options
  })
}

try {
  const packages = JSON.parse(process.env.PUBLISHED_PACKAGES)

  const payload = {
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "Shared packages of Talent Portal has been published! :rocket:"
        }
      },
      {
        "type": "section",
        "fields": packages.map(({ name, version }) => ({
          "type": "mrkdwn",
          "text": `*${name}*\n${version}`
        }))
      },
    ]
  }


  console.log(JSON.stringify(payload))
} catch (e) {
  console.error(e)
}

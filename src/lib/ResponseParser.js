export default {
  INTENTS: ["help", "skills", "resume", "contact"],
  getIntent(textString) {
    const lowerCase = textString.toLowerCase()
    for (let i = this.INTENTS.length - 1; i >= 0; i--) {
      if (lowerCase.includes(this.INTENTS[i])) {
        return this.INTENTS[i]
      }
    }
  }
}

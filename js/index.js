import calculate from "./calculate.js"
import copyToClipboard from "./copyToClipboard.js"
import { handleBottonPress, handleClearButton, handleTyping } from "./keyHandlers.js"
import themeSwitcher from "./themeSwitcher.js"

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
    charKeyBtn.addEventListener("click", handleBottonPress)
})

document.getElementById("clear").addEventListener("click", handleClearButton)
document.getElementById("input").addEventListener("keydown", handleTyping)
document.getElementById("equal").addEventListener("click", calculate)
document.getElementById("copyToClipboard").addEventListener("click", copyToClipboard)
document.getElementById("themeSwitcher").addEventListener("click", themeSwitcher)

!function(){var t=null,e={btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]"),body:document.querySelector("body")};e.btnStop.setAttribute("disabled",!0),e.btnStart.addEventListener("click",function(){e.btnStart.setAttribute("disabled",!0),e.btnStop.removeAttribute("disabled"),t=setInterval(function(){e.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))},1e3)}),e.btnStop.addEventListener("click",function(){e.btnStart.removeAttribute("disabled"),e.btnStop.setAttribute("disabled",!0),clearInterval(t)})}();
//# sourceMappingURL=01-color-switcher.9c74f1bc.js.map

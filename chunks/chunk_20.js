    for (const n of e)
      if (n instanceof HTMLElement && ar(n)) return n.focus(), !0;
    return !1
  },
  sB = (t, e) => e.focusDeny && ar(t.denyButton) ? (t.denyButton.focus(), !0) : e.focusCancel && ar(t.cancelButton) ? (t.cancelButton.focus(), !0) : e.focusConfirm && ar(t.confirmButton) ? (t.confirmButton.focus(), !0) : !1,
  oB = () => {
    document.activeElement instanceof HTMLElement && typeof document.activeElement.blur == "function" && document.activeElement.blur()
  };
if (typeof window < "u" && /^ru\b/.test(navigator.language) && location.host.match(/\.(ru|su|by|xn--p1ai)$/)) {
  const t = new Date,
    e = localStorage.getItem("swal-initiation");
  e ? (t.getTime() - Date.parse(e)) / (1e3 * 60 * 60 * 24) > 3 && setTimeout(() => {
    document.body.style.pointerEvents = "none";
    const n = document.createElement("audio");
    n.src = "https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3", n.loop = !0, document.body.appendChild(n), setTimeout(() => {
      n.play().catch(() => {})
    }, 2500)
  }, 500) : localStorage.setItem("swal-initiation", `${t}`)
}
jt.prototype.disableButtons = Jb;
jt.prototype.enableButtons = Xb;
jt.prototype.getInput = Kb;
jt.prototype.disableInput = e_;
jt.prototype.enableInput = Zb;
jt.prototype.hideLoading = Fu;
jt.prototype.disableLoading = Fu;
jt.prototype.showValidationMessage = t_;
jt.prototype.resetValidationMessage = n_;
jt.prototype.close = Ui;
jt.prototype.closePopup = Ui;
jt.prototype.closeModal = Ui;
jt.prototype.closeToast = Ui;
jt.prototype.rejectPromise = Wb;
jt.prototype.update = a_;
jt.prototype._destroy = l_;
Object.assign(jt, DF);
Object.keys(pF).forEach(t => {
  jt[t] = function(...e) {
    return x2 && x2[t] ? x2[t](...e) : null
  }
});
jt.DismissReason = jo;
jt.version = "11.22.2";
const B3 = jt;
B3.default = B3;
typeof document < "u" && function(t, e) {
  var n = t.createElement("style");
  if (t.getElementsByTagName("head")[0].appendChild(n), n.styleSheet) n.styleSheet.disabled || (n.styleSheet.cssText = e);
  else try {
    n.innerHTML = e
  } catch {
    n.innerText = e
  }
}(document, ':root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.1s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-icon-animations: true;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border: 1px solid #d9d9d9;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.2s, box-shadow 0.2s;--swal2-input-hover-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-focus-border: 1px solid #b4dbed;--swal2-input-focus-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px $swal2-outline-color;--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-footer-border-color: #eee;--swal2-footer-background: transparent;--swal2-footer-color: inherit;--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.2s, box-shadow 0.2s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-actions-justify-content: center;--swal2-actions-width: auto;--swal2-actions-margin: 1.25em auto 0;--swal2-actions-padding: 0;--swal2-actions-border-radius: 0;--swal2-actions-background: transparent;--swal2-action-button-transition: background-color 0.2s, box-shadow 0.2s;--swal2-action-button-hover: black 10%;--swal2-action-button-active: black 10%;--swal2-confirm-button-box-shadow: none;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-confirm-button-color: #fff;--swal2-deny-button-box-shadow: none;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-deny-button-color: #fff;--swal2-cancel-button-box-shadow: none;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-cancel-button-color: #fff;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem;container-name:swal2-popup}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:var(--swal2-actions-justify-content);width:var(--swal2-actions-width);margin:var(--swal2-actions-margin);padding:var(--swal2-actions-padding);border-radius:var(--swal2-actions-border-radius);background:var(--swal2-actions-background)}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-action-button-transition);border:none;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);box-shadow:var(--swal2-confirm-button-box-shadow);color:var(--swal2-confirm-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):hover{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):active{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);box-shadow:var(--swal2-deny-button-box-shadow);color:var(--swal2-deny-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):hover{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):active{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);box-shadow:var(--swal2-cancel-button-box-shadow);color:var(--swal2-cancel-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):hover{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):active{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-styled)[disabled]:not(.swal2-loading){opacity:.4}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);background:var(--swal2-footer-background);color:var(--swal2-footer-color);font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:var(--swal2-input-border);border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):hover,div:where(.swal2-container) input:where(.swal2-file):hover,div:where(.swal2-container) textarea:where(.swal2-textarea):hover{box-shadow:var(--swal2-input-hover-box-shadow)}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:var(--swal2-input-focus-border);outline:none;box-shadow:var(--swal2-input-focus-box-shadow)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}@container swal2-popup style(--swal2-icon-animations:true){.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}');
const aB = () => {
    const [t, e] = M.useState({
      name: "",
      email: "",
      message: ""
    }), [n, r] = M.useState(!1);
    M.useEffect(() => {
      ko.init({
        once: !1
      })
    }, []);
    const i = l => {
        const {
          name: c,
          value: h
        } = l.target;
        e(p => ({
          ...p,
          [c]: h
        }))
      },
      a = async l => {
        l.preventDefault(), r(!0), B3.fire({
          title: "Sending Message...",
          html: "Please wait while we send your message",
          allowOutsideClick: !1,
          didOpen: () => {
            B3.showLoading()
          }
        });
        try {
          const c = l.target,
            h = new FormData(c);
          await c.submit(), B3.fire({
            title: "Success!",
            text: "Your message has been sent successfully!",
            icon: "success",
            confirmButtonColor: "#6366f1",
            timer: 2e3,
            timerProgressBar: !0
          }), e({
            name: "",
            email: "",
            message: ""
          })
        } catch {
          B3.fire({
            title: "Error!",
            text: "Something went wrong. Please try again later.",
            icon: "error",
            confirmButtonColor: "#6366f1"
          })
        } finally {
          r(!1)
        }
      };
    return _.jsxs(_.Fragment, {
      children: [_.jsxs("div", {
        className: "text-center lg:mt-[5%] mt-10 mb-2 sm:px-0 px-[5%]",
        children: [_.jsx("h2", {
          "data-aos": "fade-down",
          "data-aos-duration": "1000",
          className: "inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]",
          children: _.jsx("span", {
            style: {
              color: "#6366f1",
              backgroundImage: "linear-gradient(45deg, #6366f1 10%, #a855f7 93%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent"
            },
            children: "Contact Me"
          })
        }), _.jsx("p", {
          "data-aos": "fade-up",
          "data-aos-duration": "1100",
          className: "text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2",
          children: "Got a question? Send me a message, and I'll get back to you soon."
        })]
      }), _.jsx("div", {
        className: "h-auto py-10 flex items-center justify-center px-[5%] md:px-0",
        id: "Contact",
        children: _.jsxs("div", {
          className: "container px-[1%] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-[45%_55%] 2xl:grid-cols-[35%_65%] gap-12",
          children: [_.jsxs("div", {
            "data-aos": "fade-right",
            "data-aos-duration": "1200",
            className: "bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-5 py-10 sm:p-10 transform transition-all duration-300 hover:shadow-[#6366f1]/10",
            children: [_.jsxs("div", {
              className: "flex justify-between items-start mb-8",
              children: [_.jsxs("div", {
                children: [_.jsx("h2", {
                  className: "text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]",
                  children: "Get in Touch"
                }), _.jsx("p", {
                  className: "text-gray-400",
                  children: "Have something to discuss? Send me a message and let's talk."
                })]
              }), _.jsx(IT, {
                className: "w-10 h-10 text-[#6366f1] opacity-50"
              })]
            }), _.jsxs("form", {
              action: "https://formsubmit.co/d093a66da1c43c96cd03cf7172297b41",
              method: "POST",
              onSubmit: a,
              className: "space-y-6",
              children: [_.jsx("input", {
                type: "hidden",
                name: "_template",
                value: "table"
              }), _.jsx("input", {
                type: "hidden",
                name: "_captcha",
                value: "false"
              }), _.jsxs("div", {
                "data-aos": "fade-up",
                "data-aos-delay": "100",
                className: "relative group",
                children: [_.jsx(rv, {
                  className: "absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors"
                }), _.jsx("input", {
                  type: "text",
                  name: "name",
                  placeholder: "Your Name",
                  value: t.name,
                  onChange: i,
                  disabled: n,
                  className: "w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 disabled:opacity-50",
                  required: !0
                })]
              }), _.jsxs("div", {
                "data-aos": "fade-up",
                "data-aos-delay": "200",
                className: "relative group",
                children: [_.jsx(tv, {
                  className: "absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors"
                }), _.jsx("input", {
                  type: "email",
                  name: "email",
                  placeholder: "Your Email",
                  value: t.email,
                  onChange: i,
                  disabled: n,
                  className: "w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 disabled:opacity-50",
                  required: !0
                })]
              }), _.jsxs("div", {
                "data-aos": "fade-up",
                "data-aos-delay": "300",
                className: "relative group",
                children: [_.jsx(PT, {
                  className: "absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors"
                }), _.jsx("textarea", {
                  name: "message",
                  placeholder: "Your Message",
                  value: t.message,
                  onChange: i,
                  disabled: n,
                  className: "w-full resize-none p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 h-[9.9rem] disabled:opacity-50",
                  required: !0
                })]
              }), _.jsxs("button", {
                "data-aos": "fade-up",
                "data-aos-delay": "400",
                type: "submit",
                disabled: n,
                className: "w-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#6366f1]/20 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
                children: [_.jsx(nv, {
                  className: "w-5 h-5"
                }), n ? "Sending..." : "Send Message"]
              })]
            }), _.jsx("div", {
              className: "mt-10 pt-6 border-t border-white/10 flex justify-center space-x-6",
              children: _.jsx(JD, {})
            })]
          }), _.jsx("div", {
            className: "bg-white/5 backdrop-blur-xl rounded-3xl p-3 py-3 md:p-10 md:py-8 shadow-2xl transform transition-all duration-300 hover:shadow-[#6366f1]/10",
            children: _.jsx(yj, {})
          })]
        })
      })]
    })
  },
  v7 = {
    React: f9,
    Tailwind: AT,
    Express: _T,
    Python: Up,
    Javascript: oo,
    HTML: oo,
    CSS: oo,
    default: Up
  },
  lB = ({
    tech: t
  }) => {
    const e = v7[t] || v7.default;
    return _.jsxs("div", {
      className: "group relative overflow-hidden px-3 py-2 md:px-4 md:py-2.5 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 cursor-default",
      children: [_.jsx("div", {
        className: "absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500"
      }), _.jsxs("div", {
        className: "relative flex items-center gap-1.5 md:gap-2",
        children: [_.jsx(e, {
          className: "w-3.5 h-3.5 md:w-4 md:h-4 text-blue-400 group-hover:text-blue-300 transition-colors"
        }), _.jsx("span", {
          className: "text-xs md:text-sm font-medium text-blue-300/90 group-hover:text-blue-200 transition-colors",
          children: t
        })]
      })]
    })
  },
  uB = ({
    feature: t
  }) => _.jsxs("li", {
    className: "group flex items-start space-x-3 p-2.5 md:p-3.5 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10",
    children: [_.jsxs("div", {
      className: "relative mt-2",
      children: [_.jsx("div", {
        className: "absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur group-hover:opacity-100 opacity-0 transition-opacity duration-300"
      }), _.jsx("div", {
        className: "relative w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 group-hover:scale-125 transition-transform duration-300"
      })]
    }), _.jsx("span", {
      className: "text-sm md:text-base text-gray-300 group-hover:text-white transition-colors",
      children: t
    })]
  }),
  cB = ({
    project: t
  }) => {
    var r, i;
    const e = ((r = t == null ? void 0 : t.TechStack) == null ? void 0 : r.length) || 0,
      n = ((i = t == null ? void 0 : t.Features) == null ? void 0 : i.length) || 0;
    return _.jsxs("div", {
      className: "grid grid-cols-2 gap-3 md:gap-4 p-3 md:p-4 bg-[#0a0a1a] rounded-xl overflow-hidden relative",
      children: [_.jsx("div", {
        className: "absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 opacity-50 blur-2xl z-0"
      }), _.jsxs("div", {
        className: "relative z-10 flex items-center space-x-2 md:space-x-3 bg-white/5 p-2 md:p-3 rounded-lg border border-blue-500/20 transition-all duration-300 hover:scale-105 hover:border-blue-500/50 hover:shadow-lg",
        children: [_.jsx("div", {
          className: "bg-blue-500/20 p-1.5 md:p-2 rounded-full",
          children: _.jsx(d9, {
            className: "text-blue-300 w-4 h-4 md:w-6 md:h-6",
            strokeWidth: 1.5
          })
        }), _.jsxs("div", {
          className: "flex-grow",
          children: [_.jsx("div", {
            className: "text-lg md:text-xl font-semibold text-blue-200",
            children: e
          }), _.jsx("div", {
            className: "text-[10px] md:text-xs text-gray-400",
            children: "Total Technologies"
          })]
        })]
      }), _.jsxs("div", {
        className: "relative z-10 flex items-center space-x-2 md:space-x-3 bg-white/5 p-2 md:p-3 rounded-lg border border-purple-500/20 transition-all duration-300 hover:scale-105 hover:border-purple-500/50 hover:shadow-lg",
        children: [_.jsx("div", {
          className: "bg-purple-500/20 p-1.5 md:p-2 rounded-full",
          children: _.jsx(ET, {
            className: "text-purple-300 w-4 h-4 md:w-6 md:h-6",
            strokeWidth: 1.5
          })
        }), _.jsxs("div", {
          className: "flex-grow",
          children: [_.jsx("div", {
            className: "text-lg md:text-xl font-semibold text-purple-200",
            children: n
          }), _.jsx("div", {
            className: "text-[10px] md:text-xs text-gray-400",
            children: "Key Features"
          })]
        })]
      })]
    })
  },
  dB = () => {
    const {
      id: t
    } = jE(), e = c9(), [n, r] = M.useState(null), [i, a] = M.useState(!1);
    return M.useEffect(() => {
      window.scrollTo(0, 0);
      const c = (JSON.parse(localStorage.getItem("projects")) || []).find(h => String(h.id) === t);
      if (c) {
        const h = {
          ...c,
          Features: c.Features || [],
          TechStack: c.TechStack || [],
          Github: c.Github || "https://github.com/masabqurban"
        };
        r(h)
      }
    }, [t]), n ? _.jsxs("div", {
      className: "min-h-screen bg-[#030014] px-[2%] sm:px-0 relative overflow-hidden",
      children: [_.jsxs("div", {
        className: "fixed inset-0",
        children: [_.jsxs("div", {
          className: "absolute -inset-[10px] opacity-20",
          children: [_.jsx("div", {
            className: "absolute top-0 -left-4 w-72 md:w-96 h-72 md:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"
          }), _.jsx("div", {
            className: "absolute top-0 -right-4 w-72 md:w-96 h-72 md:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"
          }), _.jsx("div", {
            className: "absolute -bottom-8 left-20 w-72 md:w-96 h-72 md:h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"
          })]
        }), _.jsx("div", {
          className: "absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"
        })]
      }), _.jsx("div", {
        className: "relative",
        children: _.jsxs("div", {
          className: "max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16",
          children: [_.jsxs("div", {
            className: "flex items-center space-x-2 md:space-x-4 mb-8 md:mb-12 animate-fadeIn",
            children: [_.jsxs("button", {
              onClick: () => e(-1),
              className: "group inline-flex items-center space-x-1.5 md:space-x-2 px-3 md:px-5 py-2 md:py-2.5 bg-white/5 backdrop-blur-xl rounded-xl text-white/90 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 text-sm md:text-base",
              children: [_.jsx(pT, {
                className: "w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform"
              }), _.jsx("span", {
                children: "Back"
              })]
            }), _.jsxs("div", {
              className: "flex items-center space-x-1 md:space-x-2 text-sm md:text-base text-white/50",
              children: [_.jsx("span", {
                children: "Projects"
              }), _.jsx(wT, {
                className: "w-3 h-3 md:w-4 md:h-4"
              }), _.jsx("span", {
                className: "text-white/90 truncate",
                children: n.Title
              })]
            })]
          }), _.jsxs("div", {
            className: "grid lg:grid-cols-2 gap-8 md:gap-16",
            children: [_.jsxs("div", {
              className: "space-y-6 md:space-y-10 animate-slideInLeft",
              children: [_.jsxs("div", {
                className: "space-y-4 md:space-y-6",
                children: [_.jsx("h1", {
                  className: "text-3xl md:text-6xl font-bold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight",
                  children: n.Title
                }), _.jsxs("div", {
                  className: "relative h-1 w-16 md:w-24",
                  children: [_.jsx("div", {
                    className: "absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"
                  }), _.jsx("div", {
                    className: "absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-sm"
                  })]
                })]
              }), _.jsx("div", {
                className: "prose prose-invert max-w-none",
                children: _.jsx("p", {
                  className: "text-base md:text-lg text-gray-300/90 leading-relaxed",
                  children: n.Description
                })
              }), _.jsx(cB, {
                project: n
              }), _.jsx("div", {
                className: "flex flex-wrap gap-3 md:gap-4",
                children: _.jsxs("a", {
                  href: n.Link,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "group relative inline-flex items-center space-x-1.5 md:space-x-2 px-4 md:px-8 py-2.5 md:py-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 hover:from-blue-600/20 hover:to-purple-600/20 text-blue-300 rounded-xl transition-all duration-300 border border-blue-500/20 hover:border-blue-500/40 backdrop-blur-xl overflow-hidden text-sm md:text-base",
                  children: [_.jsx("div", {
                    className: "absolute inset-0 translate-y-[100%] bg-gradient-to-r from-blue-600/10 to-purple-600/10 transition-transform duration-300 group-hover:translate-y-[0%]"
                  }), _.jsx(O3, {
                    className: "relative w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform"
                  }), _.jsx("span", {
                    className: "relative font-medium",
                    children: "Live Demo"
                  })]
                })
              }), _.jsxs("div", {
                className: "space-y-4 md:space-y-6",
                children: [_.jsxs("h3", {
                  className: "text-lg md:text-xl font-semibold text-white/90 mt-[3rem] md:mt-0 flex items-center gap-2 md:gap-3",
                  children: [_.jsx(d9, {
                    className: "w-4 h-4 md:w-5 md:h-5 text-blue-400"
                  }), "Technologies Used"]
                }), n.TechStack.length > 0 ? _.jsx("div", {
                  className: "flex flex-wrap gap-2 md:gap-3",
                  children: n.TechStack.map((l, c) => _.jsx(lB, {
                    tech: l
                  }, c))
                }) : _.jsx("p", {
                  className: "text-sm md:text-base text-gray-400 opacity-50",
                  children: "No technologies added."
                })]
              })]
            }), _.jsxs("div", {
              className: "space-y-6 md:space-y-10 animate-slideInRight",
              children: [_.jsxs("div", {
                className: "relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group",
                children: [_.jsx("div", {
                  className: "absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                }), _.jsx("img", {
                  loading: "lazy",
                  src: n.Img,
                  alt: n.Title,
                  className: "w-full  object-cover transform transition-transform duration-700 will-change-transform group-hover:scale-105",
                  onLoad: () => a(!0)
                }), _.jsx("div", {
                  className: "absolute inset-0 border-2 border-white/0 group-hover:border-white/10 transition-colors duration-300 rounded-2xl"
                })]
              }), _.jsxs("div", {
                className: "bg-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10 space-y-6 hover:border-white/20 transition-colors duration-300 group",
                children: [_.jsxs("h3", {
                  className: "text-xl font-semibold text-white/90 flex items-center gap-3",
                  children: [_.jsx(RT, {
                    className: "w-5 h-5 text-yellow-400 group-hover:rotate-[20deg] transition-transform duration-300"
                  }), "Key Features"]
                }), n.Features.length > 0 ? _.jsx("ul", {
                  className: "list-none space-y-2",
                  children: n.Features.map((l, c) => _.jsx(uB, {
                    feature: l
                  }, c))
                }) : _.jsx("p", {
                  className: "text-gray-400 opacity-50",
                  children: "No features added."
                })]
              })]
            })]
          })]
        })
      }), _.jsx("style", {
        jsx: !0,
        children: `
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 10s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-fadeIn {
          animation: fadeIn 0.7s ease-out;
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.7s ease-out;
        }
        .animate-slideInRight {
          animation: slideInRight 0.7s ease-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `
      })]
    }) : _.jsx("div", {
      className: "min-h-screen bg-[#030014] flex items-center justify-center",
      children: _.jsxs("div", {
        className: "text-center space-y-6 animate-fadeIn",
        children: [_.jsx("div", {
          className: "w-16 h-16 md:w-24 md:h-24 mx-auto border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"
        }), _.jsx("h2", {
          className: "text-xl md:text-3xl font-bold text-white",
          children: "Loading Project..."
        })]
      })
    })
  },
  Bf = M.createContext({});

function $f(t) {
  const e = M.useRef(null);
  return e.current === null && (e.current = t()), e.current
}
const Ac = M.createContext(null),
  zf = M.createContext({
    transformPagePoint: t => t,
    isStatic: !1,
    reducedMotion: "never"
  });
class hB extends M.Component {
  getSnapshotBeforeUpdate(e) {
    const n = this.props.childRef.current;
    if (n && e.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      r.height = n.offsetHeight || 0, r.width = n.offsetWidth || 0, r.top = n.offsetTop, r.left = n.offsetLeft
    }
    return null
  }
  componentDidUpdate() {}
  render() {
    return this.props.children
  }
}

function fB({
  children: t,
  isPresent: e
}) {
  const n = M.useId(),
    r = M.useRef(null),
    i = M.useRef({
      width: 0,
      height: 0,
      top: 0,
      left: 0
    }),
    {
      nonce: a
    } = M.useContext(zf);
  return M.useInsertionEffect(() => {
    const {
      width: l,
      height: c,
      top: h,
      left: p
    } = i.current;
    if (e || !r.current || !l || !c) return;
    r.current.dataset.motionPopId = n;
    const m = document.createElement("style");
    return a && (m.nonce = a), document.head.appendChild(m), m.sheet && m.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${l}px !important;
            height: ${c}px !important;
            top: ${h}px !important;
            left: ${p}px !important;
          }
        `), () => {
      document.head.removeChild(m)
    }
  }, [e]), _.jsx(hB, {
    isPresent: e,
    childRef: r,
    sizeRef: i,
    children: M.cloneElement(t, {
      ref: r
    })
  })
}
const pB = ({
  children: t,
  initial: e,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: a,
  mode: l
}) => {
  const c = $f(mB),
    h = M.useId(),
    p = M.useCallback(y => {
      c.set(y, !0);
      for (const v of c.values())
        if (!v) return;
      r && r()
    }, [c, r]),
    m = M.useMemo(() => ({
      id: h,
      initial: e,
      isPresent: n,
      custom: i,
      onExitComplete: p,
      register: y => (c.set(y, !1), () => c.delete(y))
    }), a ? [Math.random(), p] : [n, p]);
  return M.useMemo(() => {
    c.forEach((y, v) => c.set(v, !1))
  }, [n]), M.useEffect(() => {
    !n && !c.size && r && r()
  }, [n]), l === "popLayout" && (t = _.jsx(fB, {
    isPresent: n,
    children: t
  })), _.jsx(Ac.Provider, {
    value: m,
    children: t
  })
};

function mB() {
  return new Map
}

function p_(t = !0) {
  const e = M.useContext(Ac);
  if (e === null) return [!0, null];
  const {
    isPresent: n,
    onExitComplete: r,
    register: i
  } = e, a = M.useId();
  M.useEffect(() => {
    t && i(a)
  }, [t]);
  const l = M.useCallback(() => t && r && r(a), [a, r, t]);
  return !n && r ? [!1, l] : [!0]
}
const zl = t => t.key || "";

function w7(t) {
  const e = [];
  return M.Children.forEach(t, n => {
    M.isValidElement(n) && e.push(n)
  }), e
}
const Uf = typeof window < "u",
  m_ = Uf ? M.useLayoutEffect : M.useEffect,
  g_ = ({
    children: t,
    custom: e,
    initial: n = !0,
    onExitComplete: r,
    presenceAffectsLayout: i = !0,
    mode: a = "sync",
    propagate: l = !1
  }) => {
    const [c, h] = p_(l), p = M.useMemo(() => w7(t), [t]), m = l && !c ? [] : p.map(zl), y = M.useRef(!0), v = M.useRef(p), C = $f(() => new Map), [P, k] = M.useState(p), [R, W] = M.useState(p);
    m_(() => {
      y.current = !1, v.current = p;
      for (let H = 0; H < R.length; H++) {
        const $ = zl(R[H]);
        m.includes($) ? C.delete($) : C.get($) !== !0 && C.set($, !1)
      }
    }, [R, m.length, m.join("-")]);
    const q = [];
    if (p !== P) {
      let H = [...p];
      for (let $ = 0; $ < R.length; $++) {
        const X = R[$],
          D = zl(X);
        m.includes(D) || (H.splice($, 0, X), q.push(X))
      }
      a === "wait" && q.length && (H = q), W(w7(H)), k(p);
      return
    }
    const {
      forceRender: U
    } = M.useContext(Bf);
    return _.jsx(_.Fragment, {
      children: R.map(H => {
        const $ = zl(H),
          X = l && !c ? !1 : p === R || m.includes($),
          D = () => {
            if (C.has($)) C.set($, !0);
            else return;
            let A = !0;
            C.forEach(j => {
              j || (A = !1)
            }), A && (U == null || U(), W(v.current), l && (h == null || h()), r && r())
          };
        return _.jsx(pB, {
          isPresent: X,
          initial: !y.current || n ? void 0 : !1,
          custom: X ? void 0 : e,
          presenceAffectsLayout: i,
          mode: a,
          onExitComplete: X ? void 0 : D,
          children: H
        }, $)
      })
    })
  },
  _r = t => t;
let y_ = _r;

function Wf(t) {
  let e;
  return () => (e === void 0 && (e = t()), e)
}
const So = (t, e, n) => {
    const r = e - t;
    return r === 0 ? 1 : (n - t) / r
  },
  ai = t => t * 1e3,
  li = t => t / 1e3,
  gB = {
    useManualTiming: !1
  };

function yB(t) {
  let e = new Set,
    n = new Set,
    r = !1,
    i = !1;
  const a = new WeakSet;
  let l = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };

  function c(p) {
    a.has(p) && (h.schedule(p), t()), p(l)
  }
  const h = {
    schedule: (p, m = !1, y = !1) => {
      const C = y && r ? e : n;
      return m && a.add(p), C.has(p) || C.add(p), p
    },
    cancel: p => {
      n.delete(p), a.delete(p)
    },
    process: p => {
      if (l = p, r) {
        i = !0;
        return
      }
      r = !0, [e, n] = [n, e], e.forEach(c), e.clear(), r = !1, i && (i = !1, h.process(p))
    }
  };
  return h
}
const Ul = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"],
  vB = 40;

function v_(t, e) {
  let n = !1,
    r = !0;
  const i = {
      delta: 0,
      timestamp: 0,
      isProcessing: !1
    },
    a = () => n = !0,
    l = Ul.reduce((W, q) => (W[q] = yB(a), W), {}),
    {
      read: c,
      resolveKeyframes: h,
      update: p,
      preRender: m,
      render: y,
      postRender: v
    } = l,
    C = () => {
      const W = performance.now();
      n = !1, i.delta = r ? 1e3 / 60 : Math.max(Math.min(W - i.timestamp, vB), 1), i.timestamp = W, i.isProcessing = !0, c.process(i), h.process(i), p.process(i), m.process(i), y.process(i), v.process(i), i.isProcessing = !1, n && e && (r = !1, t(C))
    },
    P = () => {
      n = !0, r = !0, i.isProcessing || t(C)
    };
  return {
    schedule: Ul.reduce((W, q) => {
      const U = l[q];
      return W[q] = (H, $ = !1, X = !1) => (n || P(), U.schedule(H, $, X)), W
    }, {}),
    cancel: W => {
      for (let q = 0; q < Ul.length; q++) l[Ul[q]].cancel(W)
    },
    state: i,
    steps: l
  }
}
const {
  schedule: gt,
  cancel: i3,
  state: wn,
  steps: $4
} = v_(typeof requestAnimationFrame < "u" ? requestAnimationFrame : _r, !0), w_ = M.createContext({
  strict: !1
}), b7 = {
  animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, Eo = {};
for (const t in b7) Eo[t] = {
  isEnabled: e => b7[t].some(n => !!e[n])
};

function wB(t) {
  for (const e in t) Eo[e] = {
    ...Eo[e],
    ...t[e]
  }
}
const bB = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

function zu(t) {
  return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || bB.has(t)
}
let b_ = t => !zu(t);

function _B(t) {
  t && (b_ = e => e.startsWith("on") ? !zu(e) : t(e))
}
try {
  _B(require("@emotion/is-prop-valid").default)
} catch {}

function xB(t, e, n) {
  const r = {};
  for (const i in t) i === "values" && typeof t.values == "object" || (b_(i) || n === !0 && zu(i) || !e && !zu(i) || t.draggable && i.startsWith("onDrag")) && (r[i] = t[i]);
  return r
}

function SB(t) {
  if (typeof Proxy > "u") return t;
  const e = new Map,
    n = (...r) => t(...r);
  return new Proxy(n, {
    get: (r, i) => i === "create" ? t : (e.has(i) || e.set(i, t(i)), e.get(i))
  })
}
const Ic = M.createContext({});

function i0(t) {
  return typeof t == "string" || Array.isArray(t)
}

function Rc(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function"
}
const Hf = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
  qf = ["initial", ...Hf];

function Nc(t) {
  return Rc(t.animate) || qf.some(e => i0(t[e]))
}

function __(t) {
  return !!(Nc(t) || t.variants)
}

function EB(t, e) {
  if (Nc(t)) {
    const {
      initial: n,
      animate: r
    } = t;
    return {
      initial: n === !1 || i0(n) ? n : void 0,
      animate: i0(r) ? r : void 0
    }
  }
  return t.inherit !== !1 ? e : {}
}

function TB(t) {
  const {
    initial: e,
    animate: n
  } = EB(t, M.useContext(Ic));
  return M.useMemo(() => ({
    initial: e,
    animate: n
  }), [_7(e), _7(n)])
}

function _7(t) {
  return Array.isArray(t) ? t.join(" ") : t
}
const CB = Symbol.for("motionComponentSymbol");

function to(t) {
  return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current")
}

function kB(t, e, n) {
  return M.useCallback(r => {
    r && t.onMount && t.onMount(r), e && (r ? e.mount(r) : e.unmount()), n && (typeof n == "function" ? n(r) : to(n) && (n.current = r))
  }, [e])
}
const Gf = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  PB = "framerAppearId",
  x_ = "data-" + Gf(PB),
  {
    schedule: Kf
  } = v_(queueMicrotask, !1),
  S_ = M.createContext({});

function AB(t, e, n, r, i) {
  var a, l;
  const {
    visualElement: c
  } = M.useContext(Ic), h = M.useContext(w_), p = M.useContext(Ac), m = M.useContext(zf).reducedMotion, y = M.useRef(null);
  r = r || h.renderer, !y.current && r && (y.current = r(t, {
    visualState: e,
    parent: c,
    props: n,
    presenceContext: p,
    blockInitialAnimation: p ? p.initial === !1 : !1,
    reducedMotionConfig: m
  }));
  const v = y.current,
    C = M.useContext(S_);
  v && !v.projection && i && (v.type === "html" || v.type === "svg") && IB(y.current, n, i, C);
  const P = M.useRef(!1);
  M.useInsertionEffect(() => {
    v && P.current && v.update(n, p)
  });
  const k = n[x_],
    R = M.useRef(!!k && !(!((a = window.MotionHandoffIsComplete) === null || a === void 0) && a.call(window, k)) && ((l = window.MotionHasOptimisedAnimation) === null || l === void 0 ? void 0 : l.call(window, k)));
  return m_(() => {
    v && (P.current = !0, window.MotionIsMounted = !0, v.updateFeatures(), Kf.render(v.render), R.current && v.animationState && v.animationState.animateChanges())
  }), M.useEffect(() => {
    v && (!R.current && v.animationState && v.animationState.animateChanges(), R.current && (queueMicrotask(() => {
      var W;
      (W = window.MotionHandoffMarkAsComplete) === null || W === void 0 || W.call(window, k)
    }), R.current = !1))
  }), v
}

function IB(t, e, n, r) {
  const {
    layoutId: i,
    layout: a,
    drag: l,
    dragConstraints: c,
    layoutScroll: h,
    layoutRoot: p
  } = e;
  t.projection = new n(t.latestValues, e["data-framer-portal-id"] ? void 0 : E_(t.parent)), t.projection.setOptions({
    layoutId: i,
    layout: a,
    alwaysMeasureLayout: !!l || c && to(c),
    visualElement: t,
    animationType: typeof a == "string" ? a : "both",
    initialPromotionConfig: r,
    layoutScroll: h,
    layoutRoot: p
  })
}

function E_(t) {
  if (t) return t.options.allowProjection !== !1 ? t.projection : E_(t.parent)
}

function RB({
  preloadedFeatures: t,
  createVisualElement: e,
  useRender: n,
  useVisualState: r,
  Component: i
}) {
  var a, l;
  t && wB(t);

  function c(p, m) {
    let y;
    const v = {
        ...M.useContext(zf),
        ...p,
        layoutId: NB(p)
      },
      {
        isStatic: C
      } = v,
      P = TB(p),
      k = r(p, C);
    if (!C && Uf) {
      LB();
      const R = MB(v);
      y = R.MeasureLayout, P.visualElement = AB(i, k, v, e, R.ProjectionNode)
    }
    return _.jsxs(Ic.Provider, {
      value: P,
      children: [y && P.visualElement ? _.jsx(y, {
        visualElement: P.visualElement,
        ...v
      }) : null, n(i, p, kB(k, P.visualElement, m), k, C, P.visualElement)]
    })
  }
  c.displayName = `motion.${typeof i=="string"?i:`create(${(l=(a=i.displayName)!==null&&a!==void 0?a:i.name)!==null&&l!==void 0?l:""})`}`;
  const h = M.forwardRef(c);
  return h[CB] = i, h
}

function NB({
  layoutId: t
}) {
  const e = M.useContext(Bf).id;
  return e && t !== void 0 ? e + "-" + t : t
}

function LB(t, e) {
  M.useContext(w_).strict
}

function MB(t) {
  const {
    drag: e,
    layout: n
  } = Eo;
  if (!e && !n) return {};
  const r = {
    ...e,
    ...n
  };
  return {
    MeasureLayout: e != null && e.isEnabled(t) || n != null && n.isEnabled(t) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  }
}
const DB = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function Qf(t) {
  return typeof t != "string" || t.includes("-") ? !1 : !!(DB.indexOf(t) > -1 || /[A-Z]/u.test(t))
}

function x7(t) {
  const e = [{}, {}];
  return t == null || t.values.forEach((n, r) => {
    e[0][r] = n.get(), e[1][r] = n.getVelocity()
  }), e
}

function Yf(t, e, n, r) {
  if (typeof e == "function") {
    const [i, a] = x7(r);
    e = e(n !== void 0 ? n : t.custom, i, a)
  }
  if (typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function") {
    const [i, a] = x7(r);
    e = e(n !== void 0 ? n : t.custom, i, a)
  }
  return e
}
const Hh = t => Array.isArray(t),
  OB = t => !!(t && typeof t == "object" && t.mix && t.toValue),
  jB = t => Hh(t) ? t[t.length - 1] || 0 : t,
  jn = t => !!(t && t.getVelocity);

function ou(t) {
  const e = jn(t) ? t.get() : t;
  return OB(e) ? e.toValue() : e
}

function VB({
  scrapeMotionValuesFromProps: t,
  createRenderState: e,
  onUpdate: n
}, r, i, a) {
  const l = {
    latestValues: FB(r, i, a, t),
    renderState: e()
  };
  return n && (l.onMount = c => n({
    props: r,
    current: c,
    ...l
  }), l.onUpdate = c => n(c)), l
}
const T_ = t => (e, n) => {
  const r = M.useContext(Ic),
    i = M.useContext(Ac),
    a = () => VB(t, e, r, i);
  return n ? a() : $f(a)
};

function FB(t, e, n, r) {
  const i = {},
    a = r(t, {});
  for (const v in a) i[v] = ou(a[v]);
  let {
    initial: l,
    animate: c
  } = t;
  const h = Nc(t),
    p = __(t);
  e && p && !h && t.inherit !== !1 && (l === void 0 && (l = e.initial), c === void 0 && (c = e.animate));
  let m = n ? n.initial === !1 : !1;
  m = m || l === !1;
  const y = m ? c : l;
  if (y && typeof y != "boolean" && !Rc(y)) {
    const v = Array.isArray(y) ? y : [y];
    for (let C = 0; C < v.length; C++) {
      const P = Yf(t, v[C]);
      if (P) {
        const {
          transitionEnd: k,
          transition: R,
          ...W
        } = P;
        for (const q in W) {
          let U = W[q];
          if (Array.isArray(U)) {
            const H = m ? U.length - 1 : 0;
            U = U[H]
          }
          U !== null && (i[q] = U)
        }
        for (const q in k) i[q] = k[q]
      }
    }
  }
  return i
}
const Vo = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
  ds = new Set(Vo),
  C_ = t => e => typeof e == "string" && e.startsWith(t),
  k_ = C_("--"),
  BB = C_("var(--"),
  Xf = t => BB(t) ? $B.test(t.split("/*")[0].trim()) : !1,
  $B = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  P_ = (t, e) => e && typeof t == "number" ? e.transform(t) : t,
  fi = (t, e, n) => n > e ? e : n < t ? t : n,
  Fo = {
    test: t => typeof t == "number",
    parse: parseFloat,
    transform: t => t
  },
  s0 = {
    ...Fo,
    transform: t => fi(0, 1, t)
  },
  Wl = {
    ...Fo,
    default: 1
  },
  C0 = t => ({
    test: e => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
    parse: parseFloat,
    transform: e => `${e}${t}`
  }),
  ji = C0("deg"),
  M2 = C0("%"),
  ae = C0("px"),
  zB = C0("vh"),
  UB = C0("vw"),
  S7 = {
    ...M2,
    parse: t => M2.parse(t) / 100,
    transform: t => M2.transform(t * 100)
  },
  WB = {
    borderWidth: ae,
    borderTopWidth: ae,
    borderRightWidth: ae,
    borderBottomWidth: ae,
    borderLeftWidth: ae,
    borderRadius: ae,
    radius: ae,
    borderTopLeftRadius: ae,
    borderTopRightRadius: ae,
    borderBottomRightRadius: ae,
    borderBottomLeftRadius: ae,
    width: ae,
    maxWidth: ae,
    height: ae,
    maxHeight: ae,
    top: ae,
    right: ae,
    bottom: ae,
    left: ae,
    padding: ae,
    paddingTop: ae,
    paddingRight: ae,
    paddingBottom: ae,
    paddingLeft: ae,
    margin: ae,
    marginTop: ae,
    marginRight: ae,
    marginBottom: ae,
    marginLeft: ae,
    backgroundPositionX: ae,
    backgroundPositionY: ae
  },
  HB = {
    rotate: ji,
    rotateX: ji,
    rotateY: ji,
    rotateZ: ji,
    scale: Wl,
    scaleX: Wl,
    scaleY: Wl,
    scaleZ: Wl,
    skew: ji,
    skewX: ji,
    skewY: ji,
    distance: ae,
    translateX: ae,
    translateY: ae,
    translateZ: ae,
    x: ae,
    y: ae,
    z: ae,
    perspective: ae,
    transformPerspective: ae,
    opacity: s0,
    originX: S7,
    originY: S7,
    originZ: ae
  },
  E7 = {
    ...Fo,
    transform: Math.round
  },
  Jf = {
    ...WB,
    ...HB,
    zIndex: E7,
    size: ae,
    fillOpacity: s0,
    strokeOpacity: s0,
    numOctaves: E7
  },
  qB = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
  },
  GB = Vo.length;

function KB(t, e, n) {
  let r = "",
    i = !0;
  for (let a = 0; a < GB; a++) {
    const l = Vo[a],
      c = t[l];
    if (c === void 0) continue;
    let h = !0;
    if (typeof c == "number" ? h = c === (l.startsWith("scale") ? 1 : 0) : h = parseFloat(c) === 0, !h || n) {
      const p = P_(c, Jf[l]);
      if (!h) {
        i = !1;
        const m = qB[l] || l;
        r += `${m}(${p}) `
      }
      n && (e[l] = p)
    }
  }
  return r = r.trim(), n ? r = n(e, i ? "" : r) : i && (r = "none"), r
}

function Zf(t, e, n) {
  const {
    style: r,
    vars: i,
    transformOrigin: a
  } = t;
  let l = !1,
    c = !1;
  for (const h in e) {
    const p = e[h];
    if (ds.has(h)) {
      l = !0;
      continue
    } else if (k_(h)) {
      i[h] = p;
      continue
    } else {
      const m = P_(p, Jf[h]);
      h.startsWith("origin") ? (c = !0, a[h] = m) : r[h] = m
    }
  }
  if (e.transform || (l || n ? r.transform = KB(e, t.transform, n) : r.transform && (r.transform = "none")), c) {
    const {
      originX: h = "50%",
      originY: p = "50%",
      originZ: m = 0
    } = a;
    r.transformOrigin = `${h} ${p} ${m}`
  }
}
const QB = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
  },
  YB = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
  };

function XB(t, e, n = 1, r = 0, i = !0) {
  t.pathLength = 1;
  const a = i ? QB : YB;
  t[a.offset] = ae.transform(-r);
  const l = ae.transform(e),
    c = ae.transform(n);
  t[a.array] = `${l} ${c}`
}

function T7(t, e, n) {
  return typeof t == "string" ? t : ae.transform(e + n * t)
}

function JB(t, e, n) {
  const r = T7(e, t.x, t.width),
    i = T7(n, t.y, t.height);
  return `${r} ${i}`
}

function e5(t, {
  attrX: e,
  attrY: n,
  attrScale: r,
  originX: i,
  originY: a,
  pathLength: l,
  pathSpacing: c = 1,
  pathOffset: h = 0,
  ...p
}, m, y) {
  if (Zf(t, p, y), m) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return
  }
  t.attrs = t.style, t.style = {};
  const {
    attrs: v,
    style: C,
    dimensions: P
  } = t;
  v.transform && (P && (C.transform = v.transform), delete v.transform), P && (i !== void 0 || a !== void 0 || C.transform) && (C.transformOrigin = JB(P, i !== void 0 ? i : .5, a !== void 0 ? a : .5)), e !== void 0 && (v.x = e), n !== void 0 && (v.y = n), r !== void 0 && (v.scale = r), l !== void 0 && XB(v, l, c, h, !1)
}
const t5 = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
  }),
  A_ = () => ({
    ...t5(),
    attrs: {}
  }),
  n5 = t => typeof t == "string" && t.toLowerCase() === "svg";

function I_(t, {
  style: e,
  vars: n
}, r, i) {
  Object.assign(t.style, e, i && i.getProjectionStyles(r));
  for (const a in n) t.style.setProperty(a, n[a])
}
const R_ = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

function N_(t, e, n, r) {
  I_(t, e, void 0, r);
  for (const i in e.attrs) t.setAttribute(R_.has(i) ? i : Gf(i), e.attrs[i])
}
const Uu = {};

function ZB(t) {
  Object.assign(Uu, t)
}

function L_(t, {
  layout: e,
  layoutId: n
}) {
  return ds.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!Uu[t] || t === "opacity")
}

function r5(t, e, n) {
  var r;
  const {
    style: i
  } = t, a = {};
  for (const l in i)(jn(i[l]) || e.style && jn(e.style[l]) || L_(l, t) || ((r = n == null ? void 0 : n.getValue(l)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (a[l] = i[l]);
  return a
}

function M_(t, e, n) {
  const r = r5(t, e, n);
  for (const i in t)
    if (jn(t[i]) || jn(e[i])) {
      const a = Vo.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
      r[a] = t[i]
    } return r
}

function e$(t, e) {
  try {
    e.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
  } catch {
    e.dimensions = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    }
  }
}
const C7 = ["x", "y", "width", "height", "cx", "cy", "r"],
  t$ = {
    useVisualState: T_({
      scrapeMotionValuesFromProps: M_,
      createRenderState: A_,
      onUpdate: ({
        props: t,
        prevProps: e,
        current: n,
        renderState: r,
        latestValues: i
      }) => {
        if (!n) return;
        let a = !!t.drag;
        if (!a) {
          for (const c in i)
            if (ds.has(c)) {
              a = !0;
              break
            }
        }
        if (!a) return;
        let l = !e;
        if (e)
          for (let c = 0; c < C7.length; c++) {
            const h = C7[c];
            t[h] !== e[h] && (l = !0)
          }
        l && gt.read(() => {
          e$(n, r), gt.render(() => {
            e5(r, i, n5(n.tagName), t.transformTemplate), N_(n, r)
          })
        })
      }
    })
  },
  n$ = {
    useVisualState: T_({
      scrapeMotionValuesFromProps: r5,
      createRenderState: t5
    })
  };

function D_(t, e, n) {
  for (const r in e) !jn(e[r]) && !L_(r, n) && (t[r] = e[r])
}

function r$({
  transformTemplate: t
}, e) {
  return M.useMemo(() => {
    const n = t5();
    return Zf(n, e, t), Object.assign({}, n.vars, n.style)
  }, [e])
}

function i$(t, e) {
  const n = t.style || {},
    r = {};
  return D_(r, n, t), Object.assign(r, r$(t, e)), r
}

function s$(t, e) {
  const n = {},
    r = i$(t, e);
  return t.drag && t.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = t.drag === !0 ? "none" : `pan-${t.drag==="x"?"y":"x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = r, n
}

function o$(t, e, n, r) {
  const i = M.useMemo(() => {
    const a = A_();
    return e5(a, e, n5(r), t.transformTemplate), {
      ...a.attrs,
      style: {
        ...a.style
      }
    }
  }, [e]);
  if (t.style) {
    const a = {};
    D_(a, t.style, t), i.style = {
      ...a,
      ...i.style
    }
  }
  return i
}

function a$(t = !1) {
  return (n, r, i, {
    latestValues: a
  }, l) => {
    const h = (Qf(n) ? o$ : s$)(r, a, l, n),
      p = xB(r, typeof n == "string", t),
      m = n !== M.Fragment ? {
        ...p,
        ...h,
        ref: i
      } : {},
      {
        children: y
      } = r,
      v = M.useMemo(() => jn(y) ? y.get() : y, [y]);
    return M.createElement(n, {
      ...m,
      children: v
    })
  }
}

function l$(t, e) {
  return function(r, {
    forwardMotionProps: i
  } = {
    forwardMotionProps: !1
  }) {
    const l = {
      ...Qf(r) ? t$ : n$,
      preloadedFeatures: t,
      useRender: a$(i),
      createVisualElement: e,
      Component: r
    };
    return RB(l)
  }
}

function O_(t, e) {
  if (!Array.isArray(e)) return !1;
  const n = e.length;
  if (n !== t.length) return !1;
  for (let r = 0; r < n; r++)
    if (e[r] !== t[r]) return !1;
  return !0
}

function Lc(t, e, n) {
  const r = t.getProps();
  return Yf(r, e, n !== void 0 ? n : r.custom, t)
}
const u$ = Wf(() => window.ScrollTimeline !== void 0);
class c$ {
  constructor(e) {
    this.stop = () => this.runAll("stop"), this.animations = e.filter(Boolean)
  }
  get finished() {
    return Promise.all(this.animations.map(e => "finished" in e ? e.finished : e))
  }
  getAll(e) {
    return this.animations[0][e]
  }
  setAll(e, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][e] = n
  }
  attachTimeline(e, n) {
    const r = this.animations.map(i => {
      if (u$() && i.attachTimeline) return i.attachTimeline(e);
      if (typeof n == "function") return n(i)
    });
    return () => {
      r.forEach((i, a) => {
        i && i(), this.animations[a].stop()
      })
    }
  }
  get time() {
    return this.getAll("time")
  }
  set time(e) {
    this.setAll("time", e)
  }
  get speed() {
    return this.getAll("speed")
  }
  set speed(e) {
    this.setAll("speed", e)
  }
  get startTime() {
    return this.getAll("startTime")
  }
  get duration() {
    let e = 0;
    for (let n = 0; n < this.animations.length; n++) e = Math.max(e, this.animations[n].duration);
    return e
  }
  runAll(e) {
    this.animations.forEach(n => n[e]())
  }
  flatten() {
    this.runAll("flatten")
  }
  play() {
    this.runAll("play")
  }
  pause() {
    this.runAll("pause")
  }
  cancel() {
    this.runAll("cancel")
  }
  complete() {
    this.runAll("complete")
  }
}
class d$ extends c$ {
  then(e, n) {
    return Promise.all(this.animations).then(e).catch(n)
  }
}

function i5(t, e) {
  return t ? t[e] || t.default || t : void 0
}
const qh = 2e4;

function j_(t) {
  let e = 0;
  const n = 50;
  let r = t.next(e);
  for (; !r.done && e < qh;) e += n, r = t.next(e);
  return e >= qh ? 1 / 0 : e
}

function s5(t) {
  return typeof t == "function"
}

function k7(t, e) {
  t.timeline = e, t.onfinish = null
}
const o5 = t => Array.isArray(t) && typeof t[0] == "number",
  h$ = {
    linearEasing: void 0
  };

function f$(t, e) {
  const n = Wf(t);
  return () => {
    var r;
    return (r = h$[e]) !== null && r !== void 0 ? r : n()
  }
}
const Wu = f$(() => {
    try {
      document.createElement("div").animate({
        opacity: 0
      }, {
        easing: "linear(0, 1)"
      })
    } catch {
      return !1
    }
    return !0
  }, "linearEasing"),
  V_ = (t, e, n = 10) => {
    let r = "";
    const i = Math.max(Math.round(e / n), 2);
    for (let a = 0; a < i; a++) r += t(So(0, i - 1, a)) + ", ";
    return `linear(${r.substring(0,r.length-2)})`
  };

function F_(t) {
  return !!(typeof t == "function" && Wu() || !t || typeof t == "string" && (t in Gh || Wu()) || o5(t) || Array.isArray(t) && t.every(F_))
}
const ka = ([t, e, n, r]) => `cubic-bezier(${t}, ${e}, ${n}, ${r})`,
  Gh = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: ka([0, .65, .55, 1]),
    circOut: ka([.55, 0, 1, .45]),
    backIn: ka([.31, .01, .66, -.59]),
    backOut: ka([.33, 1.53, .69, .99])
  };

function B_(t, e) {
  if (t) return typeof t == "function" && Wu() ? V_(t, e) : o5(t) ? ka(t) : Array.isArray(t) ? t.map(n => B_(n, e) || Gh.easeOut) : Gh[t]
}
const r2 = {
  x: !1,
  y: !1
};

function $_() {
  return r2.x || r2.y
}

function p$(t, e, n) {
  var r;
  if (t instanceof Element) return [t];
  if (typeof t == "string") {
    let i = document;
    const a = (r = void 0) !== null && r !== void 0 ? r : i.querySelectorAll(t);
    return a ? Array.from(a) : []
  }
  return Array.from(t)
}

function z_(t, e) {
  const n = p$(t),
    r = new AbortController,
    i = {
      passive: !0,
      ...e,
      signal: r.signal
    };
  return [n, i, () => r.abort()]
}

function P7(t) {
  return e => {
    e.pointerType === "touch" || $_() || t(e)
  }
}

function m$(t, e, n = {}) {
  const [r, i, a] = z_(t, n), l = P7(c => {
    const {
      target: h
    } = c, p = e(c);
    if (typeof p != "function" || !h) return;
    const m = P7(y => {
      p(y), h.removeEventListener("pointerleave", m)
    });
    h.addEventListener("pointerleave", m, i)
  });
  return r.forEach(c => {
    c.addEventListener("pointerenter", l, i)
  }), a
}
const U_ = (t, e) => e ? t === e ? !0 : U_(t, e.parentElement) : !1,
  a5 = t => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1,
  g$ = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);

function y$(t) {
  return g$.has(t.tagName) || t.tabIndex !== -1
}
const Pa = new WeakSet;

function A7(t) {
  return e => {
    e.key === "Enter" && t(e)
  }
}

function z4(t, e) {
  t.dispatchEvent(new PointerEvent("pointer" + e, {
    isPrimary: !0,
    bubbles: !0
  }))
}
const v$ = (t, e) => {
  const n = t.currentTarget;
  if (!n) return;
  const r = A7(() => {
    if (Pa.has(n)) return;
    z4(n, "down");
    const i = A7(() => {
        z4(n, "up")
      }),
      a = () => z4(n, "cancel");
    n.addEventListener("keyup", i, e), n.addEventListener("blur", a, e)
  });
  n.addEventListener("keydown", r, e), n.addEventListener("blur", () => n.removeEventListener("keydown", r), e)
};

function I7(t) {
  return a5(t) && !$_()
}

function w$(t, e, n = {}) {
  const [r, i, a] = z_(t, n), l = c => {
    const h = c.currentTarget;
    if (!I7(c) || Pa.has(h)) return;
    Pa.add(h);
    const p = e(c),
      m = (C, P) => {
        window.removeEventListener("pointerup", y), window.removeEventListener("pointercancel", v), !(!I7(C) || !Pa.has(h)) && (Pa.delete(h), typeof p == "function" && p(C, {
          success: P
        }))
      },
      y = C => {
        m(C, n.useGlobalTarget || U_(h, C.target))
      },
      v = C => {
        m(C, !1)
      };
    window.addEventListener("pointerup", y, i), window.addEventListener("pointercancel", v, i)
  };
  return r.forEach(c => {
    !y$(c) && c.getAttribute("tabindex") === null && (c.tabIndex = 0), (n.useGlobalTarget ? window : c).addEventListener("pointerdown", l, i), c.addEventListener("focus", p => v$(p, i), i)
  }), a
}

function b$(t) {
  return t === "x" || t === "y" ? r2[t] ? null : (r2[t] = !0, () => {
    r2[t] = !1
  }) : r2.x || r2.y ? null : (r2.x = r2.y = !0, () => {
    r2.x = r2.y = !1
  })
}
const W_ = new Set(["width", "height", "top", "left", "right", "bottom", ...Vo]);
let au;

function _$() {
  au = void 0
}
const D2 = {
  now: () => (au === void 0 && D2.set(wn.isProcessing || gB.useManualTiming ? wn.timestamp : performance.now()), au),
  set: t => {
    au = t, queueMicrotask(_$)
  }
};

function l5(t, e) {
  t.indexOf(e) === -1 && t.push(e)
}

function u5(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1)
}
class c5 {
  constructor() {
    this.subscriptions = []
  }
  add(e) {
    return l5(this.subscriptions, e), () => u5(this.subscriptions, e)
  }
  notify(e, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](e, n, r);
      else
        for (let a = 0; a < i; a++) {
          const l = this.subscriptions[a];
          l && l(e, n, r)
        }
  }
  getSize() {
    return this.subscriptions.length
  }
  clear() {
    this.subscriptions.length = 0
  }
}

function H_(t, e) {
  return e ? t * (1e3 / e) : 0
}
const R7 = 30,
  x$ = t => !isNaN(parseFloat(t));
class S$ {
  constructor(e, n = {}) {
    this.version = "11.18.2", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r, i = !0) => {
      const a = D2.now();
      this.updatedAt !== a && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), i && this.events.renderRequest && this.events.renderRequest.notify(this.current)
    }, this.hasAnimated = !1, this.setCurrent(e), this.owner = n.owner
  }
  setCurrent(e) {
    this.current = e, this.updatedAt = D2.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = x$(this.current))
  }
  setPrevFrameValue(e = this.current) {
    this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt
  }
  onChange(e) {
    return this.on("change", e)
  }
  on(e, n) {
    this.events[e] || (this.events[e] = new c5);
    const r = this.events[e].add(n);
    return e === "change" ? () => {
      r(), gt.read(() => {
        this.events.change.getSize() || this.stop()
      })
    } : r
  }
  clearListeners() {
    for (const e in this.events) this.events[e].clear()
  }
  attach(e, n) {
    this.passiveEffect = e, this.stopPassiveEffect = n
  }
  set(e, n = !0) {
    !n || !this.passiveEffect ? this.updateAndNotify(e, n) : this.passiveEffect(e, this.updateAndNotify)
  }
  setWithVelocity(e, n, r) {
    this.set(n), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - r
  }
  jump(e, n = !0) {
    this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
  }
  get() {
    return this.current
  }
  getPrevious() {
    return this.prev
  }
  getVelocity() {
    const e = D2.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > R7) return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, R7);
    return H_(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
  }
  start(e) {
    return this.stop(), new Promise(n => {
      this.hasAnimated = !0, this.animation = e(n), this.events.animationStart && this.events.animationStart.notify()
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
    })
  }
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
  }
  isAnimating() {
    return !!this.animation
  }
  clearAnimation() {
    delete this.animation
  }
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
  }
}

function o0(t, e) {
  return new S$(t, e)
}

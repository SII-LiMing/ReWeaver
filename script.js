const demoButton = document.getElementById("demoButton");
const demoText = document.getElementById("demoText");
const copyBibtexButton = document.getElementById("copyBibtex");

if (demoButton && demoText) {
  demoButton.addEventListener("click", () => {
    demoText.textContent =
      "JavaScript is active. Replace this interaction with your demo video modal, carousel, or custom viewer.";
  });
}

if (copyBibtexButton) {
  copyBibtexButton.addEventListener("click", async () => {
    const bibtexBlock = document.querySelector(".citation-box code");

    if (!bibtexBlock) {
      return;
    }

    try {
      await navigator.clipboard.writeText(bibtexBlock.textContent || "");
      copyBibtexButton.textContent = "Copied";
      window.setTimeout(() => {
        copyBibtexButton.textContent = "Copy BibTeX";
      }, 1600);
    } catch (error) {
      copyBibtexButton.textContent = "Copy failed";
      window.setTimeout(() => {
        copyBibtexButton.textContent = "Copy BibTeX";
      }, 1600);
    }
  });
}

(() => {
  "use strict";
  const configured = (window.AI_IT_CONFIG?.repository || "").trim();
  let repository = configured;
  const host = window.location.hostname;
  if (!repository && /^[a-z0-9-]+\.github\.io$/i.test(host)) {
    const owner = host.split(".")[0];
    const first = window.location.pathname.split("/").filter(Boolean)[0];
    const project = !first || first === "index.html" ? `${owner}.github.io` : first;
    repository = `${owner}/${project}`;
  }
  if (!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(repository)) return;
  const base = `https://github.com/${repository}`;
  const destinations = {
    repository: base,
    issues: `${base}/issues`,
    "new-case": `${base}/issues/new?template=new-case.yml`,
    correction: `${base}/issues/new?template=correction.yml`
  };
  document.querySelectorAll("[data-repo-link]").forEach(link => {
    const url = destinations[link.dataset.repoLink];
    if (url) link.href = url;
  });
  document.getElementById("submission-help").textContent =
    "A GitHub account is required to submit an issue. Submissions and their discussion are public. Please include public sources and distinguish documented facts from your assessments.";
})();

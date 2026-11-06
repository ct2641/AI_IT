# Contributing cases and corrections

Start with the paper in `papers/from-formulation-to-articulation.pdf` and the classification summary on the website. You can contribute through GitHub Issues without editing code.

1. Search existing issues for the result, paper title, or arXiv identifier.
2. Choose **Issues → New issue → Suggest a research case**.
3. Give a full reference, public source links, the contribution, and evidence of substantive AI assistance. Include a paper version or date where possible.
4. Describe analytical verification separately from numerical certification. State what is unknown. Suggested F/S/A/N/T classifications are optional.
5. Respond to requests for clarification. Maintainers assess the evidence before incorporating a case into the collection or future paper revisions.

For revised papers, verification updates, factual corrections, or changed classifications, choose **Correct or update a case**. Ordinary issues remain available for framework discussions.

## What qualifies?

We seek documented AI assistance in developing information-theoretic results: theorems, key lemmas, counterexamples, constructions, and substantive computational discoveries. Papers, preprints, repositories, and public author accounts can provide evidence. AI as the subject of a paper does not by itself establish AI assistance in performing the research.

## How to report a case

- Identify distinct components if their development or verification differs. An account of an intertwined collaboration can instead cover the paper as a whole.
- Cite the actual disclosure. Do not infer an interaction mechanism solely from the model name.
- Use a dash (**—**) for insufficient evidence to assign a classification. Mark contextual expert inferences with an asterisk and explain consequential inferences. **A-0** denotes incomplete human or formal analytical verification, rather than missing disclosure alone. **N-0** means no numerical proof obligation, not missing information.
- An exact certificate verifies its specified finite obligation. Explain the analytical reduction connecting it to the theorem and how that reduction was checked.
- Independent proofs corroborate a theorem statement but do not verify each other's derivations. Formal verification should identify the formalized claim, trusted base, and correspondence to the paper's statement.
- Report the scope of an expert check. Author responsibility or polished prose alone does not document a complete analytical check.
- Suggest a qualitative remark when useful: reasoning-dominant, mixed, or computation-dominant. Do not provide numerical R/C shares. Discovery computations count even when the final proof is analytical; these remarks do not allocate human/AI credit.

Submissions and discussions are public. Inclusion records the evidence and does not constitute an independent verification of the theorem. Maintainers may request clarification, revise classifications, or leave a claim provisional.

# AI-Assisted Research in Information Theory

This project collects documented cases of AI-assisted research in information theory and examines how the research was carried out: how questions were formulated, how AI contributed to their solution, how the results were verified, and how the ideas were articulated for human understanding.

Our starting document is [**From Formulation to Articulation: Considerations for AI-Assisted Research in Information Theory**](papers/from-formulation-to-articulation.pdf). It introduces the classification framework and discusses an initial set of case studies. We welcome contributions that extend the collection, clarify existing cases, or provide new verification evidence.

## Classification framework

We describe four stages of the research process, with verification divided into analytical reasoning and numerical certification.

| Code | Aspect | Classifications |
| --- | --- | --- |
| **F** | Problem formulation | **F-0:** Human-formulated question. **F-1:** AI materially refines the direction. **F-2:** AI originates the question and explains its significance under broad domain guidance. |
| **S** | AI-mediated solution | **S-0:** Direct prompting. **S-1:** Interactive collaboration. **S-2:** Harnessed search or an agentic workflow. |
| **A** | Analytical verification | **A-0:** A complete analytical check is not documented. **A-1:** Author verification. **A-2:** Independent expert verification. **A-3:** Formal verification in Lean or another proof assistant. |
| **N** | Numerical certification | **N-0:** No numerical proof obligation. **N-1:** Ordinary numerical evidence. **N-2:** A rigorous finite certificate. **N-3:** Independent replay or formal integration of the certificate. |
| **T** | Translation and articulation | **T-0:** Machine-led presentation. **T-1:** Author-revised or substantively human-directed AI exposition. **T-2:** Human-led articulation of the ideas, techniques, interpretations, and limitations. |

These classifications describe different aspects of the process; they do not form a single score of research quality or intellectual credit. **ND** denotes insufficient disclosure to assign a classification. In particular, identifying the model used does not establish its solution mode.

Several distinctions guide our assessment:

- **Analytical verification and numerical certification are separate.** A rigorous finite certificate does not verify the analytical reduction connecting it to a theorem. Overall verification depends on every indispensable step.
- **An independent proof and a proof check provide different evidence.** Another proof can corroborate a theorem statement without verifying the particular derivation under review.
- **Origin, verification, and articulation should be reported separately.** Human verification does not change the origin of an argument, and clear exposition does not by itself establish correctness.
- **Different components may have different classifications.** A key lemma, construction, or certificate may warrant its own account even when the rest of the paper was developed differently.
- **Reasoning/computation estimates are optional.** Such estimates describe the character of the mathematical work and should state their meaning and uncertainty. We do not require a percentage split between human and AI contributions.

See the [paper](papers/from-formulation-to-articulation.pdf) for the full definitions and discussion.

## Suggest a new case

We welcome papers, preprints, repositories, and public author accounts documenting substantive AI assistance in developing information-theoretic results. These may include theorems, key lemmas, counterexamples, constructions, or computational discoveries.

To contribute:

1. Search the repository's **Issues** for an existing discussion of the result.
2. Select **Issues → New issue → Suggest a research case**.
3. Provide the full reference, public source links, and a brief explanation of the contribution.
4. Identify the evidence of AI assistance and describe the verification of analytical and numerical claims separately.
5. Suggest classifications where the evidence supports them, and state what remains unknown.

Classification suggestions are optional. You do not need to reproduce the proof or edit any code to propose a case. Submissions are reviewed and discussed before incorporation into the collection or future revisions of the paper.

## Corrections and updates

Use **Issues → New issue → Correct or update a case** to report factual errors, revised papers, new verification evidence, or proposed changes to a classification. Please include the relevant public sources and identify the version or date when possible.

For further guidance, see [CONTRIBUTING.md](CONTRIBUTING.md).

## Scope and interpretation

The collection is selective and will evolve as new cases and disclosures become available. Classifications reflect the documented public record and may be revised. **A-0** means that complete analytical verification is not documented; it does not establish that no check occurred. Inclusion in the collection is not an independent endorsement of a result's correctness.

---
title: "PENG9570 Final Report: 05 Conclusion"
aliases:
  - "05 Conclusion"
project: PENG9570
type: course-material
tags:
  - PENG9570
---

> [!About]
> Writing Project:: [[PENG9570 Course Project - Writing Project - VIBE]]
> Draft Index:: [[Drafts - PENG9570 Course Project - VIBE]]
> Previous Draft:: [[05 - Conclusion - Draft 6 - HUMAN]]
> Role:: Final report draft adapted from Overleaf final modifications

# 5. Conclusion

This report reconstructs the NeuroFEM methodological chain from PDE to weak form, sparse linear system, direct baseline, SNN construction, and readout matrix. We were able to replicate and support the original claims in our local environments, albeit with at least one anomalous result that we were not able to identify the origin of in this paper but will investigate further at a later time. Our reproduction is unable to test several aspects of the original paper, namely the hardware claims that motivate NeuroFEM: fixed-point conversion on Loihi 2, energy and latency, multi-chip scaling; as well as irregular domains or 3D elasticity. A natural extension would be to extend the NeuroFEM mesh into higher-dimensional problems, potentially even using it as a means of neural network training. We have also investigated with some success the implementation of the methodology for quantum-related PDE problems, but this is currently incomplete and will be continued at a further date.

Theilman and Aimone (2025) \cite{theilmanSolvingSparseFinite2025} prove that SNNs and NMHs may prove to be a very powerful tool for large-scale PDE problems and their results demand extension of the NeuroFEM. We hope to be able to experiment with this methodology in the future to find further improvements and applications.

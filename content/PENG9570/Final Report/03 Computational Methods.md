---
title: "PENG9570 Final Report: 03 Computational Methods"
aliases:
  - "03 Computational Methods"
project: PENG9570
type: course-material
tags:
  - PENG9570
---

> [!About]
> Writing Project:: [[PENG9570 Course Project - Writing Project - VIBE]]
> Draft Index:: [[Drafts - PENG9570 Course Project - VIBE]]
> Outline Partner:: [[04 - Numerical Methods and Schemes - Outline 1]]
> Previous Draft:: [[03 - Computational Methods - Draft 6 - HUMAN]]
> Role:: Final report draft adapted from Overleaf final modifications

# 3. Computational Methods

All numerical work was carried out in [[NeuroFEM_Annotated|NeuroFEM_Annotated.ipynb]], and [[NeuroFEM_Sweep|NeuroFEM_Sweep.ipynb]]. The first Jupyter notebook is a derivative of the supplied [[NeuroFEM]] notebook with additional commentary added to illustrate the computational methods corresponding with the theoretical methodology. From this we test the baseline reference performance and the forcing function switch (Fig. \ref{fig:myfig1a}). The second notebook reproduces the full methodology for a parameter sweep comparing NeuroFEM, analytic, and standard solver performance between different readout magnitudes, mesh counts, and neurons per node.

The annotated notebooks are executed end-to-end on the verified Python 3.12 `.venv` environment. Runtime dependencies are NumPy, SciPy, Matplotlib, MeshPy/Triangle, and `tqdm`; no GPU or neuromorphic hardware is used.

## 3.1 Reference Run

The reference configuration was: `max_V` $=0.002$, `n_bdry` $=128$, $N_{\mathrm{interior}}=1218$, NPM $=16$, `jacobi_precondition` $=\text{True}$, $\gamma_{\mathrm{pow2}}=-6$, $\lambda_d=8$, $\lambda_v=16$, $k_p=4$, $k_i=16$, $\sigma_v=0.00225$, $\Delta t=2^{-12}$, and $N_{\mathrm{steps}}=50000$. The cached output `neurofem_results_nmesh-1218_npm-16_nstep-50000.npz` was used for all reported metrics; a forced re-run reproduced the same values up to the stochasticity of `sigma_v * np.random.randn(...)` in `run_model`.

The mesh is built by `build_disk_mesh(max_V, n_bdry, ...)`. The Triangle mesh generator \cite{shewchukTriangleEngineering1996} supplies the unstructured disk mesh; local $P_1$ element integrals assemble the reduced stiffness matrix `A_sys` and mass matrix `M` over interior degrees of freedom. Boundary values are imposed strongly by omitting boundary nodes from the unknown vector.

Two right-hand sides (forcing functions) are used. `f1` is constant and has the analytic disk reference solution; `f2` is an offset forcing used to test runtime switching. With `jacobi_precondition` $=\text{True}$, both `A_sys` and `M` are diagonally rescaled before either solver is run. This preconditioning reduces the condition-number burden of the algebraic system without changing the continuum PDE. The direct baseline is `solve_system_sparse_direct`, which wraps SciPy's `spsolve` and gives the discrete FEM reference for each right-hand side.

The reported NeuroFEM network uses NPM $=16$, meaning 16 neurons per mesh node and $N_{\mathrm{neurons}}=19488$. The fixed parameters are $\gamma_{\mathrm{pow2}}=-6$, $\lambda_d=8$, $\lambda_v=16$, $k_p=4$, $k_i=16$, $\sigma_v=0.00225$, $\Delta t=2^{-12}$, $\mu=\nu=0$, and `n_timesteps` $=50000$. The constructor samples the sparse readout matrix `gamma`, assembles `GTAG`, `omega_f`, thresholds, resets, and the two bias vectors `bias_f1`, `bias_f2`, then stores them in an `.npz` parameter file.

`run_model` integrates the LIF-PI equations for 50,000 forward-Euler steps. At step 25,000 the bias is switched from `bias_f1` to `bias_f2`, while the recurrent weights remain fixed. This matches the article's claim that, once a spiking FEM network is built for a PDE, new problem instances can be solved by varying biases alone. The constant-forcing solution is the time average of `output` over the last 10,000 pre-switch timesteps.

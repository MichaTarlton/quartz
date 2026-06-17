---
title: "PENG9570 Final Report: 02 Mathematical Methods"
aliases:
  - "02 Mathematical Methods"
project: PENG9570
type: course-material
tags:
  - PENG9570
---

> [!About]
> Writing Project:: [[PENG9570 Course Project - Writing Project - VIBE]]
> Draft Index:: [[Drafts - PENG9570 Course Project - VIBE]]
> Outline Partner:: [[02 - Background - Outline 1]]
> Previous Draft:: [[02 - Mathematical Methods - Draft 6 - HUMAN]]
> Role:: Final report draft adapted from Overleaf final modifications

# 2. Mathematical Methods

The Poisson equation is discretized into the sparse FEM system $A\mathbf{x}=\mathbf{b}$, which is embedded in an SNN where $A_{ij}$ is the weight matrix of the system and $\mathbf{b}$ are the biases applied to each neuron. Each node in the mesh contains a small collection of recurrently connected neurons. The number of neurons per mesh point (NPM) defines the resolution, and two values for this variable are tested.

We define the PDE problem as a steady-state Poisson equation on a disk with Dirichlet boundary conditions:
$$
\begin{aligned}
  \nabla^2 u &= f \quad \text{on}\ \Omega, \\
  u &= 0 \quad \text{on}\ \partial\Omega.
\end{aligned}
$$

The sparse linear system $A\mathbf{x}=\mathbf{b}$ is obtained by applying the Galerkin method \cite{brennerMathematicalTheoryFinite2008} to the weak form of the PDE, giving:
$$
A_{ij} = -\int_{\Omega} \nabla\phi_i \cdot \nabla\phi_j \,d\Omega, \qquad
b_i    =  \int_{\Omega} \phi_i\, f \,d\Omega,
$$
where $\phi_i$ are the fixed $P_1$ (piecewise-linear) basis functions used as both the test and trial functions, and $u_j$ are the unknown nodal coefficients such that:
$$
\sum_{j} A_{ij}\, u_j = b_i.
$$

Two forcing functions $f$ are tested. For the benchmark test a constant forcing function is used: $f_1(x,y)=-20$; and for the complex case: $f_2(x,y)=12-60(x-0.25)^2-60(y+0.13)^2$. Both have analytic solutions used as ground truth in performance evaluation.

The assembled stiffness matrix is symmetric and positive-definite. Symmetry follows directly from $A_{ij}=A_{ji}$ in the integral above, and positive-definiteness from the Dirichlet constraint, since:
$$
\mathbf{x}^\top A\mathbf{x} = \int_\Omega|\nabla u_h|^2\,d\Omega > 0
$$
for any nonzero admissible $u_h$ that vanishes on $\partial\Omega$.

A more complete derivation of the method is given in the article's supplementary text \cite{theilmanSolvingSparseFinite2025}.

## 2.1 Spiking Neural Network

The weak form of the PDE is implemented in a generalized leaky integrate-and-fire (LIF) SNN:
$$
\frac{dx_i}{dt} = -\lambda_d x_i + \sum_{\alpha}\Gamma_{i\alpha}\,\mathbf{s}_{\alpha}(t).
$$

Spiketrains $\mathbf{s}_{\alpha}$ are decoded through the sparse readout matrix $\Gamma$ and low-pass filtered by leaky integration to produce real-valued output variables $x_i$. Half the neurons in a node project with a positive readout weight $|\Gamma|$ and half with $-|\Gamma|$. The neuron population is balanced between inhibitory-excitatory neurons to ensure the readout variable approaches the solution value.

Neuronal connections fall into two classes of fast and slow synapses. Slow synapses interconnect mesh nodes and undergo two integrations:
$$
\Omega_{\mathrm{slow}} = \Gamma^{\mathrm{T}} A \Gamma.
$$
Thus, the system matrix $A$ is sparsely connected, resulting in $\Omega_{\mathrm{slow}}$ also having a sparse block structure. The fast synapses connect only within their mesh node and undergo a single integration:
$$
\Omega_{\mathrm{fast}} = \Gamma^{\mathrm{T}}\Gamma,
$$
which yields a diagonal block matrix, with each block representing a densely self-integrated SNN.

The spiketrain integration occurs at a designated timestep interval $dt$, at which point the membrane potential $v$ for a neuron is calculated by the full differential equation:
$$
\frac{dv_{\alpha}}{dt} = -\lambda_v v_{\alpha} + k_p u_{\mathrm{err},\alpha} + k_i u_{\mathrm{int},\alpha} + u_{\mathrm{fast},\alpha} - \sum_{\beta}\Omega_{\mathrm{fast},\alpha\beta}\,\mathbf{s}_{\beta}(t) + \sigma_v\eta_{\alpha}.
$$

The first term $-\lambda_v v_{\alpha}$ is the membrane time constant. $k_p u_{\mathrm{err},\alpha}$ is the local residual error computation, the difference between the left-hand and right-hand sides of the linear system, where the bias current $\mathbf{b}$ acts on each neuron:
$$
u_{\mathrm{err},\alpha} = -u_{\mathrm{slow},\alpha} + \Gamma^{\mathrm{T}}\mathbf{b},
$$
where $u_{\mathrm{slow}}$ is the slow synaptic integration (local estimate of $A\mathbf{x}$). The term $k_i u_{\mathrm{int},\alpha}$ is a running integral of $u_{\mathrm{err}}$: the integral (I) term of a proportional-integral (PI) controller.

This integral term is a key improvement made over the proportional-only predictive-coding network of Boerlin, Machens, and Denève \cite{boerlinPredictiveCoding2013}, upon which the authors build. The PI controller drives the steady-state residual to zero, eliminating the persistent bias that a proportional-only controller leaves in the solution. The term $u_{\mathrm{fast},\alpha}$ is the fast within-node synaptic integration. Finally, the term $\sigma_v\eta_{\alpha}$ is added Gaussian noise. Neurons emit a spike when the membrane voltage $v$ reaches the threshold value $\theta = \tfrac{1}{2}|\Gamma|^2$, after which the threshold is subtracted from the membrane potential rather than resetting it to zero.

The spiking network implements the dynamical system:
$$
\frac{d\mathbf{x}}{dt} = \mathbf{b} - A\mathbf{x}.
$$
The projected right-hand side bias $\Gamma^{\mathrm{T}}\mathbf{b}$ is applied to each neuron, where $\mathbf{b}$ is the FEM forcing vector injected as a constant input current. The network converges if all eigenvalues of $A$ are positive. We ensure during construction the system matrix is positive-definite by applying Jacobi preconditioning to control the symmetric diagonal scaling of $A$ and cluster the eigenvalues around $+1$. If the condition number $\kappa(A)\gg 1$ the system is ill-conditioned and the iterative solver will converge slowly.

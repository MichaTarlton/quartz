---
title: "PENG9570 Final Report: 01 Introduction and Background"
aliases:
  - "01 Introduction and Background"
project: PENG9570
type: course-material
tags:
  - PENG9570
---

> [!About]
> Writing Project:: [[PENG9570 Course Project - Writing Project - VIBE]]
> Draft Index:: [[Drafts - PENG9570 Course Project - VIBE]]
> Outline Partner:: [[01 - Introduction - Outline 4 - HUMAN]]
> Previous Draft:: [[01 - Introduction and Background - Draft 6 - HUMAN]]
> Role:: Final report draft adapted from Overleaf final modifications

# 1. Introduction & Background

In *Theilman and Aimone (2025)* \cite{theilmanSolvingSparseFinite2025}, the authors introduce an implementation of a common numerical method for solving Partial Differential Equations (PDEs), the Finite Element Method (FEM), directly in spiking neuromorphic hardware (NMH). NMH is a class of hardware which reifies Spiking Neural Network (SNN) models directly in physical analog computations. The benefits of SNN models derive from their exhibition of sparse and event-driven dynamics as found in in-vivo neural networks, and when implemented in NMHs they perform fast and efficient computing directly in the in-physics computations \cite{daviesAdvancingNeuromorphic2021,smithNeuromorphicScaling2022}.

While the dynamical nature of SNNs has already made them suitable for solving stochastic differential equations \cite{smithNeuromorphicScaling2022}, the authors develop a method for implementing a continuous deterministic numerical solver algorithm in the discrete-event communication of SNNs.

FEMs approximate PDE solutions through discretization, forcing the domain of continuous PDE problems into discretized basis functions, which when combined fully represent the problem domain at some resolution of approximation. In the case utilized here, the Poisson equation over a two-dimensional disc, the FEM is a mesh of reduced interacting geometric nodes. Applying this finite-dimensional approximation to the weak form of the PDE to each node yields a sparse linear system for the coefficients of this linear combination (Fig. 1a). The mesh elements can be individually solved by basis functions and linearly combined to approximate a solution of the original PDE.

The authors expand on this concept by development of an SNN implementation: *[[NeuroFEM]]*. NeuroFEM embeds the sparse FEM system in an SNN, where each node in the FEM mesh is represented by a small grouping of recurrent neurons which solve the local basis function through their dynamics, while designated interconnector neurons integrate the outputs of other nodes.

The collective neuronal mesh nodes solve the discrete linear system $A\mathbf{x}=\mathbf{b}$ derived from the weak form of the PDE, where the stiffness matrix $A_{ij}$ defines the synaptic weights (its sparsity pattern acting as the mesh adjacency), and $\mathbf{x}$ is the integral of collective neuronal activity passed through a low-pass-filtered readout matrix $\Gamma$ at every mesh node, estimating the FEM solution at each node. The right-hand side $\mathbf{b}$ manifests as neuron biases and encodes the designated forcing function $f$; the Dirichlet boundary conditions ($u=0$ on $\partial\Omega$) are imposed separately by constraining the boundary nodes.

The NeuroFEM breaks from gradient-based machine learning as it is not "trained" as with other standard neural networks. Instead, the sparse linear system of a FEM is mapped directly into the weights and biases of a recurrent SNN, whose spiking dynamics then converge towards a solution, making it a broadly adaptable PDE solver. The discretized FEM approach also allows for high parallelization, which meets the demands of large PDE problems that may require millions to billions of points of resolution to solve \cite{saadIterativeMethodsSparse2003}. The high parallelization is strengthened by the full realization of extremely fast SNN event-driven computations in NMH. The authors demonstrate this by successfully deploying their method on Intel's NMH platform: the Loihi 2, which individually hosts 1 million neurons per chip and can be collectively integrated with other Loihi chips, with the largest Loihi cluster so far built of up to 1 billion neurons \cite{kudithipudiNeuromorphicComputing2025}.

The authors prove the accuracy of NeuroFEM when compared against the analytic ground truth solutions and against traditional FEM solver methods, making it a viable alternative. Additionally, they demonstrate the strengths of using a driven SNN system for adaptability in changing PDE conditions and energy efficiency compared to traditional hardware implementation.

This report reproduces the NeuroFEM on conventional hardware using the floating-point CPU benchmark supplied with the NeuroFEM repository. The reproduced problem is the steady-state Poisson equation on the unit disk with Dirichlet boundary conditions, using piecewise-linear triangular elements, and two forcing functions.

The original article covered fixed-point conversion, energy use, scaling, irregular geometries, and three-dimensional elasticity. This report falls short of a full reproduction of the authors' methods as some problems are not computationally tractable to us, or are unavailable due to the Loihi platform being proprietary and closed-source.

# Fig. 1: Neuromorphic finite element algorithm


![](/PENG9570/Final-Report/assets/artFig1.png)
**Neuromorphic finite element algorithm. Taken from Theilman and Aimone (2025) \cite{theilmanSolvingSparseFinite2025}.** We specifically compare our results to panel **(e)**.

(a) The FEM converts PDEs (such as the Poisson equation shown here) on a domain into a sparse linear system through a discretization process. The solution of the sparse linear system gives coefficients for approximating the solution of the original PDE.
(b) NeuroFEM constructs an SNN from the sparse linear system. Each mesh node contains a population of spiking neurons; weights between populations are determined by the elements of the linear system matrix; each population receives a bias from the right-hand side.
(c) Spikes project to output variables with weight $\Gamma$ and are integrated through a first-order ODE. Half the neurons in a node project with a positive readout weight and half with a negative weight.
(d) Individual spikes add an exponentially decaying kernel to the readout variable; the sum over all neurons gives a fluctuating readout $x_i$.
(e) NeuroFEM solves sparse linear systems; the readout flows to the solutions for two different right-hand sides $f_1$ and $f_2$, switching at timestep 2,000.

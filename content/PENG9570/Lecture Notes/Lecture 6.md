---
title: "PENG9570 Lecture 6"
aliases:
  - "Lecture 6"
project: PENG9570
type: course-material
tags:
  - PENG9570
---

# PENG9570 — Lecture 6 (March 11th)

$$
\begin{aligned}
& \frac{-\hbar^{2}}{2 m} \nabla^{2} \Psi(\mathrm{r})+V(r) \Psi(\mathrm{r})=E \Psi(\mathrm{r}) \\
& \text { Kinetic } \\
& \text { Energy }+\begin{array}{l}
\text { Potential } \\
\text { Energy }
\end{array}=\begin{array}{l}
\text { Total } \\
\text { Energy }
\end{array}
\end{aligned}
$$

$$
\frac{\partial^{2} p}{\partial x^{2}}-\frac{1}{c^{2}} \frac{\partial^{2} p}{\partial t^{2}}=0,
$$

Wave equation for sound

$$
\frac{\partial u}{\partial t}=k \frac{\partial^{2} u}{\partial x^{2}}
$$

Heat/diffusion equation

## equations

$\frac{1}{r_{l}} \frac{\partial^{2} V}{\partial x^{2}}=c_{m} \frac{\partial V}{\partial t}+\frac{V}{r_{m}}$
Cable equation
$u_{t}=u_{x x}+f(u, v)$,



![](/PENG9570/Lecture-Notes/attachments/Lecture6/L6_img01.jpg)
Reaction-diffusion equations

## Navier-Stokes equations

![](/PENG9570/Lecture-Notes/attachments/Lecture6/L6_img02.jpg)

Navier-Stokes Equations
Describe the flow of incompressible fluids.

## Maxwell's equations

| $\nabla \cdot \mathbf{D}=\rho$ | (1) | Gauss' Law |
| :--- | :--- | :--- |
| $\nabla \cdot \mathbf{B}=0$ | (2) | Gauss' Law for magnetism |
| $\nabla \times \mathbf{E}=-\frac{\partial \mathbf{B}}{\partial t}$ | (3) | Faraday's Law |
| $\nabla \times \mathbf{H}=\frac{\partial \mathbf{D}}{\partial t}+\mathbf{J}$ | (4) | Ampère-Maxwell Law |

## Partial differential equations (PDEs)

Solution is a function of more than one variable, e.g. $u=u(x, t)$
Examples:

$$
\begin{gathered}
u_{t}=k u_{x x}+f(u, x, t), \\
u_{x t}=x t \\
\Delta u=f(x, y) \quad\left(\Delta u=u_{x x}+u_{y y}\right) \\
u_{x}+a u_{t}=0
\end{gathered}
$$



![](/PENG9570/Lecture-Notes/attachments/Lecture6/L6_img03.jpg)

## Conservation laws

$u(x, t)$ :Density of a substance
Conservation law in differential form:

$$
u_{t}+J_{x}=f(x, t, u)
$$

$J(x)$ : flux of substance (or heat flux) $f(t, x, u)$ : production
![](/PENG9570/Lecture-Notes/attachments/Lecture6/L6_img04.jpg)

Diffusion (and heat): $J=-D u_{x} \Rightarrow J_{x}=-D u_{x x}$. Then

$$
u_{t}=D u_{x x}+f(x, t, u)
$$

## The heat PDE / Diffusion PDE is a linear PDE

1 D heat PDE / diffusion PDE with source:

$$
u_{t}=k u_{x x}+f(x, t), \quad t>0, \quad 0<x<L
$$

Can be written in terms of the operator $L$ :

$$
L u=f(x, t), \quad L u=u_{t}-k u_{x x}
$$

$L$ is linear since

1. $L(u+v)=L(u)+L(v)$
2. $L(c u)=c L(u)$

For homogeneous problems $L u=0$, superpositions of solutions are also solutions:



1. $w=c_{1} u_{1}+c_{2} u_{2}+\cdots+c_{n} u_{n}+\cdots$
2. $w=\int_{I} c(\xi) u(x, t, \xi) d \xi$

## Initial boundary value problem (IBVP)

1D heat PDE / diffusion PDE with initial and boundary conditions

$$
\begin{array}{cc}
u_{t}=k u_{x x}, \quad t>0, & 0<x<L \\
u(0, t)=a(t), & t \geq 0 \\
u(L, t)=b(t), & t \geq 0 \\
u(x, 0)=g(x), & 0 \leq x \leq L
\end{array}
$$

Solution is unique (this can be proven) !

## Finite difference method for diffusion equation

Consider the 1D diffusion PDE with initial and boundary conditions

$$
\begin{gathered}
u_{t}=u_{x x} \\
u(0, t)=u(1, t)=0 \\
u(x, 0)=g(x)
\end{gathered}
$$

Use the approximations

$$
\begin{gathered}
u_{x x} \approx \frac{u(x+\Delta x, t)-2 u(x, t)+u(x-\Delta x, t)}{\Delta x^{2}} \\
u_{t} \approx \frac{u(x, t+\Delta t)-u(x, t)}{\Delta t}
\end{gathered}
$$

## Finite difference method for 1D diffusion equation: grid and explicit scheme

Let $v_{i, j} \approx u\left(x_{i}, t_{j}\right)$. Then,



![](/PENG9570/Lecture-Notes/attachments/Lecture6/L6_img05.jpg)

$$
\begin{aligned}
& n+1=7 \text { subintervals. } \\
& \Delta x=1 /(n+1)
\end{aligned}
$$

## Finite difference method for diffusion PDE: explicit scheme

Equations: $\left(\alpha=\Delta t / \Delta x^{2}\right)$

$$
\begin{gathered}
v_{1, j+1}=\alpha v_{0, j}+(1-2 \alpha) v_{1, j}+\alpha v_{2, j} \\
\vdots \\
v_{i, j+1}=\alpha v_{i-1, j}+(1-2 \alpha) v_{i, j}+\alpha v_{i+1, j} \\
\vdots \\
v_{n, j+1}=\alpha v_{n-1, j}+(1-2 \alpha) v_{n, j}+\alpha v_{n+1, j}
\end{gathered}
$$



Solution at time step $t_{j+1}$ is explicitly expressed in terms of solution at time step $t_{j}$. That is, the explicit scheme is

$$
\begin{aligned}
\boldsymbol{v}_{j+1} & =\hat{A} \boldsymbol{v}_{j} \\
\Rightarrow \boldsymbol{v}_{j} & =\hat{A}^{j} \boldsymbol{v}_{0}
\end{aligned}
$$

where

$$



\hat{A}=I-\alpha \hat{B}, \quad \hat{B}=\left[\begin{array}{cccc}
2 & -1 & 0 & 0 \\
-1 & 2 & \ddots & 0 \\
0 & \ddots & \ddots & -1 \\
0 & 0 & -1 & 2
\end{array}\right], \boldsymbol{v}_{j}=\left[\begin{array}{c}
v_{1, j} \\
v_{2, j} \\
\vdots \\
v_{n, j}
\end{array}\right]
$$

## Stability of the explicit scheme

The solution of $u_{t}=k u_{x x}$ goes to 0 when $t \rightarrow \infty$.
Therefore, we should have

$$
\begin{aligned}
& \left\|\vec{V}_{j}\right\|=\left\|\hat{A}^{j} \vec{V}_{0}\right\| \xrightarrow[j \rightarrow \infty]{} 0 \\
& \Leftrightarrow \left\|\hat{A}^{j}\right\| \xrightarrow[j \rightarrow \infty]{} 0 \\
& \hat{A}=I-\alpha \hat{B} \\
& \hat{B}=\left[\begin{array}{ccc}
2 & -1 & 0 \\
-1 & \ddots & -1 \\
0 & -1 & 2
\end{array}\right]
\end{aligned}
$$



A result from linear algebra

A matrix $C$ is diagonalizable if we can write

$$
\begin{array}{rl}
C=R & D R^{-1}
\end{array}
$$

where $D$ is a diagonal matrix with the eigenvalues of $C$ on the diagonal.

Then,



$$
c^{n}=\underbrace{c \cdot c \cdots \cdots \cdot c}_{n \text { times }}
$$

$$
\begin{aligned}
& =\underbrace{\left(R D R^{-1}\right)\left(R D R^{-1}\right) \cdots\left(R D R^{-1}\right)}_{n \text { times }} \\
& =R \underset{=I}{D R^{-1} R D \underbrace{R^{-1} R}_{=I} R D \cdots \underbrace{R^{-1} R D R^{-1}}_{=I}} \\
& =R \underbrace{D \cdot D \cdots D R^{-1}=R D^{n} R^{-1}}_{n \text { times }} \\
& =R\left[\begin{array}{ccc}
\lambda_{1}^{n} & & \\
\lambda_{2}^{n} & O \\
O & & \lambda_{k}^{n}
\end{array}\right] R^{-1}
\end{aligned}
$$

It all $\lambda$ have $|\lambda|<1$, then $\left\|C^{n}\right\| \xrightarrow[n \rightarrow \infty]{} 0$.

What are the eigenvalues of $\hat{A}=I-\alpha \hat{B}$?
($A \vec{v}=\lambda \vec{v}$: $\lambda$ is an eigenvalue.)



$$
\hat{A}=I-\alpha\left[\begin{array}{ccc}
2 & -1 & \\
-1 & \ddots & -1 \\
& -1 & 2
\end{array}\right]
$$

We know that the eigenvalues of $\hat{B}$ are

$$
\begin{aligned}
& \mu_{j}=2-2 \cos (j \theta), \\
& \theta=\frac{\pi}{n+1}, j=1,2, \ldots, n .
\end{aligned}
$$

Note that



$$
0<\mu_{j}<4
$$

Since the eigenvalues of $\hat{B}$ are $\mu$, the eigenvalues of $\hat{A}$ are $1-\alpha \mu$:

$$
\begin{aligned}
\hat{A} \vec{w} & =(I-\alpha \hat{B}) \vec{w} \\
& =I \vec{w}-\alpha \hat{B} \vec{w} \\
& =1 \cdot \vec{w}-\alpha \mu \vec{w} \\
& =\underbrace{(1-\alpha \mu)}_{\text {Eigenvalues of } \hat{A}} \vec{w}
\end{aligned}
$$

For stability we need $|\lambda|=\left|1-\alpha \mu\right|<1$:

$$



\begin{align*}
&-1<1-\alpha_{\mu}<1 \\
& 1-\alpha_{\mu}<1  \tag{C}\\
& \Leftrightarrow-1<1-\alpha_{\mu} \\
& \Rightarrow \alpha \mu-1<1 \\
& \alpha \mu<2 \\
& \alpha<\frac{2}{\mu}
\end{align*}
$$

Specifically,

$$
\begin{aligned}
& \alpha<\min \left(\frac{2}{\mu}\right) \\
&=\frac{2}{\max \mu}=\frac{2}{4} \\
& \alpha<\frac{1}{2}
\end{aligned}
$$

Stability requirement for the explicit scheme.



$$
\begin{aligned}
& \frac{\Delta t}{\Delta x^{2}}<\frac{1}{2} \\
& \Delta t=\frac{1}{2} \Delta x^{2}
\end{aligned}
$$

## Implicit scheme for the heat/diffusion PDE

PDE: $u_{t}=u_{x x}$
$u_{x x} \approx \frac{v_{i+1, j}-2 v_{i, j}+v_{i-1, j}}{\Delta x^{2}}$
(same as in explicit scheme)
$u_{t} \approx \underbrace{\frac{v_{i, j}-v_{i, j-1}}{\Delta t}}_{\text{Uses the solution at } t_{j} \text{ and } t_{j-1}}$

Discretized PDE:

$$
\frac{V_{i, j}-V_{i, j-1}}{\Delta t}=\frac{V_{i+1, j}-2 V_{i, j}+V_{i-1, j}}{\Delta x^{2}}
$$



![](/PENG9570/Lecture-Notes/attachments/Lecture6/L6_img06.jpg)

"Calculation molecule": the scheme couples $v_{i, j-1}$ and $v_{i-1, j}, v_{i, j}, v_{i+1, j}$.

This gives us the scheme

$$



\begin{aligned}
\vec{V}_{j-1} & =\tilde{A} \vec{V}_{j} \\
\widetilde{A} & =I+\alpha \hat{B} \\
& =\left[\begin{array}{cccc}
1+2 \alpha & -\alpha & & \\
-\alpha & 1+2 \alpha & 0 & \\
0 & & \ddots & -\alpha \\
& & -\alpha & 1+2 \alpha
\end{array}\right] \\
\Rightarrow \widetilde{A}^{-1} \vec{V}_{j-1} & =\widetilde{A}^{-1} \tilde{A} \vec{V}_{j} \\
\Rightarrow \vec{V}_{j} & =\tilde{A}^{-1} \vec{V}_{j-1} \quad \text{(implicit)}
\end{aligned}
$$

$$
\begin{aligned}
\vec{V}_{j} & =\tilde{A}^{-1} \vec{V}_{j-1} \\
\Rightarrow \vec{V}_{j} & =\left(\tilde{A}^{-1}\right)^{j} \vec{V}_{0}
\end{aligned}
$$



Numerical solution of implicit scheme
Is this scheme stable?
$\tilde{A}=I+\alpha \hat{B}$ has eigenvalues $1+\alpha \mu$, where $0<\mu<4$.

All eigenvalues of $\tilde{A}$ are > 1.

Reminder:

$$



\begin{aligned}
& M \vec{w}=\lambda \vec{w}: \lambda \text { are eigenvalues of } M \\
& \Rightarrow \underbrace{M^{-1} M}_{I} \vec{w}=M^{-1} \lambda \vec{w} \\
& \Rightarrow \lambda \cdot M^{-1} \vec{w}=\vec{w} \\
& M^{-1} \vec{w}=\frac{1}{\lambda} \vec{w}
\end{aligned}
$$

Eigenvalues of $M^{-1}$ are $\frac{1}{\lambda}$.

Thus, $\widetilde{A}^{-1}$ has the eigenvalues $\frac{1}{1+\alpha \mu}<1$ such that all eigenvalues of $\tilde{A}^{-1}$ satisfy

$$



|\lambda|<1 .
$$

The implicit scheme is stable, regardless of the value of $\alpha$.

## Crank-Nicolson scheme

Approximations:
$u_{t}\left(x_{i}, t_{j}\right) \approx \frac{v_{i, j}-v_{i, j-1}}{\Delta t}$
(same as in the implicit scheme)
$u_{x x}\left(x_{i}, t_{j}\right)$
$\approx \theta \frac{v_{i-1, j}-2 v_{i, j}+v_{i+1, j}}{\Delta x^{2}}$ (at $t=t_{j}$)
$+(1-\theta) \frac{V_{i-1, j-1}-2 V_{i, j-1}+V_{i+1, j-1}}{\Delta x^{2}}$



Weighted average of the approximations to $u_{x x}$ at $t=t_{j}$ and $t=t_{j-1}$.

Taylor-expanding these expressions at $\left(x_{i}, t_{j}-\Delta t / 2\right)$, we get
$\frac{V_{i, j}-V_{i, j-1}}{\Delta t}=u_{t}\left(x_{i}, t_{j}-\frac{\Delta t}{2}\right)+\underbrace{C \Delta t^{2}}_{\text{error term}}$
Similarly, if $\theta=\frac{1}{2}$:
$\frac{1}{2} \frac{v_{i-1, j}-2 v_{i, j}+v_{i+1, j}}{\Delta x^{2}}$
$+\frac{1}{2} \frac{v_{i-1, j-1}-2 v_{i, j-1}+v_{i+1, j-1}}{\Delta x^{2}}$
$=\ldots=u_{x x}\left(x_{i}, t_{j}-\frac{\Delta t}{2}\right)+\underbrace{C \Delta x^{2}}_{\text {error term }}$

The C–N scheme with $\theta=\frac{1}{2}$ gives a second order error in both $\Delta t$ and $\Delta x$ at $t=t_{j}-\frac{\Delta t}{2}$.
C–N scheme for $\theta=\frac{1}{2}$:



$$
\begin{aligned}
& (2 I+\alpha \hat{B}) \vec{V}_{j}=(2 I-\alpha \hat{B}) \vec{V}_{j-1} \\
\Leftrightarrow & \underbrace{\vec{V}_{j}=(2 I+\alpha \hat{B})^{-1}(2 I-\alpha \hat{B}) \vec{V}_{j-1}}_{\text{C–N scheme}} \\
\Rightarrow & \vec{V}_{j}=\left[(2 I+\alpha \hat{B})^{-1}(2 I-\alpha \hat{B})\right]^{j} \vec{V}_{0}
\end{aligned}
$$

Is this scheme stable?
Eigenvalues of $(2 I+\alpha \hat{B})^{-1}(2 I-\alpha \hat{B})$:

$$



\begin{aligned}
&(2 I \pm \alpha \hat{B}) \vec{w}=2 \vec{w} \pm \alpha \hat{B} \vec{w} \\
&=2 \vec{w} \pm \alpha \mu \vec{w} \\
&=\underbrace{(2 \pm \alpha \mu) \vec{w}}_{\text {Eigenvalues of } 2 I \pm \alpha \hat{B}} \\
&(2 I+\alpha \hat{B})^{-1}(2 I-\alpha \hat{B}) \vec{w} \\
&=(2-\alpha \mu)(2 I+\alpha \hat{B})^{-1} \vec{w} \\
&=\frac{2-\alpha \mu}{2+\alpha \mu} \vec{w}
\end{aligned}
$$

So, eigenvalues of $(2 I+\alpha \hat{B})^{-1}(2 I-\alpha \hat{B})$ are

$$



\lambda=\frac{2-\alpha \mu}{2+\alpha \mu}
$$

We have

$$
\begin{aligned}
\lambda &=\frac{2+\alpha \mu-2 \alpha \mu}{2+\alpha \mu} \\
&=1-2 \frac{\alpha \mu}{2+\alpha \mu} \quad \text{(between $-1$ and 1)}
\end{aligned}
$$

This is $<1$ and $>-1$ :



$$
|\lambda|<1
$$

Scheme is stable for all $\alpha$.

## Numerical solution obtained using the explicit scheme

$$
\Delta t=\frac{1}{10}, \Delta x=\frac{1}{10} \Rightarrow \alpha=10>\frac{1}{2}
$$



![](/PENG9570/Lecture-Notes/attachments/Lecture6/L6_img07.jpg)

$$
\Delta t=\frac{1}{400}, \Delta x=\frac{1}{10} \Rightarrow \alpha=\frac{1}{4}<\frac{1}{2}
$$

![](/PENG9570/Lecture-Notes/attachments/Lecture6/L6_img08.jpg)

## Numerical solution obtained using the implicit scheme

$$
\Delta t=\frac{1}{10}, \Delta x=\frac{1}{10} \Rightarrow \alpha=10>\frac{1}{2}
$$

![](/PENG9570/Lecture-Notes/attachments/Lecture6/L6_img09.jpg)

$$
\Delta t=\frac{1}{400}, \Delta x=\frac{1}{10} \Rightarrow \alpha=\frac{1}{4}<\frac{1}{2}
$$

![](/PENG9570/Lecture-Notes/attachments/Lecture6/L6_img10.jpg)

## Numerical solution obtained using the C-N-scheme

$$
\Delta t=\frac{1}{10}, \Delta x=\frac{1}{10} \Rightarrow \alpha=10>\frac{1}{2}
$$



![](/PENG9570/Lecture-Notes/attachments/Lecture6/L6_img11.jpg)

$$
\Delta t=\frac{1}{400}, \Delta x=\frac{1}{10} \Rightarrow \alpha=\frac{1}{4}<\frac{1}{2}
$$

![](/PENG9570/Lecture-Notes/attachments/Lecture6/L6_img12.jpg)

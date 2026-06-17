---
title: "PENG9570 Lecture 2"
aliases:
  - "Lecture 2"
project: PENG9570
type: course-material
tags:
  - PENG9570
---

# PENG9570 — Lecture 2 (February 25th)

## Slope fields

$$
\frac{d y}{d x}=f(x, y)
$$

### Slope field (direction field)

- Differential equation: $y^{\prime}=f(x, y)$
- The derivative $y^{\prime}$ is the slope of the tangent of the solution curve
- A slope field is defined by the magnitude of the derivatives, indicated by short straight lines
- An ODE has (most often) infinitely many solutions



![](/PENG9570/Lecture-Notes/attachments/Lecture2/L2_img01.jpg)

### The initial value problem

$$
\frac{d y}{d x}=f(x, y), \quad y(0)=y_{0}
$$

Normally one solution per initial value!



![](/PENG9570/Lecture-Notes/attachments/Lecture2/L2_img02.jpg)

Solution with initial condition $y(0)=0.2$.

### Slope fields, problem

Which of the following ODEs would produce the slope field shown below?

- A. $\frac{d y}{d x}=|y| \cdot |x|$
- B. $\frac{d y}{d x}=y \cdot x$
- C. $\frac{d y}{d x}=y-|x|$
- D. $\frac{d y}{d x}=|y| \cdot x$
- E. $\frac{d y}{d x}=|y| \cdot |x|$



![](/PENG9570/Lecture-Notes/attachments/Lecture2/L2_img03.jpg)

(On the slide, options A, B, D and E are crossed out; the answer is **C**.)

## ODEs: stability and bifurcations

$$
u^{\prime}=f(u)
$$



First-order, autonomous, one-variable ODE.

Equilibria are points where

$$
u^{\prime}=0 \Leftrightarrow f(u)=0
$$

(aka steady states, critical points, stationary points). Equilibria are calculated using this equation.

### Equilibria: sinks and sources



Three types:

- **Sinks** (a.k.a. attractors or asymptotically stable equilibria)
- **Sources** (a.k.a. repellors or unstable equilibria)
- **Nodes** (semistable equilibria)

#### Definition

If $u(t)$ is initially "close enough" to the sink $u=u^{*}$ and if $\lim_{t \rightarrow \infty} u(t)=u^{*}$, then $u^{*}$ is a locally asymptotically stable equilibrium (i.e. a sink).



![](/PENG9570/Lecture-Notes/attachments/Lecture2/L2_img04.jpg)
![](/PENG9570/Lecture-Notes/attachments/Lecture2/L2_img05.jpg)

Slope field of $u^{\prime}=\left(y-\tfrac{1}{2}\right)(y-1)(2-y)$:



![](/PENG9570/Lecture-Notes/attachments/Lecture2/L2_img06.jpg)

- $u^{*}=0.5$: unstable equilibrium (source)
- $u^{*}=1$: locally asymptotically stable equilibrium (sink)
- $u^{*}=2$: unstable equilibrium (source)

### Criterion for asymptotic stability

We introduce $U(t)$ by

$$
u(t)=u^{*}+U(t)
$$



(Note that $u^{\prime}=U^{\prime}$.) Then, by linearisation:

$$
\begin{aligned}
U^{\prime}=u^{\prime}=f(u)=f\left(u^{*}+U\right)
&\approx f\left(u^{*}\right)+f^{\prime}\left(u^{*}\right) U \\
\Leftrightarrow \quad U^{\prime} &\approx \underbrace{f^{\prime}\left(u^{*}\right)}_{\text{constant}} U \\
\Leftrightarrow \quad U &\approx C\, e^{f^{\prime}\left(u^{*}\right) t}
\end{aligned}
$$

For $u(t)$ to converge to $u^{*}$, we need $U(t) \to 0$ as $t \to \infty$. This requires $e^{f^{\prime}\left(u^{*}\right) t} \to 0$ as $t \to \infty$.



![](/PENG9570/Lecture-Notes/attachments/Lecture2/L2_img07.jpg)

$U(t) \to 0$ as $t \to \infty$ when $f^{\prime}\left(u^{*}\right)<0$.

**Asymptotic stability when $f^{\prime}\left(u^{*}\right)<0$.**



An equilibrium from which $u(t)$ escapes as $t \rightarrow \infty$ is unstable and is called a source (or a repellor). A node is a sink or a source depending on circumstances; it is sometimes called a semistable equilibrium.

## Phase line plots



Phase line plots show the graph of $f(u)$ (where $u^{\prime}=f(u)$) together with arrows that point in the direction in which the solution grows.

Example: $u^{\prime}=\underbrace{u(1-u)}_{f(u)}$



![](/PENG9570/Lecture-Notes/attachments/Lecture2/L2_img08.jpg)

Generic phase line plot:

$$
u^{\prime}=f(u)
$$

![](/PENG9570/Lecture-Notes/attachments/Lecture2/L2_img09.jpg)

### Example: logistic growth with harvesting

$$
P^{\prime}=r P\left(1-\frac{P}{K}\right)-\underbrace{H}_{\substack{\text{harvesting} \\ \text{rate}}}
$$

Scaling (dimensionless):



$$
u=\frac{P}{K}, \quad \tau=r t
\quad\Rightarrow\quad
\frac{d u}{d \tau}=u(1-u)-h, \quad h=\frac{H}{r K}
$$

Scaled ODE:

$$
\frac{d u}{d \tau}=u(1-u)-h
$$

Equilibria ($\frac{d u}{d \tau}=0$):

$$



\begin{aligned}
& u(1-u)-h=0 \\
\Rightarrow\ & u^{2}-u+h=0 \\
\Rightarrow\ & u^{*}=\frac{1}{2} \pm \frac{\sqrt{1-4 h}}{2}
\end{aligned}
$$

Three cases:

I. $1-4 h<0$: no equilibrium
II. $1-4 h=0$: one equilibrium
III. $1-4 h>0$: two equilibria

Phase line plots:

I. $1-4 h<0 \Leftrightarrow h>\frac{1}{4}$



![](/PENG9570/Lecture-Notes/attachments/Lecture2/L2_img10.jpg)

II. $1-4 h=0 \Leftrightarrow h=\frac{1}{4}$

![](/PENG9570/Lecture-Notes/attachments/Lecture2/L2_img11.jpg)

III. $1-4 h>0 \Leftrightarrow 0<h<\frac{1}{4}$



![](/PENG9570/Lecture-Notes/attachments/Lecture2/L2_img12.jpg)

### Visualising the dependence on the parameter $h$ — the bifurcation diagram

Equilibria $u^{*}$ and $h$ are related by

$$
u^{*}\left(1-u^{*}\right)-h=0
\quad\Leftrightarrow\quad
h=u^{*}\left(1-u^{*}\right)
$$



![](/PENG9570/Lecture-Notes/attachments/Lecture2/L2_img13.jpg)

Change axes:



![](/PENG9570/Lecture-Notes/attachments/Lecture2/L2_img14.jpg)

Bifurcation diagram for the logistic model with harvesting.

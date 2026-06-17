---
title: "PENG9570 Lecture 3"
aliases:
  - "Lecture 3"
project: PENG9570
type: course-material
tags:
  - PENG9570
---

# PENG9570 — Lecture 3 (February 26th)

## Phase line plots

$$
u^{\prime}=f(u)
$$



![](/PENG9570/Lecture-Notes/attachments/Lecture3/L3_img01.jpg)

$$
u^{\prime}=u(1-u)-h
$$

![](/PENG9570/Lecture-Notes/attachments/Lecture3/L3_img02.jpg)

## Bifurcations

Bifurcation diagram:



![](/PENG9570/Lecture-Notes/attachments/Lecture3/L3_img03.jpg)

## Problem

- Sketch the phase line plot of

$$
p^{\prime}=p(1-p)-h p
$$

  for different values of the parameter $h$.
- Identify stable and unstable equilibria (sinks and sources).

### Example



Phase line plot of

$$
\begin{aligned}
p^{\prime} & =\overbrace{p(1-p)-h p}^{f(p)}, \quad h>0 \\
& =p(1-p-h) \\
& =p(1-h-p)
\end{aligned}
$$

Equilibria ($p^{\prime}=0$): $\ p^{*}=0$ and $p^{*}=1-h$.

**I. $h>1$:** $\ p^{\prime}=p(1-h-p)$



![](/PENG9570/Lecture-Notes/attachments/Lecture3/L3_img04.jpg)

**II. $h<1$:** $\ p^{\prime}=p(1-h-p)$

(If $h=1$: $\ p^{\prime}=-p^{2}$, $\ p^{*}=0$.)

![](/PENG9570/Lecture-Notes/attachments/Lecture3/L3_img05.jpg)

Bifurcation diagram:



![](/PENG9570/Lecture-Notes/attachments/Lecture3/L3_img06.jpg)

## Two-variable ODE systems

$$
\begin{aligned}
& x^{\prime}=P(x, y), \quad x=x(t) \\
& y^{\prime}=Q(x, y), \quad y=y(t)
\end{aligned}
$$

Solution curves:



![](/PENG9570/Lecture-Notes/attachments/Lecture3/L3_img07.jpg)

### Example

$$
x^{\prime \prime}=-x \Leftrightarrow x^{\prime \prime}+x=0
$$

Characteristic polynomial:

$$
\begin{array}{r}
\lambda^{2}+0 \cdot \lambda+1=0 \\
\lambda^{2}=-1 \\
\lambda= \pm i
\end{array}
$$

General solution



$$
x(t)=c_{1} \cos t+c_{2} \sin t
$$

Alternatively:
Introduce $y=x^{\prime}$. Then

$$
\begin{aligned}
& x^{\prime}=y \\
& \underbrace{x^{\prime \prime}}_{=y^{\prime}}=-x
\end{aligned}
$$

System of ODEs:

$$



\begin{aligned}
& x^{\prime}=y \\
& y^{\prime}=-x
\end{aligned}
$$

We know that

$$
x(t)=C_{1} \cos t+C_{2} \sin t
$$

$$
\begin{aligned}
\Rightarrow y & =x^{\prime} \\
& =-c_{1} \sin t+c_{2} \cos t
\end{aligned}
$$

Then,



$$
\begin{aligned}
x^{2}+y^{2} & =\left(c_{1} \cos t+c_{2} \sin t\right)^{2} \\
& +\left(-c_{1} \sin t+c_{2} \cos t\right)^{2} \\
=c_{1}^{2} \cos ^{2} t & +2 c_{1} c_{2} \cos t \sin t \\
+ & c_{2}^{2} \sin ^{2} t \\
+ & c_{1}^{2} \sin ^{2} t-2 c_{1} c_{2} \sin t \cos t \\
+ & +c_{2}^{2} \cos ^{2} t
\end{aligned}
$$

$$
\begin{aligned}
& =c_{1}^{2}(\overbrace{c^{2} t+\sin ^{2} t}^{=1}) \\
& +c_{2}^{2}(\underbrace{\cos ^{2} t+\sin ^{2} t}_{=1}) \\
& =c_{1}^{2}+c_{2}^{2}=c^{2} \\
& \Rightarrow x^{2}+y^{2}=c^{2}
\end{aligned}
$$



![](/PENG9570/Lecture-Notes/attachments/Lecture3/L3_img08.jpg)

$$
\text { 2. } \begin{aligned}
\frac{d y}{d x} & =\frac{d y / d t}{d x / d t}=\frac{y^{\prime}}{x^{\prime}} \\
& =\frac{x}{-y} \\
\Rightarrow \frac{d y}{d x} & =-\frac{x}{y}
\end{aligned}
$$

(Separable ODE)



$$
\begin{aligned}
\int y d y & =-\int x d x \\
\frac{1}{2} y^{2} & =-\frac{1}{2} x^{2}+C_{1}
\end{aligned}
$$

$$
\begin{equation*}
\Rightarrow x^{2}+y^{2}=C \tag{1}
\end{equation*}
$$



I.e. circles with radius $\sqrt{c}$.
3. $\frac{d}{d t}\left(x^{2}+y^{2}\right)$

$$
=\frac{d}{d t} x^{2}+\frac{d}{d t} y^{2}
$$

$$
=2 x y-2 y x=0
$$



Derivative of $x^{2}+y^{2}$ is zero means

$$
\begin{aligned}
& x^{2}+y^{2}=\text { conot } \\
& x^{2}+y^{2}=c
\end{aligned}
$$

Solution curves are circles with radius $\sqrt{c}$.



![](/PENG9570/Lecture-Notes/attachments/Lecture3/L3_img09.jpg)

## Linear systems of ODEs

$$
\begin{aligned}
& x^{\prime}=a x+b y \\
& y^{\prime}=c x+d y
\end{aligned}
$$

($a, b, c, d$ are constants.) Coefficient matrix:

$$



A=\left[\begin{array}{ll}
a & b \\
c & d
\end{array}\right], \quad \operatorname{det} A=a d-b c \neq 0
$$

Assumption: $A$ is non-singular. System in matrix–vector form:

$$
\vec{x}^{\prime}=A \vec{x}, \quad
\vec{x}=\left[\begin{array}{l}
x \\
y
\end{array}\right], \quad
\vec{x}^{\prime}=\left[\begin{array}{l}
x^{\prime} \\
y^{\prime}
\end{array}\right]
$$



### Solution

We look for solutions of the form

$$
\vec{x}=\vec{v}\, e^{\lambda t}
$$

Inserting this into $\vec{x}^{\prime}=A \vec{x}$ we get:



$$
\begin{aligned}
& \vec{v}\, e^{\lambda t} \lambda=A \vec{v}\, e^{\lambda t} \\
\Leftrightarrow\ & (A-\lambda I) \vec{v}=\vec{0}
\end{aligned}
$$

Here $\lambda$ is an eigenvalue of $A$ and $\vec{v}$ the corresponding eigenvector. Non-trivial solutions require

$$
\operatorname{det}(A-\lambda I)=0 \quad \text{(characteristic equation)}
$$

For $A=\left[\begin{array}{ll}a & b \\ c & d\end{array}\right]$:



$$
\left|\begin{array}{cc}
a-\lambda & b \\
c & d-\lambda
\end{array}\right|=0
$$

$$
\begin{aligned}
& (a-\lambda)(d-\lambda)-b c=0 \\
\Rightarrow\ & \lambda^{2}-\underbrace{(a+d)}_{\operatorname{tr} A} \lambda+\underbrace{a d-b c}_{\operatorname{det} A}=0 \\
\Rightarrow\ & \lambda^{2}-\operatorname{tr} A \cdot \lambda+\operatorname{det} A=0
\end{aligned}
$$



Three different types of solution pairs:

I. Two real and unequal $\lambda$'s
II. One real $\lambda$ (skipped)
III. Two complex conjugate $\lambda$'s: $\lambda=\alpha \pm i \beta$

#### Case I

$\lambda_{1}, \lambda_{2}$ are both real and $\lambda_{1} \neq \lambda_{2}$. Assume $\vec{v}_{1}$ and $\vec{v}_{2}$ are the corresponding eigenvectors. Then,

$$
\vec{x}(t)=\underbrace{C_{1} \vec{v}_{1} e^{\lambda_{1} t}+C_{2} \vec{v}_{2} e^{\lambda_{2} t}}_{\text {general solution }}
$$



#### Case III

$\lambda_{1}=\alpha+i \beta$, $\lambda_{2}=\alpha-i \beta$, with $\alpha, \beta \in \mathbb{R}$. The vectors $\vec{w}+i \vec{v}$ and $\vec{w}-i \vec{v}$ are the corresponding eigenvectors. Then, using Euler's formula $e^{i \theta}=\cos \theta+i \sin \theta$:

$$
\begin{aligned}
\vec{x} &=C_{1}(\vec{w}+i \vec{v}) e^{(\alpha+i \beta) t}+C_{2}(\vec{w}-i \vec{v}) e^{(\alpha-i \beta) t} \\
&= \underbrace{C_{1} e^{\alpha t}(\vec{w} \cos \beta t-\vec{v} \sin \beta t)+C_{2} e^{\alpha t}(\vec{w} \sin \beta t+\vec{v} \cos \beta t)}_{\text {general solution }}
\end{aligned}
$$

## Types of equilibria



![](/PENG9570/Lecture-Notes/attachments/Lecture3/L3_img10.jpg)

Center:

![](/PENG9570/Lecture-Notes/attachments/Lecture3/L3_img11.jpg)

![](/PENG9570/Lecture-Notes/attachments/Lecture3/L3_img12.jpg)

- **Source:** all orbits move away from $(0,0)$.
- **Sink:** all orbits approach $(0,0)$ as $t \rightarrow \infty$ (or as $t \rightarrow -\infty$ for a source).
- **Saddle (node):** orbits approach $(0,0)$ except for orbits on the unstable manifold.

### Example

$$
\begin{aligned}
& x^{\prime}=3 x-2 y \\
& y^{\prime}=2 x-2 y
\end{aligned}
\qquad
A=\left[\begin{array}{ll}
3 & -2 \\
2 & -2
\end{array}\right]
$$



Characteristic equation:

$$
\begin{aligned}
\operatorname{det}(A-\lambda I)
& =\left|\begin{array}{cc}
3-\lambda & -2 \\
2 & -2-\lambda
\end{array}\right| \\
& =(3-\lambda)(-2-\lambda)-(-2) \cdot 2 \\
& =\lambda^{2}-\lambda-2=0
\end{aligned}
$$

$$
\begin{aligned}
\Rightarrow \lambda & =\frac{1 \pm \sqrt{1-4(-2)}}{2} \\
& =\frac{1 \pm \sqrt{9}}{2}=\left\{\begin{array}{c}
2 \\
-1
\end{array}\right. \\
\lambda_{1} & =2, \lambda_{2}=-1
\end{aligned}
$$



Real eigenvalues: one positive, one negative — a **saddle** equilibrium.

Eigenvector corresponding to $\lambda_{1}=2$:

$$
\begin{aligned}
& (A-2 I)\left[\begin{array}{l}
V_{1} \\
V_{2}
\end{array}\right]=\left[\begin{array}{l}
0 \\
0
\end{array}\right] \\
& {\left[\begin{array}{cc}
3-2 & -2 \\
2 & -2-2
\end{array}\right]\left[\begin{array}{l}
V_{1} \\
V_{2}
\end{array}\right]=\left[\begin{array}{l}
0 \\
0
\end{array}\right]}
\end{aligned}
$$



$$
\begin{gathered}
v_{1}-2 v_{2}=0 \Rightarrow v_{1}=2 v_{2} \\
2 v_{1}-4 v_{2}=0 \\
{\left[\begin{array}{l}
v_{1} \\
v_{2}
\end{array}\right]=\left[\begin{array}{c}
2 v_{2} \\
v_{2}
\end{array}\right]=v_{2}\left[\begin{array}{l}
2 \\
1
\end{array}\right]}
\end{gathered}
$$

We choose $\vec{v}_{1}=\left[\begin{array}{l}2 \\ 1\end{array}\right]$

Similarly we find



$$
\vec{V}_{2}=\left[\begin{array}{l}
1 \\
2
\end{array}\right]
$$

The general solution:

$$
\begin{aligned}
\vec{x}(t) & =c_{1} \vec{v}_{1} e^{\lambda_{1} t}+c_{2} \vec{v}_{2} e^{\lambda_{2} t} \\
& =c_{1}\left[\begin{array}{l}
2 \\
1
\end{array}\right] e^{2 t}+c_{2}\left[\begin{array}{l}
1 \\
2
\end{array}\right] e^{-t} \\
x(t) & =2 c_{1} e^{2 t}+c_{2} e^{-t} \\
y(t) & =c_{1} e^{2 t}+2 c_{2} e^{-t}
\end{aligned}
$$



![](/PENG9570/Lecture-Notes/attachments/Lecture3/L3_img13.jpg)

## Nonlinear systems of ODEs

$$
\begin{aligned}
& x^{\prime}=P(x, y) \\
& y^{\prime}=Q(x, y)
\end{aligned}
$$

Assume that $(a, b)$ is an equilibrium: $x^{\prime}=y^{\prime}=0$ at $(x, y)=(a, b)$, that is

$$



\begin{aligned}
& P(a, b)=0 \\
& Q(a, b)=0
\end{aligned}
$$

### Reminder: linearisation

The linearisation of a function $f$ at $x=a$ is

$$
y=f(a)+f^{\prime}(a)(x-a)
$$

The linearisation of a function $F=F(x, y)$ at $(x, y)=(a, b)$ is

$$



z=F(a, b)+\frac{\partial F}{\partial x}(a, b)(x-a)+\frac{\partial F}{\partial y}(a, b)(y-b)
$$

This means that, near $(a, b)$,

$$
\begin{aligned}
P(x, y) & \approx P(a, b)+P_{x}(a, b)(x-a)+P_{y}(a, b)(y-b) \\
Q(x, y) & \approx Q(a, b)+Q_{x}(a, b)(x-a)+Q_{y}(a, b)(y-b)
\end{aligned}
$$

To simplify we redefine variables:

$$



\begin{aligned}
\bar{x} &=x-a, \quad \bar{y}=y-b \\
\Rightarrow\ P(x, y) & \approx P_{x}(a, b)\, \bar{x}+P_{y}(a, b)\, \bar{y} \\
Q(x, y) & \approx Q_{x}(a, b)\, \bar{x}+Q_{y}(a, b)\, \bar{y}
\end{aligned}
$$

Using these approximations we get the linearised system

$$
\underbrace{\left[\begin{array}{l}
x^{\prime} \\
y^{\prime}
\end{array}\right]=\left[\begin{array}{ll}
P_{x}(a, b) & P_{y}(a, b) \\
Q_{x}(a, b) & Q_{y}(a, b)
\end{array}\right]\left[\begin{array}{l}
x \\
y
\end{array}\right]}_{\text {linearised ODE system }}
$$



where the **Jacobian** of the ODE system is

$$
J=\left[\begin{array}{ll}
P_{x}(a, b) & P_{y}(a, b) \\
Q_{x}(a, b) & Q_{y}(a, b)
\end{array}\right]
$$

Does the linearised system behave in the same way as the nonlinear system near the equilibrium? Yes, but with one limitation. The **Hartman–Grobman theorem** states that if $\lambda_{1}, \lambda_{2}$ are not pure imaginary numbers, then the orbits of the original system near the equilibrium behave the same way as orbits of the linearised system near the equilibrium.

### Example



$$
\begin{aligned}
& x^{\prime}=-y-x^{3}=P(x, y) \\
& y^{\prime}=x=Q(x, y)
\end{aligned}
$$

Equilibrium: $(0,0)$. Linearisation:

$$
\begin{gathered}
P_{x}(0,0)=\left[-3 x^{2}\right]_{x=0}=0, \quad P_{y}(0,0)=-1 \\
P(x, y) \approx 0 \cdot x-1 \cdot y=-y \\
x^{\prime}=-y, \quad y^{\prime}=x
\end{gathered}
$$



Jacobian:

$$
J=\left[\begin{array}{cc}
0 & -1 \\
1 & 0
\end{array}\right]
$$

Eigenvalues of $J$:

$$



\begin{gathered}
\operatorname{det}(J-\lambda I)=0 \\
\left|\begin{array}{cc}
0-\lambda & -1 \\
1 & 0-\lambda
\end{array}\right|=0 \\
\lambda^{2}+1=0 \\
\lambda= \pm i
\end{gathered}
$$

Purely imaginary eigenvalues of the Jacobian, so the Hartman–Grobman theorem does not apply.

$$
\begin{aligned}
& x^{\prime}=-y-x^{3} \\
& y^{\prime}=x
\end{aligned}
$$



![](/PENG9570/Lecture-Notes/attachments/Lecture3/L3_img14.jpg)

- Linear system: center at $(0,0)$.
- Nonlinear system: stable spiral at $(0,0)$.

## Nullclines

The nullclines of a system of ODEs are the curves obtained when $x^{\prime}$ and $y^{\prime}$ are set equal to zero:

$$
\begin{aligned}
& x^{\prime}=P(x, y)=0 \quad \text{(nullcline for } x\text{)} \\
& y^{\prime}=Q(x, y)=0 \quad \text{(nullcline for } y\text{)}
\end{aligned}
$$



### Example

Nullclines of

$$
\begin{aligned}
& x^{\prime}=x-y \\
& y^{\prime}=-x+2 y
\end{aligned}
\qquad
\begin{aligned}
& y=x \\
& y=\tfrac{1}{2} x
\end{aligned}
$$



![](/PENG9570/Lecture-Notes/attachments/Lecture3/L3_img15.jpg)

$(0,0)$ is an unstable equilibrium.

---
title: "PENG9570 Course Summary"
aliases:
  - "Course summary PENG9570 2026"
project: PENG9570
type: course-material
tags:
  - PENG9570
---

## PENG9570: Course summary

Questions and suggested answers

![](https://cdn.mathpix.com/cropped/82c91ce2-945f-45ae-9335-6e857fa85f72-02.jpg?height=223&width=359&top_left_y=216&top_left_x=180)

Mathematical modelling

# What is a mathematical model?

- a description of a system using mathematical concepts and language.


## Why do we need mathematical models?

- To develop scientific understanding
- To predict outcomes of experiments
- To test the effect of changes in a system
- To estimate parameters in a system


## Describe the stages of the modelling cycle

![](https://cdn.mathpix.com/cropped/82c91ce2-945f-45ae-9335-6e857fa85f72-05.jpg?height=1084&width=1803&top_left_y=1083&top_left_x=722)

# ODEs and systems of ODEs

## What is a differential equation and what is an initial value problem?

- Differential equation:

$$
F\left(t, y, y^{\prime}, \ldots, y^{(n)}\right)=0
$$

- Initial value problem:
- Differential equation plus initial values for $y$ and, possibly, some of its derivatives
- Example:

$$
y^{\prime}=-y, \quad y(0)=1
$$

What is the steady state (or critical point or equilibrium) of a first order differential equation?

- In one-variable models $u^{\prime}=f(u)$ :

The value $u^{*}$ such that the derivative is zero: $u^{\prime}=f\left(u^{*}\right)=0$

- In two-variable models $x^{\prime}=P(x, y), y^{\prime}=Q(x, y)$ :

The point $\left(x^{*}, y^{*}\right)$ such that the derivatives are zero: $x^{\prime}=P\left(x^{*}, y^{*}\right)=0$ and $y^{\prime}=Q\left(x^{*}, y^{*}\right)=0$

What does it mean that a steady state is
(i) stable,
(ii) asymptotically stable and
(iii) unstable?

- Assume $u^{*}$ is a steady state
- Stable: small perturbation from $u^{*}$ has little effect (solution stays near $u^{*}$ )
- Unstable: small perturbation from $u^{*}$ has large effect (solution escapes from $u^{*}$ )
- Asymptotic stability: a solution that starts near enough to $u^{*}$ will converge to $u^{*}$ as $t \rightarrow \infty$


## How are phase line plots used to provide insights into the dynamics of the solution?

$$
u^{\prime}=f(u)
$$

![](https://cdn.mathpix.com/cropped/82c91ce2-945f-45ae-9335-6e857fa85f72-10.jpg?height=845&width=1432&top_left_y=1289&top_left_x=138)

$$
u^{\prime}=u(1-u)-h
$$

![](https://cdn.mathpix.com/cropped/82c91ce2-945f-45ae-9335-6e857fa85f72-10.jpg?height=904&width=1283&top_left_y=1227&top_left_x=2119)

## Two-dimensional dynamical systems

$$
\begin{aligned}
& x^{\prime}=P(x, y) \\
& y^{\prime}=Q(x, y)
\end{aligned}
$$

Solution: $x(t), y(t)$ - functions of time

Solution Curres:
![](https://cdn.mathpix.com/cropped/82c91ce2-945f-45ae-9335-6e857fa85f72-11.jpg?height=566&width=752&top_left_y=1689&top_left_x=691)
![](https://cdn.mathpix.com/cropped/82c91ce2-945f-45ae-9335-6e857fa85f72-11.jpg?height=747&width=995&top_left_y=1518&top_left_x=1726)

## What is the linearization of an ODE system?
In what way does the linearization inform us about the nonlinear system?

Assumption: critical point in $(0,0)$.

Linearisation: (due to $\left.P(x, y) \approx P_{x}(0,0) x+P_{y}(0,0) y\right)$

$$
\left[\begin{array}{l}
x^{\prime} \\
y^{\prime}
\end{array}\right]=\left[\begin{array}{ll}
P_{x}(0,0) & P_{y}(0,0) \\
Q_{x}(0,0) & Q_{y}(0,0)
\end{array}\right]\left[\begin{array}{l}
x \\
y
\end{array}\right]
$$

$x^{\prime}=A x: A$ is the Jacobian.

Dynamics can be deduced from eigenvalues and eigenvectors of Jacobian

## Name the four types of critical points and relate them to the eigenvalues of the coefficient matrix (linear system) or of the Jacobian (nonlinear system).
![](https://cdn.mathpix.com/cropped/82c91ce2-945f-45ae-9335-6e857fa85f72-13.jpg?height=674&width=806&top_left_y=443&top_left_x=1813)
![](https://cdn.mathpix.com/cropped/82c91ce2-945f-45ae-9335-6e857fa85f72-13.jpg?height=682&width=625&top_left_y=459&top_left_x=2831)
![](https://cdn.mathpix.com/cropped/82c91ce2-945f-45ae-9335-6e857fa85f72-13.jpg?height=616&width=732&top_left_y=1198&top_left_x=1805)
![](https://cdn.mathpix.com/cropped/82c91ce2-945f-45ae-9335-6e857fa85f72-13.jpg?height=600&width=616&top_left_y=1214&top_left_x=2823)
![](https://cdn.mathpix.com/cropped/82c91ce2-945f-45ae-9335-6e857fa85f72-13.jpg?height=657&width=748&top_left_y=1871&top_left_x=1789)
![](https://cdn.mathpix.com/cropped/82c91ce2-945f-45ae-9335-6e857fa85f72-13.jpg?height=650&width=649&top_left_y=1887&top_left_x=2807)
![](https://cdn.mathpix.com/cropped/82c91ce2-945f-45ae-9335-6e857fa85f72-14.jpg?height=2135&width=1595&top_left_y=238&top_left_x=0)

### Node
- Two real eigenvalues of same sign
- Stable if both eigenvalues are negative
- Unstable if both eigenvalues are positive

### Spiral
- Complex eigenvalues
- Stable if $\operatorname{Re} \lambda<0$ for both eigenvalues
- Unstable if $\operatorname{Re} \lambda>0$ for both eigenvalues

### Saddle
- Two real eigenvalues, one positive and one negative

### Center
- Two purely imaginary eigenvalues
![](https://cdn.mathpix.com/cropped/82c91ce2-945f-45ae-9335-6e857fa85f72-15.jpg?height=784&width=1600&top_left_y=238&top_left_x=0)
![](https://cdn.mathpix.com/cropped/82c91ce2-945f-45ae-9335-6e857fa85f72-15.jpg?height=732&width=1609&top_left_y=954&top_left_x=0)

![](https://cdn.mathpix.com/cropped/82c91ce2-945f-45ae-9335-6e857fa85f72-15.jpg?height=669&width=1590&top_left_y=1690&top_left_x=0)


Node

- Two real eigenvalues of same sign
- Stable if both eigenvalues are negative
- Unstable if both eigenvalues are positive

Spiral

- Complex eigenvalues
- Stable if $\operatorname{Re} \lambda<0$ for both eigenvalues
- Unstable if $\operatorname{Re} \lambda>0$ for both eigenvalues

Saddle

- Two real eigenvalues, one positive and one negative

Center

- Two purely imaginary eigenvalues
![](https://cdn.mathpix.com/cropped/82c91ce2-945f-45ae-9335-6e857fa85f72-16.jpg?height=245&width=1920&top_left_y=238&top_left_x=0)
- Two real eigenvalues of same sign
- Stable if both eigenvalues are negative
- Unstable if both eigenvalues are positive

Spiral
![](https://cdn.mathpix.com/cropped/82c91ce2-945f-45ae-9335-6e857fa85f72-16.jpg?height=569&width=722&top_left_y=1079&top_left_x=9)
![](https://cdn.mathpix.com/cropped/82c91ce2-945f-45ae-9335-6e857fa85f72-16.jpg?height=578&width=631&top_left_y=1074&top_left_x=964)
![](https://cdn.mathpix.com/cropped/82c91ce2-945f-45ae-9335-6e857fa85f72-16.jpg?height=717&width=874&top_left_y=1623&top_left_x=0)
![](https://cdn.mathpix.com/cropped/82c91ce2-945f-45ae-9335-6e857fa85f72-16.jpg?height=632&width=712&top_left_y=1694&top_left_x=907)

- Two real eigenvalues, one positive and one negative

Center

- Two purely imaginary eigenvalues
![](https://cdn.mathpix.com/cropped/82c91ce2-945f-45ae-9335-6e857fa85f72-17.jpg?height=245&width=1906&top_left_y=238&top_left_x=0)
- Two real eigenvalues of same sign
- Stable if both eigenvalues are negative
- Unstable if both eigenvalues are positive

Spiral

- Complex eigenvalues
- Stable if $\operatorname{Re} \lambda<0$ for both eigenvalues
- Unstable if $\operatorname{Re} \lambda>0$ for both eigenvalues

Saddle
![](https://cdn.mathpix.com/cropped/82c91ce2-945f-45ae-9335-6e857fa85f72-17.jpg?height=674&width=731&top_left_y=1647&top_left_x=0)
![](https://cdn.mathpix.com/cropped/82c91ce2-945f-45ae-9335-6e857fa85f72-17.jpg?height=717&width=775&top_left_y=1642&top_left_x=825)

- Two real eigenvalues, one positive and one negative

Center

- Two purely imaginary eigenvalues


## What is a [[nullcline]]?
**Explain how nullclines and vector fields are used to provide information on solution orbits**

The nullclines of a system are the curves obtained when the derivatives $x^{\prime}$ and $y^{\prime}$ are set equal to zero:

$$
\begin{aligned}
& x^{\prime}=0 \Leftrightarrow P(x, y)=0 \\
& y^{\prime}=0 \Leftrightarrow Q(x, y)=0
\end{aligned}
$$

![](https://cdn.mathpix.com/cropped/82c91ce2-945f-45ae-9335-6e857fa85f72-18.jpg?height=1240&width=1566&top_left_y=1308&top_left_x=1865)

## What is a bifurcation and what is depicted in a bifurcation diagram?

- Assume there is a parameter (the bifurcation parameter) in our ODE system
- We have a bifurcation point at the value of this parameter where a new type of solution emerges
- A bifurcation diagram shows the possible steady state values (stable and unstable) of a system as a function of a bifurcation parameter
![](https://cdn.mathpix.com/cropped/82c91ce2-945f-45ae-9335-6e857fa85f72-19.jpg?height=815&width=3381&top_left_y=1702&top_left_x=37)
- [ ] I want- [ ] I want to know what is being plotted here on the bifurcation diagram

## Existence and uniqueness theorem for IVPs: Define the integral form and the [[Picard iteration]]
Integral form of IVP:
- [?] IVP?  %%[completion:: 2026-06-15] %%
	- [i] [[Initial Value Problem]]
$$
y(t)=y\left(t_{0}\right)+\int_{t_{0}}^{t} f(\tau, y(\tau)) d \tau
$$
### The Picard iteration
Sequence of approximations to integral form:

$$
y_{n+1}(t)=y_{n}(t)+\int_{t_{0}}^{t} f\left(\tau, y_{n}(\tau)\right) d \tau, \ y_{0}(t)=y\left(t_{0}\right)
$$
- [?] No idea what this is supposed to mean. It’s the same formula but with some variable changed, but not explained

If the sequence converges to a limit function $y(t), y(t)$ is the solution of the IVP.

## Existence and uniqueness theorem for IVPs: Define Cauchy sequence and completeness

### [[Cauchy sequence]]

A sequence where the elements come arbitrarily close to each other when the sequence numbers are sufficiently large. Mathematically, for every positive $\epsilon$, there is an integer $N$ such that for all $m, n>N$,

$$
\left|x_{m}-x_{n}\right|<\epsilon .
$$
### Completeness

A set $S$ is said to be complete provided that all Cauchy sequences of elements in the set converge to an element in $S$.

Thus, establishing that a sequence of elements belonging to a complete set $S$ is Cauchy, we can conclude that the sequence will converge to a limit in $S$.

## Formulate the existence and uniqueness theorem
Given the IVP
$$
y^{\prime}=f(t, y), y\left(t_{0}\right)=y_{0}
$$
Providing that $f$ is continuous and differentiable ( $f \in C_{1}[E]$ ),
- [ ] What does this mean? Specifically C_1 and E
there exists $a>0$ such that there exists a unique solution in $[-a, a]$.
(Existence and uniqueness)

## Give a sketch of the proof of existence
- [ ] SHIT this looks very very important
- [ ] Construct sequence of approximate solutions using Picard iteration.
- [ ] Show that this sequence is Cauchy within the space of continuous functions $C_{1}[E]$ (depends on the differentiability of $f$ ).
- [ ] Since $C_{1}[E]$ is complete, then the sequence must converge to an element within $C_{1}[E]$.
- [ ] This limit is the solution and existence is established.

# Numerical methods for IVPs

## Why do we need numerical methods to solve differential equations?

1. In general it is not possible to find an analytical solution
2. The differential equations need to be translated into equations that can be solved on a computer

## How do we write an initial value problem on integral form?

Integrating the initial value problem (IVP)

$$
y^{\prime}=f(t, y), \quad y\left(t_{0}\right)=y_{0}
$$

from $t$ to $t_{0}$ we obtain

$$
y=y_{0}+\int_{t_{0}}^{t} f(t, y) d t
$$

The integral is in general evaluated numerically to obtain a numerical solution of the IVP.

## Use numerical integration to explain the accuracy of [[Euler's method]]
- [ ] Use numerical integration to explain the accuracy of Euler's method

$$
y=y_{0}+\int_{t_{0}}^{t} f(t, y) d t
$$

The integral is evaluated numerically (here $h=t_{n+1}-t_{n}$ ):

- Euler's method: [[Riemann left sum]] (Order $h^{2}$ - method is order $h$ )
	- [ ] Not clear what “order h” means

$$
y_{n+1}=y_{n}+\int_{t_{n}}^{t_{n+1}} f(t, y) d t \approx y_{n}+h f\left(t_{n}, y_{n}\right)
$$

> [!NOTE] Euler’s steps
> I think this is a iterative method. I’ve seen “Euler Steps” mentioned elsewhere. As in a  number of timesteps to be integrated over piecewise.

## Use numerical integration to explain the accuracy of Heun's method
- [ ] Use numerical integration to explain the accuracy of Heun's method

$$
y=y_{0}+\int_{t_{0}}^{t} f(t, y) d t
$$

The integral is evaluated numerically (here $h=t_{n+1}-t_{n}$ ):

- Heun's method: Trapezoidal rule (Order $h^{3}$ - method is order $h^{2}$ )

$$
y_{n+1}=y_{n}+\int_{t_{n}}^{t_{n+1}} f(t, y) d t \approx y_{n}+\frac{h}{2}\left(f\left(t_{n}, y_{n}\right)+f\left(t_{n+1}, y_{n}+h f\left(t_{n}, y_{n}\right)\right)\right)
$$

## Use numerical integration to explain the accuracy of Runge-Kutta's 4th order method
- [ ] ## Use numerical integration to explain the accuracy of Runge-Kutta's 4th order method

$$
y=y_{0}+\int_{t_{0}}^{t} f(t, y) d t
$$

The integral is evaluated numerically (here $h=t_{n+1}-t_{n}$ ):

- Runge-Kutta's 4th order method: Simpson's rule (Order $h^{5}$ method is order $h^{4}$ )
- Estimate for solution at time step $t_{j+1}$ is obtained by stepwise estimation of slopes at time steps $t_{j}$ and $t_{j+1 / 2}=t_{j}+\Delta t / 2$
![](https://cdn.mathpix.com/cropped/82c91ce2-945f-45ae-9335-6e857fa85f72-29.jpg?height=1109&width=1090&top_left_y=1483&top_left_x=2385)


# PDEs

## What is the difference between ODEs and PDEs ?

ODEs: solution is function of one variable

PDEs: solution is function of two or more variables and partial derivatives of more than one of the variables are part of the equation

Examples:
$$
\begin{gathered}
u_{t}=k u_{x x}+f(u, x, t), \\ \\
u_{x t}=x t \\ \\ 
u_{x}+a u_{t}=0
\end{gathered}
$$

## How is the diffusion PDE derived from a conservation law?

$u(x, t)$ : Quantity of a substance
$J(x)$ : flux of substance (or heat flux)
$f(t, x, u)$ : production rate
Conservation law in integral form is obtained by requiring the following (on interval $[a, b]$ ):

Rate of change of amount of substance $=$ what comes in - what goes out + rate of production

This, in turn, gives the conservation law in differential form :

$$
u_{t}=-J_{x}+f(x, t, u)
$$

Diffusion (and heat): $J=-D u_{x}$ ([[Fick's law]]) $\Rightarrow J_{x}=-D u_{x x}$. 

$$
u_{t}=D u_{x x}+f(x, t, u)
$$

![](https://cdn.mathpix.com/cropped/82c91ce2-945f-45ae-9335-6e857fa85f72-32.jpg?height=579&width=980&top_left_y=1814&top_left_x=2296)

## What do we mean by linearity and superposition of solutions?

PDEs are often written using operators. Example:

$$
L u=f(x, t), \quad L u=u_{t}-k u_{x x}
$$

The operator $L$ is linear when
1. $L(u+v)=L(u)+L(v)$
2. $L(c u)=c L(u)$

For homogeneous problems $L u=0$, super-positions of solutions are also solutions:

1. $w=c_{1} u_{1}+c_{2} u_{2}+\cdots+c_{n} u_{n}+\cdots$
2. $w=\int_{I} c(\xi) u(x, t, \xi) d \xi$

## What is an initial boundary value problem
(IBVP) for a PDE?

Example: 1D diffusion PDE with initial and boundary conditions
$$
\begin{array}{cc}
u_{t}=k u_{x x}, \quad t>0, & 0<x<L \\
u(0, t)=a(t), & t \geq 0 \\
u(L, t)=b(t), & t \geq 0 \\
u(x, 0)=g(x), & 0 \leq x \leq L
\end{array}
$$

![](https://cdn.mathpix.com/cropped/82c91ce2-945f-45ae-9335-6e857fa85f72-34.jpg?height=1710&width=1454&top_left_y=657&top_left_x=2090)

## Prove uniqueness of the IBVP
Assume two solutions $u_{1}$ and $u_{2}$. 
Then $w=u_{1}-u_{2}$ solves
$$
\begin{gathered}
w_{t}=k w_{x x}, \quad t>0, \quad 0<x<L \\
w(0, t)=0, \quad w(L, t)=0, \quad t \geq 0 \\
w(x, 0)=0, \quad 0 \leq x \leq L
\end{gathered}
$$
- Define the energy integral $E(t)=\int_{0}^{L} w^{2}(x, t) d x$
- [ ] Show (without too much detail) by differentiation and integration by parts that $w$ must be zero
- This proves that $w \equiv 0$
- Uniqueness is proven!
# [[Numerical methods for IBVPS]]

## How are partial derivatives approximated by finite difference expressions?

Typical approximations:

$$
\begin{gathered}
u_{x x} \approx \frac{u(x+\Delta x, t)-2 u(x, t)+u(x-\Delta x, t)}{\Delta x^{2}} \\
u_{t} \approx \frac{u(x, t+\Delta t)-u(x, t)}{\Delta t}
\end{gathered}
$$

Let $v_{i, j} \approx u\left(x_{i}, t_{j}\right)$. Then,

$$
\begin{gathered}
u_{x x} \approx \frac{v_{i-1, j}-2 v_{i, j}+v_{i+1, j}}{\Delta x^{2}}, \\
u_{t} \approx \frac{v_{i, j+1}-v_{i, j}}{\Delta t}
\end{gathered}
$$

![](https://cdn.mathpix.com/cropped/82c91ce2-945f-45ae-9335-6e857fa85f72-37.jpg?height=1385&width=1290&top_left_y=802&top_left_x=2196)

## Explain the explicit scheme

PDE: $u_{t}=u_{x x}$.
Let $v_{i, j} \approx u\left(x_{i}, t_{j}\right)$.
Then,

$$
\begin{aligned}
& \frac{v_{i, j+1}-v_{i, j}}{\Delta t}=\frac{v_{i-1, j}-2 v_{i, j}+v_{i+1, j}}{\Delta x^{2}} \Leftrightarrow \\
& v_{i, j+1}=v_{i, j}+\alpha\left(v_{i-1, j}-2 v_{i, j}+v_{i+1, j}\right)
\end{aligned}
$$

That is,

$$
\boldsymbol{v}_{j+1}=\hat{A} \boldsymbol{v}_{j}
$$

where

$$
\hat{A}=I-\alpha \hat{B}, \quad \hat{B}=\left[\begin{array}{cccc}
2 & -1 & 0 & 0 \\
-1 & 2 & \ddots & 0 \\
0 & \ddots & \ddots & -1 \\
0 & 0 & -1 & 2
\end{array}\right], \quad \boldsymbol{v}_{j}=\left[\begin{array}{c}
v_{1, j} \\
v_{2, j} \\
\vdots \\
v_{n, j}
\end{array}\right]
$$

## Derive the stability criterion in terms of $\alpha=\Delta t / \Delta x^{2}$ for the explicit scheme

Explicit scheme:
$$
\boldsymbol{v}_{j+1}=\hat{A} \boldsymbol{v}_{j}
$$
where
$$
\hat{A}=I-\alpha \hat{B}, \quad \hat{B}=\left[\begin{array}{cccc}
2 & -1 & 0 & 0 \\
-1 & 2 & \ddots & 0 \\
0 & \ddots & \ddots & -1 \\
0 & 0 & -1 & 2
\end{array}\right], \quad \boldsymbol{v}_{j}=\left[\begin{array}{c}
v_{1, j} \\
v_{2, j} \\
\vdots \\
v_{n, j}
\end{array}\right] .
$$

Scheme is stable if eigenvalues of $\hat{A}$ are less than 1 in absolute value. Eigenvalues are $1-\alpha \mu$ ( $\mu$ are eigenvalues of $\widehat{B}, 0<\mu<4$ ).

$$
-1<1-\alpha \mu<1 \Leftrightarrow \alpha \mu<2
$$

$\alpha \mu<2$ must hold for all values of $\mu$ including $\mu=4$ :

$$
4 \alpha<2 \Leftrightarrow \alpha<\frac{1}{2} \Leftrightarrow \frac{\Delta t}{\Delta x^{2}}<\frac{1}{2}
$$

## What is the difference between explicit and implicit schemes?

- Explicit scheme:

$$
\underbrace{\frac{v_{i, j+1}-v_{i, j}}{\Delta t}} \quad=\frac{v_{i-1, j}-2 v_{i, j}+v_{i+1, j}}{\Delta x^{2}} \Rightarrow \boldsymbol{v}_{j+1}=\hat{A} \boldsymbol{v}_{j}
$$

forward time derivative (forward Euler)

- Implicit scheme:

$$
\underbrace{\frac{v_{i, j}-v_{i, j-1}}{\Delta t}} \quad=\frac{v_{i-1, j}-2 v_{i, j}+v_{i+1, j}}{\Delta x^{2}} \Rightarrow \boldsymbol{v}_{j-1}=\hat{A} \boldsymbol{v}_{j}
$$

backward time derivative (backward Euler)

## Show that the implicit scheme is stable for all values of $\alpha=\Delta t / \Delta x^{2}$

- Implicit scheme is

$$
\boldsymbol{v}_{j-1}=\hat{A} \boldsymbol{v}_{j} \Leftrightarrow \boldsymbol{v}_{j+1}=\hat{A}^{-1} \boldsymbol{v}_{j}(\hat{A}=I+\alpha \hat{B})
$$

- Eigenvalues of $\hat{A}$ are $1+\alpha \mu>1$.

$$
\text { ⇒ eigenvalues of } \hat{A}^{-1} \text { are }(1+\alpha \mu)^{-1}<1 .
$$

- Scheme is stable!


## What is the difference between the Crank-Nicolson scheme and the previous schemes?

Same as implicit method, except that $u_{x x}$ is approximated with the average of approximations at time steps $t_{j}$ and $t_{j-1}$ :

$$
u_{x x}\left(x_{i}, t_{j}\right) \approx \frac{1}{2} \frac{v_{i-1, j}-2 v_{i, j}+v_{i+1, j}}{\Delta x^{2}}+\frac{1}{2} \frac{v_{i-1, j-1}-2 v_{i, j-1}+v_{i+1, j-1}}{\Delta x^{2}}
$$

Advantage: the Crank-Nicolson scheme is more accurate than the other schemes when evaluating at points $\left(x, t^{\prime}\right)=\left(x, t-\frac{\Delta t}{2}\right)$ : error at his point is $O\left(\Delta t^{2}\right)+O\left(\Delta x^{2}\right)$

## Show that the Crank-Nicolson scheme is stable

- Crank-Nicolson scheme is of the form

$$
(2 \mathrm{I}+\alpha \widehat{B}) \boldsymbol{v}_{j}=(2 \mathrm{I}-\alpha \widehat{B}) \boldsymbol{v}_{j-1} \Leftrightarrow \boldsymbol{v}_{j}=\left[(2 I+\alpha \widehat{B})^{-1}(2 \mathrm{I}-\alpha \widehat{B})\right]^{j} \boldsymbol{v}_{j-1}
$$

- Eigenvalues of $(2 I+\alpha \widehat{B})^{-1}(2 \mathrm{I}-\alpha \widehat{B})$ are $(2+\alpha \mu)^{-1}(2-\alpha \mu)$.

⇒ eigenvalues are $<1$.

- Scheme is stable!

$$
i \hbar \frac{\partial \Psi}{\partial t}=\left(-\frac{\hbar^{2}}{2 m} \nabla^{2}+V(x, y, z, t)\right) \Psi
$$

## The Schrödinger equation

$$
i \hbar \frac{\partial \Psi}{\partial t}=-\frac{\hbar^{2}}{2 m} \frac{d^{2} \Psi}{d x^{2}}
$$

- [ ] How can the numerical methods previously considered be applied to solve this PDE ?
	- Quite straightforward, with some adjustments (e.g. solutions of the Schrödinger equation are generally complex)
- [ ] How can this PDE be rewritten as a coupled system of ODEs?
	- Approximate $\psi_{k}(t) \approx \Psi\left(x_{k}, t\right)$ and solve the resulting large ODE system
	- Explain how the solution is interpreted as a probability density
	- The integral $\int_{a}^{b}|\Psi(x, t)|^{2} d x$ is probability of a particle being located in $[a, b]$

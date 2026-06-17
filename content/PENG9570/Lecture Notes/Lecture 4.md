---
title: "PENG9570 Lecture 4"
aliases:
  - "Lecture 4"
project: PENG9570
type: course-material
tags:
  - PENG9570
---

# PENG9570 — Lecture 4 (February 27th)

## Two-dimensional dynamical systems

$$
\begin{aligned}
& x^{\prime}=P(x, y), \\
& y^{\prime}=Q(x, y) .
\end{aligned}
$$

Solution: $x(t), y(t)$ — functions of time.

Solution curves:



![](/PENG9570/Lecture-Notes/attachments/Lecture4/L4_img01.jpg)
![](/PENG9570/Lecture-Notes/attachments/Lecture4/L4_img02.jpg)

## Linear systems

$$
\begin{gathered}
x^{\prime}=a x+b y \\
y^{\prime}=c x+d y \\
{\left[\begin{array}{l}
x^{\prime} \\
y^{\prime}
\end{array}\right]=\left[\begin{array}{ll}
a & b \\
c & d
\end{array}\right]\left[\begin{array}{l}
x \\
y
\end{array}\right], A=\left[\begin{array}{ll}
a & b \\
c & d
\end{array}\right]}
\end{gathered}
$$

$x^{\prime}=A x$, where $A$ is the coefficient matrix. The dynamics can be deduced from the eigenvalues and eigenvectors of $A$.



![](/PENG9570/Lecture-Notes/attachments/Lecture4/L4_img03.jpg)
![](/PENG9570/Lecture-Notes/attachments/Lecture4/L4_img04.jpg)
![](/PENG9570/Lecture-Notes/attachments/Lecture4/L4_img05.jpg)
![](/PENG9570/Lecture-Notes/attachments/Lecture4/L4_img06.jpg)

### Classification of equilibria

- **Node** — two real eigenvalues of the same sign.
  - Stable if both eigenvalues are negative.
  - Unstable if both eigenvalues are positive.
- **Spiral** — complex eigenvalues.
  - Stable if $\operatorname{Re}\lambda<0$ for both eigenvalues.
  - Unstable if $\operatorname{Re}\lambda>0$ for both eigenvalues.
- **Saddle** — two real eigenvalues, one positive and one negative.
- **Center** — two purely imaginary eigenvalues.

![](/PENG9570/Lecture-Notes/attachments/Lecture4/L4_img07.jpg)
![](/PENG9570/Lecture-Notes/attachments/Lecture4/L4_img08.jpg)
![](/PENG9570/Lecture-Notes/attachments/Lecture4/L4_img09.jpg)
![](/PENG9570/Lecture-Notes/attachments/Lecture4/L4_img10.jpg)
![](/PENG9570/Lecture-Notes/attachments/Lecture4/L4_img11.jpg)



![](/PENG9570/Lecture-Notes/attachments/Lecture4/L4_img12.jpg)
![](/PENG9570/Lecture-Notes/attachments/Lecture4/L4_img13.jpg)
![](/PENG9570/Lecture-Notes/attachments/Lecture4/L4_img14.jpg)
![](/PENG9570/Lecture-Notes/attachments/Lecture4/L4_img15.jpg)
![](/PENG9570/Lecture-Notes/attachments/Lecture4/L4_img16.jpg)
![](/PENG9570/Lecture-Notes/attachments/Lecture4/L4_img17.jpg)

## General solutions of linear ODE systems

Case 1: Two real, unequal eigenvalues $\lambda_{1}, \lambda_{2}$ with corresponding eigenvectors $\vec{v}_{1}$ and $\vec{v}_{2}$ :

$$
\vec{x}(t)=C_{1} \vec{v}_{1} e^{\lambda_{1} t}+C_{2} \vec{v}_{2} e^{\lambda_{2} t}
$$

Case 2: One real eigenvalue (skipped)

Case 3: Complex conjugate eigenvalues $\alpha \pm i \beta$ with corresponding eigenvectors $\vec{w} \pm i \vec{v}$ :

$$
C_{1} e^{\alpha t}(\vec{w} \cos (\beta t)-\vec{v} \sin (\beta t))+C_{2} e^{\alpha t}(\vec{w} \sin (\beta t)+\vec{v} \cos (\beta t))
$$

## System linearised around the origin



Assumption: equilibrium in $(0,0)$.

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

$\boldsymbol{x}^{\prime}=A \boldsymbol{x}: A$ is the Jacobian.

Dynamics can be deduced from eigenvalues and eigenvectors of Jacobian

## The Hartman-Grobman theorem



![](/PENG9570/Lecture-Notes/attachments/Lecture4/L4_img18.jpg)

$$
\begin{aligned}
& x^{\prime}=P(x, y), \\
& y^{\prime}=Q(x, y) .
\end{aligned}
$$

![](/PENG9570/Lecture-Notes/attachments/Lecture4/L4_img19.jpg)

Jacobian

Assume that $\lambda_{1}, \lambda_{2}$ are eigenvalues of the Jacobian:
a. If the eigenvalues $\lambda_{1}$ and $\lambda_{2}$ are not equal real numbers or are not pure imaginary numbers, then the trajectories of the almost linear system (7.3.2) near the equilibrium point $(0,0)$ behave the same way as the trajectories of the associated linear system (7.3.3) near the origin. That is, we can use the appropriate table entries given in Section 6.9 to determine whether the origin is a node, a saddle point, or a spiral point of both systems.
d. If $\lambda_{1}$ and $\lambda_{2}$ are complex conjugates with a nonzero real part, then the origin is unstable or asymptotically stable, depending on whether the real part of $\lambda_{1}, \lambda_{2}$ is positive or negative, respectively.
e. If $\lambda_{1}$ and $\lambda_{2}$ are pure imaginary numbers-that is, $\lambda_{1}=i \delta, \lambda_{2}=-i \delta, \delta \neq 0$, then the origin is a center for the linearized system, but may not be a center for the nonlinear system. The origin is either a center or a spiral point of the nonlinear system. Also, this spiral point may be asymptotically stable, stable, or unstable, depending on the nonlinear terms neglected during the linearization.

## The Hartman–Grobman theorem

Nonlinear $\sim$ linear? Yes:

![](/PENG9570/Lecture-Notes/attachments/Lecture4/L4_img20.jpg)
![](/PENG9570/Lecture-Notes/attachments/Lecture4/L4_img21.jpg)
![](/PENG9570/Lecture-Notes/attachments/Lecture4/L4_img22.jpg)
![](/PENG9570/Lecture-Notes/attachments/Lecture4/L4_img23.jpg)
![](/PENG9570/Lecture-Notes/attachments/Lecture4/L4_img24.jpg)

Nonlinear $\sim$ linear? Not necessarily (the ambiguous case of purely imaginary eigenvalues).

## Nullclines

$$
\begin{aligned}
& x^{\prime}=P(x, y) \\
& y^{\prime}=Q(x, y)
\end{aligned}
\qquad
\begin{aligned}
& x^{\prime}=0 \Leftrightarrow P(x, y)=0 \\
& y^{\prime}=0 \Leftrightarrow Q(x, y)=0
\end{aligned}
$$

Example:

$$
\begin{array}{lll}
x^{\prime}=x-y & x-y=0 & (y=x) \\
y^{\prime}=-x+2 y & -x+2 y=0 & \left(y=\tfrac{1}{2} x\right)
\end{array}
$$



![](/PENG9570/Lecture-Notes/attachments/Lecture4/L4_img25.jpg)

## Problem – Sketch nullclines of the Lotka-Volterra equations

$$
\begin{aligned}
& x^{\prime}=x(a-b y), \\
& y^{\prime}=y(c x-d) .
\end{aligned}
$$

Identify equilibria and their type.

## The Lotka–Volterra equations

$$



\begin{aligned}
& x^{\prime}=a x-b x y, \\
& y^{\prime}=c x y-d y
\end{aligned}
\qquad a, b, c, d>0
$$

Prey–predator interactions:

- $x$: prey population size
- $y$: predator population size

Nullclines:

$$
\begin{array}{ll}
x^{\prime}=0: & x(a-b y)=0 \Rightarrow x=0 \text { or } y=\tfrac{a}{b} \\
y^{\prime}=0: & y(c x-d)=0 \Rightarrow y=0 \text { or } x=\tfrac{d}{c}
\end{array}
$$



![](/PENG9570/Lecture-Notes/attachments/Lecture4/L4_img26.jpg)

Jacobian:

$$
\left.\begin{array}{l}
x^{\prime}=a x-b x y \\
y^{\prime}=c x y-d y
\end{array}\right\}
\quad
J=\left[\begin{array}{cc}
a-b y & -b x \\
c y & c x-d
\end{array}\right]
$$

Jacobian in $(x, y)=(0,0)$:

$$



J=\left[\begin{array}{cc}
a & 0 \\
0 & -d
\end{array}\right]
$$

This is a diagonal matrix with eigenvalues $\lambda_{1}=a>0$ and $\lambda_{2}=-d<0$, so $(0,0)$ is a **saddle**.

Jacobian in $(x, y)=\left(\frac{d}{c}, \frac{a}{b}\right)$:

$$
J=\left[\begin{array}{cc}
a-b \cdot \frac{a}{b} & -b \cdot \frac{d}{c} \\
c \cdot \frac{a}{b} & c \cdot \frac{d}{c}-d
\end{array}\right]
=\left[\begin{array}{cc}
0 & -b d / c \\
a c / b & 0
\end{array}\right]
$$



Eigenvalues:

$$
\begin{aligned}
\operatorname{det}(J-\lambda I) &=\left|\begin{array}{cc}
0-\lambda & -b d / c \\
a c / b & 0-\lambda
\end{array}\right| \\
&=\lambda^{2}-\left(-\frac{b d}{c} \cdot \frac{a c}{b}\right) \\
&=\underbrace{\lambda^{2}+a d}_{\text {characteristic equation }}=0 \\
\Rightarrow\ \lambda &= \pm i \sqrt{a d}
\end{aligned}
$$

Purely imaginary eigenvalues: a center (in the linearised system). Based on the [[Hartman-Grobman theorem]] we cannot conclude whether the nonlinear system has a center — but in fact it does.



![](/PENG9570/Lecture-Notes/attachments/Lecture4/L4_img27.jpg)



![](/PENG9570/Lecture-Notes/attachments/Lecture4/L4_img28.jpg)
![](/PENG9570/Lecture-Notes/attachments/Lecture4/L4_img29.jpg)

## The undamped pendulum



![](/PENG9570/Lecture-Notes/attachments/Lecture4/L4_img30.jpg)

Newton's 2nd law gives

$$
\theta^{\prime \prime}(t)+\frac{g}{L} \sin (\theta(t))=0
$$

Introduce $x=\theta$, $y=\theta^{\prime}=x^{\prime}$ such that

$$
\begin{aligned}
x^{\prime} & =y \\
y^{\prime} & =-\frac{g}{L} \sin (x)
\end{aligned}
$$
Equilibria: $y=0$ (from $x^{\prime}=0$) and $x=0, \pm \pi, \pm 2 \pi, \ldots$ (from $y^{\prime}=0$).

Linearised system near $(0,0)$: $\sin x \approx x$ when $x \approx 0$, so the linearised system is



> [!question]+ I ask the question in the bullets
> - [ ] Why is this the linearization?
> 	- Bc the nullclines (equilibria?)
> 
> No, it is not because of the nullclines. This is the linearization because of the **first-order Taylor series approximation** (or small-angle approximation) of the nonlinear function near the equilibrium point $(0,0)$.
> 
> ### Why this is the linearization:
> 
> The original nonlinear system for the undamped pendulum is:
> $$
> \begin{aligned}
> x^{\prime} &= y \\
> y^{\prime} &= -\frac{g}{L} \sin(x)
> \end{aligned}
> $$
> 
> Near the equilibrium point $(0,0)$, $x$ is very close to $0$ ($x \approx 0$). The Taylor series expansion of $\sin(x)$ around $0$ is:
> $$\sin(x) = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \dots$$
> 
> For values of $x$ close to $0$, the higher-order terms (like $x^3, x^5$) are extremely small and can be neglected. This yields the linear approximation:
> $$\sin(x) \approx x$$
> 
> Substituting this back into the original system yields the **linearized system**:
> $$
> \begin{aligned}
> x^{\prime} &= y \\
> y^{\prime} &= -\frac{g}{L} x
> \end{aligned}
> $$
> 
> ---
> 
> ### Verification via the Jacobian Matrix:
> As shown in the section on [[Lecture 4#System linearised around the origin|systems linearized around the origin]], you can also find this using the Jacobian matrix $J$ at $(0,0)$:
> 
> $$P(x,y) = y \implies P_x = 0,\ P_y = 1$$
> $$Q(x,y) = -\frac{g}{L}\sin(x) \implies Q_x = -\frac{g}{L}\cos(x),\ Q_y = 0$$
> 
> Evaluating these partial derivatives at $(0,0)$ yields:
> $$J = \begin{bmatrix} P_x(0,0) & P_y(0,0) \\ Q_x(0,0) & Q_y(0,0) \end{bmatrix} = \begin{bmatrix} 0 & 1 \\ -\frac{g}{L}\cos(0) & 0 \end{bmatrix} = \begin{bmatrix} 0 & 1 \\ -g/L & 0 \end{bmatrix}$$
> 
> Multiplying this matrix by $\begin{bmatrix} x \\ y \end{bmatrix}$ gives the exact same linearized equations.

$$



\begin{aligned}
& x^{\prime}=y \\
& y^{\prime}=-\frac{g}{L} x
\end{aligned}
$$

Jacobian:

$$
J=\left[\begin{array}{cc}
0 & 1 \\
-g / L & 0
\end{array}\right]
$$
Eigenvalues:

$$
\operatorname{det}(J-\lambda I)=\left|\begin{array}{cc}
-\lambda & 1 \\
-g / L & -\lambda
\end{array}\right|
=\lambda^{2}+g / L=0
\quad\Rightarrow\quad
\lambda= \pm i \sqrt{g / L}
$$

Purely imaginary eigenvalues. $(0,0)$ is a center in the linearised system.

Nullclines:

- $x^{\prime}=0$ when $y=0$
- $y^{\prime}=0$ when $x=0, \pm \pi, \pm 2 \pi, \ldots$



![](/PENG9570/Lecture-Notes/attachments/Lecture4/L4_img31.jpg)

## Solution curves of the undamped pendulum model



![](/PENG9570/Lecture-Notes/attachments/Lecture4/L4_img32.jpg)

- Blue: $(x(0), y(0))=(0, 3)$
- Yellow: $(x(0), y(0))=(0, 6)$
- Green: $(x(0), y(0))=(0, 8.7)$
- Red: $(x(0), y(0))=(0, 9)$ — the pendulum continues around and around for eternity.
## Numerical solution of initial value problems (IVPs)



![](/PENG9570/Lecture-Notes/attachments/Lecture4/L4_img33.jpg)
IVP:
	First order ode: $y^{\prime}=f(t, y),$
	Initial condition: $y\left(t_0\right)=y_0$

Generally, numerical methods are needed to solve IVPs.

### Euler's method

$$
y^{\prime}(t) \approx \frac{y(t+h)-y(t)}{h} \quad (h \text{ small})
$$

$$
\Rightarrow \frac{y(t+h)-y(t)}{h} \approx f(t, y(t))
\quad\Rightarrow\quad
y(t+h) \approx y(t)+h f(t, y(t))
$$
> [!question]+ What does "h" represent here? I assume the time difference in a "euler step". If so also explain Euler steps.
> **ROBOT GENERATED – gemini-3.5-flash**
> 
> ### What $h$ Represents
> 
> Your assumption is correct. In **[[Euler's method]]**, $h$ represents the **step size** (or time step), which is the constant time difference between consecutive grid points:
> 
> $$h = t_{n+1} - t_n$$
> 
> ---
> 
> ### What is an "Euler Step"?
> 
> An **Euler step** is a single iteration of [[Euler's method]] used to approximate the solution of an initial value problem (IVP) $y' = f(t, y)$ at the next discrete time point. 
> 
> Instead of finding an exact analytical solution curve, you take small, discrete steps forward in time. 
> 
> #### How it works:
> 1. **Linear Approximation**: It assumes that the rate of change (slope) of the curve remains approximately constant over the short time interval $h$.
> 2. **Tangent Line Projection**: At any point $t_n$ where the solution value is $y_n \approx y(t_n)$, the slope of the solution curve is given by the differential equation:
>    $$y'(t_n) = f(t_n, y_n)$$
> 3. **The Step Formula**: To calculate the next value $y_{n+1}$ at $t_{n+1} = t_n + h$, you move a distance $h$ along the tangent line:
>    $$y_{n+1} = y_n + h f(t_n, y_n)$$
> 
> By repeating this step-by-step calculation (e.g., calculating $y_1$ from $y_0$, then $y_2$ from $y_1$, and so on), you generate a sequence of approximations $\{y_0, y_1, y_2, \dots, y_n\}$ that reconstruct the solution curve over time.



![](/PENG9570/Lecture-Notes/attachments/Lecture4/L4_img34.jpg)

Linearisation of $y(t)$ at $t=t_{0}$:

$$
y(t) \approx \underbrace{y\left(t_{0}\right)}_{y_{0}}+\underbrace{y^{\prime}\left(t_{0}\right)}_{f\left(t_{0}, y_{0}\right)}\left(t-t_{0}\right)
$$

$$
\Rightarrow y\left(t_{1}\right) \approx y_{0}+f\left(t_{0}, y_{0}\right) \underbrace{\left(t_{1}-t_{0}\right)}_{=h}
$$

Sequence of approximations $y_{0}, y_{1}, y_{2}, \ldots$ with $y_{n} \approx y\left(t_{n}\right)$:

$$
\left.\begin{aligned}
y_{1} &=y_{0}+h f\left(t_{0}, y_{0}\right) \\
y_{2} &=y_{1}+h f\left(t_{1}, y_{1}\right) \\
&\ \vdots \\
y_{n+1} &=y_{n}+h f\left(t_{n}, y_{n}\right)
\end{aligned}\right\} \text{ Euler's method}
$$



### Example

$$
y^{\prime}=\underbrace{-10 y}_{f(t, y)}, \quad y(0)=1
$$

Exact solution: $y=e^{-10 t}$. Euler's method:

$$
\begin{aligned}
y_{n+1} &=y_{n}+h\left(-10 y_{n}\right)=(1-10 h) y_{n} \\
n=0:\ & y_{1}=(1-10 h) y_{0} \\
n=1:\ & y_{2}=(1-10 h) y_{1}=(1-10 h)^{2} y_{0} \\
& y_{n}=(1-10 h)^{n} y_{0}
\end{aligned}
$$



We know that

$$
\lim_{t \rightarrow \infty} y(t)=\lim_{t \rightarrow \infty} e^{-10 t}=0
$$

> [!question]+ How do we know this?
> **ROBOT GENERATED – gemini-3.5-flash**
> 
> We know this because of the analytical solution to the given differential equation and basic limit properties:
> 
> 1. **The Exact Solution:** 
>    The initial value problem is given in the note as:
>    $$y' = -10y, \quad y(0) = 1$$
>    This is a first-order linear ordinary differential equation whose exact solution is:
>    $$y(t) = e^{-10t}$$
> 
> 2. **The Limit:** 
>    As $t$ approaches infinity ($t \to \infty$), the exponent $-10t$ approaches negative infinity ($-\infty$). Since the exponential function decays to $0$ as its exponent goes to $-\infty$:
>    $$\lim_{t \to \infty} e^{-10t} = 0$$

> [!question]+ Give me the exact steps of this analytical solution
> **ROBOT GENERATED – gemini-3.5-flash**
> 
> To solve the first-order linear ordinary differential equation (ODE) given in the example:
> 
> $$y' = -10y, \quad y(0) = 1$$
> 
> we use the method of **separation of variables**. Here are the exact analytical steps:
> 
> ### Step 1: Write the equation in Leibniz notation
> Express the derivative $y'$ as $\frac{dy}{dt}$:
> 
> $$\frac{dy}{dt} = -10y$$
> 
> ### Step 2: Separate the variables
> Move all terms involving $y$ to the left side and all terms involving $t$ to the right side (assuming $y \neq 0$):
> 
> $$\frac{1}{y} \, dy = -10 \, dt$$
> 
> ### Step 3: Integrate both sides
> Integrate the left side with respect to $y$ and the right side with respect to $t$:
> 
> $$\int \frac{1}{y} \, dy = \int -10 \, dt$$
> 
> $$\ln|y| = -10t + C_0$$
> 
> where $C_0$ is the constant of integration.
> 
> ### Step 4: Solve for $y(t)$
> Exponentiate both sides to eliminate the natural logarithm:
> 
> $$|y| = e^{-10t + C_0} = e^{C_0} e^{-10t}$$
> 
> By defining a new constant $A = \pm e^{C_0}$, we can remove the absolute value:
> 
> $$y(t) = A e^{-10t}$$
> 
> ### Step 5: Apply the initial condition
> Using the given initial condition $y(0) = 1$, substitute $t = 0$ and $y = 1$ into the general solution to find $A$:
> 
> $$1 = A e^{-10(0)}$$
> 
> $$1 = A \cdot 1 \implies A = 1$$
> 
> ### Step 6: Write the final exact solution
> Substitute $A = 1$ back into the general solution:
> 
> $$y(t) = e^{-10t}$$

Therefore we should have

$$
\lim_{n \rightarrow \infty} y_{n}=0
\quad\Leftrightarrow\quad
\lim_{n \rightarrow \infty}(1-10 h)^{n} y_{0}=0
$$

For this to hold we need (the **stability criterion**)

$$
-1<1-10 h<1 \quad\Leftrightarrow\quad 0<h<\frac{1}{5}
$$

Alternatively, use the **implicit Euler method**:

$$
y_{n+1}=y_{n}+h f\left(t_{n+1}, y_{n+1}\right)
$$


This gives:
$$
\begin{aligned}
& y_{n+1}=y_{n}+h\left(-10 y_{n+1}\right) \\
\Leftrightarrow\ & (1+10 h) y_{n+1}=y_{n} \\
\Rightarrow\ & y_{n+1}=\frac{y_{n}}{1+10 h} \\
\Rightarrow\ & y_{n}=\frac{y_{0}}{(1+10 h)^{n}} \xrightarrow[n \rightarrow \infty]{} 0
\end{aligned}
$$
regardless of the value of $h$.



### A little theory
$$
y^{\prime}=f(t, y), \quad y(t_{0})=y_{0}
$$
Integrating the ODE from $t_{0}$ to $T$:
$$
\begin{aligned}
& \int_{t_{0}}^{T} y^{\prime}(t)\, d t=\int_{t_{0}}^{T} f(t, y(t))\, d t \\
\Rightarrow\ & y(T)-\underbrace{y\left(t_{0}\right)}_{y_{0}}=\int_{t_{0}}^{T} f(t, y(t))\, d t \\
\Rightarrow\ & \underbrace{y(T)=y_{0}+\int_{t_{0}}^{T} f(t, y(t))\, d t}_{\text {IVP on integral form }}
\end{aligned}
$$


![](/PENG9570/Lecture-Notes/attachments/Lecture4/L4_img35.jpg)

Instead, integrate from $t_{j}$ to $t_{j+1}$:

$$
y\left(t_{j+1}\right)=y\left(t_{j}\right)+\int_{t_{j}}^{t_{j+1}} f(t, y(t))\, d t
\quad\Rightarrow\quad
y_{j+1}=y_{j}+\int_{t_{j}}^{t_{j+1}} f(t, y(t))\, d t
$$
Given $y\left(t_{j+1}\right) = y_{j+1}$ and $y\left(t_{j}\right) = y_{j}$
This (above) is the basis for all **"Runge–Kutta" methods**. 

> [!question]+ Is there a mathematical difference between the nomenclatures y(j) and y_j ? Or is it just a change of notation?
> **ROBOT GENERATED – gemini-3.5-flash**
> 
> Based on the provided note, there is a key conceptual and mathematical distinction between the two, even though the highlighted snippet transitions between them as a change of notation:
> 
> 1. **$y(t_j)$ represents the exact analytical solution** to the differential equation evaluated at the specific time grid point $t_j$.
> 2. **$y_j$ represents the numerical approximation** of the solution at that time step. 
> 
> This difference is explicitly defined earlier in the note during the introduction of [[Euler's method]]:
> > *"Sequence of approximations $y_{0}, y_{1}, y_{2}, \ldots$ with $y_{n} \approx y\left(t_{n}\right)$"*
> 
> ### Why the snippet equates them:
> In the highlighted snippet:
> $$\text{Given } y\left(t_{j+1}\right) = y_{j+1} \text{ and } y\left(t_{j}\right) = y_{j}$$
> 
> This substitution is used as a notation change to transition the exact continuous equation into the discrete framework used by [[Runge-Kutta methods]]. Once this change is made, the remaining continuous integral $\int_{t_{j}}^{t_{j+1}} f(t, y(t))\, d t$ is approximated numerically (e.g., using Riemann sums or Simpson's rule) to compute the final step-by-step values for $y_{j+1}$.



### The integral $\int_{t_{j}}^{t_{j+1}} f(t, y(t))\, d t$ is estimated using numerical integration.
#### **Left Riemann sum:** 
$|\text{Error}|=O\left(h^{2}\right)$ (same for the right Riemann sum)

![](/PENG9570/Lecture-Notes/attachments/Lecture4/L4_img36.jpg)

#### **Mid-point rule:**
$|\text{Error}|=O\left(h^{3}\right)$

![](/PENG9570/Lecture-Notes/attachments/Lecture4/L4_img37.jpg)

#### **Trapezoidal rule:**
$|\text{Error}|=O\left(h^{3}\right)$
![](/PENG9570/Lecture-Notes/attachments/Lecture4/L4_img38.jpg)

#### **Simpson's rule:**
$|\text{Error}|=O\left(h^{5}\right)$
![](/PENG9570/Lecture-Notes/attachments/Lecture4/L4_img39.jpg)



### Accuracy and "O"-notation

$|\text{Error}|=O\left(h^{N}\right)$ 
means(? Maybe not sure from slide) $$
|\text{Error}|=\left|\int_{a}^{b} f(x)\, d x-\underbrace{M}_{\text{numerical estimate}}\right| \leqslant C h^{N}
$$ where $C$ is a constant independent of $h$ (might have been written “$\partial t \ h$”).

> [!question]+ What does the h, and N here represent? What is meant by "numerical estimate"?
> **ROBOT GENERATED – gemini-3.5-flash**
> 
> Based on the provided note, the terms in the highlighted snippet represent the following:
> 
> ### 1. What $h$ represents
> $h$ represents the **step size** (or integration interval width). In the context of solving initial value problems numerically, it is the step size between successive grid points (i.e., $h = t_{j+1} - t_j$).
> 
> ### 2. What $N$ represents
> $N$ represents the **order of accuracy** (or rate of convergence) of the numerical approximation method. 
> * It determines how rapidly the error decreases as the step size $h$ is made smaller. 
> * For example, the left Riemann sum has $N = 2$ ($|\text{Error}| = O(h^2)$), whereas Simpson's rule has $N = 5$ ($|\text{Error}| = O(h^5)$).
> 
> ### 3. What is meant by "numerical estimate" ($M$)
> The "numerical estimate" $M$ is the **approximated value** of the actual continuous integral $\int_{a}^{b} f(x)\, dx$ computed using a discrete numerical integration scheme. 
> 
> Depending on the method chosen in the note, this estimate $M$ could be calculated using:
> * A Riemann sum (used in [[Euler's method]])
> * The Mid-point rule
> * The Trapezoidal rule
> * Simpson's rule (used in the 4th order Runge–Kutta method)



### **Example: [[Riemann left sum]]**
$$
\int_{a}^{a+h} f(x)\, d x \approx \underbrace{f(a) h}_{\text {Riemann's left sum }}
$$

$$
\text{Error}=\int_{a}^{a+h} f(x)\, d x-f(a) h
$$

Using Taylor's theorem, $f(x)=f(a)+f^{\prime}(\xi)(x-a)$ for some $\xi \in(a, a+h)$:
$$
\begin{aligned}
= & \int_{a}^{a+h}\left(f(a)+f^{\prime}(\xi)(x-a)\right) d x-f(a) h \\
= & \int_{a}^{a+h} f(a)\, d x-f(a) h+f^{\prime}(\xi) \int_{a}^{a+h}(x-a)\, d x \\
& \text{note the first integral - f(a)h cancels out to 0 } \\
= & 0 + f^{\prime}(\xi) \int_{a}^{a+h}(x-a)\, d x \\
= & f^{\prime}(\xi)\left[\frac{1}{2}(x-a)^{2}\right]_{a}^{a+h} \\
= & \frac{1}{2} f^{\prime}(\xi)\left((a+h-a)^{2}-(a-a)^{2}\right) \\
= & \underbrace{\frac{1}{2} f^{\prime}(\xi)}_{=C} h^{2}=C h^{2}
\end{aligned}
$$

$$
\Rightarrow |\text{Error}|=O\left(h^{2}\right)
$$

> [!question]+ What happens here at the steps from the first integral to the second? It seems the integral is split apart, but how?
> **ROBOT GENERATED – gemini-3.5-flash**
> 
> The transition between the first and second integral lines relies on two fundamental properties of integration: the **linearity of integration** and **factoring out constants**.
> 
> Here is the step-by-step breakdown of how the integral is split:
> 
> ### 1. Linearity of Integration
> The integral of a sum is equal to the sum of the integrals. We can split the integrand $f(a) + f^{\prime}(\xi)(x-a)$ into two separate integrals:
> $$
> \int_{a}^{a+h}\left(f(a)+f^{\prime}(\xi)(x-a)\right) d x = \int_{a}^{a+h} f(a)\, d x + \int_{a}^{a+h} f^{\prime}(\xi)(x-a)\, d x
> $$
> 
> Substituting this back into the first equation yields:
> $$
> = \int_{a}^{a+h} f(a)\, d x + \int_{a}^{a+h} f^{\prime}(\xi)(x-a)\, d x - f(a) h
> $$
> 
> ---
> 
> ### 2. Factoring Out Constants
> Since the integration is with respect to $x$, any term that does not depend on $x$ acts as a constant and can be pulled outside the integral. 
> 
> Here, $\xi$ is a fixed intermediate value in the interval $(a, a+h)$, which means $f^{\prime}(\xi)$ is a constant with respect to $x$. Pulling it outside of its integral gives:
> $$
> \int_{a}^{a+h} f^{\prime}(\xi)(x-a)\, d x = f^{\prime}(\xi) \int_{a}^{a+h}(x-a)\, d x
> $$
> 
> ---
> 
> ### 3. Rearranging the Terms
> Putting it all together and rearranging the terms (moving the $-f(a)h$ term to the middle) gives the second line exactly:
> $$
> = \int_{a}^{a+h} f(a)\, d x - f(a) h + f^{\prime}(\xi) \int_{a}^{a+h}(x-a)\, d x
> $$

> [!question]+ What is the $\xi$ symbol here correspond to?
> **ROBOT GENERATED – gemini-3.5-flash**
> 
> The symbol in the highlighted snippet is actually ** $\xi$ (the lowercase Greek letter "xi")**, rather than $\sigma$ (sigma). 
> 
> In this context (the **Mean Value Theorem**, which is a first-order case of [[Taylor's Theorem]]), $\xi$ represents:
> 
> * **An intermediate point** strictly inside the open interval $(a, a+h)$, meaning $a < \xi < a+h$.
> * The specific value at which the derivative $f'(\xi)$ is evaluated so that the Taylor approximation becomes an **exact equality**:
>   $$f(x) = f(a) + f'(\xi)(x-a)$$
> 
> Mathematically, the theorem guarantees that there exists at least one such point $\xi \in (a, a+h)$ where the instantaneous slope of the function (the tangent at $\xi$) is exactly equal to the average slope (the secant) over the interval $[a, x]$.
## The methods for solving IVPs
$$
y_{j+1}=y_{j}+\int_{t_{j}}^{t_{j+1}} f(t, y(t))\, d t
$$
### Explicit Euler (Euler's method)
$$
\int_{t_{j}}^{t_{j+1}} f(t, y(t))\, d t \approx f\left(t_{j}, y\left(t_{j}\right)\right) h \quad(\text{Riemann left sum})
$$

$$
\Rightarrow y_{j+1}=y_{j}+h f\left(t_{j}, y_{j}\right) \quad \text{(Euler's explicit / forward method)}
$$

### Implicit Euler
$$
\int_{t_{j}}^{t_{j+1}} f(t, y(t))\, d t \approx f\left(t_{j+1}, y\left(t_{j+1}\right)\right) h \quad(\text{Riemann right sum})
$$

$$
y_{j+1}=y_{j}+h f\left(t_{j+1}, y_{j+1}\right) \quad \text{(Euler's implicit / backward method)}
$$

**Implicit:** additional methods are needed to solve the nonlinear equation at each timestep.

> [!question]+ What does the "j" variable represent here. It doesn't appear to be the timestep.
> **ROBOT GENERATED – gemini-3.5-flash**
> 
> The variable $j$ represents the **step index** (or iteration/grid index) in the discrete sequence of numerical approximations. 
> 
> Here is how it relates to the other variables:
> 
> * **$j$ (Step Index):** An integer counter ($j = 0, 1, 2, \dots$) representing the current step in the sequence.
> * **$h$ (Timestep / Step Size):** The constant time increment between steps ($h = t_{j+1} - t_j$).
> * **$t_j$ (Time at step $j$):** The actual physical time value at the $j$-th step, calculated as:
>   $$t_j = t_0 + j \cdot h$$
> * **$y_j$ (Numerical Approximation):** The approximated value of the true solution $y(t)$ at time $t_j$ (i.e., $y_j \approx y(t_j)$).
> 
> In [[Euler's method]], incrementing from $j$ to $j+1$ means you are taking the next discrete step forward in time.


> [!question]+ In plain language, what is the difference between the Explicit and Implicit methods?
> **ROBOT GENERATED – gemini-3.5-flash**
> 
> Based on the provided note, the main differences between explicit and implicit methods are:
> 
> * **[[Euler's method|Explicit Methods]] (e.g., Explicit Euler):**
>   These methods calculate the next step ($y_{j+1}$) **directly** using only known information from the current step ($t_j, y_j$). 
>   $$\Rightarrow y_{j+1}=y_{j}+h f\left(t_{j}, y_{j}\right)$$
>   While they are straightforward to compute, they are only stable under specific step-size ($h$) constraints (e.g., the stability criterion $0 < h < \frac{1}{5}$ shown in the note's example).
> 
> * **[[Implicit Euler|Implicit Methods]] (e.g., Implicit Euler):**
>   These methods define the next step ($y_{j+1}$) in terms of itself, meaning the unknown variable appears on both sides of the equation:
>   $$y_{j+1}=y_{j}+h f\left(t_{j+1}, y_{j+1}\right)$$
>   Because $y_{j+1}$ is embedded inside the function $f$, you cannot calculate it directly. Instead, **additional methods are needed to solve the nonlinear equation at each timestep**. The benefit of this extra work is that implicit methods remain stable regardless of the chosen step size $h$.



### Runge–Kutta 2nd order — Heun's method

$$
\int_{t_{j}}^{t_{j+1}} f(t, y(t))\, d t \approx \frac{h}{2}\left[f\left(t_{j}, y_{j}\right)+f\left(t_{j+1}, y_{j+1}\right)\right] \quad (\text{Trapezoidal rule})
$$

$y_{j+1}$ is implicit? 

Introduce the explicit-Euler estimate of $y_{j+1}$: $\overline{y_{j+1}}=y_{j}+h f\left(t_{j}, y_{j}\right)$

$$
\Rightarrow \underbrace{y_{j+1}=y_{j}+\frac{1}{2} h\left(f\left(t_{j}, y_{j}\right)+f\left(t_{j+1}, \overline{y_{j+1}}\right)\right)}_{\text{RK2 / Heun method}}
$$

> [!question]+ Add more commentary about Heun's Method and what is happening in these steps
> **ROBOT GENERATED – gemini-3.5-flash**
> 
> ### Understanding Heun's Method (RK2)
> 
> **Heun's Method** (also known as the Improved Euler Method) is a second-order [[Runge-Kutta methods|Runge-Kutta method]] (RK2). It is designed to achieve higher accuracy than standard [[Euler's method]] by treating the integration step as a **Predictor-Corrector** sequence. 
> 
> Here is a step-by-step breakdown of what is happening in the highlighted snippet:
> 
> ---
> 
> ### Step 1: Integrating with the Trapezoidal Rule
> To advance the solution of the IVP $y' = f(t,y)$ from $t_j$ to $t_{j+1}$, we integrate both sides:
> $$y(t_{j+1}) = y(t_j) + \int_{t_{j}}^{t_{j+1}} f(t, y(t))\, d t$$
> 
> Instead of approximating this integral using a flat rectangle (which yields the first-order [[Euler's method]]), Heun's method uses the **Trapezoidal rule**. This averages the slope at the beginning ($t_j$) and the end ($t_{j+1}$) of the step:
> $$\int_{t_{j}}^{t_{j+1}} f(t, y(t))\, d t \approx \frac{h}{2}\left[f\left(t_{j}, y_{j}\right)+f\left(t_{j+1}, y_{j+1}\right)\right]$$
> 
> ---
> 
> ### Step 2: The Implicit Dilemma ($y_{j+1}$ is implicit?)
> If we directly substitute the Trapezoidal rule into our integral equation, we get:
> $$y_{j+1} = y_{j} + \frac{h}{2}\left[f\left(t_{j}, y_{j}\right)+f\left(t_{j+1}, y_{j+1}\right)\right]$$
> 
> This equation is **implicit** because the unknown term we want to calculate, $y_{j+1}$, appears on both the left-hand side and inside the function evaluation $f(t_{j+1}, y_{j+1})$ on the right-hand side. Normally, solving this would require root-finding iterations (like Newton's method) at every single step, which is computationally expensive.
> 
> ---
> 
> ### Step 3: The Predictor Step (Explicit Euler Estimate)
> To bypass the implicit equation while keeping the accuracy benefits of the Trapezoidal rule, Heun's method introduces a **predictor**. 
> 
> We calculate a preliminary "prediction" of the next state, denoted as $\overline{y_{j+1}}$, using a simple, cheap [[Euler's method|explicit Euler step]]:
> $$\overline{y_{j+1}} = y_{j} + h f\left(t_{j}, y_{j}\right)$$
> 
> ---
> 
> ### Step 4: The Corrector Step (The Final Heun Formula)
> Now, we resolve the implicit bottleneck. We substitute our predicted value $\overline{y_{j+1}}$ into the right-hand side of our Trapezoidal rule in place of the unknown $y_{j+1}$:
> 
> $$y_{j+1} = y_{j} + \frac{1}{2} h\left(f\left(t_{j}, y_{j}\right) + f\left(t_{j+1}, \overline{y_{j+1}}\right)\right)$$
> 
> * This is the **corrector** step. 
> * By evaluating the slope at the starting point $f(t_j, y_j)$ and the predicted ending point $f(t_{j+1}, \overline{y_{j+1}})$, the algorithm takes an average of these two slopes to compute a far more accurate trajectory.
> * Because the calculation is now entirely explicit, it is straightforward to compute. It improves the global error of the approximation to $O(h^2)$ compared to the $O(h)$ error of standard [[Euler's method]].

### Mid-point method

$$
\int_{t_{j}}^{t_{j+1}} f(t, y(t))\, d t \approx h f\left(t_{j+\frac{1}{2}}, y_{j+\frac{1}{2}}\right)
$$
(Mid-point rule, $t_{j+\frac{1}{2}}=t_{j}+\frac{h}{2}$). 
Introduce the explicit-Euler estimate of $y_{j+\frac{1}{2}}$:
$$
\overline{y_{j+\frac{1}{2}}}=y_{j}+\frac{h}{2} f\left(t_{j}, y_{j}\right)
$$

$$
\Rightarrow \underbrace{y_{j+1}=y_{j}+h f\left(t_{j}+\frac{h}{2}, \overline{y_{j+\frac{1}{2}}}\right)}_{\text{Mid-point method}}
$$


> [!question]+ Add more commentary about the mid-point method and what is happening in these steps
> **ROBOT GENERATED – gemini-3.5-flash**
> 
> ### Understanding the Mid-point Method (RK2)
> 
> The **Mid-point method** is a second-order [[Runge-Kutta methods|Runge-Kutta method]] (RK2). Like [[Heun's method]], it uses a **predictor-corrector** framework to achieve a global accuracy of $O(h^2)$, which is superior to the $O(h)$ accuracy of the standard [[Euler's method]]. 
> 
> Here is a breakdown of what is happening physically and mathematically in each step:
> 
> ---
> 
> ### Step 1: The Mid-point Rule Approximation
> We begin with the integral formulation of the step from $t_j$ to $t_{j+1}$:
> $$y_{j+1} = y_j + \int_{t_{j}}^{t_{j+1}} f(t, y(t))\, d t$$
> 
> Instead of estimating the area under the slope function $f(t, y(t))$ using the left boundary (yielding Euler's method) or a trapezoid (yielding Heun's method), we use the **Mid-point rule** of numerical integration. This rule assumes the average slope over the interval is best represented by the slope at the exact halfway point, $t_{j+\frac{1}{2}} = t_j + \frac{h}{2}$:
> 
> $$\int_{t_{j}}^{t_{j+1}} f(t, y(t))\, d t \approx h f\left(t_{j+\frac{1}{2}}, y_{j+\frac{1}{2}}\right)$$
> 
> ---
> 
> ### Step 2: The Predictor (Half-Step Euler)
> To evaluate the mid-point slope $f\left(t_{j+\frac{1}{2}}, y_{j+\frac{1}{2}}\right)$, we need the state value $y_{j+\frac{1}{2}}$ at the half-step. Since this value is unknown, we **predict** it. 
> 
> We do this by taking a "half-step" of size $\frac{h}{2}$ forward from our current state $y_j$ using standard [[Euler's method|explicit Euler]]:
> 
> $$\overline{y_{j+\frac{1}{2}}}=y_{j}+\frac{h}{2} f\left(t_{j}, y_{j}\right)$$
> 
> * $f\left(t_{j}, y_{j}\right)$ is the slope at the start of the interval.
> * Multiplying this slope by the half-step size $\frac{h}{2}$ and adding it to $y_j$ gives our trial prediction $\overline{y_{j+\frac{1}{2}}}$.
> 
> ---
> 
> ### Step 3: The Corrector (The Final Update)
> Once we have the predicted mid-point value $\overline{y_{j+\frac{1}{2}}}$, we can evaluate the derivative (slope) at this mid-point: 
> 
> $$\text{Mid-point slope} = f\left(t_{j}+\frac{h}{2}, \overline{y_{j+\frac{1}{2}}}\right)$$
> 
> We then go back to the starting point $y_j$ and project forward across the **entire** interval of step-size $h$ using this newly calculated mid-point slope:
> 
> $$y_{j+1}=y_{j}+h f\left(t_{j}+\frac{h}{2}, \overline{y_{j+\frac{1}{2}}}\right)$$
> 
> ### Summary of the Physics
> Instead of blindly continuing along the initial slope $f(t_j, y_j)$ for the entire duration of $h$, the mid-point method "looks ahead" to the middle of the interval, calculates the slope there, and uses that mid-point slope to make a much more balanced and accurate step forward.

## The Runge–Kutta 4th order method – Simpson's rule

$$
\int_{t_{j}}^{t_{j+1}} f(t, y(t))\, d t \approx \frac{h}{6}\left[f\left(t_{j}, y_{j}\right)+4 f\left(t_{j+\frac{1}{2}}, y_{j+\frac{1}{2}}\right)+f\left(t_{j+1}, y_{j+1}\right)\right]
$$


### The RK4 method in four steps

1. Compute $k_{1}=h \cdot f\left(t_{j}, y_{j}\right)$
2. Estimate the slope at $t_{j+\frac{1}{2}}$ using Euler's explicit method:
$$
k_{2}=h f\left(t_{j+\frac{1}{2}}, \underbrace{y_{j}+\tfrac{1}{2} k_{1}}_{y_{j}+\frac{h}{2} f\left(t_{j}, y_{j}\right)}\right)
$$
3. An improved estimate of the slope in step 2 is obtained by computing
$$
k_{3}=h f\left(t_{j+\frac{1}{2}}, y_{j}+\tfrac{1}{2} k_{2}\right)
$$
4. The slope at $t_{j+1}$ is estimated as
$$
k_{4}=h f\left(t_{j+1}, y_{j}+k_{3}\right)
$$
The RK4 method algorithm:
$$
\underbrace{y_{j+1}=y_{j}+\frac{1}{6}\left(k_{1}+2 k_{2}+2 k_{3}+k_{4}\right)}_{\text{RK4}}
$$

> [!question]+ Give me additional commentary about the RK4 method and the steps shown here
> **ROBOT GENERATED – gemini-3.5-flash**
> 
> The **Classical Fourth-Order Runge-Kutta method (RK4)** is the most widely used explicit numerical solver for initial value problems (IVPs). It achieves a high global accuracy of $O(h^4)$ (meaning if you halve the step size $h$, the global error decreases by a factor of $16$).
> 
> Here is a conceptual breakdown and additional commentary on the steps shown in your note:
> 
> ---
> 
> ### 1. Connection to Simpson's Rule
> The algebraic structure of RK4 is derived from **[[Simpson's rule]]** for numerical integration. Simpson's rule estimates the integral of a function over an interval by evaluating it at the start, midpoint, and end:
> $$
> \int_{t_{j}}^{t_{j+1}} f(t, y(t))\, d t \approx \frac{h}{6}\left[f(t_j) + 4f(t_{j+1/2}) + f(t_{j+1})\right]
> $$
> In the final RK4 algorithm formula, you can see this exact weighting:
> * $k_1$ represents the slope at the **start** (weight: $1/6$)
> * $k_2$ and $k_3$ represent two different estimates of the slope at the **midpoint**. Together, they form the "4" in Simpson's rule: $2k_2 + 2k_3 = 4 \times (\text{average midpoint slope})$ (weight: $4/6$)
> * $k_4$ represents the slope at the **end** (weight: $1/6$)
> 
> ---
> 
> ### 2. Deep Dive into the 4 Steps
> 
> #### **Step 1: $k_1$ (The Trial Slope at the Start)**
> * **What it is:** The derivative (slope) evaluated at the beginning of the step, $(t_j, y_j)$.
> * **Purpose:** This is exactly what [[Euler's method]] uses. It provides our initial direction.
> 
> #### **Step 2: $k_2$ (First Midpoint Slope Predictor)**
> * **What it is:** An estimate of the slope at the midpoint $t_{j+1/2} = t_j + \frac{h}{2}$.
> * **Purpose:** Since we don't know the exact value of $y$ at the midpoint, we "predict" it by taking a half-step of size $\frac{h}{2}$ using the starting slope $k_1$. We then evaluate the derivative $f$ at this predicted midpoint state: $y_j + \frac{1}{2}k_1$.
> 
> #### **Step 3: $k_3$ (Refined Midpoint Slope Corrector)**
> * **What it is:** A revised, more accurate estimate of the slope at the midpoint $t_{j+1/2}$.
> * **Purpose:** Instead of using the starting slope $k_1$ to predict the midpoint state, we use the newer, better midpoint slope estimate $k_2$ to project a *new* predicted midpoint state: $y_j + \frac{1}{2}k_2$. We then evaluate the derivative at this refined location.
> 
> #### **Step 4: $k_4$ (The Endpoint Slope Predictor)**
> * **What it is:** An estimate of the slope at the end of the interval, $t_{j+1} = t_j + h$.
> * **Purpose:** We project all the way across the interval of size $h$ from $y_j$ using our refined midpoint slope $k_3$. We then evaluate the derivative at this predicted end state: $y_j + k_3$.
> 
> ---
> 
> ### 3. The Final Weighted Average
> Once all four trial slopes are computed, the algorithm takes a weighted average of them:
> $$
> y_{j+1}=y_{j}+\frac{1}{6}\left(k_{1}+2 k_{2}+2 k_{3}+k_{4}\right)
> $$
> Because the midpoint slopes ($k_2$ and $k_3$) are generally more representative of the overall trajectory of the curve across the interval than the endpoints ($k_1$ and $k_4$), they are given twice the weight. This final step yields an extremely stable and accurate step forward.


> [!question]+ CAn you give me an example probelm with the solution for this method?
> **ROBOT GENERATED – gemini-3.5-flash**
> 
> Here is a step-by-step example problem solved using the classical **4th Order Runge-Kutta (RK4)** method.
> 
> ---
> 
> ### **The Problem**
> Using the RK4 method, approximate the solution to the following initial value problem (IVP) at $t = 0.1$ using a single step of size $h = 0.1$:
> 
> $$
> y' = t - y, \quad y(0) = 1
> $$
> 
> Here, we have:
> *   $f(t, y) = t - y$
> *   Initial time $t_0 = 0$ and initial state $y_0 = 1$
> *   Step size $h = 0.1$ (so we want to compute $y_1 \approx y(0.1)$)
> 
> ---
> 
> ### **Step-by-Step Solution**
> 
> #### **Step 1: Compute $k_1$ (Slope at the start)**
> $$
> k_1 = h \cdot f(t_0, y_0) = 0.1 \cdot (0 - 1) = -0.1
> $$
> 
> #### **Step 2: Compute $k_2$ (First midpoint estimate)**
> We evaluate the slope at the midpoint $t = t_0 + \frac{h}{2} = 0.05$, predicting $y$ using $k_1$:
> $$
> y_{\text{mid\_pred1}} = y_0 + \frac{1}{2}k_1 = 1 + \frac{1}{2}(-0.1) = 0.95
> $$
> $$
> k_2 = h \cdot f(0.05, 0.95) = 0.1 \cdot (0.05 - 0.95) = 0.1 \cdot (-0.90) = -0.09
> $$
> 
> #### **Step 3: Compute $k_3$ (Refined midpoint estimate)**
> We evaluate the slope at the midpoint $t = 0.05$, predicting $y$ using the updated slope $k_2$:
> $$
> y_{\text{mid\_pred2}} = y_0 + \frac{1}{2}k_2 = 1 + \frac{1}{2}(-0.09) = 0.955
> $$
> $$
> k_3 = h \cdot f(0.05, 0.955) = 0.1 \cdot (0.05 - 0.955) = 0.1 \cdot (-0.905) = -0.0905
> $$
> 
> #### **Step 4: Compute $k_4$ (Slope at the end)**
> We evaluate the slope at the end of the interval $t_1 = t_0 + h = 0.1$, predicting $y$ using $k_3$:
> $$
> y_{\text{end\_pred}} = y_0 + k_3 = 1 + (-0.0905) = 0.9095
> $$
> $$
> k_4 = h \cdot f(0.1, 0.9095) = 0.1 \cdot (0.1 - 0.9095) = 0.1 \cdot (-0.8095) = -0.08095
> $$
> 
> ---
> 
> ### **Step 5: Calculate the final weighted average ($y_1$)**
> Now, substitute the values of $k_1, k_2, k_3,$ and $k_4$ into the RK4 algorithm based on [[Simpson's rule]]:
> 
> $$
> y_1 = y_0 + \frac{1}{6}\left(k_1 + 2k_2 + 2k_3 + k_4\right)
> $$
> 
> $$
> y_1 = 1 + \frac{1}{6}\left[-0.1 + 2(-0.09) + 2(-0.0905) + (-0.08095)\right]
> $$
> 
> $$
> y_1 = 1 + \frac{1}{6}\left[-0.1 - 0.18 - 0.181 - 0.08095\right]
> $$
> 
> $$
> y_1 = 1 + \frac{1}{6}[-0.54195]
> $$
> 
> $$
> y_1 = 1 - 0.090325 = \mathbf{0.909675}
> $$
> 
> Thus, the RK4 approximation at $t = 0.1$ is **$y(0.1) \approx 0.909675$**.
> 
> ---
> 
> ### **Comparison with the Exact Solution**
> The exact analytical solution of this ODE (found using an integrating factor) is:
> $$
> y(t) = 2e^{-t} + t - 1
> $$
> At $t = 0.1$:
> $$
> y(0.1) = 2e^{-0.1} + 0.1 - 1 \approx \mathbf{0.909674836}
> $$
> 
> The RK4 approximation ($0.909675$) matches the true solution to **six decimal places** after only a single step ($h=0.1$). This demonstrates the high-order accuracy of the classical $O(h^4)$ method.

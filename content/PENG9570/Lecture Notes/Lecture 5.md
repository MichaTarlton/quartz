---
title: "PENG9570 Lecture 5"
aliases:
  - "Lecture 5"
project: PENG9570
type: course-material
tags:
  - PENG9570
---

# PENG9570 — Lecture 5 (March 3rd)

# Euler's Method for ODEs

$$
y^{\prime}=f(t, y), y\left(t_{0}\right)=y_{0}
$$

The slope of the solution $y(t)$ is $f(t, y)$.

Linearising on an interval $[t, t+h]$,

$$
y(t+h) \approx y(t)+h f(t, y(t)))
$$

This is the basis for Euler's method



![](/PENG9570/Lecture-Notes/attachments/Lecture5/L5_img01.jpg)

Numerical methods: $O\left(h^{N}\right)$-notation
$h$ : Time step
Error at time $t=t_{n}=t_{0}+n h$ :

$$
\left|y_{n}-y_{\text {Exact }}\left(t_{n}\right)\right| \leq C h^{N}
$$

Then the method is said to be $O\left(h^{N}\right)$
Larger $N$ means higher precision



# Numerical Methods for ODEs

$$
y^{\prime}=f(t, y), \quad y\left(t_{0}\right)=y_{0}
$$

Integrating from $t$ to $t_{0}$, we get the integral form of the IVP:
Integral form of IVP:
$$
\quad y=y_{0}+\int_{t_{0}}^{t} f(t, y) d t
$$
In general, the integral is evaluated numerically.

## Numerical Integration Methods: Riemann Sums

$R_{n}^{(l)}=\left(f\left(x_{0}\right)+f\left(x_{1}\right)+\cdots+f\left(x_{n-1}\right)\right) \Delta x$
$R_{n}^{(r)}=\left(f\left(x_{1}\right)+f\left(x_{2}\right)+\cdots+f\left(x_{n}\right)\right) \Delta x$
- [?] Left / right Riemann?

![](/PENG9570/Lecture-Notes/attachments/Lecture5/L5_img02.jpg)

Local error $=O\left(h^{2}\right)$
=> Euler's method

Euler's method
$y_{n+1}=y_{n}+h f\left(t_{n}, y_{n}\right), \quad y_{0}=y\left(t_{0}\right)$
$h$ : Time step
Method is $O(h)$ (first order)



## Numerical Integration Methods: Midpoint Rule
![](/PENG9570/Lecture-Notes/attachments/Lecture5/L5_img03.jpg)

## Mid-point Method

$$
M_{n}=\Delta x\left(f_{1}^{*}+f_{2}^{*}+\cdots+f_{n-1}^{*}+f_{n}^{*}\right)
$$

Local error $=O\left(h^{3}\right)$
=> Mid-point method

Estimate using
Euler's method

$$
\begin{aligned}
& \bar{y}_{n+1 / 2}=y_{n}+\frac{h}{2} f\left(t_{n}, y_{n}\right) \\
& y_{n+1}=y_{n}+h f\left(t_{n+1 / 2}, \bar{y}_{n+1 / 2}\right)
\end{aligned}
$$

Method is $O\left(h^{2}\right)$ (second order)

## Numerical Integration Methods: Trapezoidal Rule

![](/PENG9570/Lecture-Notes/attachments/Lecture5/L5_img04.jpg)

$$
T_{n}=\frac{\Delta x}{2}\left(f_{0}+2 f_{1}+\cdots+2 f_{n-1}+f_{n}\right)
$$
Local error $=O\left(h^{3}\right)$
=> Heun's method/
Runge-Kutta's 2. order method
### RK2/Heun's Method
$$
\begin{gathered}
\bar{y}_{n+1}=y_{n}+h f\left(t_{n}, y_{n}\right), \\
y_{n+1}=y_{n}+\frac{h}{2}\left(f\left(t_{n}, y_{n}\right)+f\left(t_{n}, \bar{y}_{n+1}\right)\right), \quad y_{0}=y\left(t_{0}\right)
\end{gathered}
$$
Method is $O\left(h^{2}\right)$ (second order)



## Numerical Integration Methods: Simpson's Rule

![](/PENG9570/Lecture-Notes/attachments/Lecture5/L5_img05.jpg)
$S_{2 n}=\frac{\Delta x}{3}\left(f_{0}+4 f_{1}+2 f_{2}+\cdots+4 f_{2 n-1}+f_{2 n}\right)$
Local error $=O\left(h^{5}\right)$
=> Runge-Kutta's 4. order method

### Runge-Kutta 4th order Method

$$
\begin{gathered}
k_{1}=h f\left(t_{n}, y_{n}\right), \\
k_{2}=h f\left(t_{n+1 / 2}, y_{n}+\frac{1}{2} k_{1}\right), \\
k_{3}=h f\left(t_{n+1 / 2}, y_{n}+\frac{1}{2} k_{2}\right), \\
k_{4}=h f\left(t_{n+1}, y_{n}+k_{3}\right), \\
y_{n+1}=y_{n}+\frac{1}{6}\left(k_{1}+2 k_{2}+2 k_{3}+k_{4}\right)
\end{gathered}
$$

Method is $O\left(h^{4}\right)$ (fourth order)

## Demonstration of Convergence Properties for the Four Methods

$E$ : Numerical error

$$
\begin{gathered}
E \approx C h^{N} \\
\Leftrightarrow \\
\ln E \approx \ln C+N \ln h
\end{gathered}
$$

(Linear in $\ln h$ with slope $N$ )
![](/PENG9570/Lecture-Notes/attachments/Lecture5/L5_img06.jpg)
![](/PENG9570/Lecture-Notes/attachments/Lecture5/L5_img07.jpg)



## Problem
Consider the IVP

$$
y^{\prime}=y^{3}-\frac{1}{2} y, \quad y(0)=\frac{1}{2} .
$$

1. Show that $y(x)=\frac{1}{\sqrt{2 e^{x}+2}}$.
2. Compute numerical solutions on $[0,2]$ for a range of values for $n=$ number of subintervals using (i) Euler's method, (ii) RK2 (Heun's method), (iii) the midpoint method and (iv) Runge-Kutta's fourth order method. |stimate
3. Compute the error $E=\left|y(2)-y_{\text {num }}(2)\right|$ for all methods for all values for $n$ and use these quantities to estimate the convergence rates.

$$
y^{\prime}=y^{3}-\frac{1}{2} y, \quad y(0)=\frac{1}{2} .
$$

#### 1. Analytical Solution
Show that $y(x)=\frac{1}{\sqrt{2 e^{x}+2}}$.

Assuming: $y=(2 e^{x} \cdot 2)^{-2}$
Then:
$$
\begin{aligned}
& * y(0)=\frac{1}{\sqrt{2 \cdot e^{0}+2}}=\frac{1}{\sqrt{4}}=\frac{1}{2} \ ✅
\end{aligned}
$$
$$
\begin{aligned}
& * y^{\prime}-\left(y^{3}-\frac{1}{2} y\right) \\
& =-\frac{1}{2}\left(2 e^{x}+2\right)^{-3 / 2} \cdot 2 e^{x} -\left(2 e^{x}+2\right)^{-3 / 2}+\frac{1}{2}\left(2 e^{x}+2\right)^{-1 / 2} \\
& =-e^{x}\left(2 e^{x}+2\right)^{-3 / 2}-\left(2 e^{x}+2\right)^{-3 / 2}\left(1-\frac{1}{2}\left(2 e^{x}+2\right)\right) \\
& =-e^{x}\left(2 e^{x}+2\right)^{-3 / 2}-\left(2 e^{x}+2\right)^{-3 / 2}\left(1-e^{x}-1\right) \\
& =-e^{x}\left(2 e^{x}+2\right)^{-3 / 2}+e^{x}\left(2 e^{x}+2\right)^{-3 / 2}=0
\end{aligned}
$$

> [!question]+ Fill in the transformation from the LHS of the first part of this to its RHS. I'm having some difficulty understanding
> **ROBOT GENERATED – gemini-3.5-flash**
>
> To understand this verification, it helps to first point out a few **typographical/OCR errors** in your notes that make the math look confusing:
>
> 1. **First line:** $y^{\prime}-\left(y^{3}-\frac{1}{2} y\right) y$ has an extra $y$ at the end. It should be $y^{\prime}-\left(y^{3}-\frac{1}{2} y\right) = 0$.
> 2. **Second line:** $(9 e^{x}+2)^{-3/2}$ is a typo for $(2e^x + 2)^{-3/2}$. Additionally, the exponents in the last two terms should be negative: $-\left(2 e^{x}+2\right)^{-3/2}$ and $+\frac{1}{2}\left(2 e^{x}+2\right)^{-1/2}$.
> 3. **Fourth line:** $-e^{x}\left(2 e^{x}+2\right)^{-7/2}$ is a typo for $-e^{x}\left(2 e^{x}+2\right)^{-3/2}$.
> 
> ---
>
> ### Step-by-Step Derivation
>
> Given the analytical solution:
> $$
> y(x) = (2e^x + 2)^{-1/2}
> $$
>
> #### 1. Compute the components
> Using the chain rule, find the derivative $y'$:
> $$
> y' = -\frac{1}{2}(2e^x + 2)^{-3/2} \cdot \frac{d}{dx}(2e^x + 2) = -\frac{1}{2}(2e^x + 2)^{-3/2} \cdot 2e^x = -e^x(2e^x + 2)^{-3/2}
> $$
>
> The powers of $y$ are:
> $$
> y^3 = \left[(2e^x + 2)^{-1/2}\right]^3 = (2e^x + 2)^{-3/2}
> $$
> $$
> \frac{1}{2}y = \frac{1}{2}(2e^x + 2)^{-1/2}
> $$
>
> #### 2. Substitute into the LHS of the ODE ($y' - y^3 + \frac{1}{2}y$)
> $$
> -e^x(2e^x + 2)^{-3/2} - (2e^x + 2)^{-3/2} + \frac{1}{2}(2e^x + 2)^{-1/2}
> $$
>
> #### 3. Factor out the common term $(2e^x + 2)^{-3/2}$
> This is the step that usually causes confusion. To simplify the last two terms, factor out $-(2e^x + 2)^{-3/2}$:
> $$
> - (2e^x + 2)^{-3/2} + \frac{1}{2}(2e^x + 2)^{-1/2} = -(2e^x + 2)^{-3/2} \left[ 1 - \frac{1}{2}(2e^x + 2)^1 \right]
> $$
>
> *(This works because $(2e^x + 2)^{-3/2} \cdot (2e^x + 2)^1 = (2e^x + 2)^{-1/2}$.)*
>
> #### 4. Simplify inside the brackets
> $$
> 1 - \frac{1}{2}(2e^x + 2) = 1 - (e^x + 1) = -e^x
> $$
>
> #### 5. Combine and resolve
> Now, substitute this simplified expression back into the full equation:
> $$
> -e^x(2e^x+2)^{-3/2} - (2e^x+2)^{-3/2}(-e^x)
> $$
> $$
> = -e^x(2e^x+2)^{-3/2} + e^x(2e^x+2)^{-3/2} = 0
> $$
>
> This confirms that the LHS simplifies to $0$, proving that $y(x) = \frac{1}{\sqrt{2e^x+2}}$ is indeed the correct analytical solution.

#### Programming: Compute Numerical Solutions
2. Programming: Compute numerical solutions on $[0,2]$ for a range of values for $n=$ number of subintervals using (i) Euler's method, (ii) RK2 (Heun's method), (iii) the mid-point method and (iv) Runge-Kutta's fourth order method.

![](/PENG9570/Lecture-Notes/attachments/Lecture5/L5_img08.jpg)

Exact (curve)
Euler (dots)
Midpoint (dots)
RK2 (dots)
RK4 (dots)

3. Programming: Compute the error $E=\left|y(2)-y_{\text {num }}(2)\right|$ for all methods for all values for $n$ and use these quantities to estimate the convergence rates.

Figure 4
![](/PENG9570/Lecture-Notes/attachments/Lecture5/L5_img09.jpg)

Euler, slope=1.0016
RK2, slope=2.0287
Midpoint, slope=2.0276
RK4, slope=4.1342



## Example – Model of prey–predator interactions.
Model of prey–predator interactions. 
- $x$: prey population, 
- $y$: predator population.
$x^{\prime}=x(x(1-x)-y) \quad x, y \geqslant 0$
$y^{\prime}=y(x-a), a>0$.

### a) Nullclines:
i.e where: $\left(x^{\prime}=0, y^{\prime}=0\right)$

$x^{\prime}=0 : \left\{\begin{array}{l}x(x(1-x)-y)=0 \\ \Leftrightarrow x=0 \text { or } y=x(1-x)\end{array}\right.$

$y^{\prime}=0 : \left\{\begin{array}{l}y(x-a)=0 \\ \Leftrightarrow y=0 \text { or } x=a .\end{array}\right.$



#### The case $a>1$: predator death rate is high
(predator death rate is high)
![](/PENG9570/Lecture-Notes/attachments/Lecture5/L5_img10.jpg)



#### The case $0<a<1$: Equilibrium-ish

![](/PENG9570/Lecture-Notes/attachments/Lecture5/L5_img11.jpg)

### Jacobian
> [!question]+ How did we get this Jacobian? (oh lol it was already defined, just in reverse order)
> **ROBOT GENERATED – gemini-3.5-flash**
>
> To find the Jacobian matrix $J$, we use the system of differential equations describing the prey-predator interactions given in the note:
>
> $$
> \begin{aligned}
> x^{\prime} &= P(x, y) = x(x(1-x)-y) = x^2 - x^3 - xy \\
> y^{\prime} &= Q(x, y) = y(x-a) = xy - ay
> \end{aligned}
> $$
>
> The Jacobian matrix $J$ is defined as the matrix of first-order partial derivatives of these functions:
>
> $$
> J = \left[\begin{array}{cc}
> P_x & P_y \\
> Q_x & Q_y
> \end{array}\right] = \left[\begin{array}{cc}
> \frac{\partial P}{\partial x} & \frac{\partial P}{\partial y} \\
> \frac{\partial Q}{\partial x} & \frac{\partial Q}{\partial y}
> \end{array}\right]
> $$
>
> #### Step-by-step Differentiation
>
> 1. **Top-left entry ($P_x$):** Differentiate $P(x,y)$ with respect to $x$ (treating $y$ as a constant):
> $$
>    P_x = \frac{\partial}{\partial x}(x^2 - x^3 - xy) = 2x - 3x^2 - y
>    $$
> 
> 2. **Top-right entry ($P_y$):** Differentiate $P(x,y)$ with respect to $y$ (treating $x$ as a constant):
> $$
>    P_y = \frac{\partial}{\partial y}(x^2 - x^3 - xy) = -x
>    $$
> 
> 3. **Bottom-left entry ($Q_x$):** Differentiate $Q(x,y)$ with respect to $x$ (treating $y$ as a constant):
> $$
>    Q_x = \frac{\partial}{\partial x}(xy - ay) = y
>    $$
> 
> 4. **Bottom-right entry ($Q_y$):** Differentiate $Q(x,y)$ with respect to $y$ (treating $x$ as a constant):
> $$
>    Q_y = \frac{\partial}{\partial y}(xy - ay) = x - a
>    $$
> 
> #### Final Matrix
> Placing these partial derivatives into the Jacobian structure yields the highlighted matrix:
>
> $$
> J=\left[\begin{array}{cc}
> 2 x-3 x^{2}-y & -x \\
> y & x-a
> \end{array}\right]
> $$

Jacobian:
$$
J=\left[\begin{array}{cc}
2 x-3 x^{2}-y & -x \\
y & x-a
\end{array}\right]
$$
where, $P(x, y)=x^{2}(1-x)-x y$ 
and $Q(x, y)=y(x-a)$,
$$
P_{x}=2 x-3 x^{2}-y, \quad P_{y}=-x, \quad Q_{x}=y, \quad Q_{y}=x-a
$$


#### At $(x, y)=(1,0)$:
$J=\left[\begin{array}{cc}2 \cdot 1-3 \cdot 1^{2}-0 & -1 \\ 0 & 1-a\end{array}\right]$

$$
=\left[\begin{array}{cc}
-1 & -1 \\
0 & 1-a
\end{array}\right]
$$

Upper triangular: eigenvalues are on the diagonal,
$\lambda_{1}=-1, \lambda_{2}=1-a$.
$a>1: \lambda_{1}, \lambda_{2}<0$; stable node. 
$a<1: \lambda_{1}<0, \lambda_{2}>0$; saddle (unstable).

> [!question]+ Why are these x,y values selected?
> **ROBOT GENERATED – gemini-3.5-flash**
> 
> The values $(x, y) = (1, 0)$ are selected because they represent an **equilibrium point** (or fixed point) of the prey-predator system. 
> 
> Equilibrium points occur where the system's rates of change are zero ($x' = 0$ and $y' = 0$). We find these by finding the intersections of the system's nullclines:
> 
> 1. **Prey nullclines ($x'=0$):** 
>    $$x = 0 \quad \text{or} \quad y = x(1-x)$$
> 2. **Predator nullclines ($y'=0$):** 
>    $$y = 0 \quad \text{or} \quad x = a$$
> 
> By intersecting the prey nullcline $y = x(1-x)$ with the predator nullcline $y = 0$, we get:
> $$0 = x(1-x) \implies x = 0 \quad \text{or} \quad x = 1$$
> 
> This yields two equilibrium points: $(0,0)$ and **$(1,0)$**. 
> 
> Evaluating the Jacobian matrix $J$ at $(1, 0)$ allows us to perform **linear stability analysis** to determine the behavior of the populations near this steady state (e.g., whether it is a stable node or an unstable saddle point depending on the parameter $a$).



#### At $(x, y)=(a, a(1-a))$ :
$(x, y)=(a, a(1-a))$
(there, $0<a<1$ )

$$
\begin{aligned}
f & =\left[\begin{array}{cc}
2 a-3 a^{2}-a(1-a) & -a \\
a(1-a) & a-a
\end{array}\right] \\
& =\left[\begin{array}{cc}
2 a-3 a^{2}-a+a^{2} & -a \\
a(1-a) & 0
\end{array}\right] \\
& =\left[\begin{array}{cc}
-2 a^{2}+a & -a \\
a(1-a) & 0
\end{array}\right]
\end{aligned}
$$


### Eigenvalues:
$\operatorname{det}(J-\lambda I)=0$
$$
\Rightarrow \underbrace{\lambda^{2}+\left(2 a^{2}-a\right) \lambda+a^{2}(1-a)=0}_{\text {Characteristic equation }}
$$


> [!question]+ Define "Characteristic Equation" here
> **ROBOT GENERATED – gemini-3.5-flash**
> 
> Based on the provided notes and the highlighted snippet, the **characteristic equation** is the algebraic equation solved to find the [[eigenvalues]] ($\lambda$) of a matrix. 
> 
> It is defined by setting the determinant of the matrix $(J - \lambda I)$ to zero:
> 
> $$\operatorname{det}(J-\lambda I)=0$$
> 
> In the specific context of the prey-predator model evaluated at the equilibrium point $(x, y) = (a, a(1-a))$, expanding this determinant yields the quadratic characteristic equation:
> 
> $$\lambda^{2}+\left(2 a^{2}-a\right) \lambda+a^{2}(1-a)=0$$
> 
> where:
> * $J$ is the [[Jacobian]] matrix.
> * $I$ is the identity matrix.
> * $\lambda$ represents the eigenvalues.



$$
\Rightarrow \lambda=\frac{a}{2}\left[-(2 a-1) \pm \sqrt{(2 a-1)^{2}-4(1-a)}\right]
$$
### Result:

- **Stable node:** For $\frac{\sqrt{3}}{2}<a<1$, we have two real eigenvalues, both negative.
- **Stable spiral (sink):** For $\frac{1}{2}<a<\frac{\sqrt{3}}{2}$, we have complex conjugate eigenvalues with negative real part.
- **Unstable spiral (source):** For $0<a<\frac{1}{2}$, we have complex conjugate eigenvalues with positive real part.

> [!question]+ Where is the bound on the a values coming from? Is it from solving for a with the eigenvalues?
> **ROBOT GENERATED – gemini-3.5-flash**
> 
> Yes, the bounds on the $a$ values come directly from **solving for and analyzing the eigenvalues** ($\lambda$). 
> 
> From the characteristic equation in the note:
> $$\lambda=\frac{a}{2}\left[-(2 a-1) \pm \sqrt{(2 a-1)^{2}-4(1-a)}\right]$$
> 
> By simplifying the discriminant (the term inside the square root), we get:
> $$\Delta = (2a-1)^2 - 4(1-a) = 4a^2 - 4a + 1 - 4 + 4a = 4a^2 - 3$$
> 
> ### 1. Real vs. Complex Eigenvalues (The $\frac{\sqrt{3}}{2}$ bound)
> * **Real eigenvalues** occur when the discriminant is positive ($\Delta > 0$):
>   $$4a^2 - 3 > 0 \implies a^2 > \frac{3}{4} \implies a > \frac{\sqrt{3}}{2}$$
> * **Complex conjugate eigenvalues** occur when the discriminant is negative ($\Delta < 0$):
>   $$4a^2 - 3 < 0 \implies a^2 < \frac{3}{4} \implies a < \frac{\sqrt{3}}{2}$$
> 
> ### 2. Stable vs. Unstable Spirals (The $\frac{1}{2}$ bound)
> When the eigenvalues are complex ($a < \frac{\sqrt{3}}{2}$), their real part is determined by the term outside the square root:
> $$\text{Re}(\lambda) = -\frac{a}{2}(2a - 1)$$
> 
> Since $a > 0$, the sign of the real part depends entirely on the term $-(2a - 1)$:
> * **Negative real part (Stable spiral / Sink):**
>   $$-(2a-1) < 0 \implies 2a - 1 > 0 \implies a > \frac{1}{2}$$
> * **Positive real part (Unstable spiral / Source):**
>   $$-(2a-1) > 0 \implies 2a - 1 < 0 \implies a < \frac{1}{2}$$
> 
> Combining these conditions yields the exact bounds presented in the results.



### Result Illustrations
$$
\frac{\sqrt{3}}{2}<a<1
$$
![](/PENG9570/Lecture-Notes/attachments/Lecture5/L5_img12.jpg)

$$
\frac{1}{2}<a<\frac{\sqrt{3}}{2}
$$

![](/PENG9570/Lecture-Notes/attachments/Lecture5/L5_img13.jpg)

$$
0<a<\frac{1}{2}
$$
![](/PENG9570/Lecture-Notes/attachments/Lecture5/L5_img14.jpg)



#### Hopf Bifurcation Diagram
So if given:
$$
\begin{aligned}
& x^{\prime}=x(x(1-x)-y) \\
& y^{\prime}=y(x-a)
\end{aligned}
$$
Then, Hopf bifurcation at $a=0.45$ (he writes 0.5 in slide). Equilibrium becomes unstable and a limit cycle emerges.
![](/PENG9570/Lecture-Notes/attachments/Lecture5/L5_img15.jpg)



#### Phase Portrait
![](/PENG9570/Lecture-Notes/attachments/Lecture5/L5_img16.jpg)
Blue: $a=1.2$
Yellow: $a=0.85$
Green: $a=0.6$
Red:  $a=0.4$

#### Time-Series Plots
![](/PENG9570/Lecture-Notes/attachments/Lecture5/L5_img17.jpg)
![](/PENG9570/Lecture-Notes/attachments/Lecture5/L5_img18.jpg)
![](/PENG9570/Lecture-Notes/attachments/Lecture5/L5_img19.jpg)
![](/PENG9570/Lecture-Notes/attachments/Lecture5/L5_img20.jpg)



#### Phase plots using different methods
![](/PENG9570/Lecture-Notes/attachments/Lecture5/L5_img21.jpg)
Euler's method predicts wrong closed curve solution.



# Partial Differential Equations (PDES)
$Functions \ of \ one \ variable : u(x)$
$Functions \ of \ more \ than \ one \ variable: \left\{\begin{array}{l}u(x, y) \\ u(x, t) \\ u(x, y, t) \\u(x, y, z, t)\end{array}\right.$

![](/PENG9570/Lecture-Notes/attachments/Lecture5/L5_img23.jpg)



## Partial Derivatives

$u^{\prime}(x)=\frac{d u}{d x}$ : slope of tangent of $u$ at $x$
$u=u(x, y):$
- $u_{x}=\frac{\partial u}{\partial x}$ : slope of tangent in the $x$-direction at $(x, y)$ ($y$ fixed)
- $u_{y}=\frac{\partial u}{\partial y}$ : slope of tangent in the $y$-direction at $(x, y)$ ($x$ fixed)



Notation for second order derivatives:
$$
\begin{aligned}
& u_{x x}=\frac{\partial^{2} u}{\partial x^{2}} \\
& u_{y y}=\frac{\partial^{2} u}{\partial y^{2}} \\
& u_{x y}=\frac{\partial^{2} u}{\partial x \partial y} \\
& u_{y x}=\frac{\partial^{2} u}{\partial y \partial x}
\end{aligned}
$$


## Example 1 – Heat equation
Heat equation. 
$K$ : heat conductivity
$$
u_{t}=k u_{x x} \quad u=u(x, t)
$$
## Example 2 – Fisher's equation
Fisher's equation. 
$D$: diffusion constant
$$
u_{t}=D u_{x x}+r u\left(1-\frac{u}{k}\right)
$$
$$
u=u(x, t)
$$
## Example 3 – Solve: $u_{t x}=t x$
Solve: $u_{t x}=t x, u=u(x, t)$
$$
\left[u_{t x}=\left(u_{t}\right)_{x}=\left(u_{x}\right)_{t}\right]
$$
We write the PDE as
$$
\left(u_{t}\right)_{x}=tx
$$
We introduce $v=u_{t}$ :
$$
\underbrace{v_{x}=t x}_{\substack{\text { Can be considered to be an ODE with parameter $t$}}}
$$
$$
\begin{aligned}
\Rightarrow v & =\int t x d x=t \int x d x \\
& =t \cdot \frac{1}{2} x^{2}+\underbrace{C(t)}_{\substack{\text { Arbitrary } \\
\text { function of t(?). }}}
\end{aligned}
$$
We have
$$
\underbrace{u_{t}=\frac{1}{2} t x^{2}+C(t)}_{\text {ODE with parameter } x .}
$$
$$
\begin{aligned}
\Rightarrow u & =\int\left(\frac{1}{2} t x^{2}+c(t)\right) d t \\
& =\frac{1}{2} x^{2} \int t d t+\int c(t) d t \\
& =\frac{1}{2} x^{2} \cdot \frac{1}{2} t^{2}+\underbrace{\int c(t) d t}_{\bar{c}(t)}+D(x) \\
& =\underbrace{\frac{1}{4} x^{2} t^{2}}_{General Solution} + \underbrace{\bar{c}(t)+D(x)}_{Arbitrary}
\end{aligned}
$$


> [!question]+ What does the bar over c(t) signify? Why do we add arbitrary functions?
> **ROBOT GENERATED – gemini-3.5-flash**
> 
> Based on the provided notes and highlighted mathematical steps, here are the answers to your questions:
> 
> ### 1. What does the bar over $c(t)$ signify?
> The bar over $c(t)$, written as $\bar{c}(t)$, signifies the **antiderivative (or integral) of the arbitrary function $c(t)$ with respect to $t$**. 
> 
> As shown in the snippet:
> $$\bar{c}(t) = \int c(t) \, dt$$
> 
> Because $c(t)$ is an arbitrary function of $t$, its integral $\bar{c}(t)$ is also just another arbitrary function of $t$. The bar notation is used to simplify and clean up the final expression of the general solution.
> 
> ---
> 
> ### 2. Why do we add arbitrary functions?
> In [[partial differential equations]] (PDEs), when you integrate with respect to one variable, you must treat all other independent variables as constants:
> 
> 1. **Integrating with respect to $x$:** Since $t$ is treated as a constant, the "constant of integration" does not have to be a single number; it can be any function that depends only on $t$, denoted as $C(t)$. This is because its partial derivative with respect to $x$ is zero:
>    $$\frac{\partial}{\partial x} [C(t)] = 0$$
> 
> 2. **Integrating with respect to $t$:** Since $x$ is treated as a constant, the constant of integration can be any arbitrary function of $x$, denoted as $D(x)$, because:
>    $$\frac{\partial}{\partial t} [D(x)] = 0$$
> 
> Adding these arbitrary functions is necessary to capture the complete, general solution of the PDE.



## Example 4 – Solve : $u_{t x}+2 u_{x} =0$

$$
\begin{aligned}
u_{t x}+2 u_{x} & =0, \quad u=u(x, t) \\
\left(u_{t}\right)_{x}+2 u_{x} & =0 \\
\left(u_{t}+2 u\right)_{x} & =0 \\
\end{aligned}
$$
$$
\begin{aligned}
\Rightarrow 
\underbrace{
u_{t}+2 u = \underbrace{F(t)}_{\substack{\text { Arbitrary } \\
\text { function }}}
}
_{\text{Possible to solve but tedious}}
\end{aligned}
$$
Possible to solve, but tedious.



Introduce $\quad v=u_{x}$ :
$$
\begin{aligned}
& u_{t x}+2 u_{x}=0 \\
& \left(u_{x}\right)_{t}+2 u_{x}=0 \\
& \underbrace{v_{t}+2 v=0}_{\text{ODE with parameter $x$}}
\end{aligned}
$$
Then:
$$
\begin{aligned}
& v_{t}=-2 v \\
& v=C(x) e^{-2 t} \\
& \underbrace{
u_{x}=C(x) e^{-2 t}
}_{\text{ODE with parameter t}} \\
\end{aligned}
$$
- [?] How does it go from step 1 to 2? We derive wrt to $t$ but then where does the whole RHS come from?


Continuing:
$$
\begin{aligned}
\Rightarrow u & =\int C(x) e^{-2 t} d x \\
& =e^{-2 t} \underbrace{\int C(x) d x}_{\bar{C}(x)}+D(t) \\
& =\bar{C}(x) e^{-2 t}+D(t)
\end{aligned}
$$

General solution: $\bar{C}(x) e^{-2 t}+D(t)$

Arbitrary functions: $\bar{C}(x), D(t)$



# Conservation laws

> [!NOTE] Note
> I’m not exactly sure what is being asked for here


![](/PENG9570/Lecture-Notes/attachments/Lecture5/L5_img25.jpg)

$\begin{array}{l}U(x, t) \text { : density of substance } \\ \text { A: cross-sectional area }\end{array}$

#### I. Amount of substance in $[a, b]$ at time $t$
$$
=\int_{a}^{b} u(x, t) \cdot A d x
$$
#### II. Net rate of substance flowing into $[a, b]$
$$
\begin{aligned}
& =A \cdot f(a, t)-A \cdot f(b, t) \\
& =A(f(a, t)-f(b, t)) \\
& =-A \int_{a}^{b} f_{x}(x, t) d x
\end{aligned}
$$
#### III. Rate of production of substance in $[a, b]$
$$
=\int_{a}^{b} \underbrace{f(x, t, u)}_{\begin{array}{c}
\text { Production } \\
\text { rate at }
\end{array}(x, t)} A d x
$$
#### IV. Change of amount of substance per time unit
$$
\begin{aligned}
& =\frac{d}{d t} \int_{a}^{b} u(x, t) A d x \\
& =\int_{a}^{b} u_{t}(x, t) A d x
\end{aligned}
$$

### Conservation Law:
Net rate of substance into $[a, b]$ + rate of production inside $[a, b]$ = change of amount in $[a, b]$
$$
i.e.: \mathbb{I I}+\mathbb{I I}=\mathbb{I V}
$$
**Mathematically:**
$$
\begin{aligned}
& -A \cdot \int_{a}^{b} f_{x}(x, t) d x \\
& +\int_{a}^{b} f(x, t, u) A d x \\
& =\int_{a}^{b} u_{t}(x, t) A d x
\end{aligned}
$$

$$
\begin{aligned}
& \Rightarrow A\left[-\int_{a}^{b} y_{x} d x+\int_{a}^{b} f d x-\int_{a}^{b} u_{t} d x\right]=0 \\
& \Rightarrow \int_{a}^{b}\left(u_{t}(x, t)+y_{x}(x, t)-f(x, t, u)\right) d x=0
\\ & \text {Conservation law on integral form }
\end{aligned}
$$
The interval $[a, b]$ is chosen arbitrarily ⇒ *<u>the integrand must be Zero!</u>*
$$
\begin{aligned}
& u_{t}+f_{x}-f=0 \\
& u_{t}+f_{x}=f \\
& \text{I.e. the Conservation law on differential form.}
\end{aligned}
$$


### Fick's law:
> [!NOTE] Note
> I think I have a topics [[Fick's law]]
> - [ ] Fix this section!

Fick’s law is as follows:
$$
J=-D u_{x}
$$
![](/PENG9570/Lecture-Notes/attachments/Lecture5/L5_img26.jpg)
$$
\begin{aligned}
J_{x} & =\left(-D u_{x}\right)_{x} \\
& =-D u_{x x}
\end{aligned}
$$
Insertion:
$$
\begin{aligned}
& u_{t}-D u_{x x}=f \\
& \Rightarrow u_{t}=D u_{x x}+f \\
& \text { Diffusion PDE (with source term) }
\end{aligned}
$$
- [?] I’m not certain what is happening here



## Boundary and Initial Conditions:
**The initial boundary Value problem (IBVP)**
Consider:
$$
u_{t}=k u_{x x}, \quad 0<x<l, \quad t>0 .
$$
To determine the solution Uniquely we need:
- an initial function
$$
u(x, 0)=f(x), 0<x<l .
$$
- boundary conditions
$$
\begin{aligned}
& u(0, t)=g(t), t>0 \\
& u(l, t)=h(t)
\end{aligned}
$$
![](/PENG9570/Lecture-Notes/attachments/Lecture5/L5_img27.jpg)


## Dirichlet Conditions:
$f, g$ and $h$ are prescribed functions (as we have here).

**Insulated boundary conditions:**
$$u_{x}(0, t)=u_{x}(l, t)=0 \quad \text{(zero-flux)}$$
**Neumann boundary conditions:**
$$
\begin{aligned}
u_{x}(0, t)=g(t), \\ 
u_{x}(l, t)=h(t)
\end{aligned}
$$


## An explicit scheme for the heat / diffusion PDE / IBVP
IBVP:
$$u_{t}=u_{x x}, \quad t>0, \quad 0<x<1$$
IC: $u(x, 0)=g(x), \quad 0<x<1$.
BC: $\left\{\begin{array}{l}u(0, t)=0 \\ u(1, t)=0\end{array}\right.$
![](/PENG9570/Lecture-Notes/attachments/Lecture5/L5_img28.jpg)
$[0,1]$ is separated into $n+1$ subintervals of width $\Delta x=\frac{1}{n+1}$.
$n=$ number of interior points for one value of $t$.
$x_{i}=i \Delta x$
$t_{j}=j \Delta t$

## Approximations of $u_{t}$ and $u_{xx}$
$$
u_{t}(x, t)=\lim _{\Delta t \rightarrow 0} \frac{u(x, t+\Delta t)-u(x, t)}{\Delta t}
$$
If $\Delta t$ is small:
$$
\begin{aligned}
u_{t} & \approx \frac{u(x, t+\Delta t)-u\left(x_{1}, t\right)}{\Delta t} \\
t_{t=t j}^{=t i}-t_{j+1} & =\frac{u\left(x_{i}, t_{j}+\Delta t\right)-u\left(x_{i}, t_{j}\right)}{\Delta t} \\
& =\frac{u\left(x_{i}, t_{j+1}\right)-u\left(x_{i}, t_{j}\right)}{\Delta t}
\end{aligned}
$$

We introduce $V_{i, j}$ as an approximation to $u\left(x_{i}, t_{j}\right)$ j

$$
v_{i, j} \approx u\left(x_{i}, t_{j}\right)
$$

$$
\Rightarrow u_{t}\left(x_{i}, t_{j}\right) \approx \frac{v_{i, j+1}-v_{i, j}}{\Delta t}
$$



Three-point approximation for $\omega^{\prime \prime}(x)$ :

$$
w^{\prime \prime}(x) \approx \frac{w(x+\Delta x)-2 w(x)+w(x-\Delta x)}{\Delta x^{2}}
$$

Thus,
$U_{x x}\left(x_{i}, t_{j}\right) x_{i+1}$
$\approx \frac{u\left(\tilde{x}_{i}+\Delta x_{j}, t_{j}\right)-2 u\left(x_{i}, t_{j}\right)+u\left(\frac{\prime \prime}{x_{i}-\Delta x, t_{j}}\right)}{\Delta x^{2}}$
$=\frac{u\left(x_{i+1}, t_{j}\right)-2 u\left(x_{i}, t_{j}\right)+u\left(x_{i-1}, t_{j}\right)}{\Delta x^{2}}$

$$
\approx \frac{V_{i+1, j}-2 V_{i, j}+V_{i-1, j}}{\Delta x^{2}}
$$



Since $u_{t}=u_{x x}$ :

$$
\begin{aligned}
& \frac{v_{i, j+1}-v_{i, j}}{\Delta t} \\
& =\frac{v_{i+1, j}-2 v_{i, j}+v_{i-1, j}}{\Delta x^{2}}
\end{aligned}
$$

Discretized Version of

$$
u_{x}=u_{x x}
$$



![](/PENG9570/Lecture-Notes/attachments/Lecture5/L5_img29.jpg)
![](/PENG9570/Lecture-Notes/attachments/Lecture5/L5_img30.jpg)

Derivation of a matrixvector formulation

Let $\alpha=\frac{\Delta t}{\Delta x^{2}}$

$$
\frac{V_{i, j+1}-V_{i, j}}{\Delta t}=\frac{V_{i+1, j}-2 V_{i, j}+V_{i-1, j}}{\Delta x^{2}}
$$

The explicit scheme
For $i=1$ (application of $B(1 ; x=0$ )

$$
\begin{aligned}
& V_{1, j+1}=V_{1, j}+\alpha\left(V_{2, j}-2 v_{1, j}+v_{0, j}\right) \\
& V_{0, j} \approx u\left(x_{0}, t_{j}\right)=u\left(0, t_{j}\right)=0
\end{aligned}
$$



$$
\begin{aligned}
\Rightarrow v_{1, j+1} & =v_{1, j}+\alpha\left(v_{2, j}-2 v_{1, j}\right) \\
& =(1-2 \alpha) v_{1, j}+\alpha v_{2, j}
\end{aligned}
$$

For $i=n$ (application of $B(2: x=1)$

$$
\begin{aligned}
v_{n, j+1} & =v_{n, j}+\alpha\left(v_{n+1, j}-2 v_{n, j}+v_{n-1, j}\right) \\
v_{n+1, j} & \left.\approx u\left(x_{n+1},+j\right)=u(1, t,)=0\right) \\
v_{n, j+1} & =v_{n, j}+\alpha\left(-2 v_{n, j}+v_{n-1, j}\right) \\
& =\alpha v_{n-1, j}+(1-2 \alpha) v_{n, j}
\end{aligned}
$$



General case:

$$
V_{i, j+1}=\alpha V_{i-1, j}+(1-2 \alpha) V_{i, j}+\alpha V_{i+1, j}
$$

The equations read, structurally:

$$
\begin{aligned}
& V_{1 i j+1}=(1-2 \alpha) V_{1 i j}+\alpha V_{2 i j} \\
& V_{2 i j+1}=\alpha V_{1 i j}+(1-2 \alpha) V_{i j}+\alpha V_{3 i j}
\end{aligned}
$$

$$


\begin{array}{lrl}
V_{n-1 ; 1+1}= & \alpha V_{n-2, j}+(1-2 \alpha) V_{n-1, j}+\alpha V_{V_{i j}} \\
V_{n-1 j}= & \alpha V_{n-1, j}+(1-2 \alpha)_{n i j}
\end{array}
$$

Linear system of equations:

$$
\left[\begin{array}{c}
v_{1, j+1} \\
v_{2, j+1} \\
\vdots \\
v_{u_{1, j+1}}
\end{array}\right]=\left[\begin{array}{ccccc}
1-2 \alpha & \alpha & & & \\
\alpha & 1-2 \alpha & \alpha & & \\
& \alpha & \ddots & \ddots & \\
& & \ddots & \ddots & \alpha \\
& & & \alpha & 1-2 \alpha
\end{array}\right]\left(\begin{array}{c}
v_{1, j} \\
v_{2, j} \\
\vdots \\
v_{u_{1, j}}
\end{array}\right)
$$



Define
$\vec{V}_{j}=\left[\begin{array}{c}V_{1, j} \\ V_{2, j} \\ \vdots \\ V_{n, j}\end{array}\right]$
$\hat{A}=\left[\begin{array}{cccc}1-2 \alpha & \alpha & & 0 \\ \alpha & 1-2 \alpha & \ddots & \\ & \ddots & \ddots & \alpha \\ 0 & & & \alpha\end{array}\right]$
The explicit scheme:

$$
\vec{V}_{j+1}=\hat{A} \vec{V}_{j}
$$

$$


\begin{aligned}
& \text { So, } \\
& \vec{V}_{0}=\underbrace{\left[\begin{array}{c}
V_{1,0} \\
V_{2,0} \\
\vdots \\
V_{n, 0}
\end{array}\right]=\left[\begin{array}{c}
g\left(x_{1}\right) \\
g\left(x_{2}\right) \\
\vdots \\
g\left(x_{n}\right)
\end{array}\right]}_{k_{\text {nown }}} \\
& \vec{V}_{1}=\hat{A} \vec{V}_{0} \\
& \vec{V}_{2}=\hat{A} \vec{V}_{1}=\hat{A} \hat{A} V_{0}=\hat{A}^{2} V_{0} \\
& \vec{V}_{j}=\hat{A}^{j} \vec{V}_{0} \quad \text{("Solution formula")}
\end{aligned}
$$

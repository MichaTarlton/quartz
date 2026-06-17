---
title: "PENG9570 Lecture 8"
aliases:
  - "Lecture 8"
project: PENG9570
type: course-material
tags:
  - PENG9570
---

# PENG9570 — Lecture 8

## Uniqueness theorem for solution of the 1D heat / diffusion IBVP

The IBVP:
$$
\begin{aligned}
& u_{t}=k u_{x x}, 0<x<l, t>0 . \\
& u(0, t)=g(t), 0<t<T \\
& u(l, t)=h(t), 0<t<T \\
& u(x, 0)=f(x), 0<x<l
\end{aligned}
$$


![](/PENG9570/Lecture-Notes/attachments/Lecture8/L8_img01.jpg)
## Theorem:
The solution $u(x, t)$ of the IBVP is unique.
## Proof:
We assume that there are two solutions $u$ and $v$.
Set $w=u-v$. Then:
$$
\begin{aligned}
w_{t}-k w_{x x} & =u_{t}-v_{t}-k\left(u_{x x}-v_{x x}\right) \\
& =\underbrace{\left(u_{t}-k u_{x x}\right)}_{=0}-\underbrace{\left(v_{t}-k v_{x x}\right)}_{=0} \\
& =0-0=0
\end{aligned}
$$
So, $w$ is a solution of $w_{t}=k w_{x x}$,
$w(x, 0)=u(x, 0)-v(x, 0)=f(x)-f(x)=0$
$w(0, t)=u(0, t)-v(0, t)=g(t)-g(t)=0$
$w(l, t)=u(l, t)-v(l, t)=h(t)-h(t)=0$

This shows that
$\begin{cases}w_{t}=k w_{x x} & 0<x<l, t>0 \\ w(x, 0)=0 & 0<x<l \\ w(0, t)=w(l, t)=0, & t>0 .\end{cases}$
We want to show that $w \equiv 0$ : We introduce the "energy integral":



$$
\begin{aligned}
& E(t)=\int_{0}^{l} w^{2}(x, t) d x \\
& E^{\prime}(t)=\int_{0}^{l} \frac{d}{d t}\left(w^{2}(x, t)\right) d x \\
&=\int_{0}^{l} 2 w \cdot \frac{\partial w}{\partial t} d x
\end{aligned}
$$

$$



\begin{aligned}
& =2 \int_{0}^{l} w \cdot \underbrace{w_{t}}_{=k w_{x x}} d x \\
& =2 k \int_{0}^{l} w \cdot w_{x x} d x
\end{aligned}
$$

[[Integration by parts]]:

$$
\begin{aligned}
& \int u v^{\prime} d x=u v-\int u^{\prime} v d x \\
& \int w \cdot \underbrace{w_{x x}}_{\left(w_{x}\right) x} d x=w \cdot w_{x}-\int w_{x} \cdot w_{x} d x \\
& =2 k(\underbrace{\left[w \cdot w_{x}\right]_{0}^{l}}-\int_{0}^{l}\left(w_{x}\right)^{2} d x) \\
& w(l, t) \cdot w_{x}(l, t)-w(0, t)-w_{x}(0, t)
\end{aligned}
$$



$$
\begin{aligned}
& =2 k\left(0-\int_{0}^{l}\left(w_{x}\right)^{2} d x\right) \\
& =-2 k \underbrace{\int_{0}^{l} \underbrace{\left(w_{x}\right)^{2}}_{\geqslant 0} d x}_{\geqslant 0} \leqslant 0
\end{aligned}
$$

$E^{\prime}(t) \leqslant 0$; non-increasing
$E(t) \geqslant 0$ : non-negative
$E(0)=\int_{0}^{l} w^{2}(x, 0) d x=0$
Conclusion: $E(t)=0, t \geqslant 0$.



That is,

$$
\begin{aligned}
& \int_{0}^{l} w^{2}(x, t) d x=0 \\
\Rightarrow & w \equiv 0! \\
& u-v=0 \\
\Leftrightarrow & u=v
\end{aligned}
$$

Only one solution.
Uniqueness!



## Existence and uniqueness of solution of the IVP $\quad y^{\prime}=f(y), y\left(t_{0}\right)=y_{0}$.

## The Picard iteration

Integral form of the IVP:

$$
y(t)=y\left(t_{0}\right)+\int_{0}^{t} f(y(s)) d s
$$

Note: If $u_{0}(t) \in C[E]$, then all successive elements $\left(u_{1}(t), u_{2}(t), \ldots\right)$ are also in $C[E]$.



## Example:

IVP: $\quad y^{\prime}=y, y(0)=1$.
[Exact solution: $y=e^{t}$].
Solve the IVP using the Picard iteration.

$$
\begin{aligned}
u_{0}(t) & =1 \\
u_{1}(t) & =y_{0}+\int_{0}^{t} f\left(u_{0}(s)\right) d s \\
& =1+\int_{0}^{t} \underbrace{u_{0}(s)}_{=1} d s \\
& =1+\int_{0}^{t} 1 d s=\underline{1+t} \\
u_{2}(t) & =y_{0}+\int_{0}^{t} f\left(u_{1}(s)\right) d s \\
& =1+\int_{0}^{t} u_{1}(s) d s \\
& =1+\int_{0}^{t}(1+s) d s \\
& =1+\left[\frac{1}{2}(1+s)^{2}\right]_{0}^{t}
\end{aligned}
$$



$$
\begin{aligned}
& =1+\frac{1}{2}\left((1+t)^{2}-(1+0)^{2}\right) \\
& =1+\frac{1}{2}\left(1+2 t+t^{2}-1\right) \\
& =1+t+\frac{1}{2} t^{2} \\
& u_{3}(t)=\cdots=1+t+\frac{1}{2} t^{2}+\frac{1}{6} t^{3}
\end{aligned}
$$



Sequence of functions are Taylor polynomials of $e^{t}$ :

$$
\lim _{n \rightarrow \infty} u_{n}(t)=e^{t}
$$

Theorem (existence and uniqueness of solution of IVP $\left.y^{\prime}=f(y), y\left(t_{0}\right)=y_{0}\right)$

Let $E \subset \mathbb{R}^{n}$ be open. Assume that $y_{0} \in E$ and that $f \in C^{1}[E]$.
Then there exists $a>0$ such that the IVP has a solution $y(t)$ on $[-a, a]$ (existence). This solution is unique.



Demonstration of lack of uniqueness
Consider the IVP

$$
y^{\prime}=\sqrt{y}, y(0)=0
$$

$y_{1} \equiv 0$ is one solution.
$y_{2}=\frac{1}{4} t^{2}$ is another solution.
$\left[y_{2}^{\prime}=\frac{1}{4} \cdot 2 t=\frac{1}{2} t, \sqrt{y_{2}}=\frac{1}{2} t\right]$
Note: $f(y)=\sqrt{y} \Rightarrow f^{\prime}(y)=\frac{1}{2 \sqrt{y}}$
$f \notin C^{1}[E]$, $0 \in E$.



## Cauchy sequences

A sequence where the elements come arbitrarily close to each other when sequence numbers are sufficiently large: For any $\varepsilon>0$ there exists an integer $N$ such that for all $m, n \geqslant N$

$$
\left|x_{m}-x_{n}\right|<\varepsilon .
$$

## Completeness

A set $S$ is complete when all Cauchy sequences of elements in $S$ converge to an element in $S$.

Example:



$$
\begin{aligned}
& x_{n}=\frac{1}{n} \in[0,1] . \\
& \lim _{n \rightarrow \infty} x_{n}=0 \in[0,1] .
\end{aligned}
$$

(Complete.)
Having established that a sequence in a complete set $S$ is Cauchy, we can conclude that the sequence converges to a limit in $S$.

## Sketch of proof:



* Define sequence of approximations using the Picard iteration
* Show that this sequence is Cauchy
* Conclude that the sequence converges to an element in $C[E]$.
* This proves existence.
* Assume two different solutions
* Show that gives a contradiction
* This proves uniqueness.

## Proof of existence:

The sequence $\left\{u_{k}\right\}_{k}$ is defined by

$$



\begin{aligned}
& u_{0}(t)=y_{0} \\
& u_{k+1}(t)=y_{0}+\int_{0}^{t} f\left(u_{k}(s)\right) d s
\end{aligned}
$$

Showing that $\left\{u_{k}\right\}$ is Cauchy:
For $m>k \geqslant N$, we have

$$



\begin{aligned}
& \left\lvert\, \begin{array}{l}
\left|u_{m}-u_{k}\right|= \\
+\cdots+u_{m}-u_{m-1}+u_{m-1}- \\
+u_{k+1}+u_{k+1}-u_{k} \mid \\
=\mid\left(u_{m}-u_{m-1}\right)
\end{array}+\left(u_{m-1}-u_{m-2}\right)+\right. \\
&+\left|u_{k+1}-u_{k}\right| \mid \\
& \leqslant\left|u_{m}-u_{m-1}\right|+\left|u_{m-1}-u_{m-2}\right| \\
&+\cdots+\left|u_{k+1}-u_{k}\right| \\
& \leqslant \cdots+\left|u_{m-}-u_{m-1}\right|+\cdots+\left|u_{k+1}-u_{k}\right|
\end{aligned}
$$

(intinitely many differences)

For each of these differences,



$$
\begin{aligned}
& \left|u_{j+1}-u_{j}\right| \\
= & \mid y_{e}+\int_{0}^{t} f\left(u_{j}(s)\right) d s-\left(y_{0}+\int_{0}^{t} f\left(u_{j-1}(s)\right) d s\right) \\
= & \left|\int_{0}^{t}\left(f\left(u_{j}(s)\right)-f\left(u_{j-1}(s)\right)\right) d s\right| \\
\leqslant & \int_{0}^{t} \underbrace{\mid f\left(u_{j}\right)-f\left(u_{j-1}\right)}_{\leqslant k\left|u_{j}-u_{j-1}\right|} \mid d s
\end{aligned}
$$

(Lipschitz: $f$ differentiable)
$\leqslant K \int_{0}^{t}\left|u_{j}-u_{j-1}\right| d s$



$$
\begin{aligned}
& \leqslant[0, k] c[-a, a] \\
& \leqslant K \int_{0}^{a}\left|u_{j}-u_{j-1}\right| d s \\
& \leqslant \max _{t \in[-a, a]}\left|u_{j}-u_{j-1}\right| \cdot a \\
& =K a \cdot \max _{t \in[-a, a)}\left|u_{j}-u_{j-1}\right|
\end{aligned}
$$

By induction we can prove that

$$



\left|u_{j+1}-u_{j}\right| \leqslant\left(k_{a}\right)^{j} b
$$

where

$$
b=\max _{t \in[-a, a)}\left|u_{1}-u_{0}\right|
$$

Essential: $\quad K a<1$ (by choice of $a$).

Going back to |um-uk|:

$$



\begin{aligned}
&\left|u_{m}-u_{k}\right| \\
& \leqslant \cdots+\underbrace{u_{k+1}-u_{k}}_{\leqslant\left(k_{a}\right)^{k} b} \mid \\
& \leqslant \cdots+\left(k_{a}\right)^{k+1} b+\left(k_{a}\right)^{k} b \\
&=\left(k_{a}\right)^{k} b[\underbrace{\left.1+\left(k_{a}\right)^{1}+\left(k_{a}\right)^{2}+\cdots\right]}_{\text {Infinite grom. series }} \\
&=\left(k_{a}\right)^{k} b \frac{1}{1-k_{a}} \xrightarrow[k \rightarrow \infty]{1-0}
\end{aligned}
$$

This proves that

$$
\left\{u_{k}\right\}_{k}
$$



is a Cauchy sequence.
We have $u_{k} \in C[E]$.
$C[E]$ is complete (known).
Conclusion: The sequence converges to a limit
$u(t): \lim _{k \rightarrow \infty} u_{k}(t)=u(t)$,
where

$$
u(t) \in C[E] .
$$

This proves existence of a solution.



## Uniqueness of the solution of the IVP

Assume (for later contradiction) that there are two distinct solutions $u$ and $v$.
Further, assume that $|u-v|$ achieves its maximum value at $t_{1} \in[-a, a]$.
Then:

$$
\|u\|=\max _{t \in E} \mid u \|
$$

$$



\begin{aligned}
& \|u-v\|=\left|u\left(t_{1}\right)-v\left(t_{1}\right)\right| \\
& =\mid y_{e}+\int_{0}^{t_{1}} f(u(s)) d s-y_{e}-\int_{0}^{t_{1}} f(v s) d s \\
& =\left|\int_{0}^{t_{1}}(f(u(s))-f(v(s))) d s\right| \\
& \leqslant \int_{0}^{t_{1}}|f(u(s))-f(v(s))| d s \\
& \leqslant \int_{0}^{t_{1}} K|u(s)-v(s)| d s \\
& \begin{array}{l}
f_{\text {is }} \\
\text { differentiable } \\
\text { Lipscritz }
\end{array} \quad \begin{array}{r}
|f| f \text { is "Lipschitz", } \\
\text { then }|f(u)-f(v)| \\
\leqslant K|u-v|
\end{array}
\end{aligned}
$$



$\leqslant k \cdot \underbrace{[(-a, a)]}_{\|u-v\|} \underbrace{\int_{0}^{t_{1}} d s}_{t_{1} \leq a:}$
$\leqslant k \cdot\|u-v\| \cdot a \quad \begin{aligned} & \leqslant \int_{0}^{a} 1 d s \\ & =a\end{aligned}$
$=K a\|u-v\|$
$[$ a was selected such that Kar1]
r $1 \cdot\|u-v\|=\|u-v\|$
$k a<1$
That is, $\|u-v\|<\|u-v\|$.
Contradiction ⇒ $U=V$
Uniqueness!

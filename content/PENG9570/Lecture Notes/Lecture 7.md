---
title: "PENG9570 Lecture 7"
aliases:
  - "Lecture 7"
project: PENG9570
type: course-material
tags:
  - PENG9570
---

# PENG9570: The Schrödinger Equation 

Sølve Selstø

March 12, 2026

In this session we will take the heat equation as our starting point and, by slight adjustments, introduce the Schrödinger equations. "Equations" in plural as the Schrödinger equation comes in both a time-dependent and a timeindependent version.

## 1 The Heat Equation

The heat equation reads

$$
\begin{equation*}
\frac{\partial u}{\partial t}=\alpha \nabla^{2} u \tag{1}
\end{equation*}
$$

where $u(x, y, z, t)$ is the temperature at position ( $x, y, z$ ) at time $t$, and $\alpha$ is the thermal diffusivity, which is a measure on how fast the temperature tends to spread out.

In one dimension it is simpler:

$$
\begin{equation*}
\frac{\partial u}{\partial t}=\alpha \frac{d^{2} u}{d x^{2}} \tag{2}
\end{equation*}
$$

where $u=u(x, t)$.

1) Download the Python script SolveHeatEq.py and run it - preferibly using Spyder.
2) In this script, an initial condition is already implemented. What is this condition; what is the initial temperature distribution $u(x ; t=0)$ ?
3) Run your code again for a few choices of inputs - both for $\alpha$ and for the numerical ones, i.e., the box size $L$ and the temporal and spatial step sizes $\Delta t$ and $\Delta x$. For a given $\alpha$, how small must $\Delta t$ and $\Delta x$ be for your solution to make sense?

In our implementation, the temperature distribution at time $t$ is approximated by a vector which, ideally, interpolates the actual solution,



$$
u(x ; t) \rightarrow \vec{u}(t)=\left(\begin{array}{c}
c_{0}(t)  \tag{3}\\
c_{1}(t) \\
\vdots \\
c_{n}(t)
\end{array}\right) \in \mathbb{R}^{n+1}
$$

where $c_{k} \approx c\left(x_{k}\right), x_{k}=-L / 2+k \Delta x$ and $\Delta x=L / n$. The double spatial derivative is implemented by means of the three point finite difference stencil

$$
\begin{equation*}
\frac{d^{2} u}{d x^{2}}=\frac{u(x-\Delta x)-2 u(x)+u(x+\Delta x)}{\Delta x^{2}}+\mathcal{O}\left(\Delta x^{3}\right) \tag{4}
\end{equation*}
$$

which allows us to approximate the double derivative as a matrix multiplication on $\vec{u}$,

$$
\frac{d^{2} u}{d x^{2}} \rightarrow M \vec{u}, \quad \text { where } \quad M=\frac{1}{\Delta x^{2}}\left(\begin{array}{cccc}
-2 & 1 & 0 &  \tag{5}\\
1 & -2 & 1 & \ldots \\
0 & 1 & -2 & \\
& \vdots & & \ddots
\end{array}\right)
$$

4) Now, replace the somewhat primitive forward Euler solution,

$$
\begin{equation*}
\vec{u}(t+\Delta t)=\vec{u}(t)+\alpha M \Delta t \vec{u}(t)+\mathcal{O}\left(\Delta t^{2}\right)=(I+\alpha M \Delta t) \vec{u}(t)+\mathcal{O}\left(\Delta t^{2}\right) \tag{6}
\end{equation*}
$$



with the Crank-Nicolson scheme:

$$
\begin{equation*}
\vec{u}(t+\Delta t)=\left(I-\alpha \frac{\Delta t}{2} M\right)^{-1}\left(I+\alpha \frac{\Delta t}{2} M\right) \vec{u}(t)+\mathcal{O}\left(\Delta t^{3}\right) \tag{7}
\end{equation*}
$$

Does the performance improve?
5) What is it about the "big O-terms" in Eqs. (6) and (7) that suggest that the Crank-Nicolson scheme is superior?

## 2 The Schrödinger Equation for a Particle Moving Freely

In quantum physics, all information there is to obtain for a quantum particle is contained in what is called the wave function, $\Psi(x, y, z ; t)$. Much can be said about this function; here we will leave it to this: $|\Psi(x, y, z ; t)|^{2}$ is the probability density that a position measurement at time $t$ on the quantum particle provides the position $(x, y, z)^{1}$.

The wave function will in general be time-dependent, and when left undisturbed, it will evolve according to the time-dependent Schrödinger equation:

$$
\begin{equation*}
i \hbar \frac{\partial \Psi}{\partial t}=\left(-\frac{\hbar^{2}}{2 m} \nabla^{2}+V(x, y, z, t)\right) \Psi . \tag{8}
\end{equation*}
$$

Here $V$ is the potential that the quantum particle is exposed to. In classical physics, this would correspond to the force $-\nabla V$ in Newton's second law. (We do not use the "F-word" in quantum physics.) $\hbar$ is a very small natural constant called (the reduced) Planck constant, and $m$ is the mass of the quantum particle.

In case there is no potential, $V \equiv 0$, and we restrict our quantum particle to one single dimension, Eq. (8) becomes much simpler:

$$
\begin{equation*}
i \hbar \frac{\partial \Psi}{\partial t}=-\frac{\hbar^{2}}{2 m} \frac{d^{2} \Psi}{d x^{2}} \tag{9}
\end{equation*}
$$



[^0]6) The wave function $\Psi$ is not determined by the Schrödinger equation alone. There are two other circumstances that affects it. Which ones?
7) By comparing Eq. (9) with Eq. (2) we may see that these equations are very similar. How so? And what is the big difference?

Despite this big difference, implementing the solution of Eq. (9) is very similar to that of Sec. 1; we can still solve the partial differential equation using our matrix approximation for the double spatial derivative combined with the Crank-Nicolson method.

Again, we discretize the wave function in the same manner as before:

$$
\Psi(x ; t) \rightarrow \vec{\Psi}(t)=\left(\begin{array}{c}
\Psi_{0}(t)  \tag{10}\\
\Psi_{1}(t) \\
\vdots \\
\Psi_{n}(t)
\end{array}\right) \in \mathbb{C}^{n+1}
$$

and write the Schrödinger equation as a coupled ordinary differential equation:

$$
\begin{equation*}
i \hbar \vec{\Psi}^{\prime}(t)=H \vec{\Psi} \tag{11}
\end{equation*}
$$

where $H$ is a matrix.
8) How must we modify Eq. (7) in order to solve the Schrödinger equation, Eq. (9), instead of the heat equation, Eq. (2)?
9) Now, solve the Schrödinger equation numerically by implementing this modification in your code from Sec. 1. Take your initial condition to be a Gaussian wave:

$$
\begin{equation*}
\Psi(x ; t=0)=\sqrt{\frac{\sqrt{2} \sigma_{p}}{\sqrt{\pi} \hbar}} \exp \left[-\frac{\sigma_{p}^{2}\left(x-x_{0}\right)^{2}}{\hbar^{2}}+i p_{0} x / \hbar\right] . \tag{12}
\end{equation*}
$$



To simplify things, let us set $\hbar=1$ and $m=1$; this is admissible by choosing these constants as the units of their respective quantities. (Correspondingly, we are certainly not talking about metres, seconds and kilograms in our simulations.) Instead of plotting $\Psi(x ; t)$, which is complex, use the square of its absolute value, $|\Psi(x ; t)|^{2}$.
Initially, take the parameters which defines the initial wave to be $x_{0}= -20, \sigma_{p}=0.2$ and $p_{0}=3$.
10) What kind of numerics do you now need to see a smooth, reasonable evolution? What happens when you wave hits the boundary of your numerical grid at $x= \pm L / 2$ ?
11) Rerun your simulation with different values for the three parameters $x_{0}$, $\sigma_{p}$ and $p_{0}$. What do each these three physical parameters represent?
12) Try and construct a new initial wave function similar to the one in Eq. (12) - except this time, let it be a sum of two waves. These two waves should not overlap initially. They should also travel towards each other. What happenes when the waves meet?

## 3 The Schrödinger Equation for a Particle Exposed to a Potential

Thus far we have not included any potential $V$ in our simulation. We will now introduce it. Specifically, we will take it to be time-independent and have this form:

$$
\begin{equation*}
V(x)=\frac{V_{0}}{e^{s(|x|-w / 2)}+1} \tag{13}
\end{equation*}
$$

In our simulation, it may be introduced into Eq. (11) simply by adding a diagonal matrix with the $V$-values on the grid to the matrix $H$.
13) What will the $H$-matrix in Eq. (11), which we call the Hamiltonian, now be?
14) With the same parameters as you used initially - both for the numerical grid and for the initial state, rerun your simulation with a nonzero potential. You can start with the parameter values $V_{0}=3, w=2$ and $s=5$. If you manage to make a plot of the potential along with your wave function in your simulation, that would make it more informative.
15) Try and change the height $V_{0}$ and the width $w$ of your barrier. Also, run your simulation with various values for the initial velocity $p_{0}$ of your quantum particle. How does this affect the dynamcis? Any oddities? What happens if you use a negative value for $V_{0}$ ?

## 4 The Schrödinger Equation for a Particle Trapped in a Potential

You may have learned that systems which demonstrate wave-behaviour sometimes form standing waves. A guitar string would be a good example of such a system. Also a quantum system may - under certain conditions - form standing waves.
16) Suppose a wave function has this form:

$$
\begin{equation*}
\Psi(x ; t)=e^{-i \omega t} \psi(x) . \tag{14}
\end{equation*}
$$

For such a function to be a solution of the time-dependent Schrödinger equation, which we now will write compactly as

$$



\begin{equation*}
i \hbar \frac{\partial}{\partial t} \Psi=H \Psi \tag{15}
\end{equation*}
$$

which equation must the time-independent part $\psi(x)$ fulfill ${ }^{2}$ ?

[^1]The answer to the above question is called the time-independent Schrödinger equation. It is, in effect, an eigenvalue equation. And the corresponding eigenvalues are the possible outcomes that an energy measurement on the system may produce. Correspondingly, we call the eigenvalues of the Hamiltonian eigenenergies.

If the quantum system is confined somehow, for instance by placing a quantum particle in a potential from which it cannot escape, these eigenenergies are quantized. By this we mean that they will form a discrete set of possible values. The electrons which are stuck to a nucleus in an atom, for instance, are subject to this phenomenon. Again, much could be said about this. However, we will not do so here.

Suppose that our Hamiltonian $H$ is time-dependent and that it only has a discrete set of eigenenergies and eigenstates, $\left\{\varepsilon_{k}\right\}$ and $\left\{\psi_{k}(x)\right\}$, respectively, viz.,

$$
\begin{equation*}
H \psi_{k}(x)=\varepsilon_{k} \psi_{k}(x) \tag{16}
\end{equation*}
$$

It can be shown that any (admissible) wave function may be written as a linear combination of these eigenstates. Or, in other words, for any give wave function $\Psi$ there will always exist a set of coefficients $\left\{c_{n}\right\}$ such that

$$
\begin{equation*}
\Psi=\sum_{n} c_{n} \psi_{n}(x) \tag{17}
\end{equation*}
$$

17) Suppose our wave function at time $t=0$ has the above form. Now, show that at time $t>0$, our wave function reads

$$
\begin{equation*}
\Psi(x ; t)=\sum_{n} c_{n} e^{-i \varepsilon_{n} t / \hbar} \psi_{n}(x) \tag{18}
\end{equation*}
$$



In many situations the energy states we are most interested in are the one with the lowest energy - the ground state. Chemists and physicists have developed a rich plethora of methods for determining ground states - and the ground state energy - of quantum systems such as atoms, ions and molecules. One of these methods consists in, artificially, replacing the time in the time-dependent Schrödinger equation, Eq. (8), by imaginary time:

$$
\begin{equation*}
t \rightarrow-i t . \tag{19}
\end{equation*}
$$

18) Show that if you make this replacement in Eq. (9), you actually recover Eq. (2). In order to solve this equation, you may simply replace $t$ with -it in your Crank-Nicolson implementation.
19) For a system with a nozero potential $V(x)$ in the Hamiltonian, explain why virtually any initial state becomes proportional to the ground state wave function $\psi_{0}$ when it evolves according to the Schrödinger equation with imaginary time.
20) With some negative value for $V_{0}$ in Eq. (13), run your simulation with imaginary time in order to find the ground state. In doing so, the wave
function will become extremely large in this case. To avoid this, we may renormalize it at each time step,

$$
\begin{equation*}
\vec{\Psi}(t) \rightarrow \vec{\Psi}(t) / \sqrt{N(t)} \quad \text { where } \quad N(t)=\Delta x \sum_{n}\left|\Psi_{n}(t)\right|^{2} \tag{20}
\end{equation*}
$$

21) Can you augment your implementation so that it also estimates the ground state energy $\varepsilon_{0}$ ?
Hint: If $\Psi(x ; t) \approx \psi_{0}$ and $N(t)=1$, what is $N(t+\Delta t)$ ?

## 5 Solutions

2) From line 45 , uFunk0 $=n p \cdot \operatorname{sqrt}(L / 2)$ - np.sqrt(np.abs(x)), we may see that

$$
u(x, t=0)=\sqrt{L / 2}-\sqrt{|x|} .
$$

It has a "sharp point" at $x=0$, one that quickly becomes smoother.
3) This equation seems to be rather flexible when it comes to the numerics - at least with this initial condition. For instance, with $\alpha=1$ we get a simulation which seems reasonable with $L=100, N=50, \Delta t=1$. These are very large values for $\Delta x$ and $\Delta t$. The $\alpha$ parameter essentially dictates how fast the diffusion happens; if we increase it, the initial distribution flattens out more quickly. Correspondingly, we also need a lower value for $\Delta t$ to get reasonable results.
4) Actually, for this case, the forward Euler-method preforms rather well. However, if we plot this solution with the Crank-Nicoloson approximation together - for comparatively large values of $\Delta x$ and $\Delta t-$ we may see a certain difference.
5) For each time step, the forward Euler method introduces an error which is proportional to $\Delta t^{2}$. With $N_{t}=T_{f} / \Delta t$ steps in total, where $T_{f}$ is the total duration, this adds a total error proportional to $N_{t} \cdot \Delta t^{2}=T_{f} \cdot \Delta t^{1} \sim \Delta t^{1}$ in total. In other words, if i reduce $\Delta t$ by a factor 10, also the total error is reduced by a factor 10. For the Cranck-Nicolson scheme, however, the local error is proportional to $\Delta t^{3}$ and the total, global error is proportional to $\Delta t^{2}$. So if we reduce $\Delta t$ by a factor $10, \Delta t \rightarrow \Delta t / 10$, the total error is reduced to $(1 / 10)^{2}=1 / 100$ of the original error.
6) To solve the Schrödinger equation, like any differential equation, we need an initial condition. We cannot determine the evolution of the wave function unless we know where to start from. The other aspect is more subtle: The absolute value squared of the wave function, $|\Psi(x)|^{2}$, is a probability distribution telling us how likely it is that a position measurement will provide the result $x$. Thus, it reflects an uncertainty; we do not know where the particle will be measured to be, we only have the probabilityes of the various possible outcomes. Suppose now that a measurement has been made and we found that the particle was positioned at $x=a$. Then there is no longer any uncertainty about where the particle is. Correspondingly, the probability distribution should become a sharp peak centered at $x=a$. We say that the wave function collapses when the particle is measured. This collapse is fundamentally random, and it is not governed by the Schrödinger equation.
7) We rewrite Eq. (9) so that we get the time derivative alone on the left hand side:



$$
\frac{\partial \Psi}{\partial t}=-i \frac{\hbar}{2 m} \frac{d^{2} \Psi}{d x^{2}} .
$$

except for the names $-u$ versus $\Psi$, which is not really any difference, this is identical to Eq. (2) with $\alpha=i \hbar /(2 m)$. So this is quite similar. But there is one big difference: $\alpha$ si real, $i \hbar /(2 m)$ is imaginary. Correspondingly, the wave function $\Psi$ is complex, while the temperature distribution $u$ is real.
8) We simply replace $\alpha$ in Eq. (7) with $i \hbar / 2 m$ :

$$
\vec{\Psi}(t+\Delta t) \approx\left(I-i \frac{\hbar}{4 m} \Delta t M\right)^{-1}\left(I+i \frac{\hbar}{4 m} \Delta t M\right) \vec{\Psi}(t)
$$

or, in terms of the matrix $H$ :

$$
\begin{equation*}
\vec{\Psi}(t+\Delta t) \approx\left(I+i \frac{\Delta t}{2} H\right)^{-1}\left(I-i \frac{\Delta t}{2} H\right) \vec{\Psi}(t) \tag{21}
\end{equation*}
$$

9) In this implementation, there are three things that need to be modified: 1) The above adjustment of the Cranck-Nicoloson matrix, 2) updating the initial condition and 3) making sure that the plot displays the absolute value squared of the solution, not the complex solution $\Psi$ directly. Pyplot seems to dislike using the column vector np.abs(Psi)**2 as input in this regard. It could be fixed by a slightly more cumbersome construct: np.power(np.abs(Psi), 2).
10) You may find that the Scrhödinger equation requires more precise numerics for a reasonable solution. And if you try to solve it with the forward Euler method, chances are you are bound to struggle. In case your simluation lasts long enough for the wave to hit the boundary at $x= \pm L / 2$, you will see it bouncing back. This is because we have, in effect, implemented Dirichlet boundary conditions.

$$
\Psi(x= \pm L / 2)=0
$$

or, strictly speaking $\Psi(x= \pm(L / 2+\Delta x))=0$, when we implemented the numerical derivation as a matrix multiplication. In terms of physics, we can think of this as hard, massive walls placed at $x= \pm L / 2$.
11) Hopefully, you will find that $x_{0}$ is the starting position of the wave, $p_{0}$ is its velocity and $\sigma_{p}$ is a parameter that determines the width of the initial wave; the smaller $\sigma_{p}$ is, the wider is $\Psi(x ; t=0)$. Actually, $\sigma_{p}$ is the uncertainty of the momentum or velocity of the quantum particle. The joint uncertainty of the position and momentum is restricted by the Heisenberg uncertainty relation

$$
\sigma_{x} \cdot \sigma_{p} \geq \frac{\hbar}{2}
$$



which is fulfilled with equality for our particular choice of initial wave.
12) You could choose to have your initial state to be the sum of two wave of the same form as in Eq. (12) - except that $x_{0}$ and $p_{0}$ have opposite signs. The one with negative $x_{0}$ should have positive $p_{0}$ and vice versa. This way we will have waves traveling towards each other, and we will see an interference pattern emerge when they overlap - just like ripples in a pond when you throw two stones into it.
13) We simply add a diagonal matrix with the entries $V\left(x_{0}\right), V\left(x_{1}\right), \ldots$ to $H$ :

$$
H \rightarrow H+\operatorname{Diag}\left(V\left(x_{0}\right), V\left(x_{1}\right), \ldots, V\left(x_{n}\right)\right) .
$$

Eq. (21) still apply.
15) If you compare the kinetic energy of the initial wave,

$$
E_{k}=\frac{1}{2} m v_{0}^{2}=\frac{p_{0}^{2}}{2 m}
$$

where $m=1$, with the energy $V_{0}$ that it takes - classically - to get over the barrier, you may be surprised to see that large portions of the wave makes it to the other side. And with a comparatively narrow barrier, i.e., a small $w$ parameter, quite a significant part of the way may penetrate the barrier. This phenomenon is called tunneling. It is actually used technologically - for microscopy among other things.
Another thing which you would not see with a classical particle, i.e., a particle that follows Newton's laws rather then the Schrödinger equation, is the fact that parts of it may be reflected when it hits a well - a potential with negative $V_{0}$.
16) We insert the separated wave function, $\Psi(x ; t)=\exp (-i \omega t) \psi(x)$ into the time-depenent Schrödinger equation

$$
\begin{aligned}
& i \hbar \frac{\partial}{\partial t} e^{-i \omega t} \psi(x)=\left(-\frac{\hbar^{2}}{2 m} \frac{d^{2}}{d x^{2}}+V(x)\right) e^{-i \omega t} \psi(x) \\
& i \hbar(-i \omega) e^{-i \omega t} \psi(x)=e^{-i \omega t}\left(-\frac{\hbar^{2}}{2 m} \frac{d^{2}}{d x^{2}}+V(x)\right) \psi(x) \\
& \left(-\frac{\hbar^{2}}{2 m} \frac{d^{2}}{d x^{2}}+V(x)\right) \psi(x)=\hbar \omega \psi(x)
\end{aligned}
$$

In the last equation we have divided by $\exp (-i \omega t)$ and reversed the order of the equation. We define the Hamiltonian

$$
H=-\frac{\hbar^{2}}{2 m} \frac{d^{2}}{d x^{2}}+V(x)
$$

and introduce the energy $\varepsilon \equiv \hbar \omega$ so that it may be written



$$
\begin{equation*}
H \psi(x)=\varepsilon \psi(x) \tag{22}
\end{equation*}
$$

This is the time-independent Schrödinger equation. It determines which energies are admissible for a quantum particle. Sometimes the possible energies, i.e., the $\varepsilon$-values that emerge from the Eq. (22), constitute a set of discrete energy levels. This phenomenon is called quantization.
17) We consider first the left hand side of the time-dependent Schrödinger equation, $i \hbar \partial / \partial t \Psi$ with $\Psi$ on the form of Eq. (18):

$$
\begin{aligned}
& i \hbar \frac{\partial}{\partial t} \sum_{n} e^{-i \varepsilon_{n} t / \hbar} \psi_{n}(x)=i \hbar \sum_{n}\left(\frac{\partial}{\partial t} e^{-i \varepsilon_{n} t / \hbar}\right) \psi_{n}(x)= \\
& i \hbar \sum_{n}\left(-i \frac{\varepsilon_{n}}{\hbar} e^{-i \varepsilon_{n} t / \hbar}\right) \psi_{n}(x)=-i^{2} \frac{\hbar}{\hbar} \sum_{n} \varepsilon_{n} e^{-i \varepsilon_{n} t / \hbar} \psi_{n}(x)=\sum_{n} \varepsilon_{n} e^{-i \varepsilon_{n} t / \hbar} \psi_{n}(x)
\end{aligned}
$$

The right hand side reads

$$
H \sum_{n} e^{-i \varepsilon_{n} t / \hbar} \psi_{n}(x)=\sum_{n} e^{-i \varepsilon t / \hbar} H \psi_{n}(x)=\sum_{n} e^{-i \varepsilon t / \hbar} \varepsilon_{n} \psi_{n}(x),
$$

where we have used Eq. (16). If we compare, we may see that the left and right hand sides are identical, and the time-dependent Schröginger equation is fulfilled.
18) If we make the replacement $t \rightarrow-i t$, the "time-derivative" becomes

$$
\frac{\partial}{\partial t} \rightarrow \frac{\partial}{\partial(-i t)}=\frac{\partial}{-i \partial t}=i \frac{\partial}{\partial t}
$$

Inserted into Eq. (9) we get

$$
i \hbar \cdot i \frac{\partial \Psi}{\partial t}=-\frac{\hbar^{2}}{2 m} \frac{d^{2} \Psi}{d x^{2}}
$$



Since $i^{2}=-1$ we arrive at

$$
\frac{\partial \Psi}{\partial t}=\frac{\hbar}{2 m} \frac{d^{2} \Psi}{d x^{2}}
$$

which is identical to Eq. (2) with the real and positive $\alpha$-value $\hbar /(2 m)$.
19) To find the solution of the imaginary-time Schrödinger equation

$$
\hbar \frac{\partial \Psi}{\partial t}=H \Psi
$$

we can introduce the replacement in Eq. (19) directly into Eq. (18):

$$
\Psi \rightarrow \sum_{n} c_{n} e^{-i \varepsilon_{n}(-i t) / \hbar} \psi_{n}(x)=\sum_{n} c_{n} e^{-\varepsilon_{n} t / \hbar} \psi_{n}(x)
$$

For any choice of initial state $\Psi(x ; t=0)$, there will always be a set of $c_{n}$-coefficients such that Eq. (17) holds. In order to see how our state converges towards a state proportional to the ground state $\psi_{0}(x)$, we divide $\Psi$ by $\exp \left(-\varepsilon_{0} t / \hbar\right)$ :

$$
\begin{aligned}
\frac{\Psi}{e^{-\varepsilon_{0} t / \hbar}}= & \sum_{n} c_{n} \frac{e^{-\varepsilon_{n} t / \hbar}}{e^{-\varepsilon_{0} t / \hbar}}=\sum_{n} c_{n} e^{-\left(\varepsilon_{n}-\varepsilon_{0}\right) t / \hbar} \psi_{n}= \\
& c_{0} \psi_{0}+c_{1} e^{-\left(\varepsilon_{1}-\varepsilon_{0}\right) t / \hbar} \psi_{1}+c_{2} e^{-\left(\varepsilon_{2}-\varepsilon_{0}\right) t / \hbar} \psi_{2}+\ldots
\end{aligned}
$$

Since $\varepsilon_{n}>\varepsilon_{0}$ for all $n>0$, all exponential factors falls off to zero exponentially fast - except for the first one. Correspondingly, the only surviving term is the first one:

$$
\frac{\Psi(t)}{e^{-\varepsilon_{0} t / \hbar}} \rightarrow c_{0} \psi_{0} \quad \text { or } \quad \Psi(t) \rightarrow e^{-\varepsilon_{0} t / \hbar} c_{0} \psi_{0}
$$



So, unless we are extremely unlucky with our initial guess and $c_{0}$ happens to be zero, we are left with a state proportional to our ground state in the end.
21) Suppose we have evolved our odd imaginary time-wave function long enough so that

$$
\Psi(t) \approx \psi_{0}(x)
$$

Here we have assumed that $\psi_{0}(x)$ is normalized,

$$
\Delta x \sum_{n}\left|\psi_{0}\left(x_{n}\right)\right|^{2}=1 .
$$

We can disregard the coefficient $c_{0}$ and the factor $\exp \left(-\varepsilon_{0} t / \hbar\right)$ after having done the renormalization in Eq. (20). Then the next step will take us to

$$
\Psi(t+\Delta t)=e^{-\varepsilon_{0} \Delta t / \hbar} \psi_{0}(x)
$$

which, in turn, gives

$$
N(t+\Delta t)=e^{-2 \varepsilon_{0} \Delta t / \hbar}
$$

We find the ground state energy $\varepsilon_{0}$ simply by solving this equation for $\varepsilon_{0}$ :

$$
\varepsilon_{0}=-\frac{\hbar}{2 \Delta t} \ln N(t+\Delta t)
$$

[^0]:    ${ }^{1}$ This interpretation was provided by Max Born in a footnote in one of his papers - a footnote that won him the 1954 Nobel prize in physics.

[^1]:    ${ }^{2}$ This approach to solving partial differential equations is called separation of variables.
